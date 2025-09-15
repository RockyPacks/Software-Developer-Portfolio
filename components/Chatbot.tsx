import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { AI_INTERVIEWER_CONTEXT } from '../constants';
import type { ChatMessage } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const navRegex = /\[navigate_to:(#[a-zA-Z0-9_-]+)\]/;

const placeholders = [
  "Ask about my AI projects...",
  "What are my strongest skills?",
  "Tell me about his experience at CAPACITI...",
  "Curious about my tech stack?",
];

const parseResponse = (text: string): string => {
  let html = text.trim();

  // Bolding
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Lists
  const lines = html.split('\n');
  let inList = false;
  const processedLines = lines.map(line => {
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith('- ')) {
      const listItem = `<li>${trimmedLine.substring(2)}</li>`;
      if (!inList) {
        inList = true;
        return `<ul>${listItem}`;
      }
      return listItem;
    } else {
      if (inList) {
        inList = false;
        // Add closing tag and then the line, which might be empty
        return `</ul>${line}`;
      }
      return line;
    }
  });

  if (inList) {
    processedLines.push('</ul>');
  }
  
  // Rejoin with <br> for non-list line breaks, and clean up spacing around lists
  html = processedLines.join('\n')
    .replace(/\n/g, '<br />')
    .replace(/<br \/><ul>/g, '<ul>')
    .replace(/<\/ul><br \/>/g, '</ul>');
    
  return html;
};


const ChatMessageContent: React.FC<{ 
    message: ChatMessage; 
    onNavigate: (sectionId: string) => void;
}> = ({ message, onNavigate }) => {
    const navMatch = message.text.match(navRegex);
    const cleanText = message.text.replace(navRegex, '').trim();
    const formattedText = parseResponse(cleanText);

    const sectionId = navMatch ? navMatch[1] : null;
    const sectionName = sectionId 
        ? sectionId.replace('#', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : '';
    
    return (
        <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-lg flex flex-col ${message.role === 'user' ? 'bg-blue-600 text-white dark:bg-accent dark:text-primary' : 'bg-gray-200 text-gray-800 dark:bg-border-color dark:text-text-primary'} transition-colors duration-300`}>
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: formattedText }} />
                {sectionId && message.role === 'model' && (
                    <button
                        onClick={() => onNavigate(sectionId)}
                        className="mt-3 text-left bg-blue-500/20 dark:bg-accent/20 text-blue-700 dark:text-accent font-semibold text-xs px-3 py-1.5 rounded-md hover:bg-blue-500/30 dark:hover:bg-accent/30 transition-colors"
                    >
                        Go to the {sectionName} section &rarr;
                    </button>
                )}
            </div>
        </div>
    );
};


const Chatbot: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}> = ({ isOpen, onClose, onNavigate }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const initializeChat = async () => {
        setIsLoading(true);
        setHistory([]);
        try {
          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: AI_INTERVIEWER_CONTEXT,
            },
          });
          setChat(newChat);

          const initialResponse = await newChat.sendMessage({ message: "Hello, please introduce yourself." });
          setHistory([{ role: 'model', text: initialResponse.text }]);
        } catch (error) {
          console.error("Failed to initialize chat:", error);
          setHistory([{ role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
        } finally {
          setIsLoading(false);
        }
      };
      initializeChat();

      const placeholderInterval = setInterval(() => {
        setPlaceholder(prev => {
          const currentIndex = placeholders.indexOf(prev);
          const nextIndex = (currentIndex + 1) % placeholders.length;
          return placeholders[nextIndex];
        });
      }, 3000);

      return () => clearInterval(placeholderInterval);
    } else {
      setHistory([]);
      setUserInput('');
      setChat(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: userInput };
    setHistory(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const stream = await chat.sendMessageStream({ message: userInput });
      let text = '';
      // Add a placeholder for the model's response
      setHistory(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        text += chunk.text;
        // Update the last message in history with the streaming text
        setHistory(prev => {
          const newHistory = [...prev];
          if (newHistory.length > 0) {
            newHistory[newHistory.length - 1].text = text;
          }
          return newHistory;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage : ChatMessage = { role: 'model', text: "An error occurred. Please try again." };
      setHistory(prev => {
          const newHistory = [...prev];
          if (newHistory.length > 0 && newHistory[newHistory.length -1].role === 'model') {
            newHistory[newHistory.length - 1] = errorMessage;
            return newHistory;
          }
          return [...prev, errorMessage];
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 m-4 sm:m-8 w-[calc(100%-2rem)] sm:w-96">
      <div className="bg-white dark:bg-secondary border border-gray-200 dark:border-border-color rounded-lg shadow-2xl shadow-black/20 flex flex-col h-[60vh] max-h-[700px] animate-slide-up transition-colors duration-300">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-border-color transition-colors duration-300">
          <h3 className="text-gray-900 dark:text-white font-bold transition-colors duration-300">AI Interviewer</h3>
          <button onClick={onClose} className="text-gray-500 dark:text-text-secondary hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="Close chat">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </header>

        <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50 dark:bg-primary transition-colors duration-300">
          {history.map((msg, index) => (
             <ChatMessageContent key={index} message={msg} onNavigate={onNavigate} />
          ))}
          {isLoading && history.length > 0 && history[history.length - 1]?.role === 'user' && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-gray-200 dark:bg-border-color text-gray-800 dark:text-text-primary transition-colors duration-300">
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-text-secondary rounded-full animate-pulse delay-75"></span>
                    <span className="w-2 h-2 bg-gray-400 dark:bg-text-secondary rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-gray-400 dark:bg-text-secondary rounded-full animate-pulse delay-300"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-border-color transition-colors duration-300">
          <div className="flex items-center bg-gray-100 dark:bg-primary rounded-lg border border-gray-300 dark:border-border-color focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-accent transition-colors duration-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent p-2 text-gray-900 dark:text-text-primary focus:outline-none transition-colors duration-300"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button type="submit" className="p-2 text-blue-600 dark:text-accent disabled:text-gray-400 dark:disabled:text-text-secondary transition-colors duration-300" disabled={isLoading || !userInput.trim()} aria-label="Send message">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
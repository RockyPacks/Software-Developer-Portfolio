import React from 'react';
import { SPONSORING_ORGS } from '../constants';

const SponsoringOrgs: React.FC = () => {
    return (
        <section className="py-16">
            <div className="border-t border-b border-gray-200 dark:border-border-color py-8 transition-colors duration-300">
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                    {SPONSORING_ORGS.map((org, index) => (
                        <span key={index} className="text-gray-500 dark:text-text-secondary font-medium text-center filter grayscale hover:grayscale-0 transition-all duration-300">
                            {org}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SponsoringOrgs;
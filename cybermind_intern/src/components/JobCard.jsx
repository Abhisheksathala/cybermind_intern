import { assets } from './../assets/assets.js';
import React from 'react';
// import { Button } from '@/components/ui/button';

const Jobcard = ({ job }) => {
  return (
    <div className="p-6 transition-all duration-300 ease-in-out transform bg-white shadow-lg job-card rounded-xl hover:shadow-xl hover:-translate-y-2">
      <div className="mb-4 company-image">
        <img
          src={assets.company_icon}
          alt={`${job.companyName || 'Company'} Logo`}
          className="object-cover rounded-full w-14 h-14"
        />
      </div>

      <h4 className="mb-3 text-2xl font-bold text-gray-800 job-title">{job.title}</h4>

      <div className="flex items-center mb-4 space-x-4 text-sm text-gray-600 job-meta">
        <span className="flex items-center location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657a8 8 0 10-11.314 0L12 21l5.657-4.343z"
            />
          </svg>
          {job.location}
        </span>
        <span className="flex items-center level">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4-4m0 0l4-4m-4 4h16"
            />
          </svg>
          {job.level}
        </span>
        <span className="flex items-center capitalize font-bold">12 Lpa</span>
      </div>

      <p
        className="mb-6 text-sm leading-relaxed text-gray-700 job-description line-clamp-3"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150) + '...',
        }}
      />

      <div className="flex space-x-4 job-actions">
        <button className="text-white transition-all duration-200 bg-blue-600 hover:bg-blue-700 w-full px-3 py-3 rounded-md">
          Apply now
        </button>
      </div>
    </div>
  );
};

export default Jobcard;

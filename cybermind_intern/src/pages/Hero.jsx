import { assets } from '@/assets/assets';
import React, { useRef, useState } from 'react';
import { JobContext } from '../context/Jobcontext';
import { useContext } from 'react';

const Hero = () => {
  const { setSearchFilter, setIssearched } = useContext(JobContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const [jobType, setJobType] = useState('');
  const [salary, setSalary] = useState(100000);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value.trim(),
      location: locationRef.current.value.trim(),
      type: jobType,
      salary: salary * 12,
    });
    setIssearched(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="container px-6 mx-auto my-10 2xl:px-20">
      <div className="px-6 py-10 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
          {/* Job Title Input */}
          <div className="flex items-center w-full px-4 py-2 sm:w-auto border-r">
            <img src={assets.search_icon} alt="Search Icon" className="w-6 h-6 mr-2" />
            <input
              type="text"
              ref={titleRef}
              placeholder="Job Title , Role, or Keyword"
              onKeyDown={handleKeyDown}
              className="w-full text-gray-800 border-none outline-none bg-transparent"
            />
          </div>

          {/* Location Input */}
          <div className="flex items-center w-full px-4 py-2 sm:w-auto border-r">
            <img src={assets.location_icon} alt="Location Icon" className="w-6 h-6 mr-2" />
            <input
              type="text"
              ref={locationRef}
              onKeyDown={handleKeyDown}
              className="w-full text-gray-800 border-none outline-none bg-transparent"
              placeholder="Preferred Location"
            />
          </div>

          {/* Job Type Select */}
          <div className="flex items-center w-full px-4 py-2 sm:w-auto border-r">
            <label htmlFor="type" className="mr-2 text-sm text-gray-700">
              Type:
            </label>
            <select
              id="type"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="text-sm bg-transparent outline-none text-gray-800"
            >
              <option value="">All</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="flex flex-col gap-3 sm:items-start w-full px-4 py-2 sm:w-auto">
            <div className="flex gap-7">
              <label className="mr-2 text-sm text-gray-700">Salary per Month:</label>
              <span className="text-sm text-gray-600 mt-1 sm:mt-0 sm:ml-2 font-bold">
                ₹{salary.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="200000"
              step="10000"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="accent-black w-full sm:w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

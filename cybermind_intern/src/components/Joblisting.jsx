import React, { useEffect, useState, useContext } from 'react';
import { JobContext } from '../context/Jobcontext';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import Jobcard from './JobCard';
// import { button } from '@/components/ui/button';

const Joblisting = () => {
  const { issearched, searchFilter, setSearchFilter, jobs } = useContext(JobContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const [filteredJobs, setFilteredJobs] = useState([]);

  // Toggle Category Selection
  const toggleCategorySelection = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  // Toggle Location Selection
  const toggleLocationSelection = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location],
    );
  };

  // Filter jobs on changes
  useEffect(() => {
    let result = jobs;

    if (selectedCategories.length > 0) {
      result = result.filter((job) => selectedCategories.includes(job.category));
    }

    if (selectedLocations.length > 0) {
      result = result.filter((job) => selectedLocations.includes(job.location));
    }

    if (searchFilter.title) {
      result = result.filter((job) =>
        job.title.toLowerCase().includes(searchFilter.title.toLowerCase()),
      );
    }
    if (searchFilter.location) {
      result = result.filter((job) =>
        job.location.toLowerCase().includes(searchFilter.location.toLowerCase()),
      );
    }

    if (searchFilter.type) {
      result = result.filter((job) =>
        job.type.toLowerCase().includes(searchFilter.type.toLowerCase()),
      );
    }

    if (searchFilter.salary) {
      result = result.filter((job) =>
        job.salary.toLowerCase().includes(searchFilter.salary.toLowerCase()),
      );
    }

    setFilteredJobs(result);
    setCurrentPage(1);
  }, [selectedCategories, selectedLocations, searchFilter, jobs]);

  return (
    <div className="container flex flex-col py-8 mx-auto 2xl:px-20 lg:flex-row max-lg:space-y-4">
      {/* Job Listings */}
      <section className="w-full text-gray-700 lg:3/4 max-lg:px-4">
        <h3 className="py-2 text-3xl font-medium" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, i) => (
            <Jobcard key={i} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 6 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                src={assets.left_arrow_icon}
                alt="Previous"
                className="cursor-pointer"
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, i) => (
              <a href="#job-list" key={i}>
                <button
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 bg-gray-300 text-black hover:bg-slate-100 ${
                    currentPage === i + 1 ? 'bg-gray-400 text-blue-500' : ''
                  }`}
                >
                  {i + 1}
                </button>
              </a>
            ))}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredJobs.length / 6)))
                }
                src={assets.right_arrow_icon}
                alt="Next"
                className="cursor-pointer"
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default Joblisting;

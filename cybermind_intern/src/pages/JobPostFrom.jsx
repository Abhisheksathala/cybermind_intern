import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { JobContext } from '../context/Jobcontext';

const JobPostingForm = () => {
  const { isPost, setIsJobPost } = React.useContext(JobContext);

  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salaryMin: '',
    salaryMax: '',
    deadline: '',
    description: '',
  });

  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);

  const locations = [
    'Remote',
    'New York, NY',
    'San Francisco, CA',
    'Los Angeles, CA',
    'Chicago, IL',
    'Austin, TX',
    'Seattle, WA',
    'Boston, MA',
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationSelect = (location) => {
    setFormData((prev) => ({ ...prev, location }));
    setShowLocationDropdown(false);
  };

  const handleJobTypeSelect = (jobType) => {
    setFormData((prev) => ({ ...prev, jobType }));
    setShowJobTypeDropdown(false);
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', formData);
  };

  const handlePublish = () => {
    console.log('Publishing job:', formData);
  };

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 w-full max-w-2xl relative">
        <div
          onClick={() => setIsJobPost((prev) => !prev)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          X
        </div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Create Job Opening
        </h1>

        <div className="space-y-6">
          {/* Job Title and Company Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Full Stack Developer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Amazon, Microsoft, Swiggy"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Location and Job Type Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <button
                type="button"
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all flex items-center justify-between"
              >
                <span className={formData.location ? 'text-gray-900' : 'text-gray-500'}>
                  {formData.location || 'Choose Preferred Location'}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>

              {showLocationDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                  {locations.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() => handleLocationSelect(location)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
              <button
                type="button"
                onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all flex items-center justify-between"
              >
                <span className={formData.jobType ? 'text-gray-900' : 'text-gray-500'}>
                  {formData.jobType || 'Full-time'}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>

              {showJobTypeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleJobTypeSelect(type)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Salary Range and Application Deadline Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Range</label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="text"
                    name="salaryMin"
                    value={formData.salaryMin}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="text"
                    name="salaryMax"
                    value={formData.salaryMax}
                    onChange={handleInputChange}
                    placeholder="12,00,000"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Deadline
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please share a description to let the candidate know more about the job role"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={handleSaveDraft}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
            >
              Save Draft
              <ChevronDown className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={handlePublish}
              className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Publish →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostingForm;

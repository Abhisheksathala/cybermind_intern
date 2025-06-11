import { jobsData } from '../assets/assets';
import React, { createContext, useState } from 'react';

export const JobContext = createContext();

const JobContextProvider = ({ children }) => {
  const [isPost, setIsJobPost] = useState(false);

  const [searchFilter, setSearchFilter] = useState({
    title: '',
    location: '',
    type: '',
    salary: null,
  });
  const [issearched, setIssearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const value = {
    isPost,
    setIsJobPost,
    searchFilter,
    setSearchFilter,
    issearched,
    setIssearched,
    jobs,
    setJobs,
  };

  React.useEffect(() => {
    setJobs(jobsData);
  }, [jobs]);

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export default JobContextProvider;

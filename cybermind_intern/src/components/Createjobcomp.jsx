import React, { useContext } from 'react';
import { JobContext } from '../context/Jobcontext';
import JobPostingForm from '../pages/JobPostFrom';

const Createjobcomp = () => {
  const { isPost, setIsJobPost } = useContext(JobContext);

  return (
    <div className="rounded-full px-4 py-2 ml-4 bg-[#9521f0] transition-all hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.3)] active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.4)]">
      <button
        className="cursor-pointer text-white font-semibold"
        onClick={() => setIsJobPost((prev) => !prev)}
      >
        Create Jobs
      </button>

      {isPost ? (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black/50 flex justify-center items-center">
          <JobPostingForm />
        </div>
      ) : null}
    </div>
  );
};

export default Createjobcomp;

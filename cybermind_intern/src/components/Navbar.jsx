import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Createjobcomp from './Createjobcomp';
import logo from '../assets/Frame 54.png';

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-3 py-4">
        <div className="rounded-full shadow-2xl bg-white py-2 px-8 flex justify-between mx-auto gap-6">
          <div className="logo flex items-center gap-5">
            <img src={logo} alt="logo" className="w-12 h-12 object-cover" />
          </div>
          <div className="links flex items-center justify-center gap-8">
            <Link to={'/'} className="text-base font-semibold">
              Home
            </Link>
            <Link to={'/find-jobs'} className="text-base font-semibold">
              Find Jobs
            </Link>
            <Link to={'/find-talents'} className="text-base font-semibold">
              Find Talents
            </Link>
            <Link to={'/about-us'} className="text-base font-semibold">
              About us
            </Link>
            <Link to={'/'} className="text-base font-semibold">
              Testimonials
            </Link>
          </div>
          <div className="flex items-center">
            <Createjobcomp />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

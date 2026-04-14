import React from 'react';
import { NavLink } from 'react-router';
import './style.css'
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { ImStatsDots } from 'react-icons/im';



const Navbar = () => {
    
    return (
    <div className="navbar  bg-base-100   flex justify-between px-17 shadow-sm">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
           <NavLink to="/">Home</NavLink>
      <NavLink to="/timelines">Timeline</NavLink>
      <NavLink to="/stats">Stats</NavLink>
    
      </ul>
    </div>
    <a className=" text-xl">
      <span className='font-extrabold'>Keen</span><span className='text-green-900 font-bold'>Keeper</span></a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <NavLink  className="btn btn-ghost " to="/"><IoHomeOutline></IoHomeOutline> Home</NavLink>
      <NavLink className="btn btn-ghost flex items-center "  to="/timelines"><IoMdTime></IoMdTime> Timeline</NavLink>
      <NavLink className="btn btn-ghost flex items-center " to="/stats"><ImStatsDots></ImStatsDots> Stats</NavLink>
    
    </ul>
  </div>
</div>
    );
};

export default Navbar;
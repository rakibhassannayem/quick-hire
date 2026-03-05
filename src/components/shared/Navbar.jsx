import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import Container from './Container';

const Navbar = () => {
  const links = <>
    <li className='list-none'><Link href={'/allJobs'} className='text-slate-500'>Find Jobs</Link></li>
    <li className='list-none'><Link href={'#'} className='text-slate-500'>Browse Companies</Link></li>
    <li className='list-none'><Link href={'/dashboard'} className='text-slate-500'>Admin Dashboard</Link></li>
  </>

  return (
    <div className="navbar bg-primary/5 py-5">
      <Container>
        <div className='flex items-center justify-between'>
          <div className="navbar-start w-full gap-10">
            <Logo />
            <div className='hidden lg:flex gap-5 items-center font-semibold'>
              {links}
            </div>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
                <li><a href='#' className="btn btn-ghost">Login</a></li>
                <li><a href='#' className="btn btn-primary text-white">Sign Up</a></li>
              </ul>
            </div>
            <a href='#' className="btn btn-ghost hidden lg:flex text-lg">Login</a>
            <a href='#' className="btn btn-primary text-white hidden lg:flex text-lg">Sign Up</a>
          </div>
        </div>
      </Container>

    </div>
  );
};

export default Navbar;
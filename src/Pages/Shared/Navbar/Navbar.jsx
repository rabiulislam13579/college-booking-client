import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions=<>
    <li><Link>Home</Link></li>
    <li><Link to="/colleges">Colleges</Link></li>
    <li><Link>Admission</Link></li>
    <li><Link>My College</Link></li>
    
    </>
    return (
        <div className="navbar pt-3 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52  hover:text-yellow-600 bg-blue-950 ">
                        {navOptions}
                        
                    </ul>
                </div>
                <div className=''>
                    <h1 className='text-4xl text-yellow-600 '>COLLEGE</h1>
                    <p>Booking</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hover:text-yellow-600">
                    {navOptions}
                </ul> 
            </div>
            <div className="navbar-end">
                <Link to="/login" className='btn bg-yellow-600'>Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;
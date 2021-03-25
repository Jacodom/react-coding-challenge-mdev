import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className="bg-gradient-to-b from-gray-400 to-white px-4 sm:px-6 lg:px-16 py-5">
                <div className="container mx-auto divide-y divide-black divide-opacity-12 hover:text-yellow-600">
                    <Link to="/">
                        <div className="w-auto flex flex-row">
                            <div className="w-12">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                </svg>
                            </div>
                            <div className="flex justify-center flex-col">
                                <h1 className="pl-4 font-bold">Local Theater</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </header> 
        </>
    )
};

export default Navbar;
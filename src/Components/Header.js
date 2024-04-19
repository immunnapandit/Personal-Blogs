import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className="bg-white text-black fixed top-0 left-0 right-0 z-10 flex justify-between items-center h-16 border-b-2 border-gray-200 shadow-md px-4 md:px-6 lg:px-8">
                <div className="flex items-center">
                    <h1 className="nij-manrope-bold text-2xl"><span style={{ color: '#ff0000' }}>Tech</span>with<span style={{ color: '#3182ce'}}>munna</span></h1>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="text-blue-500 hover:text-blue-900" onClick={handleMenuClick}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </div>
                <div className={`fixed top-0 right-0 bottom-0 bg-white z-20 overflow-y-auto transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ width: '240px' }}>
                    <ul className="p-4">
                        <li className="mb-4">
                            <Link to="/" className="hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/blogs" className="hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/aboutus" className="hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/contactus" className="hover:text-blue-900" onClick={()=> setIsMenuOpen(false)}>Contact Us</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/memories" className="hover:text-blue-900" onClick={() => setIsMenuOpen(false)}>Memories</Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center">
                    <ul className="flex">
                        <li className="px-4">
                            <Link to="/" className="hover:text-blue-900">Home</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/blogs" className="hover:text-blue-900">Blogs</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/aboutus" className="hover:text-blue-900">About Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/contactus" className="hover:text-blue-900">Contact Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/memories" className="hover:text-blue-900">Memories</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

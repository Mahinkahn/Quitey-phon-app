import { useState } from 'react';
import logo from '../../../assets/icon/Group 374.png';

import { FaXmark, FaBars } from 'react-icons/fa6';
import { MdPhoneInTalk } from "react-icons/md";

// import link from react scroll
import { Link } from 'react-scroll';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
        <>
            <nav className='bg-white md:px-4 p-4  mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className="text-lg container mx-auto flex justify-between items-center">
                    <div className="flex  space-x-14 items-center">
                        <a href="/" className=''>
                            <img src={logo} alt="" className='w-28 inline-block items-center' />
                        </a>
                    </div>

                    {/* language and signup */}
                    <div className="space-x-12 hidden md:flex items-center">
                        {/* showing navitem using map */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block text-secondary hover:text-primary cursor-pointer'>{link}</Link>)
                            }
                        </ul>
                        <a href="/" className='hidden lg:flex items-center text-secondary hover:text-primary'>
                            <MdPhoneInTalk className='mr-2' />
                            <span>+880 1234567895</span>
                        </a>
                        <button className='gradientBg text-white py-2 px-4 transition-all duration-300 rounded'>Get Started</button>
                    </div>

                    {/* menu btn only display on mobile */}
                    <div className="md:hidden ml-auto">
                        <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block text-white hover:text-gray-300 cursor-pointer' onClick={toggleMenu}>{link}</Link>)
                }
            </div>
        </>
    );
};

export default NavBar;

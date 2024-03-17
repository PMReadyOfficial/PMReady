import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isActive = (path) => {
        const formattedPath = `/${path}`;
        return currentPath === formattedPath ? 'font-bold' : '';
    };

    return (
        <header>
            <div className="flex py-3 px-4 lg:px-28 bg-[#FEFDFF]">
                <div id="logo" className="flex item-center pt-1">
                    <a href="./">
                        <img src="Logo.svg" alt="Logo" />
                    </a>
                </div>
                <div id="menu" className="flex flex-grow justify-end z-20 font-inter text-[#24223C]">
                    <ul className="flex gap-8 items-center text-lg">
                        <li className="hidden lg:block p-3">
                            <a href="/about" className={isActive('about')}>About</a>
                        </li>
                        <li className="hidden lg:block p-3 ">
                            <a href="/resources" className={isActive('resources')}>Resources</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="/community" className={isActive('community')}>Community</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="/contact" className={isActive('contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <button onClick={toggleMenu}>
                        {!isMenuOpen && (<img className="block lg:hidden" src="menu.png" alt="Menu" />)}
                        {isMenuOpen && (<img className="block lg:hidden" src="close.svg" alt="Close" />)}
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className="fixed top-[65px] right-0 h-full w-4/5 bg-white z-50 shadow-lg font-lexend text-[#24223C] text-lg font-semibold pt-5 pr-5">
                    <ul className="flex flex-col justify-start items-end h-full pl-5 space-y-4 text-end">
                        <li><a href="/about" onClick={toggleMenu} className={isActive('about')}>About</a></li>
                        <li><a href="/resources" onClick={toggleMenu} className={isActive('resources')}>Resources</a></li>
                        <li><a href="/community" onClick={toggleMenu} className={isActive('community')}>Community</a></li>
                        <li><a href="/contact" onClick={toggleMenu} className={isActive('contact')}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;

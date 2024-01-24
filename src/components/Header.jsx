import React, { useState } from 'react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <header>
            <div className="flex py-3 px-4 lg:px-28 bg-[#FEFDFF]">
                <div id="logo" className="flex item-center pt-1">
                    <a href="./">
                        <img src="Logo.svg" alt="" />
                    </a>
                </div>
                <div id="menu" className="flex flex-grow justify-end z-20 font-inter text-[#24223C]">
                    <ul className="flex gap-8 items-center text-lg">
                        <li className="hidden lg:block p-3">
                            <a href="./about" className="hover:underline decoration-2">About</a>
                        </li>
                        <li className="hidden lg:block p-3 ">
                            <a href="./resources" className="hover:underline decoration-2">Resources</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="./community" className="hover:underline decoration-2">Community</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="./contact" className="hover:underline decoration-2">Contact</a>
                        </li>
                        
                    </ul>
                </div>
                <div className="flex items-center ">
                    <button onClick={toggleMenu}>
                    {!isMenuOpen && (<img className="block lg:hidden" src="menu.png" alt="" />)}
                    {isMenuOpen && (<img className="block lg:hidden" src="close.svg" alt="" />)}
                    {isMenuOpen && (
                <div className="fixed top-[65px] left-0 w-full h-full bg-black bg-opacity-50 z-40"></div>
            )}
                    </button>
                    
                </div>
                
            </div>
            
            {isMenuOpen && (
            <div className="fixed top-[65px] right-0 h-full w-4/5 bg-white z-50 shadow-lg font-lexend text-[#24223C] text-lg font-semibold pt-5 pr-5">
                <ul className="flex flex-col justify-start items-end h-full pl-5 space-y-4 text-end">
                <li><a href="./about" onClick={toggleMenu}>About</a></li>
                <li><a href="./resources" onClick={toggleMenu}>Resources</a></li>
                <li><a href="./community" onClick={toggleMenu}>Community</a></li>
                <li><a href="./contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
            )}
        </header>
    )
}

export default Header
const Header = () => {

    return (
        <header>
            <div className="flex py-3 px-4 lg:px-28 bg-[#FEFDFF]">
                <div id="logo" className="flex item-center pt-1">
                    <img src="Logo.svg" alt="" />
                </div>
                <div id="menu" className="flex flex-grow justify-end z-20 font-inter text-[#24223C]">
                    <ul className="flex gap-8 items-center text-lg">
                        <li className="hidden lg:block p-3 ">
                            <a href="./resources" className="hover:underline decoration-2">Resources</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="./community" className="hover:underline decoration-2">Community</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="./contact" className="hover:underline decoration-2">Contact</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="./about" className="hover:underline decoration-2">About</a>
                        </li>
                        {/* <li className="hidden lg:block p-2 rounded-full bg-[#E2E1EC]">
                            <img src="user.svg" alt="" />                        </li> */}
                    </ul>
                </div>
                <div className="flex items-center ">
                    <a href="#">
                        <img className="block lg:hidden" src="menu.png" alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
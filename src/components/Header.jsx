const Header = () => {

    return (
        <header>
            <div className="flex py-4 px-2 lg:px-28 bg-[#F2F2F2]">
                <div id="logo" className="flex item-center pt-1">
                    <img src="/Logo.svg" alt="" />
                </div>
                <div id="menu" className="flex flex-grow justify-end z-20">
                    <ul className="flex space-x-4 items-center text-xl ">
                        <li className="hidden lg:block p-3 ">
                            <a href="#" className="font-semibold hover:underline decoration-2">Courses</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="#" className="font-semibold hover:underline decoration-2">Resources</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="#" className="font-semibold hover:underline decoration-2">Job Board</a>
                        </li>
                        <li className="hidden lg:block p-3">
                            <a href="#" className="font-semibold hover:underline decoration-2">About</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block pl-4 my-auto">
                    <img src="/user.svg" alt="" />
                </div>
                <div className="flex items-center ">
                    <a href="#">
                        <img className="block lg:hidden" src="/menu.png" alt="" />
                    </a>
                    <div className="hidden lg:flex lg:space-x-3 items-center"></div>
                </div>
                
                <div id="user"></div>
            </div>
        </header>
    )
}

export default Header
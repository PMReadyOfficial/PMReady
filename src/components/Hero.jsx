export default function Hero() {
    return (
        <div className="flex items-start lg:justify-center flex-col lg:flex-row lg:gap-10 xl:gap-20 2xl:gap-60 mb-10">
            <div className="mt-8 max-lg:mx-auto lg:mt-28 lg:ml-32">
                <h1 className="text-6xl lg:text-7xl w-80 lg:w-[508px] mr-5 lg:mr-10 pb-4">
                Lorem ipsum dolor 
                </h1>
                <p className="text-2xl xl:text-3xl">
                sub text (optional)
                </p>
                <div className="CTA flex gap-5 mt-10">
                    <button className="lg:text-xl w-40 h-12 px-5 py-2 bg-[#F2F2F2] text-black border border-white hover:bg-black hover:text-white">Login</button>
                    <button className="lg:text-xl w-40 h-12 px-5 py-2 bg-[#F2F2F2] text-black border border-white hover:bg-black hover:text-white">Sign up</button>
                </div>
            </div>
            <div className="mt-8">
                <img className="hidden lg:block"src="http://via.placeholder.com/422x448" alt="" />
                {/* for mobile <img className="block xl:hidden"src="http://via.placeholder.com/320x340" alt="" /> */}
            </div>
        </div>
    );
}
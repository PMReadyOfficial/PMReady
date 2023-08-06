export default function Hero() {
    return (
        <div className="flex justify-between">
            <div className="flex items-start flex-col lg:flex-row lg:gap-10 mb-44">
                <div className="mt-8 max-lg:mx-auto lg:mt-40 lg:ml-32 font-lexend">
                    <h3 className="text-2xl font-bold text-[#9C9AB7]">Your one stop shop for</h3>
                    <h1 className="text-6xl lg:text-7xl font-bold text-[#24223C] pb-3">
                        Program <span className="text-[#FA9D74]">Management</span> 
                    </h1>
                    <div className="CTA flex gap-3 mt-10 lg:text-2xl font-semibold">
                        <button className="px-10 py-3 bg-[#023849] border-4 text-[#FEFDFF] border-[#023849] rounded-[100px]">Get Started</button>
                        <button className=" text-[#24223C] border-gradient rounded-[100px] p-1">
                                <div className="px-10 py-3 rounded-[100px] bg-[#FEFDFF]">Login</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-20 hidden lg:block">
                <svg width="191" height="413" viewBox="0 0 191 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M33.4157 400.092C95.7559 408.97 156.027 394.63 200.024 354.614C244.021 314.599 263.606 256.419 260.02 194.142C197.68 185.265 137.408 199.605 93.4113 239.621C49.4145 279.636 29.8297 337.816 33.4157 400.092Z" fill="#D7F5F2"/>
                        <path d="M33.4157 10.5906C95.7559 1.71344 156.027 16.0533 200.024 56.0688C244.021 96.0843 263.606 154.264 260.02 216.541C197.68 225.418 137.408 211.078 93.4113 171.062C49.4145 131.047 29.8297 72.8673 33.4157 10.5906Z" fill="#E8F5D8"/>
                    </g>
                </svg>

            </div>
        </div>
    );
}
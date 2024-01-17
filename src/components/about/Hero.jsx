export default function Hero() {
    return (
        <div className="flex flex-col">
            <div className="mb-3 sm:mb-5 md:mg-8 lg:mb-10">
                <div className="absolute box-gradient w-[895px] h-[424px] right-0"></div>
                <div className="absolute rect-grad w-[700px] xl:w-[1160px] h-[12px] mt-[320px]"></div>

                <div className="relative z-10 ml-32 ">

                    <h1 className="my-32 text-5xl md:text-6xl lg:text-7xl font-bold leading-8 font-lexend text-[#24223C] pb-3">

                        <div className="absolute z-0 -mt-[10px] ml-[400px] ">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="46" height="37" viewBox="0 0 46 37" fill="none">
                                <path d="M8.07944 3.51031C5.47109 8.96278 5.04818 14.8945 7.44499 20.0756C9.8418 25.2567 14.6049 28.7256 20.4105 30.1909C23.0189 24.7385 23.4418 18.8067 21.045 13.6257C18.6482 8.44459 13.8851 4.97564 8.07944 3.51031Z" fill="#3BCABE" />
                                <path d="M43.7443 14.7292C42.7616 20.693 39.7126 25.7987 34.7815 28.6747C29.8503 31.5508 23.959 31.6683 18.3599 29.5463C19.3426 23.5825 22.3916 18.4768 27.3228 15.6007C32.254 12.7247 38.1452 12.6071 43.7443 14.7292Z" fill="#9ADB67" />
                            </svg>
                        </div>
                        
                        <div className="my-2 lg:my-0">
                            <span className="text-[#FA9D74]">Empowering</span>  current <br />
                            <span className="sm:pt-24">and future PMs</span>
                        </div>
                        
                    </h1>
                </div>


            </div>
            <div>
                <div className="group-2422 absolute mx-5 ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="202" height="188" viewBox="0 0 202 188" fill="none">
                        <g opacity="0.25">
                            <path d="M11.4534 88.3909C19.4143 112.043 35.2414 130.817 57.2753 139.246C79.3091 147.674 103.435 144.217 124.885 131.827C116.925 108.175 101.097 89.401 79.0636 80.9727C57.0297 72.5444 32.9036 76.0009 11.4534 88.3909Z" fill="#3BCABE" />
                            <path d="M149.636 18.8246C163.894 39.3064 169.548 63.2018 163.196 85.9212C156.843 108.641 139.697 125.962 116.969 135.814C102.711 115.332 97.0561 91.4363 103.409 68.7169C109.762 45.9976 126.907 28.6759 149.636 18.8246Z" fill="#9ADB67" />
                        </g>
                    </svg>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 relative ml-[140px] mx-[120px] mt-[109px] mb-20 items-center">
                    <img className="max-w-[300px] min-[400px]:max-w-sm lg:max-w-[510px] rounded-br-[40px] object-scale-down " src="./images/image-10.jpeg" alt="" />
                    <div className="flex flex-col gap-4 text-[#24223C]">
                        <h2 className="text-4xl font-lexend font-bold">About Us</h2>
                        <p className="text-lg font-inter xl:pr-40">PMReady is more than just a learning program; we're a network of like-minded individuals who share a common goal — to foster innovation and drive success in the world of technology and product development. So, who are we? We are your partners in your pursuit of excellence, your mentors in the art of Product Management, and your gateway to a world of possibilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <div className="flex flex-col overflow-hidden">
            <style>{`
                
                @keyframes typing {
                    from { width: 0; }
                    to { width: auto; }
                  }
                
                  .typewriter {
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    border-right: 2px solid; /* simulate cursor */
                  }
                
                  .typewriter span {
                    display: inline-block;
                    width: 0;
                    animation: typing 1s steps(8, end);
                  }
             
                   
            `}</style>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex items-start flex-col lg:flex-row lg:gap-10 mb-14">
                    <div className="ml-3 min-[400px]:ml-10 lg:ml-32 mt-10 lg:mt-20 font-lexend">
                        <h3 className="text-lg lg:text-2xl font-bold text-[#9C9AB7]">We are a one-stop shop for</h3>
                        <h1 className="text-5xl lg:text-7xl font-bold text-[#24223C] pb-3">
                            <span className="text-5xl lg:text-7xl">Product</span> <br />

                            <span className="text-5xl lg:text-7xl block text-[#FA9D74] pt-2">Management</span>
                        </h1>
                        <div className="CTA flex gap-3 mt-10 lg:text-2xl font-semibold">
                            <button className="px-10 py-3 bg-[#023849] border-4 text-[#FEFDFF] border-[#023849] rounded-[100px]">Join us on Discord</button>
                        </div>
                    </div>
                    </div>
                <div className="mt-14 mr-3 hidden lg:block">
                    <svg className="-z-50" width="630" height="235" viewBox="0 0 630 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="42.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="77.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="112.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="147.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="182.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="217.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="252.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="287.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="322.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="357.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="392.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="427.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="462.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="497.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="532.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="567.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="602.5" cy="7.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="7.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="42.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="77.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="112.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="147.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="182.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="217.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="252.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="287.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="322.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="357.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="392.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="427.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="462.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="497.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="532.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="567.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="602.5" cy="62.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="7.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="42.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="77.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="112.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="147.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="182.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="217.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="252.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="287.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="322.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="357.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="392.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="427.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="462.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="497.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="532.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="567.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="602.5" cy="117.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="7.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="42.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="77.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="112.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="147.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="182.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="217.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="252.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="287.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="322.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="357.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="392.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="427.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="462.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="497.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="532.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="567.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="602.5" cy="172.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="7.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="42.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="77.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="112.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="147.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="182.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="217.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="252.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="287.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="322.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="357.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="392.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="427.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="462.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="497.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="532.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="567.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                        <circle cx="602.5" cy="227.5" r="7.5" fill="#D7F5F2" />
                    </svg>
                    <div className="flex flex-row ml-10">
                        <div>
                            <div className="relative -z-40 rect-grad1 w-[6px] h-[229px] -mt-[84px] ml-10 ">

                            </div>
                            <svg className="z-0 ml-[6px] -mt-[71px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative -ml-[50px] -mt-72 bg-[#3BCABE] w-[194px] h-[194px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-2" src="./images/h-1.png" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="ml-32">
                            <div className="relative -z-40 rect-grad1 w-[6px] h-[229px] -mt-[84px] ml-10 ">

                            </div>
                            <svg className="z-0 ml-[6px] -mt-[100px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative -ml-[50px] -mt-80 bg-[#FA9D74] w-[194px] h-[194px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-4" src="./images/h-2.png" alt=""></img>
                            </div>
                        </div>

                        <div className="-ml-12">
                            <div className="relative -z-40 rect-grad1 w-[6px] h-[229px] -mt-[84px] ml-10 ">

                            </div>
                            <svg className="z-0 ml-[6px] -mt-[71px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative -ml-[20px] -mt-60 bg-[#F5D190] w-[125px] h-[125px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-4" src="./images/h-3.png" alt=""></img>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="ml-4 mb-11 -mt-5 min-[400px]:ml-10 block lg:hidden">
                    <svg className="-z-50 overflow-hidden" width="343" height="185" viewBox="0 0 343 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5.90426" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="33.4574" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="61.0106" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="88.5638" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="116.117" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="143.67" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="171.223" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="198.777" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="226.33" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="253.883" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="281.436" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="308.989" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="336.543" cy="5.90426" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="5.90426" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="33.4574" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="61.0106" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="88.5638" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="116.117" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="143.67" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="171.223" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="198.777" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="226.33" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="253.883" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="281.436" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="308.989" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="336.543" cy="49.2021" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="5.90426" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="33.4574" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="61.0106" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="88.5638" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="116.117" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="143.67" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="171.223" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="198.777" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="226.33" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="253.883" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="281.436" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="308.989" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="336.543" cy="92.5" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="5.90426" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="33.4574" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="61.0106" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="88.5638" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="116.117" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="143.67" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="171.223" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="198.777" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="226.33" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="253.883" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="281.436" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="308.989" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="336.543" cy="135.798" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="5.90426" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="33.4574" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="61.0106" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="88.5638" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="116.117" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="143.67" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="171.223" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="198.777" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="226.33" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="253.883" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="281.436" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="308.989" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                        <circle cx="336.543" cy="179.096" r="5.90426" fill="#D7F5F2"/>
                    </svg>
                    <div className="flex flex-row">
                        <div>
                            <div className="relative -z-60 rect-grad1 w-[6px] h-[140px] -mt-[95px] ml-[50px]">

                            </div>
                            <svg className="-z-70 ml-[16px] -mt-[71px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative -ml-[5px] -mt-[200px] bg-[#3BCABE] w-[120px] h-[120px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-2" src="./images/h-1.png" alt=""></img>
                            </div>
                            
                        </div>

                        <div className="ml-16">
                            <div className="relative -z-60 rect-grad1 w-[6px] h-[140px] -mt-[95px]">

                            </div>
                            <svg className="-z-70 -ml-[34px] -mt-[100px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative -ml-[54px] -mt-[196px] bg-[#FA9D74] w-[120px] h-[120px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-3" src="./images/h-2.png" alt=""></img>
                            </div>
                        </div>

                        <div className="-ml-9">
                            <div className="relative -z-60 rect-grad1 w-[6px] h-[140px] -mt-[95px] ml-10 ">

                            </div>
                            <svg className="-z-70 ml-[6px] -mt-[71px]" xmlns="http://www.w3.org/2000/svg" width="75" height="44" viewBox="0 0 75 44" fill="none">
                                <path d="M0.47011 0.0804127C-1.2042 12.1409 1.50042 23.8011 9.04772 32.3127C16.595 40.8244 27.5682 44.6133 39.3142 43.9196C40.9885 31.8591 38.2839 20.1989 30.7366 11.6873C23.1893 3.17557 12.2161 -0.61333 0.47011 0.0804127Z" fill="#9ADB67" />
                                <path d="M73.9357 0.0804127C75.61 12.1409 72.9054 23.8011 65.3581 32.3127C57.8108 40.8244 46.8376 44.6133 35.0916 43.9196C33.4173 31.8591 36.1219 20.1989 43.6692 11.6873C51.2165 3.17557 62.1897 -0.61333 73.9357 0.0804127Z" fill="#9ADB67" />
                            </svg>
                            <div className="relative ml-1 -mt-40 bg-[#F5D190] w-[78px] h-[78px] rounded-full flex">
                                <img className="rounded-full justify-center items-center m-2" src="./images/h-3.png" alt=""></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="rect-grad w-full h-[12px] mb-4">

            </div>
        </div>
    );
    
}

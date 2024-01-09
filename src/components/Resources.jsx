export default function Resources() {
    return (
        <div className="flex justify-center items-center mt-24 mb-10">
            <div className=" border-gradient flex p-[1px] rounded-md">
                <div className=" lg:grid grid-cols-2 gap-4 w-[328px] lg:w-[940px] xl:w-[1141px] bg-[#FFFCF8] rounded-md">
                    <div className="py-[40px] lg:py-10 lg:pl-10 flex">
                        <div className="text-center">
                            <div className="font-semibold font-inter text-2xl lg:mt-10 mb-4">
                                Resources
                            </div>
                            <div className="text-lg lg:mb-6">
                                See our curated list of job listings, interview tips, and more!
                            </div>
                            <button className=" text-[#24223C] border-gradient rounded-[100px] mt-[12px] p-[2px]">
                                <div className="px-10 py-3 rounded-[100px] font-semibold bg-[#FEFDFF] text-lg">See More</div>
                            </button>
                        </div>
                        <div className="hidden lg:block my-auto ml-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="205" viewBox="0 0 2 205" fill="none">
                                <path d="M1 0V205" stroke="#D4D3E4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="lg:p-12">
                        <div class="lg:block hidden text-lg">
                            <div className="py-[30px] underline">Resume/Cover Letter Guide</div>
                            <div className="py-[30px] underline">Interview Prep</div>
                            <div className="py-[30px] underline">Shoutout to Other Creators</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Resources() {
    return (
        <div className="flex justify-center items-center mt-24 mb-10">
            <div className=" border-gradient flex p-[1px] rounded-md">
                <div className=" lg:grid grid-cols-2 gap-4 w-[300px] lg:w-[940px] xl:w-[1141px] bg-[#FFFCF8] rounded-md">
                    <div className="py-[40px] lg:py-10 lg:pl-10 flex">
                        <div className="text-center">
                            <div className="font-semibold font-inter text-2xl lg:mt-10 mb-4">
                                Resources
                            </div>
                            <div className="text-lg lg:mb-6">
                                See our curated list of job listings, interview tips, and more!
                            </div>
                            <a href="./resources">
                                <button className=" text-[#24223C] border-gradient rounded-[100px] mt-[12px] p-[2px]">
                                    <div className="px-10 py-3 rounded-[100px] font-semibold bg-[#FEFDFF] text-lg">See More</div>
                                </button>
                            </a>
                        </div>
                        <div className="hidden lg:block my-auto ml-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="205" viewBox="0 0 2 205" fill="none">
                                <path d="M1 0V205" stroke="#D4D3E4"/>
                            </svg>
                        </div>
                    </div>
                    <div className="lg:p-12">
                        <div class="lg:block hidden text-lg">
                            <div className="py-[30px] underline"><a href="https://www.indeed.com/career-advice/resumes-cover-letters/how-to-write-a-cover-letter" target="_blank" rel="noopener noreferrer">Resume/Cover Letter Guide</a></div>
                            <div className="py-[30px] underline"><a href="https://www.indeed.com/career-advice/resumes-cover-letters/how-to-make-a-resume-with-examples" target="_blank" rel="noopener noreferrer">Resume Guide</a></div>
                            <div className="py-[30px] underline"><a href="https://productschool.com/blog/interview-tips/the-ultimate-list-product-manager-interview-questions" target="_blank" rel="noopener noreferrer">Interview Prep</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


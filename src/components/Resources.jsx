export default function Resources() {
    return (
        <div className="flex justify-center items-center my-24">
            <div className="border-gradient flex p-[1px] rounded-md">
                <div className="grid grid-cols-2 gap-4 w-[940px] xl:w-[1141px] bg-[#FFFCF8] rounded-md">
                    <div className="py-10 pl-10 flex">
                        <div>
                            <div className="font-semibold font-inter text-2xl mt-10 mb-4">
                                Resources
                            </div>
                            <div className="text-lg mb-6">
                                Lorem ipsum dolor sit amet consectetur. Sed dis placerat
                                tristique senectus pretium vestibulum tellus.
                            </div>
                            <button className=" text-[#24223C] border-gradient rounded-[100px] p-[2px]">
                                <div className="px-10 py-3 rounded-[100px] font-semibold bg-[#FEFDFF] text-lg">See More</div>
                            </button>
                        </div>
                        <div className="my-auto ml-12">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="205" viewBox="0 0 2 205" fill="none">
                            <path d="M1 0V205" stroke="#D4D3E4"/>
                        </svg>
                        </div>
                    </div>
                    <div className="p-12">
                        <div class="text-lg">
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

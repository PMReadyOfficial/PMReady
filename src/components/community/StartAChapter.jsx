
export default function StartAChapter() {


    return (
       <div className="flex flex-col lg:flex-row min-[400px]:mx-12 lg:mx-32 my-32 gap-10">
            <div className="relative">
                <div className="w-[292px] h-[154px] -ml-5 lg:ml-0 lg:w-[394px] lg:h-[209px] bg-[#E8F5D8] rounded-[20px] mr-[100px]"></div>
                <div className="absolute w-[164px] lg:w-fit -top-[70px] lg:-top-[100px] left-[0px]">
                    <img className="" src="images/image-s-1.png" alt="" />
                </div>
                <div className="absolute w-[164px] lg:w-fit -top-[70px] lg:-top-[100px] left-[140px] lg:left-[198px]">
                    <img className="" src="images/image-s-2.png" alt="" />
                </div>
                <div className="absolute w-[164px] lg:w-fit z-10 top-[10px] lg:top-[20px] left-[15px] lg:left-[66px]">
                    <img className="" src="images/image-s-3.png" alt="" />
                </div>
                <div className="absolute w-[164px] lg:w-fit z-10 top-[10px] lg:top-[20px] left-[155px] lg:left-[264px]">
                    <img className="lg:object-none" src="images/image-s-4.png" alt="" />
                </div>
                {/* <div className="ml-[255px] absolute w-[267px] h-[217.5px] bg-[#d9d9d9]"></div>
                <div className="ml-[552px] absolute w-[267px] h-[217.5px] bg-[#d9d9d9]"></div>
                <div className="mt-[180px] ml-[354px] absolute w-[267px] h-[217.5px] bg-[#aeaeae]"></div>
                <div className="mt-[180px] ml-[651px] absolute w-[267px] h-[217.5px] bg-[#aeaeae]"></div> */}
            </div>
            <div className="flex flex-col mx-4 lg:mx-0 gap-2 lg:gap-4 -mt-[34px]">
                <div className="text-2xl lg:text-4xl font-lexend text-[#023849] font-bold">Start a Chapter</div>
                <div className="text-base lg:text-lg font-inter text-[#24223C] pb-4">
                    <div className="hidden lg:block">Are you interested in joining a chapter at your school? <br /> Connect with our board, and let's talk!</div>
                    <div className="block lg:hidden">Connect with our board, and let's talk!</div>
                </div>
                <div className="flex items-center font-semibold text-lg font-lexend text-[#24223C] underline">
                    <a href="https://forms.gle/zbaZLPgG6xHrMtec6" className="" target="_blank" rel="noopener noreferrer">Fill up the Google Form</a>
                    <img className="inline ml-2 w-6 h-6" src="Chevron_Right.svg"></img>
                </div>
                
            </div>
       </div>
    ) 
}
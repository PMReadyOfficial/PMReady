export default function Hero() {
  return (
    <div className=" relative w-full">
        <div className="absolute inset-0 h-[275px] w-full comm-hero-grad"></div>
        <div className="relative h-[275px] w-full flex items-center justify-center overflow-hidden">
            <div className="flex flex-col gap-5 items-center">
                <h1 className="text-5xl font-bold font-lexend text-[#24223C]">
                    <span className="text-[#FA9D74]">Connect,</span> Collaborate, Learn
                </h1>
                <p className="text-base lg:text-lg font-inter text-black max-w-lg text-center">
                    Be part of a supportive community of aspiring and experienced Product Managers.
                </p>
            </div>
            <div className="absolute top-[60px] -right-[13px] flex">
                <div className="w-[155px] h-[155px] rounded-full z-10">
                    <img src="images/p-3.png" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-full -ml-[20px]">
                    <img src="images/p-4.png" alt="" />
                </div>
            </div> 
            <div className="absolute top-[60px] -left-[13px] flex">
                <div className="w-[155px] h-[155px] rounded-full">
                    <img src="images/p-1.png" alt="" />
                </div>
                <div className="w-[155px] h-[155px] rounded-full -ml-[20px]">
                    <img src="images/p-2.png" alt="" />
                </div>
            </div>
            
             
        </div>
        
    </div>
  )
}

export default function Hero() {
    return (
        <div className=" relative w-full">
            <div className="absolute inset-0 h-[248px] lg:h-[308px] w-full contact-hero-grad"></div>
            <div className="relative h-[248px] lg:h-[308px] w-full flex lg:items-center justify-center overflow-hidden">
                <div className="flex flex-col gap-3 lg:gap-5 items-center mt-10 lg:mt-0">
                    <h1 className="text-4xl lg:text-5xl font-bold font-lexend text-[#24223C] text-center mx-2 lg:mx-0">
                        Let's <span className="text-[#FA9D74]">Chat</span>
                    </h1>
                    <p className="mx-4 min-[400px]:mx-0 text-base lg:text-lg font-inter text-black max-w-lg text-center">
                    Whether you have questions for us, want to learn more about joining PMReady, or are interested in supporting us, we’d love to hear from you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function WhoWeAre() {
    return (
        <div style={{ backgroundImage: "url(vector1.svg), url(vector4.svg)", backgroundPosition: "left top, right 100%"}} className=" items-center justify-center bg-no-repeat bg-[12%,13%] lg:pr-[209px] pr-[20px] lg:pl-[209px] pl-[20px] pt-[209px] lg:pb-[409px] pb-[164px] mb-16">
            <div className="flex flex-col sm:flex-row gap-5 w-full h-[300px] justify-center">
                <div className="w-full sm:w-2/5 h-full bg-no-repeat bg-cover">
                    <img src="Rectangle.png" alt="" className="w-full rounded-[0_0_80px_0]"/>
                </div>
                <div className="text-start w-full sm:w-2/5 pt-10">
                    <h5 className="text-[color:var(--color-teal-500,#023849)]  text-[32px] sm:text-[24px] not-italic font-bold leading-9">Who we are</h5>
                    <p className="text-[color:var(--color-dark-600,#24223C)] text-lg not-italic font-normal leading-7 my-5">
                        Learn the secrets to product strategy, agile development, 
                        and market research through our self-paced courses! 
                        Learn the secrets to product strategy, agile development, 
                        and market research through our self-paced courses!
                    </p>
                    <a className="@apply text-[color:var(--color-dark-600,#24223C)] text-center text-lg not-italic font-semibold underline pb-[30px]">Read our story</a>
                </div>
            </div>
        </div>
    )
}

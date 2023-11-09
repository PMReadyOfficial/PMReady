export default function WhoWeAre() {
    return (
        <div style={{ backgroundImage: "url(vector1.svg), url(vector4.svg)", backgroundPosition: "left top, right 100%"}} className="h-[200px] items-center justify-center bg-no-repeat bg-[12%,13%] pr-[209px] pl-[209px] pt-[209px] pb-[409px]">
            <div className="flex flex-row gap-5 w-full h-[300px]">
                <div className="w-2/5 h-full bg-no-repeat bg-cover shrink-0">
                    <img src="Rectangle.png" alt="" className="rounded-[0_0_80px_0]"/>
                </div>
                <div className="text-start w-2/5 pt-10">
                    <h5 className="text-[color:var(--color-teal-500,#023849)] text-[32px] not-italic font-bold leading-9">Who we are</h5>
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

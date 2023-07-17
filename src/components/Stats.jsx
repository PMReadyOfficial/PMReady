export default function Stats() {
    return (
        // content: a text "State of the Industry" centered
        // content: 3 numbers with a text beside each number. example: 1,000+ Customers
        <div className="flex flex-col items-center justify-center bg-[#E8F5D8] text-[#023849]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-24">
                <div className="flex flex-col items-center justify-center gap-2 w-60">
                    <h1 className="text-4xl font-lexend font-bold">$108,742</h1>
                    <p className="text-lg text-center px-2 font-inter font-normal">PM Average Annual Salary in 2023</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-60 mx-12">
                    <h1 className="text-4xl font-lexend font-bold">43.6%</h1>
                    <p className="text-lg text-center font-inter font-normal">of companies were planning on hiring more PMs in 2022</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-60 mx-12">
                    <h1 className="text-4xl font-lexend font-bold">3rd</h1>
                    <p className="text-lg text-center font-inter font-normal">best job in the US according to Glassdoor</p>
                </div>
            </div>
        </div>
    );
}

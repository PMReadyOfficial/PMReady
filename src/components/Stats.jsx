export default function Stats() {
    return (
        // content: a text "State of the Industry" centered
        // content: 3 numbers with a text beside each number. example: 1,000+ Customers
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">State of the Industry</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 my-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    <h1 className="text-6xl">00</h1>
                    <p className="text-2xl">lorem ipsum</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    <h1 className="text-6xl">000</h1>
                    <p className="text-2xl">lorem ipsum</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    <h1 className="text-6xl">000</h1>
                    <p className="text-2xl">lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}

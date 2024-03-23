export default function StartYourChapter() {
    return (
        <section className=" bg-[#24223C] px-8 mx-0 sm:px-8 md:px-16 pt-20 pb-5">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-white font-bold text-3xl pb-8 sm:pb-5">Start your chapter at university</h1>
                <div className='px-10 sm:px-8'>
                    <p className="text-white font-bold pb-8 sm:pb-10 lg:px-28 sm:px-8 md:px-8 max-w-4xl">Want to start a new chapter at your university? Fill in the form right now, and we will get you on a call with someone on our team!</p>
                </div>
                <a href="./community">
                    <button className="bg-[#FA9D74] rounded-full font-bold py-4 px-6">Join our Chapters</button>
                </a>
            </div>


            <div className="grid grid-cols-6 mt-20 my-10">
                <div className="mx-2.5 lg:mx-5 my-auto">
                    <img src="microsoft.png" alt="Microsoft logo" />
                </div>
                <div className="mx-2.5 lg:mx-5 my-auto">
                    <img src="images/image-9.jpeg" alt="" />
                </div>
                <div class="mx-2.5 lg:mx-5 my-auto w-3/4 h-auto">
                    <img src="images/Boston_University_Terriers_logo.svg" alt="Boston University logo"/>
                </div>
                <div className="mx-2.5 lg:mx-5 my-auto">
                    <img src="images/image-15.jpeg" alt="" />
                </div>
                <div className="mx-2.5 lg:mx-5 my-auto">
                    <img src="apple.png" alt="Apple logo" />
                </div>
                <div className="mx-2.5 lg:mx-5 my-auto">
                    <img src="images/image-16.jpeg" alt="" />
                </div>
            </div>



        </section>
    )
}

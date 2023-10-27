
export default function VolunteerBanner() {
    return (
        <div className="text-center justify-center" >
            <h1  className="font-lexend text-4xl font-bold mt-10 " >
                PMReady is made <p className="text-[#FA9D74] inline">by PMs,</p> <p className="text-[#3BCABE] inline">for PMs</p>
            </h1>
            <div className="grid mt-10 px-16 grid-cols-1 md:grid-cols-4 gap-5 w-[1040px] mx-auto">
                <div className="inline-block justify-center text-center">
                    <img className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"></img>
                    <p className="font-lexend text-lg font-semibold mt-3" >John Doe Smith</p>
                    <p className="font-lexend">Director of Awesome</p>
                </div>
                <div className="grid-rows-2 gap-2 md:grid-rows-1">
                    <img className="block mx-auto w-40 h-40 bg-[#D9D9D9] rounded-full" ></img>
                    <p  className="font-lexend text-lg font-semibold mt-3">John Doe Smith</p>
                    <p className="font-lexend">Director of Awesome</p>
                </div>
                <div className="grid-rows-2 gap-2 md:grid-rows-1">
                    <img className="block mx-auto w-40 h-40 bg-[#D9D9D9] rounded-full"></img>
                    <p className="font-lexend text-lg font-semibold mt-3" >John Doe Smith</p>
                    <p className="font-lexend">Director of Awesome</p>
                </div>
                <div className="grid-rows-2 gap-2 md:grid-rows-1">
                    <img className="block mx-auto w-40 h-40 bg-[#D9D9D9] rounded-full"></img>
                    <p className="font-lexend text-lg font-semibold mt-3" >John Doe Smith</p>
                    <p className="font-lexend" >Director of Awesome</p>
                </div>
            </div>

            <h2 className="font-lexend font-bold text-2xl mt-10">We <p className="text-[#FA9D74] inline ">love</p> our interns and volunteers!</h2>
            <img src = "image9.png" className="mt-5 mx-auto w-[864px] h-[542px]"></img>
        </div>
        

       
    ) 
}
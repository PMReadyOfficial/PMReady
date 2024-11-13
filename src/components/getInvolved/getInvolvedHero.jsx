import { MoveRight } from "lucide-react"

export default function newHero() {
  return (
    <div className="flex flex-col bg-[#FFF9F6] py-20">
      <div className="flex flex-row justify-between pl-20">
        <div className="relative w-1/2">
          <h2>Learn product management while making a <span className="text-[#FA9D74] font-bold text-5xl">real difference</span></h2>
          <p className="mt-[5%] text-xl w-3/4">A fully remote product fellowship program in the Fall where students in undergraduate programs can work with startups to gain real world experience.</p>
          {/* some warning thing  */}
          <div className="absolute flex justify-between w-1/2 mb-4 bottom-0">
            <button className="flex flex-row px-8 py-2 border-[1px] text-[#FA9D74] font-bold border-[#FA9D74] rounded-full">Learn More<MoveRight className="ml-2" /></button>
            <button className="px-8 py-2 text-white font-bold bg-[#0D1B2A] rounded-full ">Apply Now</button>
          </div>
        </div>
        <img src="program/LearningHeader.png" alt="" className="w-[45%] rounded-tl-lg rounded-bl-lg" />
      </div>

      <div className="flex flex-col w-full justify-center mt-5 ">
        <h6 className="mr-[2rem] w-full text-center">Collaborate with product managers from</h6>
        <div className="flex flex-row w-full justify-center mt-5">
          <img src="microsoft.png" alt="" className="w-40" />
        </div>
      </div>
    </div>
  )
}

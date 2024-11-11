import { MoveRight } from "lucide-react"

export default function Apply() {
  return (
    <div className="flex flex-col bg-[#24223C] p-20">
      <h4 className="text-white text-center">Ready to <span className="text-[#FA9D74] font-bold text-[2rem]">begin learning</span>?</h4>
      <p className="text-white text-center my-8 text-base">Learn more about our programs and cohort dates.</p>
      <div className="flex flex-row justify-center">
        <button type="" className="bg-[#FA9D74] rounded-full m-2 px-4 py-2">Apply Now</button>
        <button type="" className="flex flex-row border-2 border-white text-white rounded-full m-2 px-4 py-2">Learn More<MoveRight className="ml-2" /></button>
      </div>
    </div>
  )
}

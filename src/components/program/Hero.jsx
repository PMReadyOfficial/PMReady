

export default function Hero() {
  return (
    <div className="flex px-40 py-20 gap-4">
        <div className="flex-1">
            <div className="text-[42px] font-bold">Learn product management while making a real difference</div>
            <div>A fully remote product fellowship program in the Fall where students in undergraduate programs can work with startups to gain real world experience</div>
            <div className="mt-4">*Application is not open at the moment</div>
            <div className="flex gap-4 mt-4">
                <button className="border rounded-3xl text-[#fa9d74] border-[#fa9d74] px-8 py-2">Learn more</button>
                <button className="px-8 py-2 bg-[#24223c] rounded-3xl text-white">Apply Now</button>
            </div>

        </div>
        <div className="flex-1">
            <img src="Group 2463.png"/>
        </div>
    </div>
  )
}

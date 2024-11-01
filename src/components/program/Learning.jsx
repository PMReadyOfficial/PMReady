export default function Learning() {
  return (
    <div className="relative items-center justify-center pr-[20px] lg:pr-[209px] pl-[20px] lg:pl-[209px] pt-[209px] lg:pb-52 pb-20">

      <img src="Graphic_Leaf.png" alt="" className="absolute -top-[65px] sm:top-0 -left-0 scale-50 -translate-x-14 lg:translate-x-0 lg:scale-100 -z-10" />
      <img src="Graphic_Leaf_1.png" alt="" className="absolute -bottom-[100px] sm:bottom-0 right-0 scale-50 translate-x-14 lg:translate-x-0 lg:scale-100 -z-10" />
      <div className="flex flex-col lg:flex-row gap-5 w-full items-center lg:justify-center">
        <div className="max-w-md h-full bg-no-repeat bg-cover">
          <img src="whoweare.jpeg" alt="" className="w-full rounded-[0_0_80px_0]" />
        </div>
        <div className="text-start w-full max-w-lg sm:w-2/5 pt-10">
          <h5 className="font-lexend text-[color:var(--color-teal-500,#023849)]  text-[32px] sm:text-[24px] not-italic font-bold leading-9">Gain Real-World Experience</h5>
          <p className="font-inter text-[color:var(--color-dark-600,#24223C)] text-lg not-italic font-normal leading-7 my-5">
            The program is free, and will be made of virtual meetings, case studies, guest lectures, and even a small desing-your-own product pitch at the end of it all.
          </p>
          <button className="px-8 py-2 border-2 text-[#FA9D74] border-[#FA9D74] rounded-full font-bold">Learn More</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full items-center lg:justify-center mt-[209px]">
        <div className="text-start w-full max-w-lg sm:w-2/5 pt-10">
          <h5 className="font-lexend text-[color:var(--color-teal-500,#023849)]  text-[32px] sm:text-[24px] not-italic font-bold leading-9">Learn by doing, not by watching.</h5>
          <p className="font-inter text-[color:var(--color-dark-600,#24223C)] text-lg not-italic font-normal leading-7 my-5">
            The program is free, and will be made of virtual meetings, case studies, guest lectures, and even a small desing-your-own product pitch at the end of it all.
          </p>
        </div>
        <div className="max-w-md h-full bg-no-repeat bg-cover">
          <img src="whoweare.jpeg" alt="" className="w-full rounded-[0_0_80px_0]" />
        </div>
      </div>
    </div>
  )
}

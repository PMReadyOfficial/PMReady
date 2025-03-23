import B1 from "@Images/community/banner/B-1.png";
import B2 from "@Images/community/banner/B-2.png";
import B3 from "@Images/community/banner/B-3.png";
import B4 from "@Images/community/banner/B-4.png";

export default function Hero() {
  return (
    <div className=" relative w-full">
      <div className="absolute inset-0 h-[570px] lg:h-[275px] w-full comm-hero-grad"></div>
      <div className="relative h-[570px] lg:h-[275px] w-full flex lg:items-center justify-center overflow-hidden">
        <div className="flex flex-col gap-3 lg:gap-5 items-center mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold font-lexend text-[#24223C] text-center mx-2 lg:mx-0">
            <span className="text-[#FA9D74]">Connect,</span> Collaborate, Learn
          </h1>
          <p className="text-base lg:text-lg font-inter text-black max-w-lg text-center">
            Be part of a supportive community of aspiring and experienced
            Product Managers.
          </p>
        </div>
        <div className="absolute top-[250px] min-[400px]:top-[175px] lg:top-[60px] lg:-right-[13px] flex">
          <div className="w-[155px] h-[155px] rounded-full z-10">
            <img src={B3} alt="" />
          </div>
          <div className="w-[155px] h-[155px] rounded-full -ml-[20px]">
            <img src={B4} alt="" />
          </div>
        </div>
        <div className="absolute top-[410px] min-[400px]:top-[350px] lg:top-[60px] lg:-left-[13px] flex">
          <div className="w-[155px] h-[155px] rounded-full">
            <img src={B1} alt="" />
          </div>
          <div className="w-[155px] h-[155px] rounded-full -ml-[20px]">
            <img src={B2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

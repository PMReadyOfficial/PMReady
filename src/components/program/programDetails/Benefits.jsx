import BenefitsPng from "@Images/program/Home/GeneralBenefit.png";

export default function Benefits() {
  return (
    <div className="flex px-40 py-20 gap-4">
      <div className="flex-1">
        <div className="text-[36px] font-bold">General Benefits</div>
        <div>
          Joining our programs can help building essential skills and industry
          connections quickly. These programs are designed for various audience.
          We aim to provide hands-on experience with the tools and methodologies
          used by top product managers. You get to work on real-world projects,
          often in collaboration with industry experts, providing a practical
          understanding of how to develop and launch products successfully.
          Benefits including networking opportunities creating connections that
          can lead to career growth and effective networking.{" "}
        </div>
      </div>
      <div className="flex-1 rounded">
        <img src={BenefitsPng} />
      </div>
    </div>
  );
}

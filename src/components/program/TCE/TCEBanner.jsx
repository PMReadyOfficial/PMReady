import Boba from "@Images/program/TCE/boba.png";
import BtnLink from "@/components/share/BtnLink";

export default function TCEBanner() {
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-green-100 from-12% via-orange-50 via-50% to-red-50 ">
      <div className="p-24 py-12 w-3/5">
        <h3>
          <>PMReady</> X <>BobaTalks</>
        </h3>
        <h2 className="mb-4">Technology Career Exploration Program</h2>
        <BtnLink text={" Apply Now "} textColor={"text-white"} />
      </div>
      <div className="flex flex-row justify-center w-2/5">
        <img src={Boba} alt="" />
      </div>
    </div>
  );
}

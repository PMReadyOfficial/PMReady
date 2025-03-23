import Boba from "@Images/program/TCE/boba.png";
import BtnLink from "@/components/share/BtnLink";

export default function TCEBanner() {
  return (
    <div className="flex md:flex-row flex-col justify-between bg-gradient-to-r from-green-100 from-12% via-orange-50 via-50% to-red-50 ">
      <div className="md:p-24 px-8 py-10 md:w-3/5 w-full flex flex-col gap-4">
        <h3>
          <span className="text-[#3BCABE]">PMReady</span> X <span className="text-[#fa9d74]">BobaTalks</span>
        </h3>
        <h2 className="mb-4">Technology Career Exploration Program</h2>
        <BtnLink
          text={" Apply Now "}
          textColor={"text-white"}
          linkStyle={"border-solid"}
        />
      </div>
      <div className="flex flex-row justify-center w-2/5 md:visible collapse">
        <img src={Boba} alt="" />
      </div>
    </div>
  );
}

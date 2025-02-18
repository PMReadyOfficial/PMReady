import Boba from "@Images/program/TCE/boba.png";
import BtnLink from "@/components/share/BtnLink";

export default function ExploreTCE() {
  return (
    <div className="flex flex-col pt-12 pb-24 px-24">
      <h4 className="text-center">Explore Careers Today</h4>
      <img src={Boba} alt="" className="w-1/5 m-auto" />
      <BtnLink
        linkStyle={"m-auto"}
        text={" Apply Now "}
        textColor={"text-white"}
      />
    </div>
  );
}

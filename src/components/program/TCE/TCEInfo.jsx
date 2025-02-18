import Image1 from "@Images/program/TCE/TCEImage1.png";
import Image2 from "@Images/program/TCE/TCEImage2.png";
import Image3 from "@Images/program/TCE/TCEImage3.png";
import BtnLink from "@/components/share/BtnLink";

export default function TCEInfo() {
  return (
    <div className="p-24 py-12">
      {/* discover passion */}
      <div className="flex flex-row justify-between">
        <div className="w-2/5">
          <img src={Image1} alt="" className="flex-1" />
        </div>
        <div className="flex flex-col justify-between w-3/5 m-auto p-4">
          <h4 className="mb-4">Discover Your Passion</h4>
          <p className="mb-4">
            The TCE program introduces you to several careers paths, including
            product management, software engineering, and UI/UX design.{" "}
          </p>
          <BtnLink
            additionalClasses={"border-2 border-orange-300"}
            variant={"ghost"}
            text={" Learn More "}
            textColor={"text-orange-300"}
          />
        </div>
      </div>
      {/* dive into projects */}
      <div className="flex flex-row mt-4 justify-between">
        <div className="w-3/5 m-auto p-4">
          <h4>Dive Into Projects</h4>
          <p>
            Fellows in the program will be given the opportunity to work on many
            projects and workshops, leading up to an end-of-program capstone
            project.{" "}
          </p>
        </div>
        <div className="w-2/5">
          <img src={Image2} alt="" className="flex-1" />
          {/* stacking images */}
        </div>
      </div>
    </div>
  );
}

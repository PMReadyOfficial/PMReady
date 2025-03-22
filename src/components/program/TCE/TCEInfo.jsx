import Image1 from "@Images/program/TCE/TCEImage1.png";
import Image2 from "@Images/program/TCE/TCEImage2.png";
import Image3 from "@Images/program/TCE/TCEImage3.png";
import BtnLink from "@/components/share/BtnLink";
import { Button } from "@/components/ui/button";

export default function TCEInfo() {
  return (
    <div className="md:p-24 px-8 py-12">
      {/* discover passion */}
      <div className="flex md:flex-row flex-col justify-between">
        <div className="md:w-2/5 w-4/5 md:m-0 m-auto">
          <img src={Image1} alt="" className="flex-1" />
        </div>
        <div className="flex flex-col justify-between md:w-3/5 w-4/5 m-auto p-4">
          <h4 className="mb-4">Discover Your Passion</h4>
          <p className="mb-4">
            The TCE program introduces you to several careers paths, including
            product management, software engineering, and UI/UX design.{" "}
          </p>
          <Button
            className="border-solid border-orange-300 w-1/5 rounded-full"
            variant="outline"
          >
            <a href="" className="text-orange-300">
              Learn More
            </a>
          </Button>
        </div>
      </div>
      {/* dive into projects */}
      <div className="flex md:flex-row flex-col-reverse mt-4 justify-between h-96">
        <div className="md:w-3/5 w-4/5 m-auto p-8">
          <h4>Dive Into Projects</h4>
          <p>
            Fellows in the program will be given the opportunity to work on many
            projects and workshops, leading up to an end-of-program capstone
            project.{" "}
          </p>
        </div>
        <div className="relative md:w-2/5 w-4/5 md:m-0 m-auto">
          <img src={Image2} alt="" className="absolute flex-1 top-0 left-0" />
          <img
            src={Image3}
            alt=""
            className="absolute flex-1 bottom-0 right-0"
          />
          {/* stacking images */}
        </div>
      </div>
    </div>
  );
}

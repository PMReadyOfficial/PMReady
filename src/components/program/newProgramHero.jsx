import BtnLink from "@/components/share/BtnLink";
// Images
import Learning1 from "@Images/program/Home/Learning1.png";
import Microsoft from "@Images/share/logos/Microsoft.jpg";

export default function newHero() {
  return (
    <div className="flex flex-col bg-[#FFF9F6] py-20">
      <div className="flex flex-row justify-between pl-20">
        <div className="flex flex-col justify-between w-2/5">
          <h2>
            Learn product management while making a{" "}
            <span className="text-[#FA9D74] font-bold text-4xl">
              real difference
            </span>
          </h2>
          <p className="mt-[5%] text-xl w-3/4">
            A fully remote product fellowship program in the Fall where students
            in undergraduate programs can work with startups to gain real world
            experience.
          </p>
          {/* some warning thing  */}
          <div className="mt-4">
            <BtnLink
              link={"/"}
              text={" Learn More "}
              variant={"outline"}
              additionalClasses={"border-orange-400"}
              textColor={"text-orange-400"}
            />
            <BtnLink link={"/"} text={" Apply Now "} />
          </div>
        </div>
        <img
          src={Learning1}
          alt=""
          className="w-[45%] rounded-tl-lg rounded-bl-lg"
        />
      </div>

      <div className="flex flex-col w-full justify-center mt-5 ">
        <h6 className="mr-[2rem] w-full text-center">
          Collaborate with product managers from
        </h6>
        <div className="flex flex-row w-full justify-center mt-5">
          <img src={Microsoft} alt="" className="w-40" />
        </div>
      </div>
    </div>
  );
}

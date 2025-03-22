import LandingPageWhoWeAre from "@Images/landingPage/LandingPageWhoWeAre.jpg";

export default function WhoWeAre() {
  return (
    <div className="relative items-center justify-center pr-[20px] lg:pr-[209px] pl-[20px] lg:pl-[209px] pt-[209px] lg:pb-52 pb-20">
      <img
        src="Graphic_Leaf.png"
        alt=""
        className="absolute -top-[65px] sm:top-0 -left-0 scale-50 -translate-x-14 lg:translate-x-0 lg:scale-100 -z-10"
      />
      <img
        src="Graphic_Leaf_1.png"
        alt=""
        className="absolute -bottom-[100px] sm:bottom-0 right-0 scale-50 translate-x-14 lg:translate-x-0 lg:scale-100 -z-10"
      />
      <div className="flex flex-col lg:flex-row gap-5 w-full items-center lg:justify-center">
        <div className="max-w-md h-full bg-no-repeat bg-cover">
          <img
            src={LandingPageWhoWeAre}
            alt=""
            className="w-full rounded-[0_0_80px_0]"
          />
        </div>
        <div className="text-start w-full max-w-lg sm:w-2/5 pt-10">
          <h5 className="font-lexend text-[color:var(--color-teal-500,#023849)]  text-[32px] sm:text-[24px] not-italic font-bold leading-9">
            Who we are
          </h5>
          <p className="font-inter text-[color:var(--color-dark-600,#24223C)] text-lg not-italic font-normal leading-7 my-5">
            At PMReady, we are more than just an organization; We are a
            community of passionate individuals dedicated to shaping the next
            generation of Product Managers, Program Managers and Project
            Managers. We believe that talent knows no boundaries, and every
            student deserves the opportunity to learn, grow, and break into the
            dynamic world of Product Management.
          </p>
          <a
            href="./about"
            className="font-lexend @apply text-[color:var(--color-dark-600,#24223C)] text-center text-lg not-italic font-semibold underline pb-[30px]"
          >
            Read our story
          </a>
        </div>
      </div>
    </div>
  );
}

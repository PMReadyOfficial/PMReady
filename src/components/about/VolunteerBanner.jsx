import fillerImg from "@Images/community/meetUs/filler_img1.png";

export default function VolunteerBanner() {
  return (
    <div className="text-center justify-center">
      <h1 className="font-lexend text-[32px] leading-9 lg:text-4xl font-bold mt-10 ">
        PMReady is made <br className="block lg:hidden" />{" "}
        <span className="text-[#FA9D74]">by PMs, </span>{" "}
        <span className="text-[#3BCABE]">for PMs</span>
      </h1>
      <div className="flex flex-col gap-5 items-center mt-[36px]">
        <div className=" flex-row gap-5 hidden lg:block">
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 rounded-full"
              src="./images/people/macy.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">Macy So</p>
            <p className="font-inter text-lg mt-2">Founder</p>
          </div>
          {/*<div className="inline-block justify-center text-center w-[211px]">
                        <img className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full" src="./images/johnny.jpeg"></img>
                        <p className="font-lexend text-lg font-semibold mt-2" >Johnny Huang</p>
                        <p className="font-inter text-lg mt-2">Co-Founder</p>
                    </div>*/}
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/catherine.jpg"
            ></img>

            <p className="font-lexend text-lg font-semibold mt-2">
              Catherine Tai
            </p>
            <p className="font-inter text-lg mt-2">Product Manager</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            {/* className="mx-auto block w-40 h-40 rounded-full" */}
            <img
              src="./images/people/Arleen_Alcaraz_cano.jpeg"
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
            />
            <p className="font-lexend text-lg font-semibold mt-2">
              Arleen Alcaraz-Cano
            </p>
            <p className="font-inter text-lg mt-2">Product Manager</p>
          </div>
        </div>
        <div className="flex-row gap-5 hidden lg:block">
          {/*<div className="inline-block justify-center text-center w-[211px]">
                        <img className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full" src="./images/lenin.jpeg"></img>
                        <p className="font-lexend text-lg font-semibold mt-2" >Lenin Kennedy</p>
                        <p className="font-inter text-lg mt-2">Lead Software Engineer</p>
                    </div>
                    <div className="inline-block justify-center text-center w-[211px]">
                        <img className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full" src="./images/yasvi.jpeg"></img>
                        <p className="font-lexend text-lg font-semibold mt-2" >Yasvi Patel</p>
                        <p className="font-inter text-lg mt-2">Designer</p>
                    </div>
                    <div className="inline-block justify-center text-center w-[211px]">
                        <img className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full" src="./images/jennifer.jpeg"></img>
                        <p className="font-lexend text-lg font-semibold mt-2" >Jennifer Im</p>
                        <p className="font-inter text-lg mt-2">Designer</p>
                    </div> */}
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/samantha.jpg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">
              Samantha Pang
            </p>
            <p className="font-inter text-lg mt-2">Software Lead</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/patricia.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">
              Patricia Tani
            </p>
            <p className="font-inter text-lg mt-2">UX Lead</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/anna.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">Anna Fang</p>
            <p className="font-inter text-lg mt-2">Marketing</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/david.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">David Yang</p>
            <p className="font-inter text-lg mt-2">Marketing</p>
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:block lg:hidden">
          <div className="inline-block justify-center text-center w-[150px] min-[400px]:w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/macy.jpeg"
            ></img>

            <p className="font-lexend text-lg font-semibold mt-2">Macy So</p>
            <p className="font-inter text-base min-[400px]:text-lg mt-2">
              Founder
            </p>
          </div>
          {/*<div className="inline-block justify-center text-center w-[150px] min-[400px]:w-[211px]">

                        <img className="mx-auto block w-[107px] h-[107px] min-[400px]:w-40 min-[400px]:h-40 bg-[#D9D9D9] rounded-full" src="./images/johnny.jpeg"></img>

                        <p className="font-lexend text-lg font-semibold mt-2" >Johnny Huang</p>
                        <p className="font-inter text-base min-[400px]:text-lg mt-2">Co-Founder</p>
                    </div>*/}
        </div>
        <div className="flex flex-row gap-2 sm:block lg:hidden">
          <div className="inline-block justify-center text-center w-[150px] min-[400px]:w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/catherine.jpg"
            ></img>

            <p className="font-lexend text-lg font-semibold mt-2">
              Catherine Tai
            </p>
            <p className="font-inter text-base min-[400px]:text-lg mt-2">
              Product Manager
            </p>
          </div>

          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/Arleen_Alcaraz_cano.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">
              Arleen Alcaraz-Cano
            </p>
            <p className="font-inter text-lg mt-2">Product Manager</p>
          </div>
        </div>
        <div className="flex flex-row gap-2 sm:block lg:hidden">
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/samantha.jpg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">
              Samantha Pang
            </p>
            <p className="font-inter text-lg mt-2">Software Lead</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/patricia.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">
              Patricia Tani
            </p>
            <p className="font-inter text-lg mt-2">UX Lead</p>
          </div>
          {/*<div className="inline-block justify-center text-center w-[150px] min-[400px]:w-[211px]">

                        <img className="mx-auto block w-[107px] h-[107px] min-[400px]:w-40 min-[400px]:h-40 bg-[#D9D9D9] rounded-full" src="./images/jennifer.jpeg"></img>

                        <p className="font-lexend text-lg font-semibold mt-2" >Jennifer Im</p>
                        <p className="font-inter text-base min-[400px]:text-lg mt-2">Designer</p>
                    </div>*/}
        </div>
        <div className="flex flex-row gap-2 sm:block lg:hidden">
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/anna.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">Anna Fang</p>
            <p className="font-inter text-lg mt-2">Marketing</p>
          </div>
          <div className="inline-block justify-center text-center w-[211px]">
            <img
              className="mx-auto block w-40 h-40 bg-[#D9D9D9] rounded-full"
              src="./images/people/david.jpeg"
            ></img>
            <p className="font-lexend text-lg font-semibold mt-2">David Yang</p>
            <p className="font-inter text-lg mt-2">Marketing</p>
          </div>
        </div>
      </div>

      <h2 className="font-lexend font-bold text-2xl mt-10">
        We <span className="text-[#FA9D74]">love</span> our interns and
        volunteers!
      </h2>
      <img
        src={fillerImg}
        className="mt-5 mx-auto max-w-[300px] min-[400px]:max-w-sm lg:max-w-[864px] rounded-[40px] object-scale-down"
      ></img>
    </div>
  );
}

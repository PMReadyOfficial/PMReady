import TCEPng from "@Images/program/Home/TCE.png";

export default function TCE() {
  return (
    <div className="flex px-40 py-20 gap-4">
      <div className="flex-1">
        <div className="text-[36px] font-bold">TCE Program</div>
        <div className="text-[24px] font-bold">Overview</div>
        <div>
          Educate and inform students about different career pathway, and expose
          them to some level of career explorations. Provide some hands-on
          experience in each of the pathways, Software Engineer, User Experience
          and Product Management, as well as hearing what current professional
          have to say in each of the pathway.
        </div>
        <ul class="list-disc pl-5 mt-4">
          <li>Target Audience</li>
          <li>Description</li>
          <li>Cohort Date</li>
          <li>Application Date</li>
        </ul>
        <div className="mt-4 flex gap-4">
          <a href="/program/TCE">
            <button className="px-8 py-2 bg-[#3bcabe] rounded-2xl">
              Learn More
            </button>
          </a>
          <button className="border border-[#3bcabe] px-8 py-2 rounded-2xl text-[#3bcabe]">
            Apply
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={TCEPng} alt="" />
      </div>
    </div>
  );
}

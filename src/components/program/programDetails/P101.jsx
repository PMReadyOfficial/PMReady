export default function P101() {
  return (
    <div className="flex px-40 py-20 gap-4">
      <div className="flex-1">
        <img />
      </div>
      <div className="flex-1">
        <div className="text-[36px] font-bold">P101</div>
        <div className="text-[24px] font-bold">Overview</div>
        <div>
          <ul class="list-disc pl-5">
            <li>Target Audience</li>
            <li>Description</li>
            <li>Cohort Date</li>
            <li>Application Date</li>
          </ul>
        </div>
        <div className="flex gap-4 mt-4">
          <a href="/program/P101">
            <button className="px-8 py-2 bg-[#9adb67] rounded-2xl">
              Learn More
            </button>
          </a>

          <button className="border border-[#9adb67] px-8 py-2 rounded-2xl text-[#9adb67]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

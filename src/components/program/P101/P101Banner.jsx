export default function Banner1() {
  return (
    <div className="flex flex-row justify-between pl-24 py-12 mb-4 bg-gradient-to-r from-green-100 from-12% via-orange-50 via-50% to-red-50">
      <div className="flex flex-col justify-between w-1/2">
        <h1 className="text-4xl font-bold h-1/5">P101 Program</h1>
        <p className="h-3/5">
          Gain the skills you need to start your career in product management.
          Skills you need to thrive and develop in a product leader (Lorem
          Ipsum)
        </p>
        <div className="h-1/5">
          <button type="" className="bg-[#FA9D74] rounded-full m-2 ">
            Apply Now
          </button>
        </div>
      </div>

      <div className="w-5/12">
        <img src="https://picsum.photos/700/400" alt="" className="w-full" />
      </div>
    </div>
  );
}

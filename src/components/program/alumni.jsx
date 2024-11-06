export default function Alumni() {
  const alumniWisdom = [
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
    { profileImg: "", name: "Christine L.", position: "Product Manager at Microsoft", insight: "During my journey in Product101, I’ve learned so many valuable lessons, and never have I ever felt as supported." },
  ]
  return (
    <div className="flex flex-col justify-center bg-[#FFF9F6] p-20">
      <h3 className="text-center">What our past Alumni have to say</h3>
      <div className="flex flex-row flex-wrap justify-evenly mt-5">
        {alumniWisdom.map((alumni) => (
          <div className="max-w-sm bg-white rounded-lg shadow-lg p-12 text-center flex flex-col items-center space-y-4 m-4">
            {/* Profile Image */}
            <img
              src="https://picsum.photos/200" /* Replace with actual image URL */
              alt={alumni.name}
              className="w-36 h-36 rounded-full object-cover"
            />

            {/* Name and Position */}
            <div className="text-center">
              <p className="text-lg font-semibold">{alumni.name}</p>
              <p className="text-sm text-gray-400">{alumni.position}</p>
            </div>

            {/* Testimonial Text */}
            <div className="relative text-gray-700 text-base italic">
              <p className="absolute -left-2 -top-2 text-teal-500 text-2xl">&ldquo;</p>
              <p> {alumni.insight}</p >
              <p className="absolute -right-2 -top-2 text-teal-500 text-2xl">&rdquo;</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

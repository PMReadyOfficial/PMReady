export default function TCEInfo() {
  return (
    <div className="p-24 py-12">
      {/* discover passion */}
      <div className="flex flex-row justify-between">
        <div className="w-2/5">
          <img src="https://placehold.co/450x350" alt="" className="flex-1" />
        </div>
        <div className="w-3/5 m-auto p-4">
          <h4>Discover Your Passion</h4>
          <p>
            The TCE program introduces you to several careers paths, including
            product management, software engineering, and UI/UX design.{" "}
          </p>
          {/* learn more button  */}
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
          <img src="https://placehold.co/500x350" alt="" className="flex-1" />
          {/* stacking images */}
        </div>
      </div>
    </div>
  );
}

export default function PreviousProjects() {
  return (
    <div className="flex flex-col p-24 py-12">
      <h3 className="text-center mb-8">PREVIOUS PROJECTS</h3>
      <div className="flex flex-row justify-between">
        {/* images should probably be w-1/5 */}
        <img src="https://placehold.co/300x500" alt="" />
        <img src="https://placehold.co/300x500" alt="" />
        <div className="flex flex-col w-2/5 p-4">
          <h4 className="my-4">Fall 2024</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

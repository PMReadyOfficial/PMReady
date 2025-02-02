export default function AboutP101() {
  return (
    <div className="flex flex-row justify-between p-24 py-12 bg-[#BEE0FF] bg-opacity-25">
      <div className="w-2/5">
        <h2>About P101</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col w-2/5">
        {/* suppose to be drop downs I think but current their is no content will add later  */}
        <div className="flex flex-row justify-between p-4">
          <h4>Meeting</h4>
          <button type="">...</button>
        </div>
        <div className="flex flex-row justify-between p-4">
          <h4>Case Studies</h4>
          <button type="">...</button>
        </div>
        <div className="flex flex-row justify-between p-4">
          <h4>Guest Lectures</h4>
          <button type="">...</button>
        </div>
        <div className="flex flex-row justify-between p-4">
          <h4>Product Pitches</h4>
          <button type="">...</button>
        </div>
      </div>
    </div>
  );
}

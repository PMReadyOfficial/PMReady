export default function TCEGuestSpeaker() {
  const GuestSpeakers = [
    {
      profilePicture: "https://placehold.co/400x400",
      name: "John Doe Smith",
      position: "PM",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus. Nulla non",
    },
    {
      profilePicture: "https://placehold.co/400x400",
      name: "John Doe Smith",
      position: "PM",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus. Nulla non",
    },
    {
      profilePicture: "https://placehold.co/400x400",
      name: "John Doe Smith",
      position: "PM",
      message:
        "Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum tellus. Nulla non",
    },
  ];
  return (
    <div className="flex flex-col justify-center p-24 py-12 bg-blue-100">
      <div>
        <h3 className="text-center">Learn From Various Guest Speakers</h3>
      </div>
      <div className="flex flex-row justify-evenly mt-8">
        {GuestSpeakers.map((speaker) => (
          <div className="bg-slate-50 px-8 py-4 w-1/5">
            <img
              src={speaker.profilePicture}
              alt=""
              className="rounded-full p-4"
            />
            <div>
              <h6 className="text-center">{speaker.name}</h6>
              <h6 className="text-center">{speaker.position}</h6>
            </div>
            <p className="mt-4 text-center p-4">{speaker.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

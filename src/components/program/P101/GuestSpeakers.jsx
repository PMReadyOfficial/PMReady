import Apple from "@Images/share/logos/Apple.png";
import Microsoft from "@Images/share/logos/Microsoft.jpg";
import CapitalOne from "@Images/share/logos/CapitalOne.png";
import Google from "@Images/share/logos/Google.png";
import F5 from "@Images/share/logos/F5.png";

export default function GuestSpeakers() {
  return (
    <div className="flex flex-col justify-evenly p-24 py-12 h-80">
      <h3 className="text-center">GUEST SPEAKERS FROM </h3>
      <div className="flex justify-evenly align-middle h-2/5">
        <img src={Microsoft} alt="" />
        <img src={Apple} alt="" />
        <img src={CapitalOne} alt="" />
        <img src={Google} alt="" />
        <img src={F5} alt="" />
      </div>
    </div>
  );
}

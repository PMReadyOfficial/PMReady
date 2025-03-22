import DiscrodMsg from "@Images/community/meetUs/DiscordMsg.png";
import DiscordLogo from "@Images/share/logos/discord-logo.png";
import { ChevronRight } from "lucide-react";

function Discord() {
  return (
    <div className="flex flex-col lg:flex-row min-[400px]:mx-8 lg:mx-32 my-36 gap-10">
      <div className="relative">
        <div className="w-[257px] h-[121px] -ml-5 lg:ml-0 lg:w-[340px] lg:h-[162px] bg-[#FEE8DF] rounded-[20px] mr-[155px]">
          <div className="absolute w-[293px] lg:w-[386px] h-[173px] -top-[30px] lg:-top-[80px] -left-[5px] lg:left-[30px] ">
            <img src={DiscrodMsg} className="drop-shadow-xl" />
            <div className="absolute bottom-[0px] -right-[30px] lg:-bottom-[51px] lg:-right-[41px] h-[70px] lg:h-[102px] w-[70px] lg:w-[102px] bg-[#586AEA] rounded-full flex items-center justify-center">
              <img className="w-[50px] lg:w-[65px] " src={DiscordLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-4 lg:mx-0 gap-2 lg:gap-4 -mt-[30px] lg:-mt-[40px]">
        <div className="text-2xl lg:text-4xl font-lexend text-[#023849] font-bold">
          Meet us on Discord
        </div>
        <div className="text-base lg:text-lg font-inter text-[#24223C] pb-4">
          Ask questions, share, and network on our detailed{" "}
          <br className="hidden lg:block" /> Discord server
        </div>
        <div className="flex items-center">
          <a className="font-semibold text-lg font-lexend text-[#24223C] underline">
            <a href="https://discord.gg/PnyMh9325g">Join Discord</a>
          </a>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}

export default Discord;


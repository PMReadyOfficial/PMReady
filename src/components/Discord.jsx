import React from 'react'

function Discord() {
    return (
        <div className="flex">
            <div className=" w-1/2">
                <div className="bg-[#FEE8DF] w-[340px] h-[162px] inset-x-0 top-0">
                <div>
                <div className="absolute w-[386px] h-[173px] -mt-24 ml-24">
                    <img src="images/DiscordConvo.png" />
                </div>
                </div>
                </div>
                <div className="absolute bottom-0 right-0 h-16 w-16">
                    <img src="image-9.jpg" />
                </div>
            </div>
            <div className="w-1/2 p-8">
                <div className="font-semibold font-inter text-[30px] mt-10 mb-4">
                    Meet us on Discord
                </div>
                <div className="text-[20px] mb-6">
                    Ask questions, share, and network on our detailed
                    Discord server
                </div>
                <div className="p-12">
                    <div className="text-[20px]">
                        <div className="py-[30px] underline">Join Discord</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discord
export default function ContactUs() {
    return (
        <div className='bg-customgreen100 py-16 my-10'>
            <div className="mx-40 ">
                <div>
                    <h1 className="text-center font-bold text-3xl">Have additional <span className="text-orange-400">Questions?</span></h1>
                </div>

                <form action="" className="mx-20">
                    <div className="grid grid-cols-2 my-9">
                        <div className="pr-4">
                            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                            <br />
                            <input type="text" id="name" className="w-full border border-gray-400 p-3 rounded-md" placeholder="Name" />
                        </div>

                        <div className="pl-4">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <br />
                            <input type="email" id="email" className="w-full border border-gray-400 p-3 rounded-md" placeholder="Email@email.com" />
                        </div>

                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                        <br />
                        <textarea id="message" className="w-full border border-gray-400 p-3 rounded-md h-40" placeholder="Message" />
                    </div>

                    <div className="flex justify-end my-4">
                        <button className="py-3 px-7 rounded-full bg-customteal500">
                            <span className="font-bold text-white">Send Message</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
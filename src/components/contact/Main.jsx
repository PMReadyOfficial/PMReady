export default function Main() {
    return (
        <div className="relative pt-[186px] min-[400px]:pt-24 overflow-hidden">
            <img src="dots.svg" alt="" className="absolute top-[140px] -left-[300px] scale-[2] min-[400px]:scale-100 min-[400px]:top-[70px] min-[400px]:-left-[330px] -z-10" />
            <img src="dots.svg" alt="" className="absolute bottom-[500px] -right-[320px] scale-[2] min-[400px]:scale-100 min-[400px]:bottom-[24px] min-[400px]:-right-[88px] -z-10 " />
            <div className="flex flex-col gap-32 min-[400px]:gap-12 lg:gap-0 min-[400px]:flex-row mb-32 items-center">

                <form action="https://formspree.io/f/meqyarwd" method="POST" className="mx-4 min-[400px]:ml-16 lg:mx-20 font-inter p-8 bg-[#F9FCF4] flex-grow">

                    <div className="grid">
                        <div>
                            <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                            <br />

                            <input type="text" id="name" name="name" className="w-full lg:w-[376px] border border-gray-400 p-3 rounded-md placeholder:font-inter placeholder:text-lg" placeholder="Name" />

                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                            <br />

                            <input type="email" id="email" name="email" className="w-full lg:w-[376px] border border-gray-400 p-3 rounded-md placeholder:font-inter placeholder:text-lg" placeholder="Email@email.com" />

                        </div>

                    </div>

                    <div className="font-inter mt-5">
                        <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                        <br />

                        <textarea id="message" name="message" className="w-full border border-gray-400 p-3 rounded-md h-40 placeholder:font-inter placeholder:text-lg" placeholder="Message" />
                    </div>

                    <div className="flex justify-end my-4">
                        <button type="submit" className="w-full lg:w-52 py-3 px-7 rounded-full bg-customteal500">

                            <span className="font-bold text-white text-lg font-lexend">Send Message</span>
                        </button>
                    </div>
                </form>
                <div className="flex-grow-0 flex-shrink-0 min-[400px]:mr-16 lg:mr-32">
                    <div className="flex flex-col gap-9 min-[400px]:gap-5 min-[400px]:flex-row items-center">
                        <svg className="hidden min-[400px]:block" xmlns="http://www.w3.org/2000/svg" width="2" height="254" viewBox="0 0 2 254" fill="none">
                            <path d="M1 0V254" stroke="#D4D3E4" />
                        </svg>
                        <svg className="block min-[400px]:hidden" xmlns="http://www.w3.org/2000/svg" width="254" height="2" viewBox="0 0 254 2" fill="none">
                            <path d="M0 1L254 1" stroke="#D4D3E4" />
                        </svg>
                        <div>
                            <h3 className="text-2xl font-lexend font-bold text-[#24223C]">Find us on socials</h3>
                            <div className="flex flex-col gap-7 mt-4 text-lg font-inter">


                                <a href="https://www.instagram.com/pmready.official/" className="disabled">
                                    <div className="flex gap-4 items-center">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.486 20.1218C16.486 18.1112 18.1164 16.481 20.1281 16.481C22.1399 16.481 23.7712 18.1112 23.7712 20.1218C23.7712 22.1323 22.1399 23.7626 20.1281 23.7626C18.1164 23.7626 16.486 22.1323 16.486 20.1218ZM14.5167 20.1218C14.5167 23.2191 17.0289 25.7299 20.1281 25.7299C23.2274 25.7299 25.7396 23.2191 25.7396 20.1218C25.7396 17.0244 23.2274 14.5137 20.1281 14.5137C17.0289 14.5137 14.5167 17.0244 14.5167 20.1218ZM24.6504 14.2913C24.6503 14.5505 24.7271 14.8039 24.8711 15.0195C25.0151 15.2351 25.2199 15.4032 25.4594 15.5025C25.699 15.6018 25.9627 15.6278 26.2171 15.5773C26.4715 15.5269 26.7052 15.4022 26.8887 15.2189C27.0721 15.0357 27.1971 14.8022 27.2478 14.548C27.2985 14.2938 27.2727 14.0303 27.1735 13.7908C27.0744 13.5513 26.9064 13.3465 26.6908 13.2024C26.4752 13.0583 26.2217 12.9814 25.9623 12.9812H25.9618C25.6141 12.9814 25.2807 13.1195 25.0348 13.3651C24.789 13.6107 24.6507 13.9439 24.6504 14.2913ZM15.7132 29.0117C14.6477 28.9632 14.0686 28.7858 13.6838 28.636C13.1736 28.4375 12.8095 28.201 12.4268 27.819C12.044 27.4371 11.8071 27.0736 11.6094 26.5637C11.4593 26.1792 11.2819 25.6003 11.2334 24.5355C11.1805 23.3843 11.1699 23.0385 11.1699 20.1219C11.1699 17.2053 11.1813 16.8604 11.2334 15.7082C11.282 14.6434 11.4607 14.0656 11.6094 13.6801C11.808 13.1701 12.0446 12.8063 12.4268 12.4238C12.809 12.0413 13.1727 11.8045 13.6838 11.6069C14.0685 11.4569 14.6477 11.2796 15.7132 11.2312C16.8651 11.1782 17.2111 11.1677 20.1281 11.1677C23.0452 11.1677 23.3916 11.1791 24.5444 11.2312C25.6099 11.2797 26.188 11.4583 26.5738 11.6069C27.084 11.8045 27.4481 12.0418 27.8308 12.4238C28.2136 12.8058 28.4496 13.1701 28.6483 13.6801C28.7983 14.0645 28.9757 14.6434 29.0242 15.7082C29.0772 16.8604 29.0877 17.2053 29.0877 20.1219C29.0877 23.0385 29.0772 23.3833 29.0242 24.5355C28.9757 25.6003 28.7973 26.1791 28.6483 26.5637C28.4496 27.0736 28.213 27.4374 27.8308 27.819C27.4486 28.2007 27.084 28.4375 26.5738 28.636C26.1892 28.7859 25.6099 28.9633 24.5444 29.0117C23.3925 29.0646 23.0465 29.0752 20.1281 29.0752C17.2098 29.0752 16.8647 29.0646 15.7132 29.0117ZM15.6227 9.26634C14.4593 9.31928 13.6644 9.50364 12.9701 9.77362C12.2511 10.0524 11.6425 10.4265 11.0343 11.0334C10.4261 11.6403 10.0528 12.2495 9.77378 12.9681C9.50364 13.6623 9.31917 14.4564 9.26619 15.619C9.21234 16.7835 9.20001 17.1558 9.20001 20.1218C9.20001 23.0877 9.21234 23.46 9.26619 24.6245C9.31917 25.7873 9.50364 26.5812 9.77378 27.2755C10.0528 27.9936 10.4261 28.6036 11.0343 29.2102C11.6424 29.8168 12.2511 30.1903 12.9701 30.4699C13.6657 30.7399 14.4593 30.9243 15.6227 30.9772C16.7885 31.0302 17.1604 31.0434 20.1281 31.0434C23.0959 31.0434 23.4684 31.031 24.6336 30.9772C25.7971 30.9243 26.5915 30.7399 27.2862 30.4699C28.0047 30.1903 28.6138 29.8171 29.222 29.2102C29.8302 28.6033 30.2028 27.9936 30.4825 27.2755C30.7527 26.5812 30.938 25.7872 30.9901 24.6245C31.0431 23.4592 31.0554 23.0877 31.0554 20.1218C31.0554 17.1558 31.0431 16.7835 30.9901 15.619C30.9371 14.4563 30.7527 13.6619 30.4825 12.9681C30.2028 12.2499 29.8293 11.6412 29.222 11.0334C28.6148 10.4255 28.0047 10.0524 27.287 9.77362C26.5915 9.50364 25.797 9.31841 24.6345 9.26634C23.4693 9.21339 23.0968 9.2002 20.129 9.2002C17.1613 9.2002 16.7885 9.21251 15.6227 9.26634Z" fill="#24223C" />
                                        </svg>
                                        <p>@pmready-global</p>
                                    </div>
                                </a>

                                <a href="https://discord.gg/PnyMh9325g" >
                                    <div className="flex gap-4 items-center">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.2935 13.3513C29.6505 16.8381 30.8145 20.7712 30.3793 25.299C30.3775 25.3182 30.3676 25.3358 30.3519 25.3473C28.5671 26.666 26.8378 27.4663 25.1327 27.9971C25.1194 28.0011 25.1052 28.0009 25.0921 27.9964C25.079 27.992 25.0675 27.9835 25.0594 27.9721C24.6655 27.4207 24.3076 26.8393 23.994 26.2287C23.976 26.1928 23.9925 26.1495 24.0295 26.1353C24.5979 25.9198 25.1385 25.6615 25.6584 25.3557C25.6993 25.3316 25.7019 25.2725 25.6641 25.2442C25.5538 25.1617 25.4445 25.0751 25.3399 24.9885C25.3203 24.9725 25.2939 24.9693 25.2718 24.9801C21.8964 26.5484 18.1988 26.5484 14.7835 24.9801C14.7613 24.9701 14.735 24.9735 14.716 24.9893C14.6116 25.0759 14.502 25.1617 14.3927 25.2442C14.3549 25.2725 14.358 25.3316 14.3993 25.3557C14.9192 25.6557 15.4597 25.9198 16.0273 26.1363C16.0641 26.1505 16.0816 26.1928 16.0633 26.2287C15.7566 26.8401 15.3987 27.4215 14.9974 27.9729C14.98 27.9952 14.9513 28.0055 14.9241 27.9971C13.2272 27.4663 11.4979 26.666 9.71301 25.3473C9.69814 25.3358 9.68744 25.3174 9.68588 25.2982C9.32223 21.3817 10.0634 17.4161 12.7688 13.3505C12.7754 13.3398 12.7853 13.3314 12.7967 13.3264C14.128 12.7116 15.5541 12.2594 17.0447 12.0011C17.0719 11.9969 17.099 12.0095 17.1131 12.0337C17.2973 12.3618 17.5078 12.7825 17.6502 13.1264C19.2214 12.8849 20.8172 12.8849 22.4213 13.1264C22.5637 12.7899 22.7669 12.3618 22.9503 12.0337C22.9568 12.0217 22.9669 12.0121 22.9792 12.0062C22.9915 12.0004 23.0053 11.9986 23.0186 12.0011C24.51 12.2602 25.9362 12.7124 27.2664 13.3264C27.2781 13.3314 27.2878 13.3398 27.2935 13.3513ZM18.449 20.798C18.4654 19.6401 17.6265 18.6821 16.5733 18.6821C15.5288 18.6821 14.698 19.6317 14.698 20.798C14.698 21.9639 15.5453 22.9136 16.5733 22.9136C17.6181 22.9136 18.449 21.9639 18.449 20.798ZM25.3834 20.798C25.3999 19.6401 24.5609 18.6821 23.508 18.6821C22.4632 18.6821 21.6324 19.6317 21.6324 20.798C21.6324 21.9639 22.4797 22.9136 23.508 22.9136C24.5609 22.9136 25.3834 21.9639 25.3834 20.798Z" fill="#24223C" />
                                        </svg>
                                        <p>@pmready-global</p>
                                    </div>
                                </a>
                                <a href="http://" className="disabled">
                                    <div className="flex gap-4 items-center">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8153 9.2002C9.92349 9.2002 9.20001 9.90165 9.20001 10.7658V29.4914C9.20001 30.3556 9.92357 31.0565 10.8153 31.0565H29.441C30.3332 31.0565 31.0563 30.3555 31.0563 29.4911V10.7658C31.0563 9.90165 30.3332 9.2002 29.441 9.2002H10.8153ZM15.8417 17.6513V27.4911H12.5712V17.6513H15.8417ZM16.0573 14.6082C16.0573 15.5525 15.3474 16.3081 14.2071 16.3081L14.1857 16.308C13.088 16.308 12.3784 15.5524 12.3784 14.6082C12.3784 13.6425 13.1095 12.908 14.2288 12.908C15.3474 12.908 16.036 13.6425 16.0573 14.6082ZM20.9224 27.4911H17.6521C17.6521 27.4911 17.6949 18.5747 17.6522 17.6516H20.9226V19.0444C21.3574 18.3741 22.1355 17.4206 23.8703 17.4206C26.022 17.4206 27.6353 18.827 27.6353 21.8493V27.4911H24.365V22.2276C24.365 20.9047 23.8914 20.0025 22.7083 20.0025C21.8046 20.0025 21.2665 20.611 21.0301 21.1988C20.9437 21.4085 20.9224 21.703 20.9224 21.9967V27.4911Z" fill="#24223C" />
                                        </svg>
                                        <p>@pmready-global</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Main() {
    return (
        <div className="course-gradient">
            <div className="px-32 py-20">
                <div className="flex gap-64">
                    <div className="text-[#24223C] flex flex-col gap-5 max-w-[510px]">
                        <div className="text-5xl font-bold font-lexend">Course Title</div>
                        <div className="text-lg font-inter">Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium vestibulum.</div>
                        <button className="text-lg w-[185px] font-semibold font-lexend px-10 py-3 bg-[#023849] border-4 text-[#FEFDFF] border-[#023849] rounded-[100px]">Get Started</button>
                    </div>
                    <div className="flex flex-col gap-4 font-inter text-sm">
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M11.1404 2.5C11.1404 1.94772 11.5881 1.5 12.1404 1.5H14.4562C15.0085 1.5 15.4562 1.94771 15.4562 2.5V13.5C15.4562 14.0523 15.0085 14.5 14.4562 14.5H12.1404C11.5881 14.5 11.1404 14.0523 11.1404 13.5V2.5Z" stroke="#24223C" stroke-width="2" />
                                <path d="M6.40381 7.23731C6.40381 6.68502 6.85152 6.2373 7.40381 6.2373H9.7196C10.2719 6.2373 10.7196 6.68502 10.7196 7.2373V14.5005H6.40381V7.23731Z" fill="#3BCABE" stroke="#24223C" stroke-width="2" />
                                <path d="M1.66675 11.9736C1.66675 11.4213 2.11446 10.9736 2.66675 10.9736H4.98254C5.53482 10.9736 5.98254 11.4213 5.98254 11.9736V14.4999H2.66675C2.11446 14.4999 1.66675 14.0522 1.66675 13.4999V11.9736Z" fill="#3BCABE" stroke="#24223C" stroke-width="2" />
                            </svg>
                            <div>Mid lvl</div>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9.99992 17.5003C13.6818 17.5003 16.6666 14.5156 16.6666 10.8337C16.6666 7.15176 13.6818 4.16699 9.99992 4.16699C6.31802 4.16699 3.33325 7.15176 3.33325 10.8337C3.33325 14.5156 6.31802 17.5003 9.99992 17.5003Z" stroke="#24223C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 10.8333V7.5" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.4999 4.99967L15.8333 3.33301" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.33325 1.66699L11.6666 1.66699" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div>2 hrs</div>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M15.8333 3.33301H4.16659C3.70635 3.33301 3.33325 3.7061 3.33325 4.16634V15.833C3.33325 16.2932 3.70635 16.6663 4.16659 16.6663H15.8333C16.2935 16.6663 16.6666 16.2932 16.6666 15.833V4.16634C16.6666 3.7061 16.2935 3.33301 15.8333 3.33301Z" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 9.16699H13.3333" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 6.66699H13.3333" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.66675 16.6663L6.66675 3.33301" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div>6 Lessons</div>
                        </div>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.4884 7.06121L10.3782 2.48629C10.2293 2.16342 9.77044 2.16342 9.62152 2.48629L7.51131 7.06121C7.45061 7.1928 7.32591 7.2834 7.18201 7.30046L2.17891 7.89366C1.82582 7.93553 1.68403 8.37194 1.94507 8.61334L5.64399 12.034C5.75038 12.1324 5.79801 12.279 5.76977 12.4211L4.78789 17.3627C4.7186 17.7114 5.08983 17.9811 5.40009 17.8074L9.79636 15.3466C9.92281 15.2758 10.0769 15.2758 10.2034 15.3466L14.5997 17.8074C14.9099 17.9811 15.2812 17.7114 15.2119 17.3627L14.23 12.4211C14.2017 12.279 14.2494 12.1324 14.3558 12.034L18.0547 8.61334C18.3157 8.37194 18.1739 7.93553 17.8208 7.89366L12.8177 7.30046C12.6738 7.2834 12.5491 7.1928 12.4884 7.06121Z" stroke="#24223C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div>Certificate</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
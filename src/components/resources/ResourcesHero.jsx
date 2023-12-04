export default function ResourceHero() {
    return (
        <div>
            <div className="flex">
                <div className=" mr-[20px] ml-[120px] mt-[220px] w-[1000px] h-[195px] text-center">
                    <h1 className = "text-[104px] font-bold">Explore <p className="text-[#FA9D74] inline ">Resources</p></h1>
                    <p className="mt-[20px]  text-[35px] ">See our curated list of job listings, interview tips, and more!</p> 
                    <div className="mt-[20px] flex  h-[73px]  border-[1px] justify-center items-center rounded-[8px]">
                        <input className="w-full h-full  pl-[12px] pr-[16px]"type="text" placeholder="Try &quot;Intro to Product Management&quot;" /> 
                        <img className="w-[24px] h-[24px] mr-[16px]"src = "Search_Magnifying_Glass.png"></img>
                    </div>
                
                    
                </div>
                <div className="mt-[178px] ml-[20px] mr-[50px]">
                    <img className="w-[900px] h-[500px] " src = "Rectangle6377.png"></img>
                </div>
            </div>
            <div className=" mt-[40px] mx-[120px] h-[1096px]">
                <div className="py-[40px] px-[60px] border-[1px] border-[#9ADB67] bg-[#F9FCF4]">
                    <h1 className="font-bold text-[24px]">Associate Product Manager (APM) </h1>
                    <ul className="pl-[48px] list-disc flex flex-col gap-[16px] mt-[16px] underline">
                        <li><a href="https://www.apmseason.com/" >Open Programs</a></li>
                        <li><a href="https://prepfully.com/interview-guides/google-associate-product-manager">Google APM Interview Tips</a></li>
                        <li><a href="https://interviewprep.org/associate-product-manager-interview-questions/">20 Associate Product Manager Interview Questions</a></li>
                        <li><a href="https://pmtechlessons.com/a-day-in-the-life-of-an-apm/">A Day in the Life of an APM</a></li>
                    </ul>
                </div>
                <div className=" mt-[40px]  py-[40px] px-[60px] border-[1px] border-[#3BCABE] bg-[#F6FFFE]">
                    <h1 className="font-bold text-[24px]">Product Manager (PM)</h1>
                    <ul className="list-disc pl-[48px] flex gap-[16px] flex-col mt-[16px] underline">
                        <li><a href="https://jobpulse.fyi/Product-Manager">New Grad Job Board</a></li>
                        <li><a href="https://productschool.com/blog/interview-tips/the-ultimate-list-product-manager-interview-questions">Sample PM Interview Questions</a></li>
                        <li><a href="https://www.aha.io/roadmapping/guide/product-management/what-are-some-interview-questions-for-product-managers">What to Expect from a PM Interview</a></li>
                        <li><a href="https://www.productplan.com/learn/day-in-the-life-product-manager/">A Day in the Life of a Product Manager</a></li>
                    </ul>
                </div>
                <div className=" py-[40px] px-[60px] border-[1px] border-[#9ADB67] bg-[#F9FCF4] mt-[40px]">
                    <h1 className="font-bold text-[24px]">Program Manager</h1>
                    <ul className="list-disc pl-[48px] flex flex-col gap-[16px] mt-[16px] underline">
                        <li><a href="https://www.lever.co/blog/program-manager-interview-questions/">Program Manager Interview Question</a></li>
                        <li><a href="https://www.shiksha.com/online-courses/articles/interview-log-a-day-in-life-of-a-program-manager-with-24-years-of-experience/">A Day in the Life of a Program Manager</a></li>
                    </ul>
                </div>
                <div className=" mt-[40px] py-[40px] px-[60px] border-[1px] border-[#3BCABE] bg-[#F6FFFE]">
                    <h1 className="font-bold text-[24px]">Project Manager</h1>
                    <ul className="list-disc pl-[48px] flex flex-col gap-[16px] mt-[16px] underline">
                        <li><a href="https://www.indeed.com/career-advice/interviewing/project-manager-interview-questions">Project Manager Interview Questions</a></li>
                        <li><a href="https://monday.com/blog/project-management/project-manager-interview-questions/#:~:text=During%20a%20project%20manager%20interview,values%20fit%20with%20the%20company">How to Prepare for Project Manager Interviews</a></li>
                    </ul>
                </div>
            </div>


        </div>
       
    )

    
}
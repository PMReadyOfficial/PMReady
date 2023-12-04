import ResourcesDefault from "./ResourcesDefault";
import ResourcesVariant from "./ResourcesVariant";

export default function ResourceHero() {
    const heading1 = "Associate Product Manager (APM)";
    const resources1 = [
        { name: 'Open Programs', url: 'https://www.apmseason.com/' },
        { name: 'Google APM Interview Tips', url: 'https://prepfully.com/interview-guides/google-associate-product-manager' },
        { name: '20 Associate Product Manager Interview Questions', url: 'https://interviewprep.org/associate-product-manager-interview-questions/' },
        { name: 'A Day in the Life of an APM', url: 'https://pmtechlessons.com/a-day-in-the-life-of-an-apm/' },
      ];
    const heading2 = "Product Manager (PM)";
    const resources2 = [
        { name: 'New Grad Job Board', url: 'https://jobpulse.fyi/Product-Manager' },
        { name: 'Sample PM Interview Questions', url: 'https://productschool.com/blog/interview-tips/the-ultimate-list-product-manager-interview-questions' },
        { name: 'What to Expect from a PM Interview', url: 'https://www.aha.io/roadmapping/guide/product-management/what-are-some-interview-questions-for-product-managers' },
        { name: 'A Day in the Life of a Product Manager', url: 'https://www.productplan.com/learn/day-in-the-life-product-manager/' },
      ];
    const heading3 = "Program Manager";
    const resources3 = [
        { name: 'Program Manager Interview Question', url: 'https://www.lever.co/blog/program-manager-interview-questions/' },
        { name: 'A Day in the Life of a Program Manager', url: 'https://www.shiksha.com/online-courses/articles/interview-log-a-day-in-life-of-a-program-manager-with-24-years-of-experience/' },
      ];
    const heading4 = "Project Manager";
    const resources4 = [
        { name: 'Project Manager Interview Questions', url: 'https://www.indeed.com/career-advice/interviewing/project-manager-interview-questions' },
        { name: 'How to Prepare for Project Manager Interviews', url: 'https://monday.com/blog/project-management/project-manager-interview-questions/#:~:text=During%20a%20project%20manager%20interview,values%20fit%20with%20the%20company' },
      ];
    return (
        <div>
            {/* <div className="flex">
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
            </div> */}
            <div className="mt-16 mx-[120px] flex flex-col gap-10">
                <ResourcesDefault resources={resources1} heading={heading1} />
                <ResourcesVariant resources={resources2} heading={heading2} />
                <ResourcesDefault resources={resources3} heading={heading3} />
                <ResourcesVariant resources={resources4} heading={heading4} />
            </div>


        </div>
       
    )

    
}
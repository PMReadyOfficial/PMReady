export default function ResourcesDefault({ resources, heading }) {
    return (
        <div className="py-10 px-[60px] border-[1px] border-[#9ADB67] bg-[#F9FCF4] rounded-lg">
            <h1 className="text-2xl font-lexend font-bold">{heading}</h1>
            <ul className="pl-12 list-disc flex flex-col gap-4 mt-4 underline text-lg font-inter font-normal">
                {resources.map((resource, index) => (
                    <li key={index}><a href={resource.url}>{resource.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default function ResourcesVariant({ resources, heading }) {
    return (
        <div className="py-[40px] px-[60px] border-[1px] border-[#3BCABE] bg-[#F6FFFE] rounded-lg">
            <h1 className="font-bold text-[24px]">{heading}</h1>
            <ul className="list-disc pl-[48px] flex gap-[16px] flex-col mt-[16px] underline">
                {resources.map((resource, index) => (
                    <li key={index}><a href={resource.url}>{resource.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
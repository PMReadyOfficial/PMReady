export default function ResourcesVariant({ resources, heading }) {
    return (
        <div className="py-[20px] lg:py-10 px-[20px] lg:px-[60px] border-[1px] border-[#3BCABE] bg-[#F6FFFE] rounded-lg">
            <h1 className="header4">{heading}</h1>
            <ul className="pl-12 list-disc flex flex-col gap-4 mt-4 underline body1">
                {resources.map((resource, index) => (
                    <li key={index}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a></li>
                ))}
            </ul>
        </div>
    )
}
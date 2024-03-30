export default function IndividualTestimonial({ content = 'lorem', author = 'Unknown'}) {
    return (
        <div style={{ backgroundColor: '#E8F5D8' , height:'300px', width: '100%'}} className="p-6 rounded-3xl w-full select-none">
            <div className="flex mb-5 lg:mb-10 justify-center">
                <p className="font-bold text-lg">“</p>
                <h1 className="font-bold lg:px-5 text-lg text-center">
                    {content}
                </h1>
                <p className="font-bold text-lg">”</p>
            </div>

            <p className='text-center'>
                {author}
            </p>
        </div>
    )
}
export default function IndividualTestimonial({ content = 'lorem' }) {
    return (
        <div style={{ backgroundColor: '#E8F5D8' }} className="p-10 rounded-3xl w-1/3">
            <div className="flex mb-10 justify-center">
                <p className="font-bold text-lg">“</p>
                <h1 className="font-bold px-10 text-lg ">
                    {content}
                </h1>
                <p className="font-bold text-lg">”</p>
            </div>

            <p className='text-center'>
                Author
            </p>
        </div>
    )
}
import IndividualTestimonial from "./IndividualTestimonial";

export default function Testimonial() {
    const testimonials = [
        { id: 1, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { id: 2, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
        { id: 3, content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
    ]

    return (
        <section className='my-20'>
            <div className="flex justify-between space-x-8">
                {/* Assuming you're mapping through an array of testimonials */}
                {testimonials.map((testimonial, index) => (
                    <IndividualTestimonial key={index} content={testimonial.content} className="" />
                ))}
            </div>


            <div className="flex justify-center mt-4">
                {testimonials.map((testimonial, index) => {
                    return <span className="text-3xl">•</span>
                })}
            </div>
        </section>
    );
}
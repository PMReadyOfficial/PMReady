import IndividualTestimonial from "./IndividualTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
    const testimonials = [
        { id: 1, content: 'PMReady allowed me to get hands-on experience with Product Management. Although I’m studying computer science, software engineering is not my passion, PMReady helped me find a passion that I want to pursue.', author:"Colorful Unicorn, Computer Science 2026"},
        { id: 2, content: 'When I joined PMReady, I found a role that not only would allow me to leverage my pre-existing skills, but encouraged me to use them in a new context to make a real difference in a company.', author: "Owen Mariani, Computer Science 2026"},
        { id: 3, content: 'PMReady has reshaped my view of what goes into a product and pushes me to make ones that harness market research, design principles, and feature planning.', author: "Sleeping Squirrel, Computer Science 2026"},
        { id: 4, content: 'PMReady helped me to find a career I was interested and passionate about pursuing within my major, while also giving me direct insight and practice into what being a PM entails.', author: "Naomy Bopela, Computer Science 2026"},
        { id: 5, content: 'I appreciate how appealing this organization is to introducing product management in an easily understandable way. This org introduced me to a lot of people who inspired me to consider other educational fields.', author: "Cindy Frempong, Data Science 2026"},
        { id: 6, content: 'It gave me a chance to explore a different career path within computer science that I had no prior knowledge of beforehand.', author: "Running Unicorn, Computer Science 2025"},
        { id: 7, content: 'PMReady introduces me to a career position that I have never previously considered or known of. I used to think that working in the tech industry is overwhelming, and PMReady definitely helps provide more insight. PM has also become one of my top career choices.', author: "Lindsay Hu, Statistics & CS 2026"},
        { id: 8, content: 'I learned about how product managers break down large problems into smaller achievable goals. PMReady showed me that there are other careers that relate to software development without needing to know all the intricacies of programming.', author: "Brianna Li, Math and Computer Science 2025"},
    ]

    return (
        <div className="mx-">
            <Swiper
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                      //navigation: {enabled: false} - not working!
                      //navigation: {hidden: true} - not working!
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    }
                }}
                style={{
                    "--swiper-pagination-color": "#9ADB67",
                    "--swiper-pagination-bullet-inactive-color": "#265019",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "8px"
                }}
                initialSlide="1"
                loop={true}
                centeredSlides={true}
                
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide className="p-5 lg:p-0" key={testimonial.id}><IndividualTestimonial  content={testimonial.content} author={testimonial.author} className="" /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
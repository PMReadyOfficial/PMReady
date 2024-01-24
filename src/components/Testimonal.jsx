import IndividualTestimonial from "./IndividualTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
    const testimonials = [
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },
        { id: 1, content: 'Lorem ipsum dolor sit amet consectetur. Sed dis placerat tristique senectus pretium.' },

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
                    <SwiperSlide className="p-5 lg:p-0" key={testimonial.id}><IndividualTestimonial  content={testimonial.content} className="" /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
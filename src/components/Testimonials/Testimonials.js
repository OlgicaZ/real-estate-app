import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import './Testimonials.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { testimonials } from '../../data/data';
import StarRating from '../StarRating/StarRating';

export default function Testimonials() {
    return (
        <section className='testimonials'>
            <h2 className='section-heading section-heading--white'>What our clients are saying</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                navigation
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    waitForTransition: true,
                    pauseOnMouseEnter: true,
                    speed: 1500,
                }}
                speed={1500}
                effect='slide'
                loop
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    testimonials.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className='testimonials__avatar'>
                                <img src={review.image} alt='user avatar' />
                            </div>
                            <StarRating rating={review.rating} />
                            <h3 className='testimonials__user'>{review.name}</h3>
                            <p className='testimonials__review'>{review.review}</p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
}
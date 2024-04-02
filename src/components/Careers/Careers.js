import './Careers.scss';
// import 'swiper/scss';
// import 'swiper/scss/pagination';
// import 'swiper/scss/autoplay';
// import 'swiper/scss/navigation';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import { realtors } from '../../data/data';

export default function Careers() {
    return (
        <>
            <section className='team'>
                <h2 className='section-heading section-heading--white'>Meet our team</h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        waitForTransition: true,
                        pauseOnMouseEnter: true,
                        speed: 1500,
                    }}
                    speed={1500}
                    loop
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        realtors.map((realtor, index) => (
                            <SwiperSlide key={index}>
                                <img src={realtor.image} alt='realtor' />
                                <span>{realtor.name} | {realtor.position}</span>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </>
    )
}
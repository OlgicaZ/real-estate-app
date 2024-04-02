import './Careers.scss';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import { realtors } from '../../data/data';
import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';

export default function Careers() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

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
            <section className='careers'>
                    <h2 className='section-heading section-heading--black'>Work with us</h2>
                    <span>Call us today to schedule a consultation to sell or a private showing.</span>
                    <div 
                        className='careers__contact-button cta-button'
                        onClick={toggleModal}
                    >
                        Contact
                    </div>

                    <ContactModal showModal={showModal} toggleModal={toggleModal} />
            </section>
        </>
    )
}
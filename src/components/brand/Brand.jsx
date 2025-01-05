import React from 'react';

import './brand.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import pic1 from '../../assets/images/1.jpg';
import pic2 from '../../assets/images/2.jpg';
import pic3 from '../../assets/images/3.jpg';
import pic4 from '../../assets/images/4.jpg';
import pic5 from '../../assets/images/5.jpg';
import pic6 from '../../assets/images/6.jpg';
const Brand = () => {
  return (
    <section className="brand-container">
      <Swiper
        className="reviw-slider"
        modules={[Autoplay]} // Include the Autoplay module here
        spaceBetween={20}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={pic1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Brand;

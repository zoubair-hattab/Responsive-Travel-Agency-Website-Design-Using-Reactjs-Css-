import './review.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { FaStar } from 'react-icons/fa';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        <span>r</span>
        <span>e</span>
        <span>v</span>
        <span>i</span>
        <span>e</span>
        <span>w</span>
      </h1>

      <Swiper
        className="reviw-slider"
        modules={[Autoplay]} // Include the Autoplay module here
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="box">
          <img src={pic1} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <img src={pic2} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <img src={pic3} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <img src={pic4} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <img src={pic1} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="box">
          <img src={pic3} alt="" />
          <h3>john deo</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            iusto in voluptate explicabo corrupti temporibus molestias officiis,
            iste hic itaque fugiat minus numquam ipsam corporis
          </p>
          <div className="stars">
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Review;

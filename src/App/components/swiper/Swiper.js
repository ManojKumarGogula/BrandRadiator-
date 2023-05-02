import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Autoplay } from "swiper";
import { vehicles } from "../../data/data";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const SwiperCarousel = (props) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  const moveSlideForward = () => {
    swiperInstance.slideNext();
  };

  const moveSlideBackward = () => {
    swiperInstance.slidePrev();
  };
  return (
    <div className="swiperWrap">
      <Swiper
        onInit={(swiper) => {
          setSwiperInstance(swiper);
        }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        effect={"cards"}
        modules={[Autoplay]}
        cardsEffect={{ rotate: false, perSlideOffset: 2 }}
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide
            key={index}
            onClick={() => navigate("/details", { state: vehicle })}
            className="SwiperSlider"
          >
            <img
              src={vehicle?.img}
              alt={vehicle?.alternativeText}
              style={{ aspectRatio: 16 / 9 }}
              className="images"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;

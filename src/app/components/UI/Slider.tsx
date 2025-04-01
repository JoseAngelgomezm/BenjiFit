"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 w-full h-full opacity-30"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/benji1.png')" }}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url('/images/benji2.jpg')" }}
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;

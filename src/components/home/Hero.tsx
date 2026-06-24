"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  "/hero/slide1.jpg",
  "/hero/slide2.jpg",
  "/hero/slide3.jpg",
  "/hero/slide4.jpg",
];

const companies = [
  "USMAN TRANSPORT LLC",
  "GLT TRANSPORT LLC",
  "UIT TRANSPORT BR LLC",
  "USMAN & IMTIAZ TRANSPORT LLC",
];

export default function Hero() {
  return (
    <section className="relative min-h-[900px] overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="absolute inset-0 z-0 h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[900px] bg-cover bg-center zoom-hero"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#071a2f]/60 z-10" />

      {/* Premium Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071a2f]/95 via-[#071a2f]/75 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl pt-20">
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-[2px] bg-[#D4A017]" />
              <p className="text-[#D4A017] uppercase tracking-[4px] font-semibold text-sm">
                USMAN GROUP OF COMPANIES
              </p>
            </div>

            {/* Heading */}
            <h1
              className="
  text-white
  font-black
  text-[2.6rem]
  md:text-[3.8rem]
  xl:text-[4.6rem]
  leading-[1]
  tracking-[-2px]
  hero-title
  drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]
"
            >
              Heavy Equipment
              <br />
              Rental &
              <br />
              Transport
              <br />
              Specialists
            </h1>

            {/* Description */}
            <p
              className="
text-white/85
text-base
md:text-lg
leading-relaxed
max-w-xl
mt-6
hero-subtitle
font-medium
"
            >
              Reliable heavy equipment rental, transportation and logistics
              solutions across the UAE, supporting construction, infrastructure
              and industrial projects with a modern fleet.
            </p>

            {/* Company Tags */}
            <div className="flex flex-wrap gap-4 mt-8 hero-badges">
              {companies.map((company) => (
                <div
                  key={company}
                  className="
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  rounded-2xl
                  px-5
                  py-3
                  text-white
                  font-medium
                  hover:border-[#D4A017]
                  hover:text-[#D4A017]
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-pointer
                "
                >
                  {company}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button
                type="button"
                className="
                bg-[#D4A017]
                text-black
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
              >
                Get Quote
              </button>

              <button
                type="button"
                className="
                border
                border-white
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
              >
                Rent Equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

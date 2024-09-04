"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ActivitiesCard from "@/components/ActivitiesCard";

const activityData = [
  {
    image: "/Activities/Activity1.jpg",
    name: "Opportunities and Challenges in Crypto,NFT&Defi @2023",
    description: "คุณท๊อป จิรายุส ทรัพย์ศรีโสภา",
  },
  {
    image: "/Activities/Activity2.jpg",
    name: "การบริหารความมั่นคงปลอดภัยของระบบสารสนเทศในมหาวิทยาลัย",
    description: "คุณนพพงศ์ พงศ์หิรัญ",
  },
  {
    image: "/Activities/certncsa.png",
    name: "NCSA Certificate",
    description: "Basic Cybersecurity",
  },
  {
    image: "/Activities/certborntodev.png",
    name: "BorntoDev Certificate",
    description: "Introduction to JavaScript",
  },
  {
    image: "/Activities/certudemy.jpg",
    name: "Udemy Certificate",
    description: "The Complete 2024 Web Development Bootcamp",
  },
];

const Activities = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center">
          <h2 className="section-title mb-4">Activities & Certs</h2>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {activityData.slice(0, 5).map((activity, index) => {
              return (
                <SwiperSlide key={index}>
                  <ActivitiesCard activity={activity} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Activities;

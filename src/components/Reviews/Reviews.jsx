import React from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Reviews=()=> {
  const clients=[
    {
      img: profilePic1,
      Reviews:
       "The best plagiarism checker I've used offers unparalleled accuracy, swiftly detecting even subtle similarities in contentTheuser-friendly",
    },
    {
      img: profilePic2,
      Reviews:
       " it's an indispensable tool for maintaining academic and professional integrity. It's the gold standard for plagiarism detection",
    },
    {
      img: profilePic3,
      Reviews:
        "The user-friendly interface makes it accessible to all, while its real-time scanning feature and in-depth reports offer invaluable insights into text integrity.",
    },
    {
      img: profilePic4,
      Reviews:
        "The best plagiarism checker I've used offers unparalleled accuracy, swiftly detecting even subtle similarities in content.",
    },
  ];

  return (
    <div className="t-wrapper" id="Reviews">
      <div className="t-heading">
        <span>Our Reviews</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="Reviews">
                <img src={client.img} alt="" />
                <span>{client.Reviews}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;

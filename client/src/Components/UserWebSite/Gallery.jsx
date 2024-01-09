import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import galleryStyles from "./Gallery.module.css";
import img1 from "../../assets/images/a.jpg";
import img2 from "../../assets/images/b.jpg";
import img3 from "../../assets/images/c.jpg";
import img4 from "../../assets/images/d.jpg";
import img5 from "../../assets/images/e.jpg";

const Gallery = () => {

  /* To make the gallery responsive, 
  we need to use the window width to determine how many slides to show. */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const imgStyle = {
    width: "100%",
    height: "80vh",
    boxShadow: "0px 5px 4px 4px #ccc",
    transition: "transform 0.3s ease-in-out",
  };

  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: windowWidth <= 768 ? 1 : 3, // 1 slide for mobile, 3 for desktop
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    speed: 600,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "80vh",
        position: "relative",
      }}
    >
      <Swiper {...params}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={img1} alt="Slide 1" style={imgStyle} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={img2} alt="Slide 2" style={imgStyle} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={img3} alt="Slide 3" style={imgStyle} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={img4} alt="Slide 4" style={imgStyle} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={img5} alt="Slide 5" style={imgStyle} />
        </div>
      </Swiper>
    </div>
  );
};

export default Gallery;

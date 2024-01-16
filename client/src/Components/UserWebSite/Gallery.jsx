import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import galleryStyles from "./Gallery.module.css";
import axios from 'axios';
import { message } from 'antd';
import  baseurl  from "../../../baseurl/baseurl.js";
const Gallery = () => {

  const img1 =
    "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705209633/wmrpwqsyh0tby1nvjyde.jpg ";
  const img2 =
    "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705209631/iue7zuhml93gleyztkui.jpg ";
  const img3 =
    "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705209618/u80sgvbskhhhaisn93sp.jpg ";
  const img4 =
    "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705209610/neiz7lmyqwzqaznrxnfi.jpg ";
  const img5 =
    "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705421282/zg5fsspyoffoopryup7a.jpg ";
  /* To make the gallery responsive, 
  we need to use the window width to determine how many slides to show. */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [galleryImages,setGalleryImages] = useState([]);

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

  const img = [];

  const galleryAllImages = async()=>{
      try {
        const response = await axios.get(`${baseurl}/api/v1/upload/get-images`);
        console.log(response.data.images);
        setGalleryImages(response.data.images)

        for (let i = 0; i < response.data.images.length; i++) {
             img[i] = response.data.images[i];
        }
        
      } catch (error) {
        message.error("Erro Found in fetching images")
      }
  }

  useEffect(()=>{
    galleryAllImages()
  },[])

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

        {/* {galleryImages.map((images)=>(
           <div
           style={{
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
             height: "100%",
           }}
         >
           <img src={images.imageUrl} alt="Slide" style={imgStyle} />
         </div>
        ))} */}




      </Swiper>


      {/* imageUrl */}
    </div>
  );
};

export default Gallery;

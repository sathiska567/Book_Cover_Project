/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import userStyles from "./UserWebSite.module.css";
import { useMediaQuery } from "react-responsive";
import { Dropdown } from "react-bootstrap";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import Gallery from "./Gallery";
import Request from "./Request";
import YoutubeWidget from "./YoutubeWidget";
import Author from "./Author";
import Review from "./Review";
import { Button, message } from "antd";
import { SocialIcon } from "react-social-icons";
import "react-social-icons/vimeo";
import "react-social-icons/meetup";
import axios from "axios";

const UserWebSite = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [imgUrl , setImgUrl] = useState("")
  const [eventName,setEventName] = useState("")
  const [eventDate,setEventDate] = useState("")
  const [eventDescription,setEventDescription] = useState("")
  const [location,setLocation] = useState("")

  const getCoverImage = async()=>{
      try {
        const response = await axios.get("http://localhost:8080/api/v1/coverUpload/get-cover-image")
        console.log(response.data.imgData[0].coverimgUrl);
        setImgUrl(response.data.imgData[0].coverimgUrl)
        
      } catch (error) {
        message.error("Cover Image Fetch have error")
      }    
  }

  const getEventDetails = async()=>{
    try {

      const response = await axios.get("http://localhost:8080/api/v1/event/get-create-event")
      console.log(response.data.data[0]);
      setEventName(response.data.data[0].EventName)
      setEventDescription(response.data.data[0].EventDescription)
      setEventDate(response.data.data[0].EventDate)
      setLocation(response.data.data[0].EventLocation)

    } catch (error) {
      message.error("Event data fetched have an error")
    }
  }

  useEffect(()=>{
    getCoverImage();
    getEventDetails()
  })


  return (
    <div className={userStyles.Container}>
      <div className={userStyles.header}>
        <Navbar expand="lg" className="" style={{}}>
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="./e.png"
                alt="logo"
                className="logo"
                style={{ width: "80px", height: "80px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="text-center justify-content-center"
            >
              <Nav
                style={{
                  marginLeft: "auto",
                }}
                className={("ml-auto", userStyles.navExtraMargin)}
              >
                <Nav.Link className={userStyles.NavLink} href="#">
                  Home
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#Gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#Request">
                  Request Reading
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#YouTubeWidget">
                  YouTube Channel
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#Review">
                  Reviews
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#Author">
                  About Author
                </Nav.Link>
                {isMobile ? (
                  <>
                    <hr />
                    <Nav.Link className={userStyles.NavLink} href="#action/3.2">
                      My Profile
                    </Nav.Link>
                    <Nav.Link className={userStyles.NavLink} href="/login">
                      Register
                    </Nav.Link>
                    <Nav.Link className={userStyles.NavLink} href="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link className={userStyles.NavLink} href="#">
                      Log Out
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <NavDropdown
                      className={userStyles.NavLink}
                      title="My Profile"
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item
                        className={userStyles.dropItems}
                        href="#action/3.2"
                      >
                        <UserOutlined className={userStyles.navBarIcon} /> My
                        Profile
                      </NavDropdown.Item>

                      <Dropdown.Divider />
                      <NavDropdown.Item
                        className={userStyles.dropItems}
                        href="/login"
                      >
                        <LoginOutlined className={userStyles.navBarIcon} />{" "}
                        Login
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        className={userStyles.dropItems}
                        href="#"
                      >
                        <LogoutOutlined className={userStyles.navBarIcon} />{" "}
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link
                      href="/signup"
                      className={`${userStyles.NavLink} ${userStyles.RegisterButton}`}
                    >
                      Register
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div id="#" className={userStyles.EventContainer}>
        <div className={userStyles.Event}>
          <div className={userStyles.EventImage}>
            <img src={imgUrl} alt="event" className={userStyles.EventImage} />
            <div className={userStyles.EventText}>
              <h1 className={userStyles.eventName}>{eventName}</h1>
              <p className={userStyles.eventDescription}>
                {eventDescription}
              </p>
              <h5 className={userStyles.eventDate}>{eventDate}</h5>
              <h1 className={userStyles.eventDate}>
                {/* 07 <sup>th</sup>{" "} */}
                {location}
              </h1>
            </div>
          </div>
        </div>
        <svg className={userStyles.arrows}>
          <path className={userStyles.a1} d="M0 0 L30 32 L60 0"></path>
          <path className={userStyles.a2} d="M0 20 L30 52 L60 20"></path>
          <path className={userStyles.a3} d="M0 40 L30 72 L60 40"></path>
        </svg>
      </div>

      <div id="Gallery" className={userStyles.galleryContainer}>
        <h1 className={userStyles.galleryTitle}>Gallery</h1>
        <div className={userStyles.gallery}>
          <Gallery />
        </div>
      </div>

      <div id="Request" className={userStyles.RequestContainer}>
        <h1 className={userStyles.RequestTitle}>Request Reading</h1>
        <div className={userStyles.Request}>
          <Request />
        </div>
      </div>

      <div id="YouTubeWidget" className={userStyles.YoutubeContainer}>
        <h1 className={userStyles.YoutubeTitle}>Watch on YouTube</h1>
        <div className={userStyles.Youtube}>
          <YoutubeWidget />
        </div>
      </div>

      <div id="Review" className={userStyles.ReviewContainer}>
        <h1 className={userStyles.ReviewTitle}>Voice of Readers</h1>
        <div className={userStyles.Review}>
          <Review />
        </div>
      </div>

      <div id="Author" className={userStyles.AuthorContainer}>
        <h1 className={userStyles.AuthorTitle}>About Author</h1>
        <div className={userStyles.Author}>
          <Author />
        </div>
      </div>
      <footer>
        <div className={userStyles.FooterContainer}>
          <div className={userStyles.FooterLogo}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src="./e.png"
              alt="logo"
            />
          </div>
          <div className={userStyles.FooterNavigation}>
            <a href="#">Home</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Request">Request Reading</a>
            <a href="#YouTubeWidget">YouTube Channel</a>
            <a href="#Review">Reviews</a>
            <a href="#Author">About Author</a>
            <Button
              type="primary"
              href="/signup"
              className={userStyles.FooterButton}
            >
              Register
            </Button>
          </div>
          <div className={userStyles.FooterSocialLinks}>
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.youtube.com" />
            <SocialIcon url="www.linkedin.com" />
            <SocialIcon url="www.gmail.com" />
          </div>
        </div>

        <div className={userStyles.mobileFooterContainer}>
          <div className={userStyles.mobileNavigation}>
            <a href="#">Home</a>
            <a href="#Gallery">Gallery</a>
            <a href="#Request">Request Reading</a>
            <a href="#YouTubeWidget">YouTube Channel</a>
            <a href="#Review">Reviews</a>
            <a href="#Author">About Author</a>
            <Button
              type="primary"
              href="/signup"
              className={userStyles.FooterMobileButton}
            >
              Register
            </Button>
          </div>
          <div className={userStyles.FooterSocialLinksMobile}>
            <SocialIcon
              bgColor="transparent"
              userStyles
              className={userStyles.SocialIcon}
              url="https://www.facebook.com"
            />
            <SocialIcon
              bgColor="transparent"
              userStyles
              className={userStyles.SocialIcon}
              url="www.email.com"
            />
            <SocialIcon
              bgColor="transparent"
              userStyles
              className={userStyles.SocialIcon}
              url="https://instagram.com"
            />
            <SocialIcon
              bgColor="transparent"
              className={userStyles.SocialIcon}
              url="https://linkedin.com"
            />
          </div>
        </div>
        <p className={userStyles.copyright}>
          ©2024 Design by CodeVanguard | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default UserWebSite;

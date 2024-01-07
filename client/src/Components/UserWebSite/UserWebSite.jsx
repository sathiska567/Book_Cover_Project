/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import userStyles from "./UserWebSite.module.css";
import { useMediaQuery } from "react-responsive";
import { Button } from "antd";
import { Dropdown } from "react-bootstrap";
import { UserOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const UserWebSite = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });


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
                <Nav.Link className={userStyles.NavLink} href="#link">
                  Gallery
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#link">
                  Request Reading
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#link">
                  YouTube Channel
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#link">
                  Reviews
                </Nav.Link>
                <Nav.Link className={userStyles.NavLink} href="#link">
                  About Author
                </Nav.Link>

                {isMobile ? (
                  <>
                    <hr />
                    <Nav.Link className={userStyles.NavLink} href="#action/3.2">
                      My Profile
                    </Nav.Link>
                    <Nav.Link className={userStyles.NavLink} href="#action/3.3">
                      Login
                    </Nav.Link>
                    <Nav.Link className={userStyles.NavLink} href="#action/3.3">
                      Log Out
                    </Nav.Link>
                  </>
                ) : (
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
                      href="#action/3.3"
                    >
                      <LoginOutlined className={userStyles.navBarIcon} /> Login
                    </NavDropdown.Item>

                    <NavDropdown.Item className={userStyles.dropItems}>
                      <LogoutOutlined className={userStyles.navBarIcon} />{" "}
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div id="#" className={userStyles.EventContainer}>
        <div className={userStyles.Event}>
          <div className={userStyles.EventImage}>
            <img src="./e.jpg" alt="event" className={userStyles.EventImage} />
            <div className={userStyles.EventText}>
              <h1 className={userStyles.eventName}>Once Upon a Playtime</h1>
              <p className={userStyles.eventDescription}>
                Join us for a magical journey as we unveil the enchanting world
                of [Book Title]! "Once Upon a Playtime" invites families and
                little adventurers to a whimsical celebration filled with
                laughter, imagination, and joy. The event promises delightful
                surprises, interactive storytelling, and playful activities that
                will transport children into the heart of the story. Come be a
                part of this enchanting day where the pages come to life, andter
                stage. Get ready for a
              </p>
              <h1 className={userStyles.eventDate}>January</h1>
              <h1 className={userStyles.eventDate}>
                07 <sup>th</sup>{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={userStyles.galleryContainer}>
        <h1 className={userStyles.galleryTitle}>Gallery</h1>
      </div>
    </div>
  );
};

export default UserWebSite;

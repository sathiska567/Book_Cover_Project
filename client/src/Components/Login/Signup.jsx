/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SignupStyles from "./Signup.module.css";
import { Button, Form, Input, message, Popover } from "antd";
import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
useEffect(() => {
  message.config({
    maxCount: 3,
  });
}, []);


const [username,setUserName] = useState("")
const [email,setEmail] = useState("")
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();

// Function to handle form submission
const onFinish = (values) => {
  if (!values.password || !values.confirmPassword) {
    message.error("Both fields are required!");
    return;
  }
  if (values.password !== values.confirmPassword) {
    message.error("Passwords do not match!");
    return;
  }
};

// Register API

const handleSubmit = async()=>{

  console.log(password,email,username);
    
   try {
    const response = await axios.post("http://localhost:8080/api/v1/registerUser/register",{username:username , email:email ,password:password })
   console.log(response);
    
   if(response.data.success){
       message.success("User registered successfully!");
       navigate("/login")
   }
   else{
    message.error("Error registering user!");
   }

   } catch (error) {
     message.error("Error registering user!");
   }



}


  return (
    <div>
      <div className={SignupStyles.SignUpContainer}>
        <div className={SignupStyles.FormContainer}>
          <div className={SignupStyles.SignUpFormHeader}>
            <img
              src="e.png"
              alt="Profile"
              className={SignupStyles.profileIcon}
            />
          </div>

          <div className={SignupStyles.SignUpFormTitle}>
            <h3>Create Your Account</h3>
          </div>
          <>
            <Form
              name="nest-messages"
              style={{
                width: "85%",
                margin: "auto",
                fontFamily: "Roboto,sans-serif",
                color: "#666666",
                fontSize: "15px",
              }}
              onFinish={onFinish}
            >
              <label htmlFor="" className="SignUpLabel">
                Name:
              </label>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  type="name"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #DADADA",
                    borderRadius: "0px",
                  }}
                  className="SignUpInput"
                  id="name"
                  name="name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Item>

              <label htmlFor="" className="SignUpLabel">
                Email:
              </label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #DADADA",
                    borderRadius: "0px",
                  }}
                  className="SignUpInput"
                  id="email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <label className={SignupStyles.SignUpLabel}>
                Create Password
              </label>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  // This is the custom validator
                  ({ getFieldValue, validateFields }) => ({
                    validator(_, value) {
                      if (value) {
                        // This will trigger re-validation of the confirmPassword field
                        validateFields(["confirmPassword"]);
                      }
                      return Promise.resolve();
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    border: "none",
                    borderBottom: "2px solid #DADADA",
                    borderRadius: "0px",
                  }}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              {password && <PasswordStrengthBar password={password} />}
              <label className={SignupStyles.SignUpLabel}>
                Confirm Password
              </label>
              <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  style={{
                    border: "none",
                    borderBottom: "2px solid #DADADA",
                    borderRadius: "0px",
                  }}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Item>

              {confirmPassword && (
                <PasswordStrengthBar password={confirmPassword} />
              )}

              <Button
                type="primary"
                className={SignupStyles.SignUpFormButton}
                htmlType="submit"
                onClick={handleSubmit}
              >
                CREATE AN ACCOUNT
              </Button>
              <div style={{ whiteSpace: "nowrap" }}>
                <span>Have account already? </span>
                <a
                  style={{
                    fontWeight: "500",
                  }}
                  href="/login"
                >
                  Sign In
                </a>
              </div>
            </Form>
          </>
          <p
            style={{
              letterSpacing: "0.2px",
              fontSize: "13px",
              position: "fixed",
              textAlign: "center",
              bottom: "0%",
              left: "4%",
            }}
          >
            Copyright &copy;2024 Design by CodeVanguard
          </p>
        </div>

        <div className={SignupStyles.ImageContainer}>
          <img
            src="/c.jpg"
            alt="LoginImage"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "fit",
              opacity: 0.2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;

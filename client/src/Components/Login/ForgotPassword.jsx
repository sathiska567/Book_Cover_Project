/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ForgetPasswordStyles from "./ForgotPassword.module.css";
import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  // State to confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSendEmail , setOtpSendEmail] = useState("")
  const navigate = useNavigate();

  // State to manage password visibility
  const [visible, setVisible] = useState(false);
  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  // Function to handle form submission
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSendEmail = async()=>{
    try {
      const response = await axios.post("http://localhost:8080/api/v1/forgottenPassword/sendOTP",{email:otpSendEmail})
      console.log(response);
  
       if(response.data.success){
        navigate("/otp")
        message.success("OTP Sent Successfully")
       }

    } 
    
    catch (error) {
       message.error("Found Error in Send OTP")
    }
  }

  return (
    <div>
      <div className={ForgetPasswordStyles.ForgetPasswordContainer}>
        <div className={ForgetPasswordStyles.FormContainer}>
          <div className={ForgetPasswordStyles.ForgetPasswordFormHeader}>
            <img
              src="e.png"
              alt="Profile"
              className={ForgetPasswordStyles.profileIcon}
            />
          </div>

          <div 
          className={ForgetPasswordStyles.ForgetPasswordFormTitle}>
            <h3>Forgot your password?</h3>
          </div>
          <div 
          style={{
            marginBottom: "50px",
          }}
          className={ForgetPasswordStyles.ForgetPasswordFormSubTitle}>
            <p>Enter your username and we’ll help you <br/>reset your password.</p>
          </div>
          <>
            <Form
              name="nest-messages"
              style={{
                width: "85%",
                margin: "auto",
              }}
              onFinish={onFinish}
            >
              <label
                htmlFor=""
                className={ForgetPasswordStyles.ForgetPasswordLabel}
              >
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
                  className="ForgetPasswordInput"
                  id="email"
                  name="email"
                  onChange={(e) => setOtpSendEmail(e.target.value)}
                />
              </Form.Item>

              <Button
                type="primary"
                className={ForgetPasswordStyles.ForgetPasswordFormButton}
                htmlType="submit"
                href="/otp"
                onClick={handleSendEmail}
              >
                NEXT
              </Button>
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "17px",
                  textAlign: "center",
                  position: "relative",
                  top: "180px",
                }}
              >

                <a
                className="ForgetPasswordLink"
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
              bottom: "0",
              left: "4%",
            }}
          >
            Copyright &copy;2024 Design by CodeVanguard
          </p>
        </div>

        <div className={ForgetPasswordStyles.ImageContainer}>
          <img
            src="/c.jpg"
            alt="ForgetPasswordImage"
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

export default ForgotPassword;

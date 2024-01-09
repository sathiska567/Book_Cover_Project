/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ForgetPasswordStyles from "./ForgotPassword.module.css";
import { Button, Form, Input } from "antd";

const ForgotPassword = () => {
  // State to confirm password
  const [confirmPassword, setConfirmPassword] = useState("");

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

          <div className={ForgetPasswordStyles.ForgetPasswordFormTitle}>
            <h3>Forgot your password?</h3>
          </div>
          <div
            style={{
              marginBottom: "50px",
            }}
            className={ForgetPasswordStyles.ForgetPasswordFormSubTitle}
          >
            <p>
              Enter your username and we’ll help you <br />
              reset your password.
            </p>
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
                />
              </Form.Item>

              <Button
                type="primary"
                className={ForgetPasswordStyles.ForgetPasswordFormButton}
                htmlType="submit"
                href="/otp"
              >
                NEXT
              </Button>
              <div
                className={ForgetPasswordStyles.ForgetPasswordLink}
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "17px",
                  textAlign: "center",
                  position: "relative",
                  top: "35vh",
                }}
              >
                <a
                  className="ForgetPasswordLink"
                  style={{
                    textDecoration: "none",
                  }}
                  href="/login"
                >
                  Sign In
                </a>
              </div>
            </Form>
          </>
          <p
            className={ForgetPasswordStyles.Copyright}
            style={{
              letterSpacing: "0.2px",
              fontSize: "13px",
              position: "fixed",
              textAlign: "center",
              bottom: "0",
              marginLeft: "3%",
              marginRight: "4%",
            }}
          >
            Copyright &copy;2024 Design by CodeVanguard
          </p>
        </div>

        <div
          className={`${ForgetPasswordStyles.ImageContainer} ${ForgetPasswordStyles.hideOnMobile}`}
        >
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

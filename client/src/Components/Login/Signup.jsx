/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import SignupStyles from "./Signup.module.css";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Popover } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


const Signup = () => {

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

  // Function to handle password validation
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({
    minLength: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const checkPasswordStrength = (password) => {
    setPasswordStrength({
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    });
  };

  const passwordRules = [
    {
      required: true,
      message: "Please input your password!",
    },
  ];

  const passwordStrengthPopoverContent = (
    <div>
      <div>
        {passwordStrength.minLength ? (
          <CheckCircleOutlined
            style={{
              color: "#01F700",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          />
        )}{" "}
        Minimum 8 characters
      </div>
      <div>
        {passwordStrength.uppercase ? (
          <CheckCircleOutlined
            style={{
              color: "#01F700",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          />
        )}{" "}
        At least one uppercase letter
      </div>
      <div>
        {passwordStrength.lowercase ? (
          <CheckCircleOutlined
            style={{
              color: "#01F700",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          />
        )}{" "}
        At least one lowercase letter
      </div>
      <div>
        {passwordStrength.number ? (
          <CheckCircleOutlined
            style={{
              color: "#01F700",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          />
        )}{" "}
        At least one number
      </div>
      <div>
        {passwordStrength.specialChar ? (
          <CheckCircleOutlined
            style={{
              color: "#39FF14",
              fontWeight: "bold",
            }}
          />
        ) : (
          <CloseCircleOutlined
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          />
        )}{" "}
        At least one special character
      </div>
    </div>
  );

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
                />
              </Form.Item>

              <label htmlFor="" className="SignUpLabel">
                Create a Password:
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password!",
                  },
                ]}
              >
                <Popover
                  content={passwordStrengthPopoverContent}
                  title="Password Strength"
                  trigger="focus"
                >
                  <Input.Password
                    type={visible ? "text" : "password"}
                    style={{
                      border: "none",
                      borderBottom: "2px solid #DADADA",
                      borderRadius: "0px",
                    }}
                    className="SignUpInput"
                    id="password"
                    name="password"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    onClick={togglePasswordVisibility}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      checkPasswordStrength(e.target.value);
                    }}
                  />
                </Popover>
              </Form.Item>
              <Button
                type="primary"
                className={SignupStyles.SignUpFormButton}
                htmlType="submit"
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

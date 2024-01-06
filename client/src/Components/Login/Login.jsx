/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginStyles from "./Login.module.css";
import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
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
      <div className={LoginStyles.LoginContainer}>
        <div className={LoginStyles.FormContainer}>
          <div className={LoginStyles.LoginFormHeader}>
            <img
              src="e.png"
              alt="Profile"
              className={LoginStyles.profileIcon}
            />
          </div>

          <div className={LoginStyles.LoginFormTitle}>
            <h3>Log In</h3>
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
              <label htmlFor="" className={LoginStyles.LoginLabel}>
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
                  className="LoginInput"
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

              <label htmlFor="" className={LoginStyles.LoginLabel}>
                Password:
              </label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  type={visible ? "text" : "password"}
                  style={{
                    border: "none",
                    borderBottom: "2px solid #DADADA",
                    borderRadius: "0px",
                  }}
                  className="LoginInput"
                  id="password"
                  name="password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  onClick={togglePasswordVisibility}
                />
              </Form.Item>
              <div
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "regular",
                  marginBottom: "10px",
                }}
              >
                <a href="/forgetpassword">Forgot Password?</a>
              </div>

              <Button
                type="primary"
                className={LoginStyles.LoginFormButton}
                htmlType="submit"
              >
                Sign In
              </Button>
              <div
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                <span>New Member? </span>
                <a
                  style={{
                    fontWeight: "500",
                  }}
                  href="/signup"
                >
                  Sign up
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

        <div className={LoginStyles.ImageContainer}>
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

export default Login;

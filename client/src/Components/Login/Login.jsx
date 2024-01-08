/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import LoginStyles from "./Login.module.css";
import { Button, Form, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("");
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


  const handleLogin = async()=>{
          console.log(email,password);
        
          try {
            const response = await axios.post("http://localhost:8080/api/v1/loginUser/login",{email:email , password:password})

            if(response.data.success){
            const token = response.data.token;
            localStorage.setItem("token", token);
            // console.log(response.data);

            message.success("Login Successfull");
            navigate("/createEvent")

            }

            else{
              message.error("Please Enter Correct credential")
            }

          } catch (error) {
             message.error("Please Enter Correct credential");
          }
  }

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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                onClick={handleLogin}
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

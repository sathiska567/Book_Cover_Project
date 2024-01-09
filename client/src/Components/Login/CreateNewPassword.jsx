/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import CreateNewPasswordStyles from "./CreateNewPassword.module.css";
import { Button, Form, Input, message } from "antd";
import PasswordStrengthBar from "react-password-strength-bar";

const CreateNewPassword = () => {
  // Set the maximum number of messages when the component mounts
  useEffect(() => {
    message.config({
      maxCount: 3,
    });
  }, []);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  return (
    <div>
      <div className={CreateNewPasswordStyles.NewPasswordContainer}>
        <div
          className={`${CreateNewPasswordStyles.FormContainer} ${CreateNewPasswordStyles.formContainerMobile}`}
        >
          <div className={CreateNewPasswordStyles.NewPasswordFormHeader}>
            <img
              src="e.png"
              alt="Profile"
              className={CreateNewPasswordStyles.profileIcon}
            />
          </div>

          <div className={CreateNewPasswordStyles.NewPasswordFormTitle}>
            <h3>Enter New Password</h3>
          </div>
          <Form
            name="nest-messages"
            style={{
              width: "85%",
              margin: "auto",
            }}
            onFinish={onFinish}
          >
            <label className={CreateNewPasswordStyles.NewPasswordLabel}>
              New Password
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
            <label className={CreateNewPasswordStyles.NewPasswordLabel}>
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
                    return Promise.reject(new Error("Passwords do not match!"));
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
              style={{
                marginTop: "10px",
              }}
              type="primary"
              className={CreateNewPasswordStyles.NewPasswordFormButton}
              htmlType="submit"
            >
              RESET PASSWORD
            </Button>
          </Form>
          <p
            className={CreateNewPasswordStyles.NewPasswordFormFooter}
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

        <div
          className={`${CreateNewPasswordStyles.ImageContainer} ${CreateNewPasswordStyles.hideOnMobile}`}
        >
          <img
            
            className={CreateNewPasswordStyles.NewPasswordImage}
            src="/c.jpg"
            alt="NewPasswordImage"
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

export default CreateNewPassword;

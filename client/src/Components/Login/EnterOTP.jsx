/* eslint-disable no-unused-vars */
import React from "react";
import EnterOTPStyles from "./EnterOTP.module.css";
import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";

const EnterOTP = () => {
  const [form] = Form.useForm();
  // Function to handle form submission
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className={EnterOTPStyles.EnterOTPContainer}>
        <div className={EnterOTPStyles.FormContainer}>
          <div className={EnterOTPStyles.EnterOTPFormHeader}>
            <img
              src="e.png"
              alt="Profile"
              className={EnterOTPStyles.profileIcon}
            />
          </div>

          <div className={EnterOTPStyles.EnterOTPFormTitle}>
            <h3>Enter OTP</h3>
          </div>
          <div
            style={{
              marginBottom: "100px",
            }}
            className={EnterOTPStyles.EnterOTPFormSubTitle}
          >
            <p>
              We've sent the reset code to entered email <br />
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
              <Form.Item name="otp">
                <InputOTP autoSubmit={form} inputType="numeric" length={4} />
              </Form.Item>

              <Button
                type="primary"
                className={EnterOTPStyles.EnterOTPFormButton}
                htmlType="submit"
                // href="/createnewpassword"
              >
                NEXT
              </Button>
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

        <div className={EnterOTPStyles.ImageContainer}>
          <img
            src="/c.jpg"
            alt="EnterOTPImage"
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

export default EnterOTP;

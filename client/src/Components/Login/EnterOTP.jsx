/* eslint-disable no-unused-vars */
import React from "react";
import EnterOTPStyles from "./EnterOTP.module.css";
import { Button, Form, message } from "antd";
import { InputOTP } from "antd-input-otp";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const EnterOTP = () => {
  const [form] = Form.useForm();
  const location = useLocation([]);
  const navigate = useNavigate();

  // Function to handle form submission
  const onFinish = async(values) => {
    
      try {

           console.log("Received values of form: ", values);
           const result = values.otp.join('');
           console.log(result);
           const email = location.state.email;

           const response = await axios.post("http://localhost:8080/api/v1/validate/valide-otp",{email:email , otp:result})
           console.log(response);

           if(response.data.success){
                message.success("OTP Verified Successfully")
                navigate("/createnewpassword" , {state : {email:email}})
           }

      } catch (error) {
        message.error("Invalide OTP.Again Please Check your OTP")
      }
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
                <InputOTP autoSubmit={form} inputType="numeric" length={4}/>
              </Form.Item>

              <Button
                type="primary"
                className={EnterOTPStyles.EnterOTPFormButton}
                htmlType="submit"
                // href="/createnewpassword"
                // onClick={verifyOTP}
              >
                NEXT
              </Button>
            </Form>
          </>
          <p
            className={EnterOTPStyles.Copyright}
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
          className={`${EnterOTPStyles.ImageContainer} ${EnterOTPStyles.hideOnMobile}`}
        >
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

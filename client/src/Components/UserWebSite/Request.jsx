import React, { useState } from 'react';
import requestStyles from './Request.module.css';
import { Form, Input, Button, message } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  baseurl  from '../../../baseurl/baseurl.js';


const Request = () => {
const requestURL =
  "https://res.cloudinary.com/dov8hd3v6/image/upload/v1705072899/lr6uqr93cqaujn8no0ti.jpg ";

    const [form] = Form.useForm();
    const { TextArea } = Input;
    const [nameOfOrganization, setNameOfOrganization] = useState("");
    const [nameOfTheRequest, setnameOfTheRequest] = useState("");
    const [description, setDescription] = useState("");
    // const navigate = useNavigate();

    const onChange = (e) => {
        console.log("Change:", e.target.value);
    };

    const handleRequest = async()=>{
      console.log(nameOfOrganization,nameOfTheRequest,description);

      try {
        const response = await axios.post(
          `${baseurl}/api/v1/request/request`,
          {
            nameOfOrganization: nameOfOrganization,
            nameOfTheRequest: nameOfTheRequest,
            requestDescription: description,
          }
        );

         if(response.data.success){
           message.success("Request Sent Successfully");
          // navigate("/")
         }

      } catch (error) {
        message.error("Error in sending request");
      }
    }

    return (
      <div>
        <div className={requestStyles.reqContainer}>
          <div className={requestStyles.reqForm}>
            <Form
              className={requestStyles.form}
              form={form}
              layout="vertical"
              style={{
                width: "90%",
                padding: "35px 10px 10px 10px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {" "}
              <Form.Item
                label="Name of Organization:"
                name="organizationName"
                rules={[
                  {
                    required: true,
                    message: "Please input the organization name!",
                  },
                ]}
                onChange={(e) => setNameOfOrganization(e.target.value)}
              >
                <Input placeholder="Organization Name" />
              </Form.Item>
              <Form.Item
                label="Name of Requester:"
                name="requesterName"
                rules={[
                  { required: true, message: "Please input requester name!" },
                ]}
                onChange={(e) => setnameOfTheRequest(e.target.value)}
              >
                <Input placeholder="Requester Name" />
              </Form.Item>
              <Form.Item
                label="Request Description:"
                name="requestDescription"
                rules={[
                  {
                    required: true,
                    message: "Please input the request description!",
                  },
                ]}
                onChange={(e) => setDescription(e.target.value)}
              >
                <TextArea
                  showCount
                  maxLength={500}
                  onChange={onChange}
                  placeholder="Description"
                  rows={5}
                />
              </Form.Item>
              {/* Submit button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={handleRequest}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={requestStyles.reqImage}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectPosition: "center",
                background: "white",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
              src={requestURL}
              alt="request"
            />
          </div>
        </div>
      </div>
    );
}

export default Request

import React from 'react';
import requestStyles from './Request.module.css';
import { Form, Input, Button } from "antd";


const Request = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;

    const onChange = (e) => {
        console.log("Change:", e.target.value);
    };

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
              >
                <Input placeholder="Organization Name" />
              </Form.Item>
              <Form.Item
                label="Name of Requester:"
                name="requesterName"
                rules={[
                  { required: true, message: "Please input requester name!" },
                ]}
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
                <Button type="primary" htmlType="submit">
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
              src="/public/c.jpg"
              alt="request"
            />
          </div>
        </div>
      </div>
    );
}

export default Request

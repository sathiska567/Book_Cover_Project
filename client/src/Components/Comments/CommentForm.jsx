/* eslint-disable no-unused-vars */
import React from "react";
import "./CommentForm.css";
import { Form, Input, Button, message } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import SideBar from "../SideBar/SideBar";


const CommentForm = () => {
  return (
    <div>
      <SideBar>
        <div
          style={{
            marginTop: "-10px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Form
              layout="vertical"
              style={{
                width: "60%",
                padding: "10px 50px 10px 50px",
                margin: "auto",
                border: "1px solid #D9D9D9",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  left: "100%",
                }}
              >
                <a href="/comment" title="close">
                  <CloseCircleOutlined
                    style={{ fontSize: "25px", color: "red" }}
                  />
                </a>
              </div>
              <Form.Item label="Username:" name="orgName">
                <Input className="reqOrganizationName" disabled />
              </Form.Item>

              <Form.Item label="Date:" name="commentDate">
                <Input disabled className="commentDate" />
              </Form.Item>

              <Form.Item label="Comment:" name="comment">
                <Input.TextArea rows={5} disabled className="comment" />
              </Form.Item>

              <Form.Item
                label="Enter Reply:"
                name="reply"
                rules={[
                  {
                    required: true,
                    message:
                      "Reply field cannot be empty. Please input your reply!",
                  },
                ]}
              >
                <Input.TextArea className="reqReply" />
              </Form.Item>

              {/* Submit button */}
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Reply
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default CommentForm;

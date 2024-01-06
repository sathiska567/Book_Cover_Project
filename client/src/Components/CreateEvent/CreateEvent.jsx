import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Form, Input, DatePicker, Upload, Button, Modal, message } from "antd";
import {PlusOutlined } from "@ant-design/icons";

// 
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


const CreateEvent = () => {
  /*------------ Image Upload Function Start--------------------- */
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  /*------------ Image Upload Function END--------------------- */
  const dateFormat = "DD/MM/YYYY";
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <SideBar>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            width: "60%",
            padding: "10px 50px 10px 50px",
            margin: "auto",
            border: "1px solid #D9D9D9",
            borderRadius: "20px",
          }}
        >
          <Form.Item
            label="Enter event name:"
            name="eventName"
            rules={[
              { required: true, message: "Please input the event name!" },
            ]}
          >
            <Input placeholder="Event name" />
          </Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
            }}
          >
            <div style={{ flex: 1 }}>
              <Form.Item
                label="Enter event date:"
                name="eventDate"
                rules={[
                  { required: true, message: "Please select the event date!" },
                ]}
              >
                <DatePicker format={dateFormat} style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div style={{ flex: 1 }}>
              <Form.Item
                label="Event Location:"
                name="eventLocation"
                rules={[
                  {
                    required: true,
                    message: "Please input the event location!",
                  },
                ]}
              >
                <Input placeholder="Location" style={{ width: "100%" }} />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="Event Description:"
            name="eventDescription"
            rules={[
              {
                required: true,
                message: "Please input the event description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Description" />
          </Form.Item>
          {/* Form field for image upload */}
          <Form.Item
            label="Upload cover image:"
            name="eventImage"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
            rules={[
              { required: true, message: "Please upload the event image!" },
            ]}
          >
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </Form.Item>
          {/* Submit button */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </SideBar>
    </div>
  );
};

export default CreateEvent;

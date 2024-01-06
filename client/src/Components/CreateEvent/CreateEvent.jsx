import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Form, Input, DatePicker, Upload, Button, Modal, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
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
  const dateFormat = "DD/MM/YYYY";
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");

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

  
  const handleSubmit = async (values) => {
    try {
      // Log the received form values
      console.log("Received values of form: ", values);

      // // Step 1: Create the event without the image
      // const eventResponse = await axios.post("http://localhost:8080/api/v1/event/create-event", {
      //   EventName: values.eventName,
      //   EventLocation: values.eventLocation,
      //   EventDescription: values.eventDescription,
      //   EventDate: values.eventDate,
      // });
  
      // // Log the event creation response
      // console.log("Uploaded another details" , eventResponse);

        console.log(fileList[0].originFileObj);
        const file = fileList[0].originFileObj;
    
        const formData = new FormData();
        formData.append("image", file);
    
        console.log([...formData]);
    
        const upload = await axios.post(
          "http://localhost:8080/api/v1/coverUpload/cover-image-upload",
          formData,
        );
        console.log(upload);
  
        if(upload.data.success){
           message.success("Uploaded successfull") 
         
        }
  
        else{
          message.error("Uploaded failed")
        }
    
            
      } 

     catch (error) {
      // Display error message
      console.error("Error during form submission:", error);
      message.error("Event Creation Failed");
    }
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
          <Form.Item
            label="Enter event date:"
            name="eventDate"
            rules={[
              { required: true, message: "Please select the event date!" },
            ]}
          >
            <DatePicker format={dateFormat} />
          </Form.Item>
          <Form.Item
            label="Event Location:"
            name="eventLocation"
            rules={[
              { required: true, message: "Please input the event location!" },
            ]}
          >
            <Input placeholder="Location" />
          </Form.Item>
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
           <Form.Item label="Upload Images for Gallery">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
          </Form.Item>
            <Modal
               visible={previewOpen}
               title={previewTitle}
               footer={null}
               onCancel={handleCancel}
             >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
         
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

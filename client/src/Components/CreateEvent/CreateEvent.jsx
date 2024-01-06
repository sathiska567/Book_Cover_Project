import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Form, Input, DatePicker, Upload, Button, Modal, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const CreateEvent = () => {
  const dateFormat = "DD/MM/YYYY";
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleUpload = ({ file, fileList }) => {
    if (file.status === "error") {
      // If the file was rejected in beforeUpload, do not update the state
      return;
    }
    setFileList(fileList);
    form.setFieldsValue({
      eventImage: fileList,
    });
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = URL.createObjectURL(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  };
  
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
      file.status = "error";
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.naturalWidth <= img.naturalHeight) {
          message.error("Image width should be more than its height");
          reject(file);
        } else {
          resolve(file);
        }
      };
      img.onerror = () => {
        message.error("Could not load image");
        reject(file);
      };
    });
  };

  const handleSubmit = async (values) => {
    try {
      // Log the received form values
      console.log("Received values of form: ", values);

       
      // Step 1: Create the event without the image
      const eventResponse = await axios.post("http://localhost:8080/api/v1/event/create-event", {
        EventName: values.eventName,
        EventLocation: values.eventLocation,
        EventDescription: values.eventDescription,
        EventDate: values.eventDate,
      });
  
      // Log the event creation response
      console.log("Uploaded another details" , eventResponse);


      // Step 2: Upload the cover image
      const file = fileList[0].originFileObj;
      const formData = new FormData();
      formData.append("image", file);
  
      console.log([...formData]);
  
      const coverImageRes = await axios.post(
        "http://localhost:8080/api/v1/coverUpload/cover-image-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        }
      );
  
      // Log the cover image upload response
      console.log("Uploaded image details " , coverImageRes);

  
      // Display success message
      message.success("Event Created Successfully");

    } catch (error) {
      // Display error message
      console.error("Error during form submission:", error);
      message.error("Event Creation Failed");
    }
  };
  


  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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
          <Form.Item
            label="Upload cover image:"
            name="eventImage"
            valuePropName="fileList"
            fileList={fileList}
            onChange={handleChange}
            rules={[
              { required: true, message: "Please upload the event image!" },
            ]}
          >
            <Upload
              maxCount={1}
              beforeUpload={beforeUpload}
              onChange={handleUpload}
              onPreview={handlePreview}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            {/* Modal for image preview */}
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={() => setPreviewVisible(false)}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
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

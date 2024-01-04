import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Form, Input, DatePicker, Upload, Button, Modal, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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
            getValueFromEvent={(e) => e && e.fileList}
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

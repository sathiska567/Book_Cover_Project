import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Form, Button, message } from "antd";
import SideBar from "../SideBar/SideBar";
import "./Uploads.css";
import axios from "axios";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Uploads = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [videoFileList, setVideoFileList] = useState([]);
  const [videoPreviewOpen, setVideoPreviewOpen] = useState(false);
  const [videoPreviewTitle, setVideoPreviewTitle] = useState("");
  const [videoPreviewImage, setVideoPreviewImage] = useState("");
  const videoRef = React.useRef(null);

  const [image, setImage] = useState({});

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
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleVideoChange = (info) => {
    setVideoFileList(info.fileList);
  };

  const handleVideoPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setVideoPreviewImage(file.url || file.preview);
    setVideoPreviewOpen(true);
    setVideoPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleVideoCancel = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoPreviewOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      console.log(fileList[0].originFileObj);
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
      console.log(coverImageRes);
  
      console.log("Received values of form: ", values);
      
      const res = await axios.post(
        "http://localhost:8080/api/v1/event/create-event",
        {
          EventName: values.eventName,
          EventLocation: values.eventLocation,
          EventDescription: values.eventDescription,
          EventDate: values.eventDate,
        }
      );
      console.log(res);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  

  return (
    <div>
      <SideBar>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            width: "50%",
            margin: "auto",
            border: "1px solid #e8e8e8",
            borderRadius: "25px",
            padding: "40px",
          }}
        >
          {/* Form field for image upload */}
          <Form.Item label="Upload Images for Gallery">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 10 ? null : uploadButton}
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
          <Button 
          type="primary" 
          htmlType="submit"
          style={{
            marginBottom: "20px",
          }}
          >
            Submit Images
          </Button>
          {/* Submit button */}
          <Form.Item>
            <hr />
            <Form.Item
              style={{ marginTop: "20px" }}
              label="Upload Videos for Gallery"
            >
              <div
                className="VideoUpload"
                style={{
                  width: "100%",
                  paddingLeft: "10px",
                }}
              >
                <Upload
                  listType="video"
                  fileList={videoFileList}
                  onPreview={handleVideoPreview}
                  onChange={handleVideoChange}
                >
                  {videoFileList.length >= 3 ? null : uploadButton}
                </Upload>
              </div>
            </Form.Item>

            <Modal
              visible={videoPreviewOpen}
              title={videoPreviewTitle}
              footer={null}
              onCancel={handleVideoCancel}
            >
              <video
                ref={videoRef}
                controls
                style={{
                  width: "100%",
                }}
                src={videoPreviewImage}
              />
            </Modal>
            <Button type="primary" htmlType="submit">
              Submit Videos
            </Button>
          </Form.Item>
        </Form>
      </SideBar>
    </div>
  );
};

export default Uploads;

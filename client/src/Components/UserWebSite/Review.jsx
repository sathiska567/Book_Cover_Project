import React, { useEffect, useState } from "react";
import reviewStyles from "./Review.module.css";
import { Button, Modal, Form, Input, List, Avatar, Table, message } from "antd";
import axios from "axios";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // const [review, setReview] = useState({ name: "", text: "", reply: "" });
  const [form] = Form.useForm();

  const [userName,setUserName] = useState('')
  const [review,setReview] = useState('')

  const [data,setData] = useState([])
  
  // const handleInputChange = (event) => {
  //   setReview({ ...review, [event.target.name]: event.target.value });
  // };

  const handleSubmit = (values) => {
    setReviews((prevReviews) => [...prevReviews, values]);
    setShowForm(false);
  };

  function getColorFromName(name) {
    const baseValue = name.charCodeAt(0) % 12; 
    const hue = baseValue * 30; 
    return `hsl(${hue}, 50%, 50%)`; 
  }

  // const handleReplyChange = (index, event) => {
  //   const newReviews = [...reviews];
  //   newReviews[index].reply = event.target.value;
  //   setReviews(newReviews);
  // };

  const handleOk = () => {
    form
      .validateFields()
      .then(async(values) => {
        form.resetFields();
        handleSubmit(values);

        try {
          console.log(values);
          const response = await axios.post("http://localhost:8080/api/v1/review/review-section",{userName:values.name , review:values.text})
          console.log(response);
          message.success("Your Review Added successfull")
        } catch (error) {
          message.error("Something went wrong")
        }


    })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });


  };


  return (
    <div className={reviewStyles.reviewContainer}>
      <div className={reviewStyles.reviewButton}>
        <Button type="primary" onClick={() => setShowForm(true)}>
          Add Review
        </Button>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
        className={reviewStyles.rewForm}
      >
      
      <Modal
          title="Add Review"
          visible={showForm}
          onOk={handleOk}
          onCancel={() => setShowForm(false)}
          
        >
          <Form form={form}>
            <Form.Item
              label="Your name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                type="text"
                value={review.name}
               // onChange={handleInputChange}
               onChange={(e)=>setUserName(e.target.value)}
                placeholder="Your name"
              />
            </Form.Item>
            <Form.Item
              label="Your review"
              name="text"
              rules={[{ required: true, message: "Please input your review!" }]}
            >
              <Input.TextArea
                value={review.text}
                // onChange={handleInputChange}
                placeholder="Your review"
                onChange={(e)=>setReview(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Modal>
        <div className={reviewStyles.antEmptyNormal}>
          <Table
            className={reviewStyles.reviewTable}
            dataSource={reviews}
            showHeader={false}
            bordered={false}
            pagination={false}
            locale={{ emptyText: " " }}
            columns={[
              {
                title: "Review",
                dataIndex: "text",
                key: "review",
                width: "50%",
                render: (text, record) => (
                  <List.Item.Meta
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    avatar={
                      <Avatar
                        style={{
                          marginRight: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: getColorFromName(record.name),
                        }}
                      >
                        {record.name.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    title={record.name}
                    description={text}
                  />
                ),
              },
              {
                title: "Reply",
                dataIndex: "reply",
                key: "reply",
                width: "50%",
                render: () => (
                  <Form.Item>
                    <div className={reviewStyles.authorReply}>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00'",
                          justifyContent: "center",
                          borderRadius: "50%",
                          height: "32px",
                          width: "40px",
                        }}
                      >
                        A
                      </Avatar>
                      <span className={reviewStyles.authorName}>
                        Author's Reply
                      </span>
                      <p className={reviewStyles.inputField}>
                        Sample reply from the Author
                      </p>
                    </div>
                  </Form.Item>
                ),
              },
            ]}
          />
        </div>
      </div>
      
    </div>
    
  );
};

export default Review;

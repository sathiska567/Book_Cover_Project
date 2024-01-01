/* eslint-disable no-unused-vars */
// Import necessary libraries and components
import React, { useState } from "react";
import "./CommentTable.css";
import SideBar from "../SideBar/SideBar";
import { Space, Table, Button, Input, DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
// Define the structure of the table
const columns = [
  // Column for commenter's name
  {
    title: "Name of Commenter",
    dataIndex: "commenterName",
    key: "commenterName",
  },
  // Column for comment date
  {
    title: "Comment Date",
    dataIndex: "commentDate",
    key: "commentDate",
  },
  // Column for comment text
  {
    title: "Comment",
    key: "comment",
    render: (text, record) => (
      <Space size="large">
        <Input.TextArea
          style={{
            width: "500px",
            height: "100px",
            backgroundColor: "white",
            color: "black",
            fontSize: "12px",
          }}
          disabled
          value={record.comment}
        />
      </Space>
    ),
  },
  // Column for action buttons
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Button className="btnView" type="primary" ghost>
            View
          </Button>
          <Button className="btnDel" type="primary" danger ghost>
            Delete
          </Button>
        </div>
      </Space>
    ),
  },
];

// Sample data for the table
const data = [
  {
    key: "1",
    commenterName: "John Doe",
    commentDate: "2023/12/1",
    comment:
      "I was completely captivated by the intricate plot and well-developed characters in this book. The author's vivid descriptions painted a vivid picture in my mind, making it impossible to put the book down. Every twist and turn kept me on the edge of my seat, and the emotional depth of the story left a lasting impact. A truly gripping and thought-provoking read that will stay with me long after I've turned the last page. I can't wait to see what this talented author has in store next!",
  },
  {
    key: "2",
    commenterName: "John Brown",
    commentDate: "2023/4/17",
    comment:
      "Wow, what an emotional rollercoaster! This book had me laughing, crying, and questioning life's complexities. The author's ability to seamlessly weave together different storylines and create such relatable characters is truly commendable. The pacing was perfect, keeping me engaged from start to finish. The themes explored resonated deeply with me, and I found myself reflecting on the book's messages long after finishing it. A must-read for anyone looking for a rich, immersive experience that goes beyond the surface of storytelling.",
  },
  {
    key: "3",
    commenterName: "John Brown",
    commentDate: "2024/1/1",
    comment:
      "This book is a literary gem! The prose is beautifully crafted, and the author has a way of bringing even the smallest details to life. The characters felt like old friends, and I was invested in their journeys from the very beginning. The themes explored in the story are both timeless and relevant, making it a compelling read for anyone seeking depth and substance. I found myself savoring each chapter, reluctant to reach the end. A truly enchanting and thought-provoking masterpiece that lingers in the mind, urging me to revisit its pages again",
  },
  {
    key: "4",
    commenterName: "John Brown",
    commentDate: "2024/1/2",
    comment:
      "This book is a literary gem! The prose is beautifully crafted, and the author has a way of bringing even the smallest details to life. The characters felt like old friends, and I was invested in their journeys from the very beginning. The themes explored in the story are both timeless and relevant, making it a compelling read for anyone seeking depth and substance. I found myself savoring each chapter, reluctant to reach the end. A truly enchanting and thought-provoking masterpiece that lingers in the mind, urging me to revisit its pages again",
  },
  {
    key: "5",
    commenterName: "John Brown",
    commentDate: "2023/12/12",
    comment:
      "This book is a literary gem! The prose is beautifully crafted, and the author has a way of bringing even the smallest details to life. The characters felt like old friends, and I was invested in their journeys from the very beginning. The themes explored in the story are both timeless and relevant, making it a compelling read for anyone seeking depth and substance. I found myself savoring each chapter, reluctant to reach the end. A truly enchanting and thought-provoking masterpiece that lingers in the mind, urging me to revisit its pages again",
  },
];

// Main component
const CommentTable = () => {
  // State for search value
  const [searchValue, setSearchValue] = useState("");

  // New state for storing whether to show today's comments
  const [showToday, setShowToday] = useState(false);

  // New state for storing selected date range
  const [dateRange, setDateRange] = useState([]);

  // Filter data based on search value, whether to show today's comments, and selected date range
  // Function to handle date range change
  const handleDateRangeChange = (dates) => {
    setDateRange(dates ? dates.map((date) => date.format("YYYY/M/D")) : []);
  };

  // Filter data based on search value, whether to show today's comments, and selected date range
  const filteredData = data
    .filter(
      (item) =>
        item.commentDate.includes(searchValue) &&
        (!showToday || item.commentDate === moment().format("YYYY/M/D")) &&
        (dateRange.length === 0 ||
          (moment(item.commentDate, "YYYY/M/D").isSameOrAfter(
            moment(dateRange[0], "YYYY/M/D")
          ) &&
            moment(item.commentDate, "YYYY/M/D").isSameOrBefore(
              moment(dateRange[1], "YYYY/M/D")
            )))
    )
    .sort(
      (a, b) =>
        moment(b.commentDate, "YYYY/M/D").valueOf() -
        moment(a.commentDate, "YYYY/M/D").valueOf()
    );

  // Function to handle click on the new button
  const handleTodayClick = () => {
    setShowToday(!showToday);
  };

  // Render the component
  return (
    <div>
      <SideBar>
        <div className="customTable">
          <Input.Search
            placeholder="Search Comment Date..."
            style={{
              marginBottom: 12,
              width: 300,
            }}
            onSearch={(value) => setSearchValue(value)}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {/* New button for showing comments given in date*/}
          <RangePicker
            style={{
              marginLeft: 15,
              width: 300,
            }}
            onChange={handleDateRangeChange}
          />

          {/* New button for showing today's comments */}
          <Button
            style={{
              marginLeft: 15,
              width: 300,
            }}
            onClick={handleTodayClick}
          >
            {showToday ? "Show all comments" : "Show today's comments"}
          </Button>
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 3 }}
          />
        </div>
      </SideBar>
    </div>
  );
};

export default CommentTable;
/* eslint-disable no-unused-vars */
import React from "react";
import "./RequestTable.css";
import SideBar from "../SideBar/SideBar";
import { Space, Table, Button } from "antd";

/*------------------Ant Design Table - Start------------------------*/
const columns = [
  {
    title: "Organization Name",
    dataIndex: "OrgName",
    key: "OrgName",
  },
  {
    title: "Requester Name",
    dataIndex: "reqName",
    key: "reqName",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
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
          <Button
            className="btnView"
            type="primary"
            ghost
           
          >
            View
          </Button>
          <Button 
          className="btnDel" 
          type="primary" 
          danger ghost
          
          >
            Delete
          </Button>
        </div>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    OrgName: "ABC Pvt Ltd",
    reqName: "John Brown",
    date: "2024/1/1",
  },
  {
    key: "2",
    OrgName: "ABC Pvt Ltd",
    reqName: "John Brown",
    date: "2024/1/1",
  },
  {
    key: "3",
    OrgName: "ABC Pvt Ltd",
    reqName: "John Brown",
    date: "2024/1/1",
  },
];
 
/*------------------Ant Design Table - End---------------------------*/


const RequestTable = () => {

  return (
    <div>
      <SideBar>
        <div className="customTable">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 6 }}
          />
        </div>
      </SideBar>
    </div>
  );
};

export default RequestTable;

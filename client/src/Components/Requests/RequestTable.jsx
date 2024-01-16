/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./RequestTable.css";
import SideBar from "../SideBar/SideBar";
import { Space, Table, Button, message } from "antd";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import  baseurl  from "../../../baseurl/baseurl.js";



/*------------------Ant Design Table - Start------------------------*/
// const columns = [
//   {
//     title: "Organization Name",
//     dataIndex: "OrgName",
//     key: "OrgName",
//     render: (text, record) => (
//       <span>{record.nameOfOrganization}</span>
//     )
//   },
//   {
//     title: "Requester Name",
//     dataIndex: "reqName",
//     key: "reqName",
//     render: (text, record) => (
//       <span>{record.nameOfTheRequest}</span>
//     )
//   },
//   {
//     title: "Description",
//     dataIndex: "description",
//     key: "description",
//     render: (text, record) => (
//       <span>{record.requestDescription}</span>
//     )
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (text, record) => (
//       <Space size="middle">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "10px",
//           }}
//         >
//           {/* <Button
//             className="btnView"
//             type="primary"
//             ghost
           
//           >
//             View
//           </Button> */}

//           <Button
//             className="btnDel"
//             type="primary"
//             danger ghost
//           // onClick={handleDelete(record)}

//           >
//             Delete
//           </Button>
//         </div>
//       </Space>
//     ),
//   },
// ];

// const data = [
//   {
//     key: "1",
//     OrgName: "ABC Pvt Ltd",
//     reqName: "John Brown",
//     date: "2024/1/1",
//   },
//   {
//     key: "2",
//     OrgName: "ABC Pvt Ltd",
//     reqName: "John Brown",
//     date: "2024/1/1",
//   },
//   {
//     key: "3",
//     OrgName: "ABC Pvt Ltd",
//     reqName: "John Brown",
//     date: "2024/1/1",
//   },
// ];

/*------------------Ant Design Table - End---------------------------*/


const RequestTable = () => {

  const [requestApplicationData, setRequestApplicationData] = useState([]);
  const navigate = useNavigate();


  const requestData = async () => {
    const requestData = await axios.get(
      `${baseurl}/api/v1/request/all-request`
    );

    if (requestData.data.success) {
      console.log(requestData.data.requestData);
      setRequestApplicationData(requestData.data.requestData);
    }
  }

  const handleDelete = async(record)=>{
     try {
    //  console.log(record._id);
     const deletedDataId = record._id
     const response = await axios.post(
       `${baseurl}/api/v1/delete/delete-request`,
       { id: deletedDataId }
     );
    
      if(response.data.success){
           message.success("Deleted Successfull")
           window.location.reload();
      }

     } catch (error) {
        message.error("Something went wrong")
     }
  }


  useEffect(() => {
    requestData();
  }, []);


  return (
    <div>
      <SideBar>
        <div className="customTable">
          <Table
            columns={[
              {
                title: "Organization Name",
                dataIndex: "OrgName",
                key: "OrgName",
                render: (text, record) => (
                  <span>{record.nameOfOrganization}</span>
                ),
              },
              {
                title: "Requester Name",
                dataIndex: "reqName",
                key: "reqName",
                render: (text, record) => (
                  <span>{record.nameOfTheRequest}</span>
                ),
              },
              {
                title: "Description",
                dataIndex: "description",
                key: "description",
                render: (text, record) => (
                  <span>{record.requestDescription}</span>
                ),
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
                      {/* <Button
              className="btnView"
              type="primary"
              ghost
            >
              View
            </Button> */}

                      <Button
                        className="btnDel"
                        type="primary"
                        danger
                        ghost
                        onClick={()=>handleDelete(record)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Space>
                ),
              },
            ]}
            dataSource={requestApplicationData}
            pagination={{ pageSize: 6 }}
          />

        </div>
      </SideBar>
    </div>
  );
};





export default RequestTable;

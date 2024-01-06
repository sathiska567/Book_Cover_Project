/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import {
  MenuFoldOutlined,
  EditOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PullRequestOutlined,
  CommentOutlined,
  LogoutOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Space, Badge, Avatar } from "antd";

/*----------------------For side navigation-start--------------------------*/
const { Header, Sider, Content } = Layout;
const SideBar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(
    JSON.parse(localStorage.getItem("sidebarCollapsed")) || false
  );

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", JSON.stringify(collapsed));
  }, [collapsed]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  /*----------------------For side navigation-end--------------------------*/

  /*----------For change the active element of navigation bar-start--------*/
  const location = useLocation();
  const keyMap = {
    "/createEvent": "1",
    "/uploads": "2",
    "/requests": "3",
    "/comments": "4",
    "/": "5",
  };
  /*----------For change the active element of navigation bar-end----------*/

  /*----------For change the title with navigation bar active -start-------*/
  const titleMap = {
    "/createEvent": "Create Event",
    "/uploads": "Uploads",
    "/requests": "Requests",
    "/comments": "Comments",
    "/": "Home",
  };
  /*----------For change the title with navigation bar active -end-------*/

  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div style={{ color: "white" }} className="welcome">
          Hi{!collapsed && <span>, Admin</span>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          style={{
            background: "#001529",
            fontSize: "16px",
          }}
          selectedKeys={[keyMap[location.pathname]]}
        >
          <Menu.Item key="1" icon={<EditOutlined />}>
            <Link to="/createEvent"> Create Event</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UploadOutlined />}>
            <Link to="/uploads"> Uploads</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<PullRequestOutlined />}>
            <Link to="/requests"> Requests</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CommentOutlined />}>
            <Link to="/comments"> Comments</Link>
          </Menu.Item>
          <Menu.Item
            key="5"
            className="signout"
            icon={<LogoutOutlined />}
            style={{
              position: "absolute",
              bottom: 0,
              marginLeft: "3px",
              marginRight: "5px",
            }}
          >
            <Link to="/login"> Sign out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#001529",
          }}
        >
          <div className="HeaderButtonSet">
            <span style={{ color: "white" }} className="notificaiton">
              <a href="/comments">
                <Space size={24}>
                  {/* Notification badge */}
                  <Badge count={3}>
                    <Avatar
                      className="avatar"
                      shape="square"
                      icon={<BellOutlined />}
                    />
                  </Badge>
                </Space>
              </a>
            </span>
            <span style={{ color: "white" }} className="notificaiton">
              <a href="/login">
                <Space size={24}>
                  {/* Notification badge */}
                  <Avatar className="avatar" icon={<LogoutOutlined />} />
                </Space>
              </a>
            </span>
          </div>

          <Button
            type="text"
            className="trigger"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <div className="titleBar">
          <h3 className="title">{titleMap[location.pathname]}</h3>
        </div>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideBar;

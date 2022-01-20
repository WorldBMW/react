import { Layout, Menu } from 'antd';

import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Route,Link,Routes } from 'react-router-dom'
import './index.css'
import Home from '../../views/home/home.jsx'
import About from '../../views/about/about.jsx'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Index extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} ><Link to="/home"></Link>
            home
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} ><Link to="/about"></Link>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User" >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" >
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: this.toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
            <Routes>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/about" element={<About></About>}></Route>
            </Routes>
        </Content>
      </Layout>
    </Layout>
    );
  }
}

export default Index;
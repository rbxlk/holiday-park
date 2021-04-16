import React from 'react';
import logo from './logo.svg';
import { Layout, Menu } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

const App = () => (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">FAQs</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
        </Menu>
      </Header>
    </Layout>
);

export default App;

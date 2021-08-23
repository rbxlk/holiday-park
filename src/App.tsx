import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import { Layout, Menu } from 'antd';
import './App.css';

const { Header, Footer, Content } = Layout;

const App = () => (
    <Layout className="layout">
      <Header>
          <Menu theme ="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/about">
                About
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/faq">
                FAQ
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact">
                Contact
              </Link>
            </Menu.Item>
          </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route path="/about" >
                <About />
            </Route>
            <Route path="/faq" >
                <Faq />
            </Route>
            <Route path="/contact" >
                <Contact />
            </Route>
          </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>rbxlk ©2018 Created by Robert Luck</Footer>
    </Layout>
);

export default App;

const About = () => {
  return <div className="site-layout-content">ABOUT PAGE</div>
}

const Faq = () => {
  return <div className="site-layout-content">FAQ PAGE</div>
}

const Contact = () => {
  return <div className="site-layout-content">CONTACT PAGE</div>
}

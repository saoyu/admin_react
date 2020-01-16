import React from "react";
import './index.less'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MyLayout extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header className="header" >
                    <div className="top-navbar">
                        <div className="navbar-left">
                            <Link to='/'>
                                <b>This is my mall</b>
                            </Link>
                        </div>
                        <ul className="navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" href="javascript:;">
                                    <span>欢迎您</span>
                                </a>
                                <a className="dropdown-menu">
                                    <span>退出登录</span>

                                </a>
                            </li>
                        </ul>
                    </div>
                </Header>
                <Layout>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>商品</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="3">
                                    <Link to='/product'>商品管理</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to='/product-category'> 品类管理</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="team" />
                                        <span>订单</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="6">
                                    <Link to='order'>
                                        订单管理</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        <span>用户</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="7">
                                    <Link to='/user'>
                                    用户管理
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>

            </Layout >
        );
    }
}

export default MyLayout;
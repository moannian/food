// 引入组件
import React, { Component } from 'react';
import { TabBar } from 'antd-mobile'
// 引入css
import '../assets/css/Tabbar.css'
// 引入图片
import classfiy from '../assets/img/classfly.png'
import home from '../assets/img/主页.png'
import Location from '../assets/img/地点.png'
import more from '../assets/img/更多.png'
// 引入UI
import Home from '../view/Home/Home'
import Classify from '@/view/Classfiy/index'


class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '美食大全',
            hidden: false,
            fullScreen: true,
        };
    }


    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="美食大全"
                        key="美食大全"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === '美食大全'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '美食大全',
                            });
                        }}
                        data-seed="logId"
                    >
                        <Home />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${classfiy}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="分类"
                        key="分类"

                        selected={this.state.selectedTab === '分类'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '分类',
                            });
                        }}

                    >
                        <Classify />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${Location}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="美食地点"
                        key="美食地点"

                        selected={this.state.selectedTab === '美食地点'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '美食地点',
                            });
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${more}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="更多"
                        key="更多"
                        selected={this.state.selectedTab === '更多'}
                        onPress={() => {
                            this.setState({
                                selectedTab: '更多',
                            });
                        }}
                    >


                    </TabBar.Item>
                </TabBar>
            </div >
        );
    }
}
export default Tabbar
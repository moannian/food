// 轮播图
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'
import { getImg } from '../../redux/action'
// 引入组件
import { get } from '../../axios/axios'

// 引入css

class carousel extends Component {
    state = {
        data: [],
        imgHeight: 600,
    }
    componentDidMount() {
        // 模拟异步请求
        get('mock/swiper').then(res => {
            this.props.getImg(res.data)

            this.setState({
                data: this.props.list
            });
        })
    }
    render() {
        return (

            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                autoplay='true'
            >
                {this.state.data.map(val => (
                    <a
                        key={val}
                        href='#'
                        style={{ display: 'inline-block', width: '100%', height: "13rem" }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                ))}
            </Carousel>

        );
    }
}
// 静态数据获取
const state = (state) => {
    return {
        list: state.redusers
    }
}
// 方法数据获取
const dispatch = { getImg }
export default connect(state, dispatch)(carousel)

import React, { Component } from 'react';
// 引入路由
import { withRouter } from 'react-router-dom'
import Router from '../../../router/index'
class Top extends Component {
    state = {
        dir: "left"
    }
    // 点击传参返回的必须是一个函数
    btn = (dir, path) => {
        return () => {
            this.setState({
                dir
            })
            this.props.history.push(path)
        }
    }

    render() {

        return (
            <div>
                <div className='top'>
                    <div className='box'>
                        <p className={this.state.dir == "left" ? "active" : ""} onClick={this.btn('left', '/classify')}>分类</p>
                        <p className={this.state.dir == "right" ? "active" : ""} onClick={this.btn('right', '/materials')}>食材</p>
                    </div>

                </div >
                <Router />
            </div>
        )
    }
}
export default withRouter(Top)

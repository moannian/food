import React, { Component } from "react"
// 引入UI
import Top from './ClassifyCom/Top'
// 引入css
import "@/assets/css/Classify.css"
// 引入路由
import Router from '@/router/index'
import { BrowserRouter } from 'react-router-dom'
class classify extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Top />
                </BrowserRouter>
                <Router></Router>
            </div>
        )
    }
}
export default classify
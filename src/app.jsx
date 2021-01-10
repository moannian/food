// 引入组件
import React, { Component } from 'react';
import { Provider } from 'react-redux'

// 引入UI
import Tabbar from './components/Tabbar'
import store from './redux/index'
// 引入css
// 引入路由
// import Router from './router/index'
import './assets/css/Base.css'
class App extends Component {
    render() {
        return (
            <Provider store={store} >
                <div>
                    <Tabbar />
                    {/* <Router></Router> */}
                </div>
            </Provider>
        )
    }
}
export default App
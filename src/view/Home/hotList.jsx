import React, { Component } from 'react';
import { connect } from 'react-redux'
// 引入css 
import '@/assets/css/Home.css'
class HotList extends Component {
    render() {
        return (
            <div className="HotList">
                <header>精品好菜</header>
                <ul>
                    <li>
                        <figure>
                            <img src='https://img04.sogoucdn.com/app/a/100520024/5a318e64fea92964636923b79d5563d8' alt="" />
                            <figcaption>
                                <h3>李权</h3>
                            </figcaption>
                        </figure>
                    </li>

                </ul>
            </div>
        )
    }
}
const state = (state) => {
    return {
        list: state
    }
}
const dispatch = {}
export default connect(state, dispatch)(HotList)
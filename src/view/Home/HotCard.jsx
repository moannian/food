import React, { Component } from 'react';
import { Grid } from 'antd-mobile'

// 映入ul 
import { get } from '../../axios/axios'
// 引用css
import "../../assets/css/Home.css"

class HotCard extends Component {
    state = {
        arr: []
    }
    componentDidMount() {
        get("mock/home").then(res => {
            const getArr = res.data
            this.setState({ arr: getArr })
        })
    }
    render() {
        const { arr } = this.state
        const data = arr.map((item) => {
            return ({
                title: item.title,
                icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',

            })
        })

        return (
            <div>
                <header>热门分类</header>
                <Grid data={data}
                    columnNum={3}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div className='hotcard'>
                            <img src={dataItem.icon} />
                            <span>{dataItem.title}</span>
                        </div>
                    )}
                />
            </div>
        )
    }
}
export default HotCard

import React from 'react'
import { TabBar } from 'antd-mobile'
const Item = TabBar.Item
function Tab(prop) {
    return (

        <Item
            title={prop.name}
            icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${prop.img}) center center /  21px 21px no-repeat`
            }}
            />
            }
        ></Item>

    )
}
export default Tab
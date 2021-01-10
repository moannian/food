import React from 'react'
import { NavBar } from 'antd-mobile'
function Nav(props) {
    return (
        <div>
            <NavBar style={{ background: 'orange' }}>{props.name}</NavBar>
        </div>
    )
}
export default Nav
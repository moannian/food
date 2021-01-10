import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile'
// 引入css
import '../../assets/css/Home.css'
class Search extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder='你想吃的东西' className='search' />
            </div>
        )

    }
}
export default Search
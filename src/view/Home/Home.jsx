import React, { Component } from 'react';
// 引入Ul
import NavBar from '../../components/public/NavBar';
import Carousel from './Carousel'
import Search from './Search'
import HotCard from './HotCard'
import HotList from './hotList'
class Home extends Component {

    render() {
        return (
            <div>
                <NavBar name='美食大全' />
                <Carousel />
                <Search />
                <HotCard />
                <HotList />
            </div>
        )
    }
}
export default Home
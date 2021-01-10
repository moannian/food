import React, { Component } from 'react';
import { Redirect, Switch, Route, HashRouter } from 'react-router-dom'
// UI组件
import Classify from '@/view/Classfiy/ClassifyCom/Classify';
import Materials from '@/view/Classfiy/ClassifyCom/Materials'
class router extends Component {
    render() {
        return (
            <div>
                <HashRouter >
                    <Switch>
                        <Route path='/classify' component={Classify} ><Classify /></Route>
                        <Route path='/materials' component={Materials}><Materials /></Route>
                        <Redirect to='/classify'></Redirect>
                    </Switch>
                </HashRouter>
            </div>
        )

    }
}
export default router
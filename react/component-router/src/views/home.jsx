import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MyNavLink from "../component/custom-NavLink/my-Nav-Link";
import News from "./news";
import Message from "./message";

export default class Home extends Component {

    render() {
        return (
            <div>
                <p>Home route component</p>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            <Redirect to='/home/news'/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

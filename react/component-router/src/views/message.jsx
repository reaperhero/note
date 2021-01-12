import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MessageDetail from "./message-detail";
import MyNavLink from "../component/custom-NavLink/my-Nav-Link";

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        // 模拟发送ajax请求
        setTimeout(() => {
            const data = [
                {id: 1, title: 'message001'},
                {id: 3, title: 'message002'},
                {id: 5, title: 'message006'},
                {id: 7, title: 'message000'},
            ]
            this.setState({
                messages: data
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            </li>
                        ))
                    }
                </ul>
                <Route path={'/home/message/messagedetail/:id'} component={MessageDetail}></Route>
            </div>
        )
    }
}

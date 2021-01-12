import React, {Component} from 'react'

import Userlist from "./userlist";
import Search from "./search";

export default class App extends Component {


    render() {
        return (
            <div className="container">
                <Search></Search>
                <Userlist></Userlist>
            </div>
        )
    }
}

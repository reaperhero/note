import React, {Component} from 'react'

import Userlist from "./userlist";
import Search from "./search";

export default class App extends Component {

    state = {
        searchName: ''
    }

    setSearchName = (searchName) => {
        this.setState({searchName})
    }

    render() {
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}></Search>
                <Userlist searchName={this.state.searchName}></Userlist>
            </div>
        )
    }
}

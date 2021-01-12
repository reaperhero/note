import React, {Component} from 'react'

export default class News extends Component {

    state = {
        newsArr: [
            'news01',
            'news02',
            'news03',
            'news04',
        ]
    }

    render() {
        return (
            <ul>
                {
                    this.state.newsArr.map((news, index) => <li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}

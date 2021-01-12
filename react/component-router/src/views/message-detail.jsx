import React, {Component} from 'react'

const allmessage = [
    {id: 1, title: 'message001', content: 'I love you1'},
    {id: 3, title: 'message002', content: 'I love you2'},
    {id: 5, title: 'message006', content: 'I love you3'},
    {id: 7, title: 'message000', content: 'I love you4'},
]

export default class MessageDetail extends Component {


    render() {
        // 得到参数id
        const {id} = this.props.match.params

        const message = allmessage.find((m) => m.id === id * 1)


        return (
            <ul>
                <li>Id: {message.id}</li>
                <li>Title: {message.title}</li>
                <li>Content: {message.content}</li>
            </ul>
        )
    }
}

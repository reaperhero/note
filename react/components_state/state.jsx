class Like extends React.Component {
  constructor (props) {
    super(props)
    // 初始化状态
    this.state = {
      isLikeMe: true
    }
    // 绑定this为组件对象
    this.change = this.change.bind(this)
  }
  change () {
    this.setState({
      isLikeMe: !this.state.isLikeMe
    })
  }
  render () {
    console.log('render()')
    const text = this.state.isLikeMe ? '你喜欢我' : '我喜欢你'
    return <h2 onClick={this.change}>{text}</h2>
  }
}

ReactDOM.render(<Like />, document.getElementById('example'))
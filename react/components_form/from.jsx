class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({username: event.target.value})
  }

  handleSubmit(event) {
    alert(`准备提交的用户名为: ${this.state.username}, 密码:${this.pwdInput.value}`)

    // 阻止事件的默认行为: 提交表单
    event.preventDefault()
  }
  render () {

    return (
      <form onSubmit={this.handleSubmit} action="/test">
        <label>
          用户名:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </label>&nbsp;
        <label>
          密码:
          <input type="password" ref={(input) => this.pwdInput = input} />
        </label>&nbsp;
        <input type="submit" value="登陆" />
      </form>
    )
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('example'))
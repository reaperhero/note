//定义组件
class MyComponent extends React.Component {
  constructor(props) {
    super(props) // 调用父类(Component)的构造函数
    //console.log(this)
    // 将自定义的函数强制绑定为组件对象
    this.handleClick = this.handleClick.bind(this) // 将返回函数中的this强制绑定为指定的对象, 并没有改变原来的函数中的this
    this.handleBlur = this.handleBlur.bind(this) 
  }
  // 自定义的方法中的this默认为null
  handleClick () {
    // alert(this) //this默认是null, 而不是组件对象
    // 得到绑定在当前组件对象上的input的值
    alert(this.msgInput.value)
  }
  handleBlur (event) {
    alert(event.target.value)
  }
  render () {
    return (
      <div>
        <input type="text" ref={input => this.msgInput = input}/>{' '}
        <button onClick={this.handleClick}>提示输入数据</button>{' '}
        <input type="text" placeholder="失去焦点提示数据" onBlur={this.handleBlur}/>
      </div>
    )
  }
}
// 渲染组件标签
ReactDOM.render(<MyComponent />, document.getElementById('example'))
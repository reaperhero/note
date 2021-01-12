//1. 定义组件类
class Person extends React.Component {
  render() {
    console.log(this)
    return (
      <ul>
        <li>姓名: {this.props.name}</li>
        <li>性别: {this.props.sex}</li>
        <li>年龄: {this.props.age}</li>
      </ul>
    )
  }
}
// 对标签属性进行限制
Person.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number
}
// 指定属性的默认值
Person.defaultProps = {
  sex: '男',
  age: 18
}

//2. 渲染组件标签
const person = {
  name: 'Tom',
  sex: '女',
  age: 18
}
ReactDOM.render(<Person {...person}/>, document.getElementById('example1'))
const person2 = {
  myName: 'JACK',
  age: 17
}
ReactDOM.render(<Person name={person2.myName} age={person2.age}/>,
  document.getElementById('example2'))
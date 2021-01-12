# Reactdemo


## redux

- 核心概念

action: 
    默认是对象(同步action), {type: 'xxx', data: value}, 需要通过对应的actionCreator产生, 
    它的值也可以是函数(异步action), 需要引入redux-thunk才可以
reducer
    根据老的state和指定的action, 返回一个新的state
    不能修改老的state
store
    redux最核心的管理对象
    内部管理着: state和reducer
    提供方法: getState(), dispatch(action), subscribe(listener)

- redux工作流程

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

![](https://i.imgur.com/2R5G8bG.png)
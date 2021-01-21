# 基础

## 数据类型

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。

引用数据类型：对象(Object)、数组(Array)、函数(Function)




Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值

Undefined 这个值表示变量不含有值。

"use strict" 的目的是指定代码在严格条件下执行。不能使用未声明的变量。

- 字符串（String）

```
// charAt()根据字符位置返回所在位置的字符串
// charCodeAt()根据字符位置返回所在位置字符串的字符编码
var str = 'hello world';
str.charAt(1);      // 'e'
str.charCodeAt(1);    // '101'

// fromCharCode() 接收字符编码转为字符串
String.fromCharCode(104,101,108,108,111) //'hello'

// concat()将字符拼接起来得到新字符串
var str="hello"
str.concat(' world'); // "hello world"

// indexOf()和lastIndexOf() 返回字符位置
// trim() 删除空格
// toLowerCase() 转小写,toUpperCase() 转大写
// localeCompare()  根据字母表比较排序

```


- Number类型

不区分整数和浮点数

```
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
```


- 数组

数组可以包括任意数据类型

```
[1, 2, 3.14, 'Hello', null, true];

# 数组的方法
// 会改变原数组
pop()       // 末尾删除
push()      // 末尾新增
shift()     // 开头删除
unshift()   // 开头新增
reverse()   // 数组反转
sort()      // 排序
splice()    // 修改数组（删除插入替换）
// 不会改变原数组
concat()    // 合并数组
slice()     // 选择数组的一部分
indexOf()   // 顺序查找指定元素下标
lastIndexOf()   // 倒序查找指定元素下标

// 迭代方法
// every()查询数组是否每一项都满足条件
// some()查询数组中是否有满足条件的项
// filter()过滤，返回true的项组成的数组
// map()对每一项运行给定函数，返回每次函数调用结果组成的数组
// forEach()对每一项运行给定函数，无返回值
var numbers = [1,2,3,4,5,4,3,2,1];
numbers.every(function(item,index,array){
    return item>2;
})  // false
numbers.some(function(item,index,array){
    return item>2;
})  // true
numbers.filter(function(item,index,array){
    return item>2;
})  // [3,4,5,4,3]
numbers.map(function(item,index,array){
    return item*2;
})  // [2,4,6,8,10,8,6,4,2]
numbers.forEach(function(item,index,array){
    // 执行某些操作
})  // 无返回值


// 归并方法
// reduce()从第一项开始逐个遍历到最后
// reduceRight()从最后一项开始向前遍历到第一项
var values = [1,2,3,4,5];
values.reduce(function(prev,cur,index,array){
    return prev+cur;
}) // 15
// reduceRight()结果一样，顺序相反


```

- 对象

键-值组成的无序集合

```
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
```


没有return语句，函数执行完毕后也会返回结果，只是结果为undefined

JavaScript的函数也是一个对象
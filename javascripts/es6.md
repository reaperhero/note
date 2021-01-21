# es特性

Map: js对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。Map为了解决这个问题


iterable: 遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型。Array、Map和Set都属于iterable类型。iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数
```
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
```

解构赋值: var [x, y, z] = ['hello', 'JavaScript', 'ES6'];


箭头函数: 箭头函数相当于匿名函数，并且简化了函数定义

generator（生成器）: 是ES6标准引入的新的数据类型
# ts

## 介绍
TypeScript 是一种给 JavaScript 添加特性的语言扩展。增加的功能包括

```
类型批注和编译时类型检查
类型推断
类型擦除
接口
枚举
Mixin
泛型编程
名字空间
元组
Await
```



##  基础类型

|关键字|描述|
|---|---|
|any|任意类型的值|
|number|整数和分数|
|string|字符串|
|boolean|逻辑值|
|数组|let arr: number[] = [1, 2]; let arr: Array<number> = [1, 2];|
|元组|let x: [string, number];|
|enum|enum Color {Red, Green, Blue};|
|void|没有返回值|
|null|对象值缺失|
|undefined|未定义的值|
|never|包括 null 和 undefined|


类型断言: 从一种类型更改为另一种类型

```
var str = '1' 
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)
```


## 作用域

全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。

类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。

局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用


```
var global_num = 12          // 全局变量
class Numbers { 
   num_val = 13;             // 实例变量
   static sval = 10;         // 静态变量
   
   storeNum():void { 
      var local_num = 14;    // 局部变量
   } 
} 
console.log("全局变量为: "+global_num)  
console.log(Numbers.sval)   // 静态变量
var obj = new Numbers(); 
console.log("实例变量: "+obj.num_val)
```

## 条件语句

```
if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
switch 语句 - 使用该语句来选择多个代码块之一来执行
```


## 访问控制修饰符

TypeScript 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。TypeScript 支持 3 种不同的访问权限。

public（默认） : 公有，可以在任何地方被访问。

protected : 受保护，可以被其自身以及其子类和父类访问。

private : 私有，只能被其定义所在的类访问。


## 命名空间

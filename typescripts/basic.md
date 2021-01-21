# ts基础

- 布尔值
```
let isDone: boolean = false;
isDone = true;
```

- 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数,类型是 number
```
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制
```

- 字符串
```
let name:string = 'tom'
name = 'jack'

let age:number = 12
const info = `My name is ${name}, I am ${age} years old!`
```

- undefined 和 null

TypeScript 里，undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。 它们的本身的类型用处不是很大：

```
let u: undefined = undefined
let n: null = null
```

- 数组

```
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

```

- 元组 Tuple

已知元素数量和类型的数组，各元素的类型不必相同

```
let t1: [string, number]
t1 = ['hello', 10] // OK
t1 = [10, 'hello'] // Error
```

- 枚举

```
enum Color {
  Red,    // 枚举数值默认从0开始依次递增
  Green,
  Blue
}

let myColor: Color = Color.Green  // 0
console.log(myColor, Color.Red, Color.Blue)


enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]

console.log(colorName)  // 'Green'
```


- any
不清楚类型的变量指定一个类型
```
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean


let list: any[] = [1, true, 'free']
list[1] = 100
```

- void

```
当一个函数没有返回值时，你通常会见到其返回值类型是 void
function fn(): void {
  console.log('fn()')
  // return undefined
  // return null
  // return 1 // error
}
```


- object

object 表示非原始类型，也就是除 number，string，boolean之外的类型

```
function fn2(obj:object):object {
  console.log('fn2()', obj)
  return {}
  // return undefined
  // return null
}
console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))
```


- 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种

```
function toString2(x: number | string) : string {
  return x.toString()
}
```

- 类型断言

只是在编译阶段起作用。类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法

/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

```
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}
console.log(getLength('abcd'), getLength(1234))
```


- 类型推断

TS会在没有明确的指定类型的时候推测出一个类型
```
/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'
```
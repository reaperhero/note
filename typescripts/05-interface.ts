
interface Person {
    firstName: string
    lastName: string
}

function greeter (person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = {  // 实现接口时候只要保证包含了接口要求的结构就可以
    firstName: 'Yee',
    lastName: 'Huang'
}

console.log(greeter(user))

//约束TOM这个对象，必须和接口一致属性。
//一般接口的首字母大写。
//用接口定义的对象，属性不能多写，也不能少写

let tom1:object = {
    name:'abc',
    age:20
}

//接口属性可选
interface Student{
    name:string;
    age?:number;
}

let s1:Student = {
    name:"小明",
    age:16,
}

//任意属性
interface Teacher{
    name:string;
    age?:number;
    [propName:string]:any;
}

let t1:Teacher={
    name:"老王",
    age:35,
    school:'清华'
}

interface Cat{
    //只读属性，只能进行1次赋值，后面不可以在修改，但是可以获取
    readonly name:string;
    color:string;
    age:number;
}

let c1:Cat = {
    name:'波斯猫',
    color:"白色",
    age:10
}

//c1.name = '中华猫'; //会报错，因为c1.name是只读属性


//implements,类实现接口的关键词
class SmallCat implements Cat{
    name:string = "小猫";
    color:string = "黑色";
    age:number = 16;
    
    constructor(){
        
    }
}

let c2 = new SmallCat()
c2.name = "abc"
c2.name = '789'




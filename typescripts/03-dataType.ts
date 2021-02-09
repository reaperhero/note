let isDone:boolean = true;
isDone = false;
let isCheck:boolean = Boolean(1)

//let isCheck:boolean = new Boolean(1)

let num:number = 1;
let num16:number = 0xf00a;
let notNum:number = NaN;
let infNum:number = Infinity;


let username:string = 'laochen';
username = undefined;
let abc:undefined = undefined;
let cba:void = undefined;
username = abc;
//username = cba;
let age:number = 30;

let juzi:string = `我的年龄是${age}`;

//空值
function hello():void{
    console.log('helloworld')
}


let unable:void = undefined;
unable = null;

//null和undefined类型,意义不大
let a:undefined = undefined;
a = null;

let b:null = null;
b = undefined;

//任意值类型
let admin:any = 'adbc'
admin = 123;

//任意值类型允许访问他任意的属性
let anything:any = 'hello';
console.log(anything.myname);

let something1;
//something1在声明时候未定义类型，也没有赋值，就会被定义为任意值类型
something1 = 'abc';
something1 = 123;


//something2在声明的时候虽然未定义类型，但是由于赋值为字符串，typescript有类型推断规则，会将赋值的类型定义成变量的类型
let something2 = 'abc';
//something2 = 123;//会报错

//联合类型
let cat:string|number;
cat = '小猫咪';
cat = 1;

let cat1:string|number = '小猫咪';




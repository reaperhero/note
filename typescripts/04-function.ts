//JavaScript方式：函数声明
function sum(x,y){
    return x+y;
}

//JavaScript方式：函数表达式
let fnSum = function(x,y){
    return x+y;
}

//typescript会对函数的输入和输出有约束，
//输入和输出会定义类型，参数传入（参数定义类型），返回值（定义类型）

function sum1(x:number,y:number) :number{
    return x+y;
}

let result:number = sum1(3,4);


//函数表达式写法

let sum2 = function(x:number,y:number) :number{
    return x+y;
}
//这种写法，实质上仅将右侧匿名函数进行了类型的定义。对左边sum2这个变量没有实质的定义；

let sum3:(x:number,y:number) => number = function(x:number,y:number) :number{
    return x+y;
}
//=>,在typescript中用于函数的定义，左边输入类型，右边输出的类型。

//typescript中函数的参数，是不能随意传任意数量的值。
//sum3(3,4)

//可选参数
function sumName(firstname:string,lastname?:string):string{
    return firstname+lastname;
}
sumName('lao',"chen");
sumName('lao');
//注意：可选参数必须放置到必须参数的后面，可选参数后面不允许放置必须要的参数
//不允许
// function sumName2(lastname?:string,firstname:string,):string{
//     return firstname+lastname;
// }

//默认参数
function sumName3(firstname:string='chen',lastname:string='guan'):string{
    return firstname+lastname;
}


//剩余参数
//ES6正常模式
function fnpush(...items){

}

function fnpush1(...items:any[]):string{
    return 'abc';
}

//重载
//重载允许1个函数，接收不同数量或者类型的参数
function setAbc(x:number|string):number|string{
    return x;
}

function fnAbc(x:boolean):boolean;
function fnAbc(x:number):number;
function fnAbc(x:string):string;
function fnAbc(x:any):any{
    if(typeof x==='number'){
        return x;
    }else{
        return x
    }
}

fnAbc('1')
fnAbc(false)







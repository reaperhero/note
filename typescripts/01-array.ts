//设定数组的类型
let arr = [1,2,3]
let arr1:number[]  = [1,2,3]
//arr1.push('1');//会报错，不允许

//数组泛型的定义方式
let arr2:Array<number> = [1,2,3];
//arr2.push("123")//会报错


//接口表示数组类型
interface NumberArray{
    [index:number]:number
}

let arr3:NumberArray = [1,2,3]
arr3[3] =4;
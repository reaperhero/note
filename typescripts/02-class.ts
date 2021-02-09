//定义静态方法
class Animal{
    static isAnimal(a){
        return  a instanceof Animal;
    }
}


let dog = new Animal();
Animal.isAnimal(dog);

//typescript静态属性
class Dog{
    static age =20;
}

console.log(Dog.age)

//类属性
class Abc{
    a = 1;
    b = 3;
    private c = 4;
    constructor(){
        this.a = 1;
        this.b = 2;
        this.c = 3;
    }
}

//属性可以有3种访问的修饰符进行修饰，public/private/protect
//public,任何地方都可以访问，默认所有的属性都是public
//private,私有的，只能在类的内容访问，不能类外面访问
//protected,受保护的，protect在子类里可以访问，private是不允许的


class Banana{
    private name;
    public constructor(name){
        this.name = name;
    }
}

let aa = new Banana('海南香蕉');
//console.log(aa.name)//不能获取，name是私有属性
//aa.name = '巴黎香蕉' //不能访问，name是私有属性


class Apple{
    protected name;
    public constructor(name){
        this.name = name
    }
}

//protect在子类中允许访问。
class BigApple extends Apple{
    private constructor(name){
        super(name)
        console.log(this.name)
    }
}
//如果构造函数式私有的将不能实例化
//let bb = new BigApple('aaaa');

//抽象类，抽象类不允许实例化，一般用于继承实现。
abstract class PinkPig{
    public name;
    constructor(name){
        this.name = name
    }
    //只定义，不实现
    public abstract sayHi();
}

class SmallPinkPig extends PinkPig{
    sayHi(){
        console.log("helloworld")
    }
}

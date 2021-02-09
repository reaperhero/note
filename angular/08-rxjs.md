# rsjx

## 同步

```
- ts
getData(){
    return 'this is service data';
}

let data=this.request.getData();

console.log(data);
```
## 异步

1. callback获取异步数据

```
getCallbackData(cb){
    setTimeout(() => {
        var username='张三';  
        cb(username);
    }, 1000);
}

this.request.getCallbackData((data)=>{
  console.log(data);
});
```

2. promise获取异步数据
```
getPromiseData(){
    return new Promise((resolve)=>{      
        setTimeout(() => {
            var username='张三--Promise';
            resolve(username);        
        }, 3000); 
    })
}

var promiseData=this.request.getPromiseData();

promiseData.then((data)=>{
  console.log(data);
})
```


3. rxjs获取异步方法里面的数据

```
getRxjsData(){
    return new Observable<any>((observer)=>{
        setTimeout(() => {
            var username='张三--Rxjs';
            observer.next(username);     
            // observer.error('数据')        
        }, 3000); 
    })
}

var rxjsData=this.request.getRxjsData();
rxjsData.subscribe((data)=>{
    console.log(data);
})

setTimeout(()=>{
    d.unsubscribe();  /*取消订阅,上面将不会打印*/
},1000)


```

- rxjs可以执行多次，promise不行

```
getRxjsIntervalData(){
    let count=0;
    return new Observable<any>((observer)=>{
        
        setInterval(() => {

            count++;
            var username='张三--Rxjs-Interval'+count;
            observer.next(username);     
            // observer.error('数据')        
        }, 1000); 
    })
}

var streemInterval=this.request.getRxjsIntervalData();
streemInterval.subscribe((data)=>{
    console.log(data);
})
```

- 用工具方法对返回的数据进行处理

```
getRxjsIntervalNum(){
    let count=0;
    return new Observable<any>((observer)=>{
        setInterval(() => { 
            count++;
            observer.next(count);     
            // observer.error('数据')        
        }, 1000); 
    })
}


var streemNum=this.request.getRxjsIntervalNum();
streemNum.pipe(
    filter((value)=>{

        if(value%2==0){
        return true;
        }
    })
)      
.subscribe((data)=>{
    console.log(data);
})

var streemNum=this.request.getRxjsIntervalNum();
streemNum.pipe(
    map((value)=>{

    return value*value;
    })
)      
.subscribe((data)=>{
    console.log(data);
})
```
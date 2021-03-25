# 命名空间

## 创建

- IShape.ts
```
namespace Drawing { 
    export interface IShape { 
        draw(); 
    }
}
```

- Circle.ts
```
namespace Drawing { 
    export class Circle implements IShape { 
        public draw() { 
            console.log("Circle is drawn"); 
        }  
    }
}
```

- Triangle.ts
```
namespace Drawing { 
    export class Triangle implements IShape { 
        public draw() { 
            console.log("Triangle is drawn"); 
        } 
    } 
}
```

- 测试文件TestShape.ts 
```
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
```

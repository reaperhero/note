## 3.1	Mustache语法

​	mustache是胡须的意思，因为`{{}}`像胡须，又叫大括号语法。

​	在vue对象挂载的dom元素中，`{{}}`不仅可以直接写变量，还可以写简单表达式。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mustache的语法</title>
</head>
<body>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{message}},啧啧啧</h2>

    <!-- Mustache的语法不仅可以直接写变量，还可以写简单表达式 -->
    <h2>{{firstName + lastName}}</h2>
    <h2>{{firstName + " " + lastName}}</h2>
    <h2>{{firstName}}{{lastName}}</h2>
    <h2>{{count * 2}}</h2>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el:"#app",
      data:{
        message:"你好啊",
        firstName:"skt t1",
        lastName:"faker",
        count:100
      }
    })

  </script>
</body>
</html>
```
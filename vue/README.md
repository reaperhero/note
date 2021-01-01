# vue-learn

#### 属性

```
Vue 构造器中有一个el 参数，它是 DOM 元素中的 id
data 用于定义属性，实例中有三个属性分别为：site、url、alexa。
methods 用于定义的函数，可以通过 return 来返回函数值
filters
computed
watch
components
directives
```

#### 指令

```
文本 {{...}}
v-html 指令用于输出 html 代码
属性v-bind
表达式
v-if 指令是否插入  v-else 指令 v-else-if
v-show
v-on 指令
v-model 指令
自定义指令
```


### 表达式

- Mustache的语法

Mustache的语法不仅可以直接写变量，还可以写简单表达式

```
{{firstName + lastName}}
{{firstName + " " + lastName}}
{{firstName}}{{lastName}}
{{count * 2}}
```


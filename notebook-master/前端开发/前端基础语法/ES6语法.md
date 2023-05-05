## 第一章：ES6简介

### 1.ES6是什么？

ES 的全称是 ECMAScript , 它是由 ECMA 国际标准化组织,制定的**一项脚本语言的标准化规范**。

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

### 2.ECMAScript 和 JavaScript 的关系

一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？

要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。

该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。

因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

### 3.ECMAScript 的历史

ES6 从开始制定到最后发布，整整用了 15 年。

前面提到，ECMAScript 1.0 是 1997 年发布的，接下来的两年，连续发布了 ECMAScript 2.0（1998 年 6 月）和 ECMAScript 3.0（1999 年 12 月）。3.0 版是一个巨大的成功，在业界得到广泛支持，成为通行标准，奠定了 JavaScript 语言的基本语法，以后的版本完全继承。直到今天，初学者一开始学习 JavaScript，其实就是在学 3.0 版的语法。

2000 年，ECMAScript 4.0 开始酝酿。这个版本最后没有通过，但是它的大部分内容被 ES6 继承了。因此，ES6 制定的起点其实是 2000 年。

为什么 ES4 没有通过呢？因为这个版本太激进了，对 ES3 做了彻底升级，导致标准委员会的一些成员不愿意接受。ECMA 的第 39 号技术专家委员会（Technical Committee 39，简称 TC39）负责制订 ECMAScript 标准，成员包括 Microsoft、Mozilla、Google 等大公司。

2007 年 10 月，ECMAScript 4.0 版草案发布，本来预计次年 8 月发布正式版本。但是，各方对于是否通过这个标准，发生了严重分歧。以 Yahoo、Microsoft、Google 为首的大公司，反对 JavaScript 的大幅升级，主张小幅改动；以 JavaScript 创造者 Brendan Eich 为首的 Mozilla 公司，则坚持当前的草案。

2008 年 7 月，由于对于下一个版本应该包括哪些功能，各方分歧太大，争论过于激烈，ECMA 开会决定，中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分，发布为 ECMAScript 3.1，而将其他激进的设想扩大范围，放入以后的版本，由于会议的气氛，该版本的项目代号起名为 Harmony（和谐）。会后不久，ECMAScript 3.1 就改名为 ECMAScript 5。

2009 年 12 月，ECMAScript 5.0 版正式发布。Harmony 项目则一分为二，一些较为可行的设想定名为 JavaScript.next 继续开发，后来演变成 ECMAScript 6；一些不是很成熟的设想，则被视为 JavaScript.next.next，在更远的将来再考虑推出。TC39 委员会的总体考虑是，ES5 与 ES3 基本保持兼容，较大的语法修正和新功能加入，将由 JavaScript.next 完成。当时，JavaScript.next 指的是 ES6，第六版发布以后，就指 ES7。TC39 的判断是，ES5 会在 2013 年的年中成为 JavaScript 开发的主流标准，并在此后五年中一直保持这个位置。

2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。

2013 年 3 月，ECMAScript 6 草案冻结，不再添加新功能。新的功能设想将被放到 ECMAScript 7。

2013 年 12 月，ECMAScript 6 草案发布。然后是 12 个月的讨论期，听取各方反馈。

2015 年 6 月，ECMAScript 6 正式通过，成为国际标准。从 2000 年算起，这时已经过去了 15 年。

|   年份    |  版本  |
| :-------: | :----: |
| 2015年6月 | ES2015 |
| 2016年6月 | ES2016 |
| 2017年6月 | ES2017 |
| 2018年6月 | ES2018 |
|    ...    |  ...   |

ES6 实际上是一个泛指，泛指  ES2015 及后续的版本。 

### 4.为什么使用 ES6 ?

每一次标准的诞生都意味着语言的完善，功能的加强。JavaScript语言本身也有一些令人不满意的地方。

- 变量提升特性增加了程序运行时的不可预测性
- 语法过于松散，实现相同的功能，不同的人可能会写出不同的代码

## 第二章：var、let 和 const的使用

var、let和const命令用于声明变量。
var、let声明的变量是可变的，const声明的变量是不可变的（常量）。

### 一、var

1. 可以重复声明，且存在变量提升
2. 没有块级作用域

```JavaScript
<!--可以重复声明-->
var a = "this is a";
var a = "this is another a";    //重复声明了a
console.log(a);                 //输出this is another a
<!--存在变量提升-->
console.log(b);     //变量提升，var b 被提升至所在作用域顶部，输出undefined
var b = "this is b";
<!--无法限制修改-->
var c = "this is c";
c = "this is cc";
c = "this is ccc";
console.log(c);　　//输出this is ccc
<!--没有块级作用域-->
if(true){
    var d = "this is d";
    console.log(d); //输出this is d       
}
console.log(d);     //输出this is d
```

### 二、let命令

ES6中新增的用于声明变量的关键字。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。(块级作用域)
**1、基础用法**

```JavaScript
 if (true) { 
     let a = 10;
 }
 console.log(a) // a变量未定义(not defined)
```

注意：使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性。

**2、变量提升问题**
var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。建议变量都声明了再使用，避免这种问题。
let命令所声明的变量一定要在声明后使用，否则报引用错误。

```JavaScript
/* 不存在变量提升 */
console.log(a);  //undefined
var a = "piante";
console.log(b);  //ReferenceError引用错误
let b = "piante";
console.log(b); //piante  先声明再使用
```

**3、不允许重复声明**
在同一个块级作用域中，let声明的变量不允许重复声明，否则会报错。

```javascript
if (true) { 
   let a = 'chenzhifeng';
   let a = 'piante'; //报错 重复声明
 }//报错 重复声明};
```

**4、块级作用域**
es6中let提供了块级作用域，在同一个作用域内，不能重复声明一个变量，但是在不同的作用域可以声明名字相同的变量。

```javascript
if(true){
     let temp = 'hello';
     if (true) {
        let temp = 'world';
        console.log(temp); //world  
     }
    console.log(temp);  //hello
}
```

**5、经典面试题**



```javascript
 var arr = [];
 for (var i = 0; i < 2; i++) {
     arr[i] = function () {
         console.log(i); 
     }
 }
 arr[0]();//2
 arr[1]();//2
```

![image-20210225145716226](https://s2.loli.net/2022/08/15/eVOa3cJ7brlCUfN.png)

经典面试题图解：此题的关键点在于每次循环都会产生一个块级作用域，每个块级作用域中的变量都是不同的，函数执行时输出的是自己上一级（循环产生的块级作用域）作用域下的i值.

### 三、const命令

**1、基本用法**
const用于声明一个常量，一旦声明之后它的值就不能再修改，相当于java中的final常量。const只声明不赋值，就会报错,所以定义的时候就必须初始化。

```JavaScript
const temp1;  //报错：必须初始化 Missing initializer in const declaration
const temp2 = 'hello world';
console.log(temp2); //hello world
temp2 = 'piante'; //报错 const不能再改变值
```

**2、块级作用域与不可重复声明**

原理与let 关键字一致。

**3、const本质(指针不变性思想类似java)**
const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址）

```JavaScript
const obj = {};
obj.age = 18;
obj.name = 'piante';
for (let item in obj) {  //循环遍历obj的属性
    console.log(obj[item]);  //18  piante
}
// obj = {a:1}; // 将obj指向另一个对象，就会报错 ReadOnly (等同于改变了它的指针指向，实际上指针不可变)
```

### 三、let、const、var 的区别

1. 使用 **var** 声明的变量，其作用域为**该语句所在的函数内，且存在变量提升现象**。

2. 使用 **let** 声明的变量，其作用域为**该语句所在的代码块内，不存在变量提升**。

3. 使用 **const** 声明的是常量，在后面出现的代码中**不能再修改该常量的值**。

| var          | let            | const          |
| ------------ | -------------- | -------------- |
| 函数级作用域 | 块级作用域     | 块级作用域     |
| 变量提升     | 不存在变量提升 | 不存在变量提升 |
| 值可更改     | 值可更改       | 值不可更改     |

## 第三章：解构赋值

ES6允许按照一定的模式，从数组和对象中提取值，对变量进行赋值，这被称之为解构(Destructuring)

### 一、数组的解构赋值

#### 1. 基本用法

```javascript
// 以前为变量赋值，只能直接指定值
var a = 1;
var b = 2;
var c = 3;
// ES6允许写成这样
var [a,b,c] = [1,2,3];
```

本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
下面是一些使用嵌套数组进行解构的例子：

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz)//1,2,3
let [, , third] = ["foo", "bar", "baz"];
console.log(third)//baz
let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail)//1,[2,3,4]
let [x, y, ...z] = ['a'];
console.log(x, y, z)//a,undefined,[]
```

不完全解构：就是模式相同的才解构，其他不解构。

```javascript
//完全解构
let [x, [y, y2], z] = ['a', ['b', 'c'], 'd'];
console.log(x, y, y2, z);  //a,b,c,d
//不完全解构
let [x1, [y1], z1] = ['a', ['b', 'c'], 'd'];
console.log(x1, y1, z1);  //a,b,d
```

#### 2. 默认值

解构赋值允许制定默认值

```javascript
var [foo = true] = [];
console.log(foo)//true
[x, y = 'b'] = ['a'];
console.log(x, y)//a,b
```

注意，ES6内部使用严格相等运算符(===)，判断一个位置是否有值。
所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。

```javascript
var [x = 1] = [undefined];
console.log(x)//1
var [x = 1] = [null];
console.log(x)//null
```

如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值：

```javascript
function f() {
    console.log('aaa');
}
let [x = f()] = [1];//不会调用函数
```

上面的代码中，因为x能取到值，所以函数f()根本不会执行。上面的代码其实等价于下面的代码：

```javascript
let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0];
}
```

默认值可以引用解构赋值的其他变量，但该变量必须已经声明：

```JavaScript
let [x = 1, y = x] = [];
console.log(x, y)//1,1
/* ---------------------------------------- */
let [x = 1, y = x] = [2];
console.log(x, y)//2,2
/* ---------------------------------------- */
let [x = 1, y = x] = [1, 2];
console.log(x, y)//1,2
/* ---------------------------------------- */
let [x = y, y = 1] = []; // y--> 还没有初始化声明

```

上面最后一个表达式，因为x用到默认值是y时，y还没有声明。

### 二、对象的解构赋值

解构不仅可以用于数组，还可以用于对象

```javascript
let { name, age } = { name: 'zhangsan', age: 20 };
console.log(name,age); // 'zhangsan' ,20
```

对象的解构和数组有一个重要的不同。数组的元素是按此排序的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。解构失败（变量的值为undefined）

```javascript
let { names } = { name: 'zhangsan', age: 20 };
console.log(names); // undefined
```

变量重命名：

```javascript
let { name:username } = { name: 'zhangsan', age: 20 };
console.log(username); // 'zhangsan'
```

对象的解构赋值是内部机制，是先找到同名属性，然后再赋给对应的变量。
真正被赋值的是后者，而不是前者。

```JavaScript
let { name: username } = { name: 'zhangsan', age: 20 };
console.log(username) // 'zhangsan'
console.log(name)//name is not defined
```

上面的代码中， name是匹配的模式， username才是变量。真正被赋值的是变量username，而不是模式name。

和数组一样，解构也可以用于嵌套解构的对象

```javascript
var obj = {
    p: ["hello", { y: "world" }]
};
var { p: [x, { y }] } = obj;
console.log(x, y)//hello,world
```

注意，这时p是匹配模式，不是变量，因此不会被赋值。
对象的解构也可以指定默认值：

```JavaScript
var { x = 3 } = {};
console.log(x)//3
var { x, y = 5 } = { x: 1 };
console.log(x, y)//1,5
var { x: y = 3 } = { x: 5 };
console.log(y)//5
```

如果解构模式是嵌套的对象，并且子对象所在的父属性不存在，那么会报错：

```javascript
var { foo: { bar } } = { baz: "baz" };//bar undefind
```

由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构：

```javascript
var arr = [1, 2, 3];
var { 0: first, [arr.length - 1]: last } = arr;
console.log(first, last)//1,3
```

## 第四章：箭头函数的使用

### 一、基本语法

通常函数的定义方法：

```JavaScript
const fn1 = function(a, b) {
    return a + b
}
function fn2(a, b) {
    return a + b
}
```

使用ES6箭头函数语法定义函数，**将原函数的“function”关键字和函数名都删掉，并使用“=>”连接参数列表和函数体**。

```javascript
// () => { }
const fn = (a, b) => { return a + b }
console.log(fn(1, 2))//3
```

**当函数参数只有一个，括号可以省略；没有参数时：括号不可以省略或者用_代替括号。**

```javascript
// 无参
var fn1 = function () { }
var fn1 = _ => { return 1 }
console.log(fn1())//1
// 单个参数（可以省略小括号）
var fn2 = function (a) { }
var fn2 = a => { return a }
console.log(fn2(1))//1
// 多个参数
var fn3 = function (a, b) { }
var fn3 = (a, b) => { return a + b }
console.log(fn3(1, 2))//3
// 可变参数
var fn4 = function (a, b, ...args) { }
var fn4 = (a, b, ...args) => {
    return args.reduce((pre, val) => {
        pre += val;
        return pre;
    }, a + b);
}
console.log(fn4(1, 2, 3, 4, 5))
```

函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号和return

```javascript
function sum(a, b) { return a + b }
//es6简写后
const sum = (a, b) => a + b;
```

如果返回一个对象，需要特别注意，如果是单表达式要返回自定义对象，不写括号会报错，因为和函数体的{ … }有语法冲突。
**注意，用小括号包含大括号则是对象的定义，而非函数主体**

```javascript
const fn = _ => ({ id: 1, uname: '张三' });//没有形参：_相当于()
console.log(fn())//{ id: 1, uname: '张三' }
```

### 二、 this指向

箭头函数不绑定this关键字，箭头函数中的this，指向的是**函数作用域链上的对象**。

```javascript
 const obj = { name: '张三'} 
 function fn () { 
     console.log(this);
     return () => { 
         console.log(this)
     } 
 } 
 const resFn = fn.bind(obj); 
 resFn();//{ name: '张三' }
```

```javascript
const obj = {
    id: 1,
    //使用箭头函数就没有this指向，只能通过作用域链往上查找调用者
    fn: function () {
        return (_ => this.id)()
    }
}
console.log(obj.fn())//1
```

箭头函数内部没有arguments

```javascript
function fun() {
    return console.log('fun:', arguments.length)
}
fun(1, 2)//2
const fn = _ => console.log('fn:', arguments.length)
fn(1, 2)//arguments is not defined

```

## 第四章：rest (剩余)参数

ES6 引入 rest 参数（形式为…变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中，利用 rest 参数，可以向该函数传入任意数目的参数。

```javascript
function sum(first, ...args) {
    console.log(first); // 10
    console.log(args); // [20, 30] 
}
sum(10, 20, 30)
```

rest参数和解构配合使用

```javascript
 let students = ['wangwu', 'zhangsan', 'lisi'];
 let [s1, ...s2] = students; 
 console.log(s1);  // 'wangwu' 
 console.log(s2);  // ['zhangsan', 'lisi']
```

## 第四章：模板字符串

模板字符串其实就是相当于c#的挖坑写法，只是语法不一样了。

```
consol.readline("你好，我是{0},我今年{1}岁了",nsme,age);    //c#写法　　alert(`你好，我是${name},我今年${age}岁了`); //js写法
```

### 一、基本语法

之前我们也可以使用JavaScript输出模版字符串，通常是下面这样的：

```
$("#result").append(        "He is <b>"+person.name+"</b>"+"and we wish to know his"+person.age+".That is all" );
```

但是我们可以看到：这样的传统做法需要使用大量的“”（双引号）和 + 来拼接才能得到我们需要的模版。但是这样是十分不方便的。

于是ES6中提供了**模版字符串，用`（反引号）标识，用${}将变量括起来**。上面的例子可以用模版字符串写成下面这样：

```
 $("#result").append(        `He is <b>${person.name}</b>and we wish to know his${person.age}.that is all`);
```

### 二、引入变量

我们还可以先定义变量，然后在模版字符串中嵌入变量：

```
const name="zzw";let str = ` ${name},no matter what you do,  I trust you.`;console.log(str);// 输出结果：zzw,no matter what you do,  I trust you.
```

当然，模版字符串可以引入变量，不使用变量也是可以的。如下所示：

```
let str = ` I am a man.`;console.log(str);//输出结果：I am a man.
```

### 三、多行字符串

传统的JavaScript语言，输出模板通常是这样写的：

```
var name = '黑子';var age = 8;$('#result').append(  '我的宠物狗叫 <b>' + name + '</b>\n' +      '今年\n' +      '<em>' + age+ '</em>岁，\n'+  '十分可爱!');
```

但是在ES6中，要获得同样效果的多行字符串，只需使用如下代码：

```
let name = '黑子';let age = 8;let str = `我的宠物狗叫 <b>${name}</b>                  今年                   <em>${age}</em>岁，              十分可爱!`;
```

对比两段拼接的代码，模板字符串使得我们不再需要反复使用双引号（或者单引号）了；而是改用反引号标识符（`），插入变量的时候也不需要再使用加号（+）了，而是把变量放入${ }即可。
也不用再通过写 \n 进行换行了，ES6 的模板字面量使多行字符串更易创建，因为它不需要特殊的语法，只需在想要的位置直接换行即可，此处的换行会同步出现在结果中。简单、清晰、明了。
**注意：如果使用模板字符串表示多行字符串，所有的空格和缩进**

```
console.log(`我的宠物狗叫黑子                             今年16岁了`);结果：                             //我的宠物狗叫黑子//                             今年16岁了
```

### 四、执行表达式

在${}中的大括号里可以放入任意的JavaScript表达式，还可以进行运算，以及引用对象属性，如下所示：

```
let x=88;let y=100;console.log(`x=${++x},y=${x+y}`);//输出结果：x=89,y=189
```

### 五、调用函数

更强大的是，模版字符串还可以调用函数：

```
function string(){    return "zzw likes es6!";}console.log(`你想说什么?  嗯，${string()}`);//输出结果：你想说什么?  嗯，zzw likes es6!"
```

另外，如果函数的结果不是字符串，那么，将按照一般的规则转化为字符串：

```
function string(){    return 666}console.log(`你想说什么?  嗯，${string()}`);//输出结果：你想说什么?  嗯，666
```

在这里，实际上数字666被转化成了字符串666.

### 六、注意事项

#### 1、如果在${}中的变量时没有命名的，那么会报错

```
console.log(`你想说什么? 嗯，${string()}`);
```

在上面这句代码中，string()函数没有声明，于是报错：

#### 2、如果希望引用模版字符串本身，可以像下面这样写：

```
let str="return"+"`Hello! ${name}`";let func=new Function("name",str);console.log(func("zzw"));//输出结果：Hello! zzw
```

#### 3、如果使用模版字符串表示多行字符串，所有的空格和缩进都会被保存在输出中！！

```
console.log( `No matter\` what you do, I trust you.`);输出结果：//No matter` what you do,// I trust you.
```

## 第六章：对象的简洁表示法

ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```
const foo = 'bar';const baz = { foo };baz // {foo: "bar"}
```

除了属性简写，方法也可以简写。

```
const o = {  method() {    return "Hello!";  }};// 等同于const o = {  method: function() {    return "Hello!";  }};
```



## 第八章：扩展运算符 三个点（...）

### 一、对象的扩展运算符

理解对象的扩展运算符其实很简单，只要记住一句话就可以：

> 对象中的扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中

```
let bar = { a: 1, b: 2 };let baz = { ...bar }; // { a: 1, b: 2 }
```

上述方法实际上等价于:

```
let bar = { a: 1, b: 2 };let baz = Object.assign({}, bar); // { a: 1, b: 2 }
```

同样，如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。

```
let bar = {a: 1, b: 2};let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
```

这里有点需要注意的是扩展运算符对对象实例的拷贝属于一种浅拷贝。肯定有人要问什么是浅拷贝？我们知道`javascript`中有两种数据类型，分别是基础数据类型和引用数据类型。基础数据类型是按值访问的，常见的基础数据类型有`Number`、`String`、`Boolean`、`Null`、`Undefined`，这类变量的拷贝的时候会完整的复制一份；引用数据类型比如`Array`，在拷贝的时候拷贝的是对象的引用，当原对象发生变化的时候，拷贝对象也跟着变化，比如：

```
let obj1 = { a: 1, b: 2};let obj2 = { ...obj1, b: '2-edited'};console.log(obj1); // {a: 1, b: 2}console.log(obj2); //  {a: 1, b: "2-edited"}
```

上面这个例子扩展运算符拷贝的对象是基础数据类型，因此对`obj2`的修改并不会影响`obj1`，如果改成这样：

```
let obj1 = { a: 1, b: 2, c: {nickName: 'd'}};let obj2 = { ...obj1};obj2.c.nickName = 'd-edited';console.log(obj1); // {a: 1, b: 2, c: {nickName: 'd-edited'}}console.log(obj2); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
```

这里可以看到，对`obj2`的修改影响到了被拷贝对象`obj1`，原因上面已经说了，因为`obj1`中的对象`c`是一个引用数据类型，拷贝的时候拷贝的是对象的引用。

### 二、数组的扩展运算符

扩展运算符同样可以运用在对数组的操作中。

#### 1、可以将数组转换为参数序列

```
function add(x, y) {  return x + y;}const numbers = [4, 38];add(...numbers) // 42
```

#### 2、可以复制数组

如果直接通过下列的方式进行数组复制是不可取的：

```
const arr1 = [1, 2];const arr2 = arr1;arr2[0] = 2;arr1 // [2, 2]
```

原因上面已经介绍过，用扩展运算符就很方便：

```
const arr1 = [1, 2];const arr2 = [...arr1];
```

还是记住那句话：**扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中**，这里参数对象是个数组，数组里面的所有对象都是基础数据类型，将所有基础数据类型重新拷贝到新的数组中。

#### 3、扩展运算符可以与解构赋值结合起来，用于生成数组

```
const [first, ...rest] = [1, 2, 3, 4, 5];first // 1rest  // [2, 3, 4, 5]
```

需要注意的一点是：

> 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```
const [...rest, last] = [1, 2, 3, 4, 5];// 报错const [first, ...rest, last] = [1, 2, 3, 4, 5];// 报错
```

#### 4、扩展运算符还可以将字符串转为真正的数组

```
[...'hello']// [ "h", "e", "l", "l", "o" ]
```

## 第九章：map()遍历、filter()筛选

### 一、map 方法

map和forEach等遍历方法不同，在forEach中return语句是没有任何效果的，而map则可以改变当前循环的值，返回一个新的被改变过值之后的数组（map需return），一般用来处理需要修改某一个数组的值。

```javascript
let arr1 = [1,2,3];
let arr2 = arr1.map((value,key,arr) => {    
    console.log(value)    // 1，2，3    
    console.log(key)      // 0，1，2    
    console.log(arr)      //[1,2,3] [1,2,3] [1,2,3]    
    return value * value;})
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 1, 4, 9 ]或者
var num = [1,2,3,4];
var dataAdd = num.map(n => n+n);
var datadeep = num.map(n => n-1);
console.log(dataAdd);//[2, 4, 6, 8] 
console.log(datadeep);//[0,1,2,3]
```

### 二、filter方法

filter函数可以看成是一个过滤函数，返回**符合条件的元素的数组**
filter需要在循环的时候判断一下是true还是false，是true才会返回这个元素；

```
let arr1 = [1,2,3];let arr2 = arr1.filter((value,key,arr) => {    console.log(value)    // 1，2，3    console.log(key)      // 0，1，2    console.log(arr)      // [1,2,3]    return value >= 3 ? false : true;})console.log(arr1); // [ 1, 2, 3 ]console.log(arr2); // [ 1, 2 ]
```

### 三、案例

#### 1、filter() 去掉空字符串、undefined、null

```
let arr = ['','1','2',undefined,'3.jpg',undefined]let newArr = arr.filter(item => item)console.log(newArr)
```

#### 2、filter()数组去重

```
let colors = [{    id: 0,    colorName: 'red'},{    id: 1,    colorName: "orange"},{    id: 2,    colorName: "yellow"},{    id: 3,    colorName: "green"},{    id: 1,    colorName: "blue"},{    id: 2,    colorName: "purple"},];let obj = {};colors = colors.reduce((cur, next) => {obj[next.id] ? "" : obj[next.id] = true && cur.push(next);return cur;}, []) //设置cur默认类型为数组，并且初始值为空的数组console.log(colors);//
```

## 第十章：变量添加默认值

有时候，我们从state或者请求回来的object或者array为空的，直接使用 对象.属性 、数组.map() 等方法时会报undefined。这时候可以指定默认值防止报错。
具体使用方法：

```
let name = this.state.name || 'weishihuai'；
```

等价于：

```
let name = this.state.name;if (null === name || typeof name === 'undefined' || '' === name || name.length === 0){    name = 'weishihuai'}
```

## 第十一章：方法默认参数

```
function (a = 1, b){//a的值必须是undefined，才赋默认值给a对象}
```

等价于:

```
function (a , b) {    if (typeof a === 'undefined'){        a = 1;    }}
```

## 第十二章：module

ES6 意义最重大的语法变化，就是引入了模块（module）。
一个模块内部，使用export命令输出对外的接口。

```
// lib/math.jsexport function sum(x, y) {  return x + y;}export var pi = 3.141593;
```

上面的模块输出了sum和pi两个接口。
import命令用于引入该模块。

```
// app.jsimport * as math from "lib/math";alert("2π = " + math.sum(math.pi, math.pi));
```

上面代码中，*表示引入所有接口，也可以只引入指定的接口。

```
// otherApp.jsimport {sum, pi} from "lib/math";alert("2π = " + sum(pi, pi));
```

## 第十三章：Set和Map容器的使用

### 一、Set数据结构

#### 1、概念

set是ES6新增的数据结构。集合的概念是一组无序且唯一（即不重复）的项组成。set数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中，与数组类似，但成员都是唯一的，没有重复的值。

#### 2、特点

key和value相同，没有重复的value。

#### 3、属性

set.size set大小

#### 4、初始化一个Set数据结构

```
const s=new Set([1,2,3])console.log(s) //Set(3) {1, 2, 3}
```

由于set中的数据是唯一的，所以可以用于数组的去重。

```
var arr=[1,2,3,4,5,2,3,1];const s=new Set(arr)console.log(Array.from(s))// [1, 2, 3, 4, 5]
```

**注意：Array.from方法可以将 Set 结构转为数组。**

#### 5、Set常用的方法

```
1、set.add(value)添加一个数据，返回Set结构本身2、set.delete(value)删除指定数据，表示删除是否成功3、set.has(value)判断该值是否为set成员，返回一个布尔值4、set.clear() 清除所有数据，没有返回值5、set.keys()返回键名的遍历器6、set.values()返回键值的遍历器7、entries()返回键值对的遍历器8、forEach()使用回调函数的每个成员
```

#### 6、Set的常见操作

```
const s=new Set(['h','e','l','l','o']);s.add(1);//添加元素s.add('a');s.delete(1);//删除元素console.log(s);// {"h", "e", "l", "o", "a"}console.log(s.has('h'));//true
```

![09adc88f07ede60a062865717dc22241.png](en-resource://database/4621:1)

### 二、数据结构Map

#### 1、含义和基本用法

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```
const data = {};const element = document.getElementById('myDiv');data[element] = 'metadata';data['[object HTMLDivElement]'] // "metadata"
```

上面代码原意是将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```
const m = new Map();const o = {p: 'Hello World'};m.set(o, 'content')m.get(o) // "content"m.has(o) // truem.delete(o) // truem.has(o) // false
```

上面代码使用 Map 结构的set方法，将对象o当作m的一个键，然后又使用get方法读取这个键，接着使用delete方法删除了这个键。

上面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

```
const map = new Map([  ['name', '张三'],  ['title', 'Author']]);map.size // 2map.has('name') // truemap.get('name') // "张三"map.has('title') // truemap.get('title') // "Author"
```

上面代码在新建 Map 实例时，就指定了两个键name和title。

Map构造函数接受数组作为参数，实际上执行的是下面的算法。

```
const items = [  ['name', '张三'],  ['title', 'Author']];const map = new Map();items.forEach(  ([key, value]) => map.set(key, value));
```

## 第十四章：字符串的扩展

**1、字符串的遍历**
es6可以使用for..of遍历字符串

```
let str = 'wsh';//依次输出 w s hfor (let item of str) {    console.log(item);   // w s h}
```

**2、 includes()、startsWith()、 endsWith()方法**

```
includes()：返回布尔值，表示是否找到了参数字符串。startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
```

示例：

```
let name = 'wei shi huai';console.log(name.includes('wei'));   //字符串中含有'wei',所以为true console.log(name.startsWith('wei')); //字符串以'wei'开头，所以为true console.log(name.endsWith('！'));    //字符串以'huai'结尾，所以为false
```

同时，这三个方法可以指定从某个位置开始检索，类似indexof方法。

```
let name = 'wei shi huai';console.log(name.includes('shi', 4));  //从第四个位置开始字符串包含'shi',所以为trueconsole.log(name.startsWith('wei',1)); //从第一个位置开始字符串以e开头,所以为falseconsole.log(name.endsWith('shi',7));   //针对name前七个字符是以'shi'结尾,所以为true
```

**3、模板字符串**
模板字符串的意思，其实就是在字符串中嵌入一些变量，使用$(xxx)的方式使用模板字符串的意思，其实就是在字符串中嵌入一些变量，使用$(xxx)的方式使用

```
let name = 'weishihuai', age = 18;console.log(`hello, your name is ${name}, age is ${age}`);  //hello, your name is weishihuai, age is 18
```

模板字符串之中还能调用函数：

```
add = (a, b) => {    return a + b;};console.log(`a + b = ${this.add(1, 2)}`); //a + b = 3
```

## 第十五章：数值的扩展

**1、Number.isNaN()**
Number.isNaN()用来检查一个值是否为NaN，es6对于不是NaN参数的统一返回false

```
console.log(Number.isNaN(NaN));    // trueconsole.log(Number.isNaN(15));     // falseconsole.log(Number.isNaN('15'));   // falseconsole.log(Number.isNaN(true));   // falseconsole.log(Number.isNaN(9 / NaN));  // trueconsole.log(Number.isNaN('true' / 0));   // trueconsole.log(Number.isNaN('true' / 'true')); // true
```

**2、Number.isInteger()**
Number.isInteger()用来判断一个数值是否为整数。es6对于不是Integer参数统一返回false

```
console.log(Number.isInteger(1));    //因为1是整数,所以为trueconsole.log(Number.isInteger(1.0));  //因为在js中整数和小数采用统一的存储方式，所以需要注意一点,所以为trueconsole.log(Number.isInteger(1.1));  //1.1是浮点数，所以为false//注意： isInteger中传入的参数如果不是整数，统一返回falseconsole.log(Number.isInteger());  //falseconsole.log(Number.isInteger('weishihuai')); //falseconsole.log(Number.isInteger(null));  //falseconsole.log(Number.isInteger(NaN));  //falseconsole.log(Number.isInteger(false));  //false
```

**3、Math.trunc()**
Math.trunc()方法主要使用场景为：有时候对于浮点数，我们只是想要去除小数后面的部分，这时候就可以使用Math.trunc()方法，避免使用切割或者正则匹配等其他方式进行处理。

```
//Math.trunc()方法只返回整数部分，不会进行四舍五入处理,会保留符号位console.log(Math.trunc(1.0));  //1console.log(Math.trunc(1.9));  //1console.log(Math.trunc(-1));   //-1//Math.trunc()对于一些可以截取出整数的类型会先转换为Number再进行截取console.log(Math.trunc(true)) ; //1console.log(Math.trunc(false)); //0console.log(Math.trunc('123.456')); //123console.log(Math.trunc(null)); //0//Math.trunc()对于空值等不能截取整数部分的直接返回NaNconsole.log(Math.trunc('weishihuai')); //NaNconsole.log(Math.trunc()); //NaNconsole.log(Math.trunc(undefined)); //NaNconsole.log(Math.trunc(NaN)); //NaN
```

## 第十六章：函数的扩展

**1、函数参数默认值**
es6允许为函数的参数传入默认值，es6之前一般采用的方法：先判断一下参数是否被赋值，如果没有，再等于默认值。

```
functionDefaultParam = (a, b = 2) => {    return a + b;};test = () => {console.log(this.functionDefaultParam(1));  //因为b指定了默认值2,所以没传参数b会取默认值2,相加后结果为3console.log(this.functionDefaultParam(1,3)); //4};
```

**2、rest参数**
es6 引入 rest 参数（形式为…变量名），用于获取函数的多余参数，rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

```
//rest参数，相当于传入一个数组restParam = (...values) => {    for (let item of values) {        console.log(item);    }};test = () => {//rest参数this.restParam('a','b','c','d');  //依次输出'a' 'b' 'c' 'd'};
```

**3、箭头函数**

```
add = (a,b) =>  a + b;等同于：function(a,b) {    return a + b;}['a','b','c'].map((item,index) => {    console.log(item,index);  //'a' 0 、 'b' 1 、'c' 2});等同于：['a','b','c'].map(function (item,index) {  console.log(item,index);  //'a' 0 、 'b' 1 、'c' 2});
```

## 第十七章：数组的扩展

**1、Array.from() Array.of()方法**
Array.from()是将类似数组的对象（array-like object）和可遍历（iterable）的对象转换成数组， Array.of()则是将一组值转换为数组。

```
console.log(Array.from('weishihuai'));  //字符串组成数组： ["w", "e", "i", "s", "h", "i", "h", "u", "a", "i"]console.log(Array.of(1,2,3,4,5));  //值组成数组：[1, 2, 3, 4, 5]
```

**2、数组实例的 entries()，keys() 和 values()**
数组实例的 entries()，keys() 和 values()主要用于对数组的遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

```
//数组实例的 entries()，keys() 和 values()let arr = ['wei', 'shi', 'huai'];//第一种方法for (let item of arr) {    console.log(item);  //'wei' 'shi' 'huai'}//第二种方法for (let index of arr.keys()) {    //输出键值    console.log(index); // 0 1 2}for (let item of arr.values()) {    //输出值    console.log(item); //'wei' 'shi' 'huai'}for (let [index, item] of arr.entries()) {    //输出键值对    console.log(index, item);  // 0 'wei'、1 'shi'、2 'huai'}
```

**3、includes()方法**
includes()方法主要用于判断数组中是否包含某个值，es6之前通常采用indexof()方法进行判断。

```
//includes()let arr = ['wei', 'shi', 'huai', NaN];console.log(arr.includes('wei')); //trueconsole.log(arr.includes('wei', 1));  //从下标为1的位置开始查找，falseconsole.log(arr.includes(NaN)); //trueconsole.log(arr.includes('huai', -2)); //倒数第二个开始查找，true
```

**4、扩展运算符…**
扩展运算符其实是rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。比如…[a,b,c]其实就是a,b,c

```
add = (a,b) => {    return a + b;};test = () => {    console.log(...['wei','shi','huai']); //wei shi huai    console.log(this.add(...[1,2])); //相当于1+2=3};
```

**5、常见使用场景**

###### (1).复制数组

如果两个数组直接用=赋值的话其实不是值的copy,而是指针的copy,这样对新数组的改变，原数组也会变化。es6之前通常使用[].concat()来复制一个数组，es6可以使用扩展运算符进行数组复制

```
let arr1 = ['wei', 'shi', 'huai'];let arr2 = arr1.concat();for (let item of arr2) {    console.log(item);  //wei shi huai}//改变新数组并不会改变原数组的值arr2[0] = 'weiweiwei';for (let item of arr1) {    console.log(item);  //wei shi huai}for (let item of arr2) {    console.log(item);  //weiweiwei shi huai}//扩展运算符复制数组let arr3 = [...arr1];for (let item of arr3) {    console.log(item);  //wei shi huai}
```

###### (2).数组合并

```javascript
//数组合并//需要注意的是：浅拷贝。如果修改了原数组的成员，会同步反映到新数组。
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];// ES5
console.log(arr1.concat(arr2, arr3));  // [ 'a', 'b', 'c', 'd', 'e' ]// ES6
console.log([...arr1, ...arr2, ...arr3]);  // [ 'a', 'b', 'c', 'd', 'e' ]
```

###### (3).将字符串转换为数组

```javascript
let str = 'weishihuai';console.log([...str]); //["w", "e", "i", "s", "h", "i", "h", "u", "a", "i"]
```

## 第十八章：对象的扩展

**1、Object.is()**
Object.is()方法用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

```
//Object.is()console.log(Object.is('weishihuai', 'weishihuai'));   //'weishihuai'==='weishihuai'为true,所以结果为trueconsole.log(Object.is({}, {}));  //{} === {}为false，所以结果为false//注意NaN以及+0 -0问题console.log(Object.is(NaN, NaN)); //trueconsole.log(NaN === NaN); //falseconsole.log(Object.is(+0, -0)); //falseconsole.log(+0 === -0); //true
```

**2、Object.assign()**
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target），是浅拷贝，拷贝的是引用。
注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
主要用途有：合并对象、添加属性、复制对象等等

```
//Object.assign()let obj1 = {name: 'weishihuai'};let obj2 = {age: 18};let obj3 = {sex: 'male'};//合并obj1 obj2 obj3console.log(Object.assign(obj1, obj2, obj3));   //{name: "weishihuai", age: 18, sex: "male"}//同名属性后面覆盖前面let obj4 = {age: 20};console.log(Object.assign(obj1, obj2, obj3, obj4)); //{name: "weishihuai", age: 20, sex: "male"}//为obj5对象添加一个属性agelet obj5 = {name: 'weishihuai'};console.log(Object.assign(obj5, {age: 18})); //{name: "weishihuai", age: 18}//克隆对象let obj6 = {name: 'weishihuai', age: 18};let obj7 = Object.assign({}, obj6);console.log(obj7); //{name: 'weishihuai', age: 18}
```

**3、对象属性的遍历**
es6中对象属性的遍历主要有for..in、Object.keys(obj)、Object.getOwnPropertyNames(obj)等方法。

```
//对象属性的遍历let obj = {name: 'weishihuai', age: 18, sex: 'male'};//第一种方法for (let prop in obj) {    console.log(prop); //name age sex}//第二种方法let propArr = Object.keys(obj);for (let prop of propArr) {    console.log(prop); //name age sex}//第三种方法let propArr2 = Object.getOwnPropertyNames(obj);for (let prop of propArr2) {    console.log(prop); //name age sex}
```

**4、Object.keys()，Object.values()，Object.entries()**
Object.keys()，Object.values()，Object.entries()主要用于对象的遍历：

```
let obj = {name: 'weishihuai', age: 18};for (let key of Object.keys(obj)) {    console.log(key); //name age}for (let value of Object.values(obj)) {    console.log(value); //weishihuai 18}for (let [key, value] of Object.entries(obj)) {    console.log([key, value]); // ["name", "weishihuai"]  ["age", 18]}
```

**5、对象的扩展运算符**
对象的扩展运算符（…）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
主要用途：合并对象、取出对象可遍历属性等

```
let obj1 = {name: 'weishihuai', age: 18};let obj2 = {...obj1};console.log(obj2); //{name: "weishihuai", age: 18}//等同于：console.log(Object.assign({}, obj1));  //{name: "weishihuai", age: 18}//合并对象let obj3 = {name: 'weishihuai', age: 18};let obj4 = {sex: 'male'};console.log({...obj3, ...obj4});  //{name: "weishihuai", age: 18, sex: "male"}//等同于console.log(Object.assign(obj3, obj4)); //{name: "weishihuai", age: 18, sex: "male"}
```

注意：合并对象的时候，同样同名属性后面的属性会覆盖前面的属性。

## 第十九章：Proxy和Reflect详解

### 一、Proxy

在教程中对于Proxy的定义是这样的，Proxy用于修改某些操作的默认行为，即对编程语言层面进行修改，属于“元编程”，Proxy意思为“代理”，即在访问对象之前建立一道“拦截”，任何访问该对象的操作之前都会通过这道“拦截”，即执行Proxy里面定义的方法。

#### 1、ES6原生规定的Proxy的基本用法

```
let pro = new Proxy(target,handler);
```

其中 new Proxy相当于创建了一个Proxy实例，target为所要拦截的目标对象，handler也是一个对象，里面定义的是对拦截对象所要进行的拦截方法。

#### 2、Proxy实例1

```
 let target = {      name:"小明"，      age: 15      } let handler = {       get:(target,name,)=>{             return "success"        } }let pro = new Proxy(target,handler);console.log(pro.name);//此时打印出来的结果为 success；
```

解释：创建的target对象为所要拦截的对象，handler对象为拦截对象后执行的操作，这里get方法为读取操作，即用户想要读取pro中的属性时执行的拦截操作。最后创建一个Proxy实例，因为我设定的读取拦截操作为返回一个“success”字符串，所以当我想读取pro中的属性时，结果打印出来的总是“success”字符串。

#### 3、Proxy实例2

```
let target = {     name:"小明",     age:15};let handler = {};let pro = new Proxy(target,handler);console.log(pro.name);//结果为 小明pro.name = "小红";console.log(pro.name);//结果为 小红
```

解释:拦截操作对象handler为空，未对拦截对象设定拦截方法，该情况下pro直接指向原对象target，访问pro等同于访问target，所以结果为target中的结果。

#### 4、Proxy实例3

Proxy也可以作为其他对象的原型对象使用

```
let target = {     name:"小明",     age:15}let handler = {      get:(target,name){             return "success";      }}let pro = new Proxy(target,handler);let obj = Object.create(pro);console.log(obj.name);//打印结果为  success
```

解释：上述实例将pro作为obj的原型对象使用，虽然obj本身没有name这个属性，但是根据原型链，会在pro上读取到name属性，之后会执行相对应的拦截操作。

#### 5、Proxy常用的拦截方法

1、get(target,name,property)方法，用于拦截某个读取属性的操作,第一个参数为目标对象，第二个参数为属性名称，第三个属性为操作所针对的对象（可选参数）。

```
let handler = {       get:function(target,name,property){            if(name in target){                   cosnole.log("success");                                            }else{                   console.log("error")             }             return Reflect.get(target,name,property);        }}let target =  {    name:"小明",    age:15}let pro = new Proxy(target,handler);pro.name;//结果为 successpro.grade;//结果为error
```

2、set(target,name,value,property),用于拦截某个属性的赋值操作，第一个参数为目标对象，第二个参数为属性名，第三个参数为属性值，第四个参数为操作行为所针对的对象（可选参数）。

```
let handler = {       set:function(target,name,value,property){             if(typeof value != "number"){                     console.log("error");                     throw new TypeError('The age is not an integer');             }else{                     console.log("success");                     return Reflect.set(target,name,value,property);             }        }}let target =  {    name:"小明",    age:15}let pro = new Proxy(target,handler);pro.age = 35;//结果为 success，并且返回修改值pro.age = "12";//结果为error，抛出错误
```

3、has(target,key),用来拦截对象是否具有某个属性值的操作，第一个参数为目标对象，第二个参数为属性名

```
let handler = {      has:function(target,key){             if(key[0] != "_"){                    return  false             }             return true;        }}let target =  {    _name:"小明",    age:15}let pro = new Proxy(target,handler);console.log("_name" in pro);//打印结果为 trueconsole.log("age" in pro);//打印结果为false
```

### 二、Reflect对象

#### 1、概述

1. Reflect对象与Proxy对象一样，都是ES6对操作对象设计的API
2. 对于我个人的理解而言，Reflect设计的目的是为了优化Object的一些操作方法以及合理的返回

Object操作返回的结果，对于一些命令式的Object行为，Reflect对象可以将其变为函数式的行为

#### 2、实例1

```
//旧写法try{   Object.defineProperty(target,name,property);}catch(e){   console.log("error");}//Reflect对象操作if（Reflect(target,name,property)）{     console.log("success");}else{    console.log("error")}
```

#### 3、实例2

```
let obj = {     name:"小明",     age:15}//旧写法console.log(name in obj);//结果为 true//Reflect对象操作console.log(Reflect.has(obj,"name"));//结果为 true
```

#### 4、实例3

因为Reflect对象的操作和Proxy对象的操作是一一对应的，所以在Proxy的拦截操作中，可以直接利用Reflect对象直接获取Proxy的默认值

```
let target = {     name:"小明",     age:15}let handler = {      get:function(target,name,property){              if(name === "name"){                         console.log("success");               }else{                        console.log("success");               }                return Reflect.get(target,name,property);      } }let pro = new Proxy(target,handler);console.log(pro.name)//结果为// success//小明
```

#### 5、Reflect的静态方法

```
Reflect.apply(target, thisArg, args)Reflect.construct(target, args)Reflect.get(target, name, receiver)Reflect.set(target, name, value, receiver)Reflect.defineProperty(target, name, desc)Reflect.deleteProperty(target, name)Reflect.has(target, name)Reflect.ownKeys(target)Reflect.isExtensible(target)Reflect.preventExtensions(target)Reflect.getOwnPropertyDescriptor(target, name)Reflect.getPrototypeOf(target)Reflect.setPrototypeOf(target, prototype)
```

Reflect对象的静态方法和Proxy对象的静态方法一一对应，所以在功能上也相同，不一一列举了如果要查阅对应方法的用法实例，参照阮一峰老师的ES6语法http://es6.ruanyifeng.com/#docs/reflect

#### 6、实例：使用Proxy实现观察者模式

```
//初始化观察者队列const arr = new Set();//将监听函数加入队列const obe = fun => {  arr.add(fun);}//初始化Proxy对象，设置拦截操作const observable =  obj => new Proxy(obj, {set});function set(target, key, value, receiver){     //内部调用对应的 Reflect 方法     const result = Reflect.set(target, key, value, receiver);     //额外执行观察者队列     arr.forEach( item => item() );     return Reflect.set(target, key, value, receiver);}const target = {   name:"小明",   age:15}const per = observable(target);function print(){   console.log( per.name);}obe(print);per.name = "小红" //结果   小红,15
```

## 第二十章：Promise的使用

## Promise的使用

Promise是一个异步操作，分为三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled ）和Rejected（已失败）。

#### 特点：

一旦状态改变，就不会再变，任何时候都可以得到这个结果。
与事件（ Event ）的区别：事件错过了的话再去监听，是得不到结果的。

#### 缺点：

1.无法取消Promise，一旦新建它就会立即执行，无法中途取消；
2.如果不设置回调函数，Promise内部抛出的错误，不会反应到外部；
3.当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

#### 用法：

```
var promise = new Promise((resolve,reject)=>{  // ...   if (/* 异步操作成功 */){    resolve(res);  } else {    reject(error);  }})//Promise 实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。var promise = new Promise((resolve,reject)=>{  // ... }).then(res=>{     //成功     resolve(res);  }, err=>{    //失败     reject(err);  })
```

resolve函数表示状态从 “ 未完成 ” 变为 “ 成功 ” ，在异步操作成功时调用，并将异步操作的结果作为参数传递出去。
reject函数表示状态从 “ 未完成 ” 变为 “ 失败 ”，在异步操作失败时调用，并将异步操作的错误作为参数传递出去。

#### 例子：

axios与Promise异步调用接口获取数据：

```
import axios from 'axios';import qs from 'qs';let instance = axios.create({  baseURL: '',  // 基础url前缀  timeout: 10000 });function fetchApi(url){  return new Promise((resolve,reject)=>{    let param = {      //...    }    let config = {       headers: {'Content-Type': "multipart/form-data"}    };    instance.post(url, qs.stringify(param), config)      .then(response => {        resolve(response.data);      }, err => {        reject(err);      })      .catch((error) => {        reject(error)      })  })}function login() {    return fetchApi('/login')}login();
```

#### 方法：

**Promise.prototype.then()**

then方法返回的是一个新的 Promise 实例（注意，不是原来那个 Promise 实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

```
login(param).then(function(post) {   return param;}).then(res=> {  console.log("Resolved: ", res);}, err=>{  console.log("Rejected: ", err);});
```

第二个then方法指定的回调函数会等待这个新的 Promise 对象状态发生变化。如果变为 Resolved打印res，如果状态变为 Rejected打印err。

**Promise.prototype.catch()**

1.如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误。
2.then方法指定的回调函数如果运行中抛出错误，也会被catch方法捕获。
3.Promise 对象的错误具有 “ 冒泡 ” 性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。
4.reject方法的作用，等同于抛出错误

```
var promise = new Promise((resolve, reject)=> {try {  throw new Error('test');} catch(err) {  reject(err);}});// 等同于var promise = new Promise((resolve, reject)=> {  reject(new Error('test'));});
```

**Promise.all()**

接受一个数组作为参数,用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```
var p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定:
1.只有p1、p2、p3的状态都变成已完成，p的状态才会变成已完成，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2.只要p1、p2、p3之中有一个被拒绝，p的状态就变成拒绝，此时第一个被reject的实例的返回值，会传递给p的回调函数。

**Promise.race()**

同样是将多个 Promise 实例，包装成一个新的 Promise 实例
区别：哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```
var p = Promise.race([p1,p2,p3]);
```

**Promise.resolve()**

将现有对象转为 Promise 对象

```
Promise.resolve('foo')// 等价于new Promise(resolve => resolve('foo'))
```

**Promise.reject()**

返回一个新的 Promise 实例，该实例的状态为rejected。

```
var p = Promise.reject(' 出错了 ');// 等同于var p = new Promise((resolve, reject) =>           reject(' 出错了 '))    p.then(null, function (s){   console.log(s)});
```

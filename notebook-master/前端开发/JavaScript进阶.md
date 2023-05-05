# JavaScript面向对象编程

## 1. 面向对象编程介绍

### 1.1 两大编程思想

- 面向过程
- 面向对象

### 1.2 面向过程编程 POP(Process-oriented programming)

**面向过程**就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就可以了。

举个栗子：将大象装进冰箱，面向过程做法。

**面向过程，就是按照我们分析好了的步骤，按照步骤解决问题。**

### 1.3 面向对象编程 OOP (Object Oriented Programming)

**面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作。**

举个栗子：将大象装进冰箱，面向对象做法。
先找出对象，并写出这些对象的功能：

1.   大象对象  
	进去
2.   冰箱对象
     打开
     关闭

3. 使用大象和冰箱的功能 

面向对象是以对象功能来划分问题，而不是步骤。

在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工。
面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多人合作的大型软件项目。

面向对象的特性：

- 封装性 
- 继承性
- 多态性

### 1.4 面向过程和面向对象的对比

**面向过程**

- 优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用的面向过程编程。
- 缺点：没有面向对象易维护、易复用、易扩展

**面向对象**

- 优点：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护 
- 缺点：性能比面向过程低

用面向过程的方法写出来的程序是一份蛋炒饭，而用面向对象写出来的程序是一份盖浇饭。

## 2. 构造函数和原型

### 2.1 概述

在典型的 OOP 的语言中（如 Java），都存在类的概念，类就是对象的模板，对象就是类的实例，但在 ES6之前， JS 中并没用引入类的概念。
ES6， 全称 ECMAScript 6.0 ，2015.06 发版。但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。
在 ES6之前 ，对象不是基于类创建的，而是用一种称为构建函数的特殊函数来定义对象和它们的特征。

创建对象可以通过以下三种方式：

1. 对象字面量
2. new Object()
3. 自定义构造函数

### 2.2 构造函数

**构造函数**是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。

在 JS 中，使用构造函数时要注意以下两点：

1. 构造函数用于创建某一类对象，其**首字母要大写**
2. 构造函数要**和 new 一起使用**才有意义

new 在执行时会做四件事情：

1. 在内存中创建一个新的空对象。
2. 让 this 指向这个新的对象。
3. 执行构造函数里面的代码，给这个新对象添加属性和方法。
4. 返回这个新对象（所以构造函数里面不需要 return ）。

JavaScript 的构造函数中可以添加一些成员，可以在构造函数本身上添加，也可以在构造函数内部的 this 上添加。通过这两种方式添加的成员，就分别称为**静态成员**和**实例成员**。

**静态成员**：在构造函数本上添加的成员称为**静态成员，只能由构造函数本身来访问** 
**实例成员**：在构造函数内部创建的对象成员称为**实例成员，只能由实例化的对象来访问**

### 2.3 构造函数的问题

构造函数方法很好用，但是存在浪费内存的问题。

```javascript
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    this.sing = function () {
        console.log('我会唱歌');
    }
}
var ldh = new Star('刘德华', 18);
var zxy = new Star('张学友', 19);
```

我们希望所有的对象使用同一个函数，这样就比较节省内存，那么我们要怎样做呢？

### 2.4 构造函数原型 prototype

构造函数通过原型分配的函数是所有对象所**共享的**。

JavaScript 规定，**每一个构造函数都有一个 prototype 属性**，指向另一个对象。注意这个 prototype 就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。

**我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。**

1. 原型是什么 ？ 
   一个对象，我们也称为 prototype 为原型对象。
2. 原型的作用是什么 ？ 
   共享方法。

### 2.5 对象原型 `__proto__`

对象都会有一个属性 `__proto__`指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype 原型对象的属性和方法，就是因为对象有  `__proto__`原型的存在。

-  `__proto__`对象原型和原型对象 prototype 是等价的

- `__proto__`对象原型的意义就在于为对象的查找机制提供一个方向，或者说一条路线，但是它是一个非标准属性，因此实际开发中，不可以使用这个属性，它只是内部指向原型对象 prototype

![image-20210222144845933](https://s2.loli.net/2022/08/15/ype5jQHazm87Ico.png)

### 2.6 constructor  构造函数

**对象原型（ `__proto__`）**和**构造函数（prototype）原型对象**里面都有一个属性 **constructor** 属性 ，constructor 我们称为构造函数，因为它指回构造函数本身。

constructor 主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。

**一般情况下，对象的方法都在构造函数的原型对象中设置**。如果有多个对象的方法，我们可以给原型对象采取对象形式赋值，但是这样就会覆盖构造函数原型对象原来的内容，这样修改后的原型对象 constructor  就不再指向当前构造函数了。此时，我们可以在修改后的原型对象中，添加一个 constructor 指向原来的构造函数。

### 2.7 构造函数、实例、原型对象三者之间的关系

![image-20210222145110123](https://s2.loli.net/2022/08/15/prie18sP7ISojtb.png)

### 2.8 原型链

![image-20210222145216551](https://s2.loli.net/2022/08/15/4lTPv1yqck9QAIo.png)

### 2.9 JavaScript 的成员查找机制(规则)

1. 当访问一个对象的属性（包括方法）时，首先查找这个**对象自身**有没有该属性。
2. 如果没有就查找它的原型（也就是 `__proto__`指向的 **prototype 原型对象**）。
3. 如果还没有就查找原型对象的原型（**Object的原型对象**）。
4. 依此类推一直找到 Object 为止（**null**）。
5. `__proto__`对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线。

#### 2.10 原型对象this指向

构造函数中的this 指向我们实例对象.
**原型对象**里面放的是方法,  这个方法**里面的this 指向**的是 这个方法的调用者, 也就是这个**实例对象**.

### 2.11 扩展内置对象

可以通过原型对象，对原来的内置对象进行扩展自定义的方法。比如给数组增加自定义求偶数和的功能。

**注意**：数组和字符串内置对象不能给原型对象覆盖操作 Array.prototype = {} ，只能是 Array.prototype.xxx = function(){} 的方式。

## 3. ES6之前的继承

ES6之前并没有给我们提供 extends 继承。我们可以通过**构造函数+原型对象**模拟实现继承，被称为**组合继承**。

### 3.1 call()

调用这个函数, 并且修改函数运行时的 this 指向   

```
fun.call(thisArg, arg1, arg2, ...) 
```

- thisArg ：当前调用函数 this 的指向对象
- arg1，arg2：传递的其他参数

### 3.2 借用构造函数继承父类型属性

核心原理： 通过 call() 把父类型的 this 指向子类型的 this ，这样就可以实现子类型继承父类型的属性。   

```javascript
// 父类
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}
// 子类
function Student(name, age, sex, score) {
    Person.call(this, name, age, sex);  // 此时父类的 this 指向子类的 this，同时调用这个函数
    this.score = score;
}
var s1 = new Student('zs', 18, '男', 100);
console.dir(s1); 
```

### 3.3 借用原型对象继承父类型方法

**一般情况下**，对象的方法都在构造函数的原型对象中设置，通过构造函数无法继承父类方法。  
 **核心原理**： 

1. 将子类所共享的方法提取出来，让子类的 **prototype 原型对象 = new 父类()**  
2. 本质：子类原型对象等于是实例化父类，因为父类实例化之后另外开辟空间，就不会影响原来父类原型对象
3. 将子类的 constructor 从新指向子类的构造函数

# 函数进阶

## 1. 函数的定义和调用

### 1.1 函数的定义方式

1. 函数声明方式 function 关键字 (命名函数)
2. 函数表达式 (匿名函数)
3. new Function()   

```
var fn = new Function('参数1','参数2'..., '函数体')
```

- Function 里面参数都必须是字符串格式
- 第三种方式执行效率低，也不方便书写，因此较少使用
- 所有函数都是 Function 的实例(对象)  
- 函数也属于对象

![image-20210222223818836](https://s2.loli.net/2022/08/15/enl29FDpfQMg8dv.png)

### 1.2 函数的调用方式

1. 普通函数
2. 对象的方法
3. 构造函数
4. 绑定事件函数
5. 定时器函数
6. 立即执行函数

## 2. this

### 2.1 函数内 this 的指向

这些 this 的指向，是当我们调用函数的时候确定的。 调用方式的不同决定了this 的指向不同
一般指向我们的调用者.

![image-20210222224237647](https://s2.loli.net/2022/08/15/fEQpJuI8oGyws2l.png)

### 2.1 改变函数内部 this 指向

JavaScript 为我们专门提供了一些函数方法来帮我们更优雅的处理函数内部 this 的指向问题，常用的有 bind()、call()、apply() 三种方法。

1. **call 方法**

call() 方法**调用**一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

```
fun.call(thisArg, arg1, arg2, ...) 
```

- thisArg：在 fun 函数运行时指定的 this 值
- arg1，arg2：传递的其他参数

- 返回值就是函数的返回值，因为它就是调用函数
- 因此当我们想改变 this 指向，同时想调用这个函数的时候，可以使用 call，比如继承

2. **apply 方法**

apply() 方法**调用**一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

```
fun.apply(thisArg, [argsArray])
```

- thisArg：在fun函数运行时指定的 this 值
- argsArray：传递的值，必须包含在数组里面
- 返回值就是函数的返回值，因为它就是调用函数
- 因此 apply 主要跟数组有关系，比如使用 Math. () 求数组的最大值

**PS**：ES5求数组最大值和最小值案例

```javascript
let list = [1, 4, 8, 9, 3, 5, 10]
let max = Math.max.apply(Math, list)
let min = Math.min.apply(Math, list)
console.log(max, min)
```

3. **bind 方法**

bind() 方法不会调用函数。但是能改变函数内部this 指向 

```
fun.bind(thisArg, arg1, arg2, ...) 
```

- thisArg：在 fun 函数运行时指定的 this 值
- arg1，arg2：传递的其他参数
- 返回由指定的 this 值和初始化参数改造的**原函数拷贝**
- 因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind

**PS**：修改this指向案例

```html
<script>
    let btn = document.querySelector('buttton')
    btn.onclick = function () {
        this.disabled = true//这个this指向btn
        setTimeout(function () {
            this.disabled = false
        }.bind(this), 1000);
    }
</script>
```

```
//箭头函数优化：
setTimeout(()=> {
     this.disabled = false
}, 1000);
```

### 2.2 call  apply  bind 总结

**相同点:**  

都可以改变函数内部的this指向.

**区别点:** 

1. call 和 apply  会调用函数, 并且改变函数内部this指向.
2. call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式  apply 必须数组形式[arg]
3. bind  不会调用函数, 可以改变函数内部this指向.

**主要应用场景:** 
call 经常做继承. 
apply 经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值
bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向. 

## 3. 严格模式

### 3.1 什么是严格模式

JavaScript 除了提供正常模式外，还提供了**严格模式（strict mode）**。ES5 的严格模式是采用具有限制性

JavaScript 变体的一种方式，即在严格的条件下运行 JS 代码。

严格模式在 IE10 以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。

严格模式对正常的 JavaScript 语义做了一些更改： 

1. 消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。
2. 消除代码运行的一些不安全之处，保证代码运行的安全。
3. 提高编译器效率，增加运行速度。
4. 禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class, enum, export, extends, import, super 不能做变量名

### 3.2 开启严格模式

严格模式可以应用到**整个脚本**或**个别函数**中。因此在使用时，我们可以将严格模式分为**为脚本开启严格模式**和**为函数开启严格模式**两种情况。

1. **为脚本开启严格模式**

为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句“use strict”;（或‘use strict’;）。

```html
<script>
　　"use strict";
　　console.log("这是严格模式。");
</script>
```

因为"use strict"加了引号，所以老版本的浏览器会把它当作一行普通字符串而忽略。

有的 script 基本是严格模式，有的 script 脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他 script 脚本文件。

```html
<script>
  (function (){
　　　　"use strict";
       var num = 10;
　　　　function fn() {}
　  })();
</script>
```

2. **为函数开启严格模式**

要给某个函数开启严格模式，需要把“use strict”;  (或 'use strict'; ) 声明放在函数体所有语句之前。

```javascript
function fn(){
　　"use strict";
　　return "这是严格模式。";
}
```

将 "use strict" 放在函数体的第一行，则整个函数以 "严格模式" 运行。

### 3.4 严格模式中的变化

严格模式对 Javascript 的语法和行为，都做了一些改变。

1. **变量规定**

- 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var 命令声明，然后再使用。
- 严禁删除已经声明变量。例如，delete x; 语法是错误的。

2. **严格模式下 this 指向问题**
   1. 以前在全局作用域函数中的 this 指向 window 对象。
   2. **严格模式下全局作用域中函数中的 this 是 undefined。**
   3. 以前构造函数时不加 new也可以 调用,当普通函数，this 指向全局对象
   4. 严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给他赋值则 会报错
   5. new 实例化的构造函数指向创建的对象实例。
   6. 定时器 this 还是指向 window 。
   7. 事件、对象还是指向调用者。

3. **函数变化**
   1. 函数不能有重名的**参数**。
   2. 函数必须声明在顶层.新版本的 JavaScript 会引入“块级作用域”（ ES6 中已引入）。为了与新版本接轨，不允许在非函数的代码块内声明函数。 

更多严格模式要求参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode

## 4. 高阶函数

**高阶函数**是对其他函数进行操作的函数，它**接收函数作为参数或将函数作为返回值输出。**

```html
<script>
function fn(callback){
  callback&&callback();
}
fn(function(){alert('hi')}
</script>
```

```html
<script>
function fn(){
    return function() {}
}
 fn();
</script>
```

此时fn 就是一个高阶函数
函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。 最典型的就是作为回调函数。
同理函数也可以作为返回值传递回来

## 5. 闭包

### 5.1 变量作用域

变量根据作用域的不同分为两种：全局变量和局部变量。

1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

### 5.2 什么是闭包

**闭包（closure）**指有权访问另一个函数作用域中**变量的函数**。  -----  JavaScript 高级程序设计
简单理解就是 ，一个作用域可以访问另外一个函数内部的局部变量。 

```html
<script>
 function fn1(){    // fn1 就是闭包函数
　　　　var num = 10;
　　　　function fn2(){
　　　　　　console.log(num); // 10
　　　　}
       fn2()
　}
  fn1();
</script>
```

### 5.3 在 chrome 中调试闭包

1. 打开浏览器，按 F12 键启动 chrome 调试工具。
2. 设置断点。
3. 找到 Scope 选项（Scope 作用域的意思）。
4. 当我们重新刷新页面，会进入断点调试，Scope 里面会有两个参数（global 全局作用域、local 局部作用域）。
5. 当执行到 fn2() 时，Scope 里面会多一个 Closure 参数 ，这就表明产生了闭包。

### 5.4 闭包的作用

提问：我们怎么能在 fn() 函数外面访问 fn() 中的局部变量 num 呢 ？

```html
<script>
 function fn() {　　　　
    var num = 10;　　　　
    return function {　　　　　　
         console.log(num); // 10         　　　　
     }
  }
  var f = fn();
  f()
</script>
```

**闭包作用：延伸变量的作用范围。**

### 5.5 闭包案例

1. 循环注册点击事件。
2. 循环中的 setTimeout()。
3. 计算打车价格。

```javascript
let car = (function () {
    let start = 13; // 起步价  局部变量
    let total = 0; // 总价  局部变量
    return {
        // 正常的总价
        price: function (n) {
            if (n <= 3) {
                total = start;
            } else {
                total = start + (n - 3) * 5
            }
            return total;
        },
        // 拥堵之后的费用
        yd: function (flag) {
            return flag ? total + 10 : total;
        }
    }
})();
console.log(car.price(5)); // 23
console.log(car.yd(true)); // 33

console.log(car.price(1)); // 13
console.log(car.yd(false)); // 13
```

```javascript
for (var i = 0; i < 5; ++i) {
  setTimeout(function() {
    console.log(i + " ");
  }, 100);
}
//输出结果为 5 5 5 5 5
for (var i = 0; i < 5; ++i) {
  (function(i) {
    setTimeout(function() {
      console.log(i + " ");
    }, 100);
  })(i);
}
//输出结果为： 0 1 2 3 4
```



### 5.6 闭包总结

**闭包是什么？** 

闭包是一个函数 （一个作用域可以访问另外一个函数的局部变量）

**闭包的作用是什么？** 

延伸变量的作用范围

## 6. 递归

### 6.1 什么是递归？

如果**一个函数在内部可以调用其本身**，那么这个函数就是**递归函数**。
简单理解:函数内部自己调用自己, 这个函数就是递归函数
递归函数的作用和循环效果一样
由于递归很容易发生“栈溢出”错误（stack overflow），所以**必须要加退出条件 return**。

```javascript
let num = 1;
(function fn() {
    console.log(`打印6次:${num}`)
    if (num === 6) return;
    num++;
    fn()
})()
```

### 6.2 利用递归求数学题

1. 求 1 * 2 *3 ... * n   阶乘。

```javascript
function fn(n) {
    if (n === 1) return 1;
    return `${n} * ${fn(n - 1)}`;
}
console.log(fn(3))
```

2.求斐波那契数列:当前项等于前2项和 ，求序列号对应的值。

```javascript
//1 1 2 3 5 8 13 21 34 55 89 
function fn(n) {
    if (n === 1 || n === 2) return 1;
    return fn(n - 1) + fn(n - 2);
}

console.log(fn(3))//2==>f3=f2+f1=1+1
console.log(fn(6))//8==>f6=f5+f4==>(f4+f3)+(f3+f2)==>(f3+f2)+(f2+f1)+(f2+f1)+1==>(f2+f1)+1+1+1+1+1+1==>1+1+6=8
```

3.根据id返回对应的数据对象



### 6.3 利用递归求:根据id返回对应的数据对象

### 6.4 浅拷贝和深拷贝

1. 浅拷贝只是拷贝一层, 更深层次对象级别的只拷贝引用.
2. 深拷贝拷贝多层, 每一级别的数据都会拷贝.
3. Object.assign(target, ...sources)    es6 新增方法可以浅拷贝
4. 利用JSON.parse(JSON.stringify(obj))进行深度拷贝

PS:对象的浅拷贝案例

```javascript
/* 浅拷贝案例 */
let obj = {
    id: 1,
    name: '张三'
}
let newObj = {}
Object.assign(newObj, obj)//进行浅拷贝
newObj.name = '李四'
console.log(obj.name, newObj.name)//张三，李四
/* 对深一层对象只拷贝引用地址，对拷贝后的深一层对象操作会影响原对象数据 */
let object = {
    id: 1,
    obj: {
        id: 1,
        name: '张三'
    }
}
let newObject = {}
Object.assign(newObject, object)//进行浅拷贝
newObject.obj.name = '李四'
console.log(object.obj.name, newObject.obj.name)//李四，李四
```

PS:对象的深拷贝函数封装

```javascript
var obj = {
    id: 1,
    name: 'andy',
    msg: {
        age: 18
    },
    color: ['pink', 'red']
};
var o = {};
// 封装函数 
function deepCopy(newobj, oldobj) {
    for (var k in oldobj) {
        // 判断我们的属性值属于那种数据类型
        // 1. 获取属性值  oldobj[k]
        var item = oldobj[k];
        // 2. 判断这个值是否是数组
        if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item)
        } else if (item instanceof Object) {
            // 3. 判断这个值是否是对象
            newobj[k] = {};
            deepCopy(newobj[k], item)
        } else {
            // 4. 属于简单数据类型
            newobj[k] = item;
        }
    }
}
deepCopy(o, obj);
o.msg.age = 20;
o.color[0] = 'skyblue'
console.log(obj)
console.log(o);
```

# ES6

## 前言：ES6新特性

- let和const命令

- es6的模板字符串
- 解构赋值
- 增强函数

- 扩展的字符串、对象、数组功能

- 

- Symbol

- Map和Set
- 迭代器和生成器
- Promise对象
- Proxy对象
- async的用法
- 类class
- 模块化实现

## 1.ES6 简介

### 1.1 什么是 ES6 ?

ES 的全称是 ECMAScript , 它是由 ECMA 国际标准化组织,制定的**一项脚本语言的标准化规范**。

|   年份    |  版本  |
| :-------: | :----: |
| 2015年6月 | ES2015 |
| 2016年6月 | ES2016 |
| 2017年6月 | ES2017 |
| 2018年6月 | ES2018 |
|    ...    |  ...   |

ES6 实际上是一个泛指，泛指  ES2015 及后续的版本。 

### 1.2为什么使用 ES6 ?

每一次标准的诞生都意味着语言的完善，功能的加强。JavaScript语言本身也有一些令人不满意的地方。

- 变量提升特性增加了程序运行时的不可预测性
- 语法过于松散，实现相同的功能，不同的人可能会写出不同的代码

## 2.ES6 新增语法

### 2.1 let

ES6中新增的用于声明变量的关键字。

- let声明的变量只在所处于的块级有效

```javascript
 if (true) { 
     let a = 10;
 }
 console.log(a) // a变量未定义(not defined)
```

注意：使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性。

- 不存在变量提升

```javascript
 console.log(a); // a变量未定义(not defined)
 let a = 20;
```

- 暂时性死区

```javascript
 var tmp = 123;
 if (true) { 
     tmp = 'abc';
     let tmp; 
 } 
```

**经典面试题**

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

### 2.2 const

作用：声明常量，常量就是值（内存地址）不能变化的量。

- 具有块级作用域

```javascript
 if (true) { 
     const a = 10;
 }
console.log(a) // a变量未定义(not defined)

```

- 声明常量时必须赋值

```javascript
 const PI; // 缺少初始值
```

- 常量赋值后，**基本数据类型的值**不能修改。

```javascript
 const PI = 3.14;
 PI = 100; // 常量变量不能重新赋值. 
```
- 常量赋值后，**复杂数据类型的值**不能直接修改。
```javascript
 const ary = [100, 200];
 ary[0] = 'a';
 ary[1] = 'b';
 console.log(ary); // ['a', 'b']; 
 ary = ['a', 'b']; // 常量变量不能直接赋值. 
```

### 2.3 let、const、var 的区别

1. 使用 **var** 声明的变量，其作用域为**该语句所在的函数内，且存在变量提升现象**。

2. 使用 **let** 声明的变量，其作用域为**该语句所在的代码块内，不存在变量提升**。

3. 使用 **const** 声明的是常量，在后面出现的代码中**不能再修改该常量的值**。

| var          | let            | const          |
| ------------ | -------------- | -------------- |
| 函数级作用域 | 块级作用域     | 块级作用域     |
| 变量提升     | 不存在变量提升 | 不存在变量提升 |
| 值可更改     | 值可更改       | 值不可更改     |

### 2.4 解构赋值

ES6中允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构。

按照一定模式，从数组中或对象中提取值，将提取出来的值赋值给另外的变量。

**数组解构**

```javascript
 let [a, b, c] = [1, 2, 3];
 console.log(a)//1
 console.log(b)//2
 console.log(c)//3
```

如果解构不成功，变量的值为undefined。

```javascript
 let [foo] = [];
 let [bar, foo] = [1];
```

**对象解构**

```javascript
 let person = { name: 'zhangsan', age: 20 }; 
 let { name, age } = person;
 console.log(name,age); // 'zhangsan' ,20
```

```javascript
 let {name: myName, age: myAge} = person; // myName myAge 属于别名
 console.log(myName); // 'zhangsan' 
 console.log(myAge); // 20
```

### 2.5 箭头函数

ES6中新增的定义函数的方式。

```javascript
() => {} 
const fn = () => {}
```

函数体中只有一句代码，且代码的执行结果就是返回值，可以省略大括号

```javascript
 function sum(num1, num2) { 
     return num1 + num2; 
 }
 //es6简写后
 const sum = (num1, num2) => num1 + num2; 
```

如果形参只有一个，可以省略小括号

```javascript
 function fn (v) {
     return v;
 } 
 //es6简写后
 const fn = v => v;
```

如果返回的是一个对象，则需要用小括号括起来

```javascript
function fn() {
    return {
        id: 1,
        uname: '张三'
    };
}
//es6简写后
const fn = _ => ({ id: 1, uname: '张三' });//没有形参：_相当于()
console.log(fn())//{ id: 1, uname: '张三' }
```

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
 resFn();
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

```html
<script>
        function fun() {
            return console.log('fun:', arguments.length)
        }
        fun(1, 2)//2
        const fn = _ => console.log('fn:', arguments.length)
        fn(1, 2)//arguments is not defined
</script>
```



### 2.6 剩余参数

剩余参数语法允许我们将一个不定数量的参数表示为一个数组。

```javascript
 function sum (first, ...args) {
     console.log(first); // 10
     console.log(args); // [20, 30] 
 }
 sum(10, 20, 30)
```

剩余参数和解构配合使用

```javascript
 let students = ['wangwu', 'zhangsan', 'lisi'];
 let [s1, ...s2] = students; 
 console.log(s1);  // 'wangwu' 
 console.log(s2);  // ['zhangsan', 'lisi']
```

## 3.ES6 内置对象扩展

### 3.1 Array 的扩展方法

#### 3.1.1 扩展运算符（展开语法）

扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。

```javascript
 let ary = [1, 2, 3];
 //...ary  // 1, 2, 3
 console.log(...ary); // 1 2 3
 console.log(1, 2, 3)
```

扩展运算符可以应用于**合并数组**。

```javascript
 // 方法一 
 let ary1 = [1, 2, 3];
 let ary2 = [3, 4, 5];
 let ary3 = [...ary1, ...ary2];
 // 方法二 
 ary1.push(...ary2);
```

将类数组或可遍历对象转换为真正的数组

```javascript
let oDivs = document.getElementsByTagName('div'); 
oDivs = [...oDivs];
```

**PS**:ES6求数组最大值和最小值案例

```javascript
let list = [1, 4, 8, 9, 3, 5, 10]
let max = Math.max(...list)
let min = Math.min(...list)
console.log(max, min)//10,1
```

#### 3.1.2 构造函数方法：Array.from()

**将伪数组或可遍历对象转换为真正的数组**

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}; 
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

方法还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

```javascript
 let arrayLike = { 
     "0": 1,
     "1": 2,
     "length": 2
 }
 let newAry = Array.from(aryLike, item => item *2)

```

#### 3.1.3 实例方法：find()

用于找出第一个符合条件的数组成员，如果没有找到返回undefined

```javascript
 let ary = [{
     id: 1,
     name: '张三‘
 }, { 
     id: 2,
     name: '李四‘
 }]; 
 let target = ary.find((item, index) => item.id == 2);
```

#### 3.1.4 实例方法：findIndex()

用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

```javascript
let ary = [1, 5, 10, 15];
let index = ary.findIndex(value => value > 9); 
console.log(index); // 2
```

#### 3.1.5 实例方法：includes()

表示某个数组是否包含给定的值，返回布尔值。

```javascript
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false
```

#### 3.1.6 of()

**将任意数据类型转化成数组**

```
Array.of(arg1,arg2,arg3...)//返回一个新数组
```



### 3.2 String 的扩展方法

#### 3.2.1 模板字符串

ES6新增的创建字符串的方式，使用反引号定义。

```javascript
 let name = `zhangsan`;
```

模板字符串中**可以解析变量**。

```javascript
 let name = '张三'; 
 let sayHello = `hello,my name is ${name}`; // hello, my name is zhangsan
```

模板字符串中**可以换行**

```javascript
 let result = { 
     name: 'zhangsan', 
     age: 20,
     sex: '男' 
 } 
 let html = ` <div>
     <span>${result.name}</span>
     <span>${result.age}</span>
     <span>${result.sex}</span>
 </div> `;
```

在模板字符串中可以**调用函数**。

```javascript
 const sayHello = function () { 
    return '哈哈哈哈 追不到我吧 我就是这么强大';
 }; 
 let greet = `${sayHello()} 哈哈哈哈`;
 console.log(greet); // 哈哈哈哈 追不到我吧 我就是这么强大 哈哈哈哈
```

#### 3.2.2 startsWith() 和 endsWith()

- **startsWith**()：表示参数字符串是否在原字符串的头部，返回布尔值
- **endsWith**()：表示参数字符串是否在原字符串的尾部，返回布尔值

```javascript
 let str = 'Hello world!';
 str.startsWith('Hello') // true 
 str.endsWith('!')       // true
```

**实例方法：repeat()**

repeat方法表示将原字符串重复n次，返回一个新字符串。

```javascript
'x'.repeat(3)      // "xxx" 
'hello'.repeat(2)  // "hellohello"
```

### 3.3 Object 的扩展方法

#### 3.3.1.变量属性简写

直接写入变量和函数，作为对象的属性和方法

```javascript
let uname = '张三', age = 18
const obj = {
    uname,//等价于uname:uname
    age
}
console.log(obj)
```

```javascript
const uname = 'a'
const obj = {
    [uname + 'bc']: 123,
    ['f' + uname]() {
        console.log(this);
    }
}
console.log(obj);//{ abc: 123, fa: [Function: fa] }
```

#### 3.3.2.Object .is()方法

Object .is()是*ES6*新增的用来比较两个值是否严格相等的方法，与`===`的行为基本一致。

再说`Object.is()`，其行为与`===`基本一致，不过有两处不同：

1. **+0**不等于**-0**。
2. **NaN**等于自身。

```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

#### 3.3.3 Object.assign() 合并对象

Object.assign() 将一个或者多个对象合并返回一个新对象，属于浅拷贝

```
Object.assign(target,obj1,obj2....)
```

```javascript
let newObj = {}
Object.assign(newObj, { a: 1 }, { b: 2 });
console.log(newObj);
```

## 4.ES6 新增数据结构

### 4.1 Symbol 数据类型

原始数据类型**Symbol** ,它表示是独一无二的值，最大的用途：用来定义对象的私有变量

```javascript
/* 创建Symbol变量 */
const name = Symbol('name');
const name2 = Symbol('name');
console.log(name === name2);//false

let s1 = Symbol('s1');
console.log(s1);//Symbol(s1)
let obj = {
    [s1]: '张三'
};
obj[s1] = '李四';

/*  如果用Symbol定义的对象中的变量，取值时一定要用[变量名] */
console.log(obj[s1]);//李四
console.log(obj.s1);//undefined

console.log(Object.keys(obj));//[]

// 获取Symbol声明的属性名（作为对象的key）
let s = Object.getOwnPropertySymbols(obj);
console.log(s[0]);

let m = Reflect.ownKeys(obj);
console.log(m);

```

### 4.2 Set 数据结构

ES6 提供了新的数据结构  Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成  Set  数据结构。

```javascript
const s = new Set();
```

Set函数可以接受一个数组作为参数，用来初始化。

```javascript
const set = new Set([1, 2, 3, 4, 4]);
console.log(set.size)//4
```

PS:数组去重案例

```javascript
const set = new Set(['a', 'a', 'b', 'b']);
const arr = [...set]
console.log(arr)//[ 'a', 'b' ]
```

**实例方法**

- add(value)：添加某个值，返回 Set 结构本身
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
- has(value)：返回一个布尔值，表示该值是否为 Set 的成员
- clear()：清除所有成员，没有返回值

```javascript
 const s = new Set();
 s.add(1).add(2).add(3); // 向 set 结构中添加值 
 s.delete(2)             // 删除 set 结构中的2值 
 s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值 
 s.clear()               // 清除 set 结构中的所有值
```

**遍历**

Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

```javascript
s.forEach(value => console.log(value))
```

### 4.3 Map 数据结构

 Map类型是键值对的有序列表，键和值是任意类型，其他方法与Set()数据结构相似

- 创建Map数据类型

```JavaScript
let map = new Map();
//或者使用二维数字创建
const m = new Map([
    ['a', 1],
    ['c', 2]
]);
console.log(m);
console.log(m.size);//2
```

- set()为 Map 对象中的键设置值。

```JavaScript
map.set('name', '张三');
map.set('age', 20);
```

- get() 查询获取 Map 对象中键的值

```JavaScript
console.log(map);//Map { 'name' => '张三', 'age' => 20 }
console.log(map.get('name'));//张三
```

- delete() 删除指定元素

```javascript
map.delete('age')
console.log(map);//Map { 'name' => '张三'}
```

- clear() 清空元素

```javaScript
map.clear()//Map(0) {}
```

- has() 判断键是否存在

```javascript
console.log(map.has('name'))//true
```

- keys()、values()获取所有的键、值

```javascript
console.log('测试:',map.keys(),[...map.keys()])//测试: [Map Iterator] { 'name', 'age' } [ 'name', 'age' ]
console.log('测试:',map.values(),[...map.values()])//测试: [Map Iterator] { '张三', 20 } [ '张三', 20 ]
```

- entries 返回 Map 对象中键/值对的数组。

```javascript
console.log('测试:',map.entries())//测试: [Map Entries] { [ 'name', '张三' ], [ 'age', 20 ] }
```

- forEach循环

```JavaScript
map.forEach((value, key) => {
  console.log('测试:', value, key)
})
/* 
测试: 张三 name
测试: 20 age 
*/
```

## 5.ES6 迭代器与生成器

### 5.1迭代器

 Iterator 是一种新的遍历机制，两个核心：

1. 迭代器是一个接口，能快捷的访问数据，通过Symbol.iterator来创建迭代器 通过迭代器的next()获取迭代之后的结果

2. 迭代器是用于遍历数据结构的指针(数据库的游标)

PS:使用案例

```javascript
// 使用迭代
const items = ['one', 'two', 'three'];
// 1.创建新的迭代器
const ite = items[Symbol.iterator]();
/* {value: "one", done: false} done如果为false表示遍历继续 如果为true表示遍历完成 */
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
```

### 5.2生成器

**generator**函数 可以通过yield关键字，将函数挂起，为了改变执行流提供了可能，同时为了做异步编程提供了方案

它普通函数的区别

1. function后面 函数名之前有个*

2. 只能在函数内部使用yield表达式，让函数挂起

**总结**：generator函数是分段执行的，yield语句是暂停执行 而next()恢复执行

PS:使用方式

```javascript
function* add() {
    console.log('start');
    // x 可真的不是yield '2'的返回值，它是next()调用 恢复当前yield()执行传入的实参
    let x = yield '2';
    console.log('one:' + x);
    let y = yield '3';
    console.log('two:' + y);
    return x + y;
}
const fn = add();
console.log(fn.next()); //{value:'2',done:false}
console.log(fn.next(20)); //{value:'3',done:false}
console.log(fn.next(30)); //{value:50,done:true}
```

PS:使用场景1:为不具备Interator接口的对象提供了遍历操作

```
function* objectEntries(obj) {
    // 获取对象的所有的key保存到数组 [name,age]
    const propKeys = Object.keys(obj);
    for (const propkey of propKeys) {
        yield [propkey, obj[propkey]]
    }
}
const obj = {
    name: '张三',
    age: 18
}
obj[Symbol.iterator] = objectEntries;
console.log(obj);

for (let [key, value] of objectEntries(obj)) {
    console.log(`${key}:${value}`);
}
```

PS:使用场景2:让异步代码同步化

```javascript
function loadUI() {
    console.log('加载loading...页面');
}
function showData() {
    // 模拟异步操作
    setTimeout(() => {
        console.log('数据加载完成');
        itLoad.next();

    }, 1000);
}
function hideUI() {
    console.log('隐藏loading...页面');

}
/* 构造生成器函数 */
function* load() {
    loadUI();
    yield showData();
    hideUI();
}
/* 创建遍历器 */
let itLoad = load();
itLoad.next();
```

## 6.ES6 Promise 对象

**Promise 对象**相当于一个容器，保存着未来才会结束的事件(异步操作)的一个结果,各种异步操作都可以用同样的方法进行处理 

特点：

1. **Promise 对象**的状态不受外界影响 处理异步操作 三个状态 **Pending**(进行) **Resolved**(成功) **Rejected**(失败)

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果

### 6.1 then()方法 

then() 第一个参数是relove回调函数，第二个参数是可选的 是reject状态回调的函数

then()返回一个新的promise实例，可以采用链式编程 

```javascript
/* Promise封装 */
function fn(params) {
    return new Promise((resolve, reject) => {
        if (params) resolve('成功');
        else reject('失败');
    })
}
fn(true).then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err)
})
```

### 6.2 resolve()方法

resolve()能将现有的任何对象转换成promise对象

```javascript
let p = Promise.resolve('foo');
//let p = new Promise(resolve => resolve('foo'));
console.log(p)//Promise对象
p.then(data => console.log(data))
```

### 6.3 all()

all()异步并行操作

```javascript
// 应用：一些游戏类的素材比较多，等待图片、flash、静态资源文件 都加载完成 才进行页面的初始化
let promise1 = new Promise((resolve, reject) => {});
let promise2 = new Promise((resolve, reject) => {});
let promise3 = new Promise((resolve, reject) => {});

let promise4 = Promise.all([promise1, promise2, promise3])
p4.then(()=>{
    // 三个都成功  才成功
}).catch(err=>{
    // 如果有一个失败 则失败
})
```

## 7.ES6 async与await 关键字

**async** 是 ES7 才有的与异步操作有关的关键字，和 Promise ， Generator 有很大关联的。

Generator Promise async 1.解决回调地域 2.使得异步操作显得更加方便

语法：

```javascript
async function name([param[, param[, ... param]]]) { statements }
```

- name: 函数名称。
- param: 要传递给函数的参数的名称。
- statements: 函数体语句。
- async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。

async 函数中可能会有 await 表达式，async 函数执行时，如果遇到 await 就会先暂停执行 ，等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值。

**await 关键字**

仅在 async function 中有效。如果在 async function 函数体外使用 await ，你只会得到一个语法错误。

await 操作符用于等待一个 Promise 对象, 它只能在异步函数 async function 内部使用。

语法：

```
[return_value] = await expression;
```

- expression: 一个 Promise 对象或者任何要等待的值。

- 返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。
- 如果一个 Promise 被传递给一个 await 操作符，await 将等待 Promise 正常处理完成并返回其处理结果。

await针对所跟不同表达式的处理方式：

- Promise 对象：await 会暂停执行，等待 Promise 对象 resolve，然后恢复 async 函数的执行并返回解析值。
- 非 Promise 对象：直接返回对应的值。





## 8.ES6 类(class)和对象

**面向对象**

面向对象更贴近我们的实际生活, 可以使用面向对象描述现实世界事物.  但是事物分为具体的事物和抽象的事物
手机      

- 抽象的(泛指的)
- 具体的(特指的)

面向对象的思维特点: 

1. 抽取（抽象）对象共用的属性和行为组织(封装)成一个类(模板)
2. 对类进行实例化, 获取类的对象

面向对象编程我们考虑的是有哪些对象，按照面向对象的思维特点,不断的创建对象,使用对象,指挥对象做事情.

### 8.1 对象

现实生活中：万物皆对象，对象是**一个具体的事物**，看得见摸得着的实物。例如，一本书、一辆汽车、一个人可以是“对象”，一个数据库、一张网页、一个与远程服务器的连接也可以是“对象”。

**在 JavaScript 中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象**，例如字符串、数值、数组、函数等。

对象是由**属性**和**方法**组成的：

- 属性：事物的**特征**，在对象中用**属性**来表示（常用名词）
- 方法：事物的**行为**，在对象中用**方法**来表示（常用动词）

### 8.2 类 class

在 ES6 中新增加了类的概念，可以使用 **class** 关键字声明一个类，之后以这个类来实例化对象。

- **类**抽象了对象的公共部分，它泛指某一大类（class）
- **对象**特指某一个，通过类实例化一个具体的对象   

面向对象的思维特点: 

1. 抽取（抽象）对象共用的属性和行为组织(封装)成一个类(模板)
2. 对类进行实例化, 获取类的对象

### 8.3 创建类

语法：

```javascript
class name {
	//class body
}
```

创建实例：

```javascript
var aa=new name();
```

**注意**： 类必须使用 new 实例化对象

### 8.4 类 constructor 构造函数

**constructor()** 方法是类的构造函数(默认方法)，**用于传递参数,返回实例对象**，通过 new 命令生成对象实例时，自动调用该方法。如果没有显示定义, 类内部会自动给我们创建一个**constructor()** 

语法:

```javascript
class Person {
    constructor(name, age) {
        // constructor构造方法或者构造函数
        this.name = name;
        this.age = age;
    }
}
```

创建实例:

```javascript
var ldh = new Person('刘德华', 18);
console.log(ldh.name)
```

### 8.5 类添加方法

语法:

```javascript
class Person {
    constructor(name, age) {
        // constructor 构造器或者构造函数
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name + '你好');
    }
}
```

创建实例:

```javascript
var ldh = new Person('刘德华', 18);
ldh.say();
```

**注意**： 方法之间不能加逗号分隔，同时方法不需要添加 function 关键字。

## 9. ES6 类的继承

### 9.1 继承

- 现实中的继承：子承父业，比如我们都继承了父亲的姓。
- 程序中的继承：子类可以继承父类的一些属性和方法。

语法：

```javascript
class Father {
    //父类
}
class Son extends Father {
    // 子类继承父类
}
```

实例:

```javascript
class Father {
    constructor(surname) {
        this.surname = surname;
    }
    say() {
        console.log('你的姓是' + this.surname);
    }
}
class Son extends Father {
    //这样子类就继承了父类的属性和方法
}
var damao = new Son('刘');
damao.say();
```

### 9.2  super 关键字

super 关键字用于访问和调用对象父类上的函数。可以调用父类的构造函数，也可以调用父类的普通函数

语法：

```javascript
class Person {//父类
    constructor(surname) {
        this.surname = surname;
    }
}
class Student extends Person { //子类继承父类
    constructor(surname, firstname) {
        super(surname); //调用父类的constructor (surname)
        this.firstname = firstname; //定义子类独有的属性
    }
}
```

 **注意**: 子类在构造函数中使用super, 必须放到 this 前面  (必须先调用父类的构造方法,在使用子类构造方法)

实例：

```javascript
class Father {
    constructor(surname) {
        this.surname = surname;
    }
    saysurname() {
        console.log('我的姓是:', this.surname);
    }
}
class Son extends Father { //这样子类就继承了父类的属性和方法
    constructor(surname, fristname) {
        super(surname);//调用父类的constructor (surname)
        this.fristname = fristname;
    }
    sayFristname() {
        console.log("我的名字是:", this.fristname);
    }
}
var damao = new Son('刘', '德华');
damao.saysurname();
damao.sayFristname();
```

**super关键字** 用于访问和调用对象父类上的函数。可以调用父类的构造函数，**也可以调用父类的普通函数**。

语法：

```javascript
class Father {
    say() {
        return '我是爸爸';
    }
}
class Son extends Father { // 这样子类就继承了父类的属性和方法
    say() {
        return `${super.say()}的儿子`;
    }
}
var damao = new Son();
console.log(damao.say());  
```

## 10.ES6 module模块

> 在 ES6 前， 实现模块化使用的是 RequireJS 或者 seaJS（分别是基于 AMD 规范的模块化库， 和基于 CMD 规范的模块化库）。
>
> ES6 引入了模块化，其设计思想是在编译时就能确定模块的依赖关系，以及输入和输出的变量。
>
> ES6 的模块化分为导出（export） @与导入（import）两个模块。

es6模块功能主要有两个命令构成：export和import

- export用于导出模块的对外接口 
- import用于导入其它模块提供的功能

**export default 命令**

- 在一个文件或模块中，export、import 可以有多个，export default 仅有一个。
- export default 中的 default 是对应的导出接口变量。
- 通过 export 方式导出，在导入时要加{ }，export default 则不需要。
- export default 向外暴露的成员，可以使用任意变量来接收。

**as 的用法**

- export 命令导出的接口名称，须和模块内部的变量有一一对应关系。
- 导入的变量名，须和导出的接口名称相同，即顺序可以不一致。
- 不同模块导出接口名称命名重复， 使用 as 重新定义变量名。

```
import {exportName as newName} from '...'
```

## 6. 类的本质

1. class本质还是function.
2. 类的所有方法都定义在类的prototype属性上
3. 类创建的实例,里面也有`__proto__ `指向类的prototype原型对象
4. 所以ES6的类它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。
5. 所以ES6的类其实就是语法糖.
6. 语法糖:语法糖就是一种便捷写法.   简单理解, 有两种方法可以实现同样的功能, 但是一种写法更加清晰、方便,那么这个方法就是语法糖

## **三个注意点**：

1. 在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象.
2. 类里面的共有属性和方法一定要加this使用.
3. 类里面的this指向问题. 
4. constructor 里面的this指向实例对象, 方法里面的this 指向这个方法的调用者

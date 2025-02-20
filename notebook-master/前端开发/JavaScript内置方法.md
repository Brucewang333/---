## 一、字符串方法

### 字符串常用方法表

|   方法   |             说明              |         返回值          |
| :------: | :---------------------------: | :---------------------: |
|             模板字符串             |                      常与`${}`搭配使用                       |生成字符串|
| trim() |   删除字符串两端的空白字符，不影响原值   | 返回新字符串 |
| charAt(index) | 通过索引找字符，找不到返回空串 | 对应的字符 |
| charCodeAt(index) | 返回指定位置的字符的 Unicode 编码 | 0 - 65535 之间的整数 |
|   indexOf()   | 从前往后找，找到返回内容的索引，找不到返回-1 | 索引值 |
| lastIndexOf() | 从后往前找，找到返回内容的索引，找不到返回-1 | 索引值 |
| concat(strX,...,strX) | 连接字符串 | 改变后原来的字符 |
| fontcolor(color) | 按照指定的颜色来显示字符串 | 生成html字体标签 |
| match(strX/regexp) | 检索指定字符或者匹配正则，数组形式返回，找不到返回null | 匹配值 |
| replace(regexp/substr,replacement) | 匹配替换，将满足要求的字符串替换掉，找不到返回原字符串 | 替换后的值 |
| search(regexp) | 第一个与 regexp 相匹配的子串的起始位置，找不到返回-1 | 索引值 |
| slice(start,end) | 截取字符串，start:起始下标；end:结束下标。只有一个参数就截取剩下的（负数从字符串的尾部开始算起）。截取部分 [start,end) 不影响原字符串 | 新字符串 |
| split(separator,howmany) | 截取字符串，separator:指定位置切割返回新数组，howmany:限制数组最大长度 | 新数组 |
| substr(start,length) | 截取字符串，start:起始下标，length:截取长度。不影响原字符串 | 新字符串 |
| toLocaleLowerCase() | 将大写字符串转换成小写。不影响原字符串 | 新字符串 |
| toLocaleUpperCase() | 将小写字符串转换成大写。不影响原字符串 | 新字符串 |
| toLowerCase() | 将大写字符串转换成小写。不影响原字符串 | 新字符串 |
| toUpperCase() | 将小写字符串转换成大写。不影响原字符串 | 新字符串 |
|  |  |  |

### PS:部分实例

```JavaScript
//字符匹配
let str='1a2b3c4d5e'
console.log('测试:',str.match('a'))//测试: [ 'a', index: 1, input: '1a2b3c4d5e', groups: undefined ]

//正则匹配
let str='1a2b3c4d5e'
console.log('测试:',str.match(/\d+/g))//测试: [ '1', '2', '3', '4', '5' ]

//正则替换
let str='1a2b3c4d5e'
console.log('测试:',str.replace(/\d+/g,'*'))//测试: *a*b*c*d*e

//截取字符串
let str = '1a2b3c4d5e'
let newStr = str.slice(1,3)//索引从1~3，不包含索引3
let newStr = str.slice(1)//删除第一个
console.log('测试:', str, newStr)//测试: 1a2b3c4d5e a2

let str = '1a2b3c4d5e'
let arr = str.split("3c")
console.log('测试:', str, arr)//测试: 1a2b3c4d5e [ '1a2b', '4d5e' ]
//删除指定字符串
let str = '1a2b3c4d5e'
let pl='3c4d'
let newStr=str.split(pl).join("")//如果指定字符串不存在，则返回原字符串
console.log('测试:', str, newStr) //测试: 1a2b3c4d5e 1a2b5e

//删除第一或最后一个字符
let str=',123,'
let newStr=str.substr(1)//删除第一个
let newStr2=str.substr(0,str.length-1)//删除最后一个
let newStr2=str.substr(0,str.lastIndexOf(','))//删除最后一个
//大小写转换
let str = '1a2b3c4d5e'
let newStr1 = str.toLocaleUpperCase()
let newStr2 = newStr1.toLocaleLowerCase()
console.log('测试:', str, newStr1, newStr2)//测试: 1a2b3c4d5e 1A2B3C4D5E 1a2b3c4d5e

let str = '1a2b3c4d5e'
let newStr1 = str.toUpperCase()
let newStr2 = newStr1.toLowerCase()
console.log('测试:', str, newStr1, newStr2)//测试: 1a2b3c4d5e 1A2B3C4D5E 1a2b3c4d5e
```

## 二、数组对象方法

### 数组常用方法表

| 方法              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| concat(arrX,arrX) | 连接两个或更多的数组，并返回数组。arrX:可以是值也可以是数组  |
| join()            | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。返回字符串 |
| unshift()         | 向数组的开头添加一个或更多元素，并返回新的长度。**影响原数组** |
| push()            | 向数组的末尾添加一个或更多元素，并返回新的长度。**影响原数组** |
| reverse()         | 颠倒数组中元素的顺序。                                       |
| pop()             | 删除并返回数组的最后一个元素，**影响原数组**                 |
| shift()           | 删除并返回数组的第一个元素，**影响原数组**                   |
| slice()           | 从某个已有的数组返回选定的元素                               |
| splice()          | 删除元素，并向数组添加新元素。**影响原数组**                 |
| sort()            | 对数组的元素进行排序                                         |
| toSource()        | 返回该对象的源代码。                                         |
| toString()        | 把数组转换为字符串，并返回结果。                             |
| toLocaleString()  | 把数组转换为本地数组，并返回结果。                           |
| valueOf()         | 返回数组对象的原始值                                         |

### PS:部分实例

```JavaScript
//连接数组
let arr = [1, 2, 3]
let arr1 = arr.concat([3, 4], 5, { id: 1 })
console.log('测试:', arr, arr1)//测试: [ 1, 2, 3 ] [ 1, 2, 3, 3, 4, 5, { id: 1 } ]

//转化成字符串
let arr = [1, 2, 3]
let arr1 = arr.join(',')
console.log('测试:', arr, arr1)//测试: [ 1, 2, 3 ] 1,2,3

//删除最后一个元素
let arr = [1, 2, 3]
let arr1 = arr.pop()
console.log('测试:', arr, arr1)//测试: [ 1, 2 ] 3

//截取数组
let arr = [1, 2, 3, 4, 5]
let arr1 = arr.slice(2,4)
console.log('测试:', arr, arr1)//测试: [ 1, 2, 3, 4, 5 ] [ 3, 4 ]
let arr2 = arr.splice(2,4)
console.log('测试:', arr, arr2)//测试: [ 1, 2 ] [ 3, 4, 5 ]

//数组排序
let arr = [1, 9, 4, 6, 3, 2, 7, 8]
const ascending = (a, b) => { return a - b }//降序
const descending = (a, b) => { return b - a }//降序
console.log('升序:', arr.sort(ascending))//升序: [ 1, 2, 3, 4,6, 7, 8, 9]
console.log('降序:', arr.sort(descending))//降序: [9, 8, 7, 6, 4, 3, 2, 1]


let arr = [
    { id: 1, name: '张三' },
    { id: 4, name: '贼六' },
    { id: 3, name: '玄五' },
    { id: 2, name: '李四' },
]
const ascending = (a, b) => { return a.id - b.id }//降序
const descending = (a, b) => { return b.id - a.id }//降序
console.log('升序:', arr.sort(ascending))
/* 升序: [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '玄五' },
  { id: 4, name: '贼六' }
] */
console.log('降序:', arr.sort(descending))
/* 降序: [
  { id: 4, name: '贼六' },
  { id: 3, name: '玄五' },
  { id: 2, name: '李四' },
  { id: 1, name: '张三' }
] */
```



## 三、数组遍历方法

> 迭代(遍历)方法：forEach()、map()、filter()、some()、every()；
>
> **一般**情况下迭代(遍历)方法**不影响原数组**，只有原数组里面的值不是一般数据类型例如Object类型时，**改变**其**key**所指向的**value**时才**会影响到原数组**。
>
> 如**forEach的实例二：影响原数组的情况**，所示

### 1.forEach循环

```javascript
array.forEach(function(element,index,array))
```

- forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
- element：数组当前项的值
- index：数组当前项的索引
- array：数组对象本身，可省略
- **无返回值**，一般情况不影响原数组：特殊情况如实例二

★注意：一般情况下是无法终止forEach循环的，return只能跳过当前循环，break无法在forEac中使用，想要终止循环只能用非常规手段（主动抛出异常来终止），如实例三

#### **PS：实例一**：常规用法

```javascript
let n, array = [1, 2, 3, 4, 5]
array.forEach((element, index) => {
    if (index == 3) n = element * 2;
});
console.log('结果:', n)//n=8
```

#### **PS:实例二**：影响原数组的情况

一般情况下forEach不影响原数组，只有原数组里面的值不是一般数据类型例如Object类型时，改变其ke所指向的value时才会影响到原数组。

```javascript
let array = [{ id: 1 }, 2, 3, 4, 5]
array.forEach((element, index) => {
    if (element.id) element.id = 2;//改变Object中的value会影响原数组
    element=3;//不会影响到原数组
});
console.log('结果:', array)//结果: [ { id: 2 }, 2, 3, 4, 5 ]
```

#### **PS:实例三**：终止循环骚操作

一般情况下是无法终止forEach循环的，return只能跳过当前循环，break,continue无法在forEac中使用，想要终止循环只能用非常规手段（主动抛出异常来终止）

```javascript
let n, array = [1, 2, 3, 4, 5]
try {
    array.forEach((element, index) => {
        if (index == 3) {
            n = element * 2;
            throw '抛出异常主动终止循环';//终止循环后,element值4,5就不会遍历执行了
        }
    });
} catch (error) {
    console.log('error:', error)
}
console.log('结果:', n)//n=8
```

### 2.map循环

```
array.map(function(element,index,array))
```

> **map()**用法与**forEach()**用法基本一致，只是有些许区别在于：
>
> **map()**返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值,循环体异常将不返回值

#### PS:实例一：常规用法

```javascript
//将索引为3的值+2
let array = [1, 2, 3, 4, 5]
let newArray = array.map((element, index) => {
    if (index == 3) element += 2;
    return element;
});
console.log('结果:', array, newArray)//结果: [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 6, 5 ]
```
#### PS:实例二：循环体异常将不返回值

```JavaScript
let array = [1, 2, 3, 4, 5]
let newArray=[];
try {
    newArray = array.map((element, index) => {
        if (index == 3) throw '抛出异常主动终止循环';
        element += 2;
        return element;
    });
} catch (error) {
    console.log('error:', error)
}
console.log('结果:', newArray)//结果: []
```

### 3.filter循环

```JavaScript
array.filter(function(element, index, array))
```

- filter() 方法返回一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素,主要用于筛选数组
- **注意它直接返回一个新数组**（与map相似）
- element: 数组当前项的值
- index：数组当前项的索引
- array：数组对象本身，可省略

#### PS:实例一：常规用法

```javascript
//过滤掉索引大于或等于5且值不为2
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let newArray = array.filter((element, index) => {
    return index < 5 && element !== 2;//只返回索引小于5且值不为2的值，形成新数组
});
console.log('结果:', newArray)//结果: [ 0, 1, 3, 4 ]
```

#### PS:实例二：数组模糊搜索

```javascript
/**
 * @description: 数组模糊搜索
 * @param {key}:模糊搜索的数组key
 * @param {value}:模糊搜索的关键词
 * @param {arr}:模糊搜索的数组
 * @return {*}:模糊搜索到的值，以数数组形式返回
 * @author: 琴时
 */
const search = (key, value, arr) => {
    return arr.filter((item) => item[key].match(RegExp(value)));
};
/* 测试用例 */
const array = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '玄五' },
    { id: 4, name: '贼六' },
    { id: 5, name: '张三丰' },
    { id: 6, name: '张三风' },
    { id: 7, name: '张三疯' },
]
console.log('测试:', search('name', '三', array))
/* end  */
/* 测试: [
  { id: 1, name: '张三' },
  { id: 5, name: '张三丰' },
  { id: 6, name: '张三风' },
  { id: 7, name: '张三疯' }
] */
```

#### PS:实例三：数据分页

```javascript
/**
 * @description: 数组分页
 * @param {currentPage}:当前页：默认第一页
 * @param {limit}:一页加载量:默认加载5条
 * @param {arr}：操作数组：默认空数组
 * @return {row}：分页后的数组和总页数
 * @author: 琴时
 */
const pagination = (currentPage = 1, limit = 5, arr = []) => {
    const startIndex = (currentPage - 1) * limit; //起始index
    const endIndex = startIndex + limit - 1; //结束index
    const data = arr.filter((_, index) => index >= startIndex && index <= endIndex)//分页操作
    const count = Math.ceil(arr.length / limit)//总页数
    const rows = {
        data,
        count,
        total: arr.length
    }
    return rows;
}
/* 测试用例 */
const dataSource = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '玄五' },
    { id: 4, name: '贼六' },
    { id: 5, name: '高老七' },
    { id: 6, name: '崴脚八' },
    { id: 7, name: '疯子九' },
    { id: 8, name: '不老十' },
]
console.log('第一页:', pagination(1, 5, dataSource))
console.log('第二页:', pagination(2, 5, dataSource))
/* end */
/* 测试结果 */
/* 第一页: {
  data: [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '玄五' },
    { id: 4, name: '贼六' },
    { id: 5, name: '高老七' }
  ],
  count: 2,
  total: 8
}
第二页: {
  data: [
    { id: 6, name: '崴脚八' },
    { id: 7, name: '疯子九' },
    { id: 8, name: '不老十' }
  ],
  count: 2,
  total: 8
} */
```



### 4.some循环

```javascript
array.some(function(element, index, array))
```

- some() 方法用于检测数组中的元素是否满足指定条件.   通俗点 查找数组中是否有满足条件的元素 
- **注意它返回值是布尔值, 如果查找到这个元素, 就返回true ,  如果查找不到就返回false.**
- 如果**找到第一个满足**条件的元素,则**终止循环**. 不在继续查找.
- element: 数组当前项的值
- index：数组当前项的索引
- array：数组对象本身，可省略

#### PS:实例一：常规用法

```JavaScript
let array = [1, 2, 4, 5]
let flag1 = array.some((element) => element === 2);//判断数组中是否存在2
let flag2 = array.some((element) => element === 3);//判断数组中是否存在3
console.log('结果:', flag1, flag2)//结果: true false
```

#### PS:实例二：执行查找后的操作

**与forEach的区别在于**：some遍历到符合条件的情况后将终止循环，forEach会继续循环

```JavaScript
let n = 0, array = [1, 2, 4, 5]
let flag = array.some((element) => {
    if (element > 3) {
        // 遍历到4之后符合条件就终止循环了
        n += element;
        return true
    }
    return false;
});
console.log('结果:', flag, n)//结果: true 4
```

#### PS:实例三：复合型选中样例

```javascript
/* 案例：checked为true标识数据被选中==>只允许选中奔驰或宝马（true）,选中包含其他则为（false） */
let array = [
    { label: "奔驰", value: "bc" },
    { label: "宝马", value: "bm" },
    { label: "本田", value: "bt" },
    { label: "丰田", value: "ft" },
    { label: "大众", value: "dz" },
    { label: "保时捷", value: "bsj" },
    { label: "法拉利", value: "fll" },
    { label: "兰博基尼", value: "lbjn" },
    { label: "布加迪威龙", value: "bjdwl" }
];
// 选中样例
array[0].checked = true;//选中奔驰
array[1].checked = true;//选中宝马
// array[2].checked = true;//选中其他
/* 判断是否存在选中奔驰或宝马的情况：存在则返回true */
const allowFlag1 = array.some(
    item => item.checked && (item.value === "bc" || item.value === "bm")
);

/* 判断是否存在除了奔驰或宝马的情况 */
const allowFlag2 = array.some(
    item => item.checked && item.value !== "bc" && item.value !== "bm"
);
const allowFlag = Boolean(!allowFlag2 && allowFlag1);
console.log('测试只允许选中奔驰或宝马:',allowFlag)
```

### 5.every循环

```
array.every(function(element, index, array))
```

用法与some循环相似也是返回一个布尔值，区别在于：

- **every()** 开始循环，只要有任何一项返回false，将会跳出循环，不会继续向下迭代
- **some()** 开始循环，一直在找符合条件的值，一旦遇到有一项返回true，将会跳出循环，不会继续向下迭代

#### PS:实例一：常规用法

```JavaScript
let arr1 = [true, false, true, true], arr2 = [true, true, true]
let flag1 = arr1.every((element) => element);//存在false终止循环，返回false
let flag2 = arr2.every((element) => element);//不存在false，完成循环后返回true
console.log('结果:', flag1, flag2)//结果: false true
```

## 四、ES6数组扩展方法

### 1.扩展运算符

- 扩展运算符可以将数组或者对象转为用逗号分隔的参数序列

```JavaScript
let array = [1, 2, 3];
console.log('测试:',...array)//测试: 1  2  3
```

- 扩展运算符可以应用于**合并数组**

```javascript
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [...arr1, ...arr2];//相当于==>arr1.push(...arr2);
let arr4 = [...arr2, ...arr1];//相当于==>arr1.unshift(...arr2);
console.log('测试:', arr3, arr4)//测试: [ 1, 2, 3, 3, 4, 5 ] [ 3, 4, 5, 1, 2, 3 ]
```

- 将类数组或可遍历对象转换为真正的数组

```JavaScript
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

### 2.构造函数方法：Array.from()

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
let aryLike = {
    "0": 1,
    "1": 2,
    "length": 2
}
let newAry = Array.from(aryLike, item => item * 2)
console.log('测试:',newAry)//测试: [ 2, 4 ]
```

### 3.find():查找数组元素

用于找出第一个符合条件的数组元素，如果没有找到返回undefined

```javascript
let ary = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' }
];
let target = ary.find(item => item.id == 2);
console.log('测试:',target)//测试: { id: 2, name: '李四' }
```

### 4.findIndex()：查找数组索引

用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1

```javascript
let ary = [1, 5, 10, 15];
let index = ary.findIndex(value => value > 9); 
console.log(index); // 2
```

indexOf()用于查找第一个指定元素的索引，如果没有找到返回-1

```javascript
let ary = [1, 5, 5, 10, 15];
let index = ary.indexOf(5); 
console.log(index); // 1
```

### 5.includes()：查找指定元素

表示某个数组是否包含给定的值（只能是基本数据类型），返回布尔值。

```javascript
[1, 2, 3].includes(2) // true 
[1, 2, 3].includes(4) // false
```

### 6.of()

将任意数据类型转化成数组

```javascript
Array.of(arg1,arg2,arg3...)//返回一个新数组
console.log('测试:', Array.of([1], { id: 1 }, 3))//测试: [ [ 1 ], { id: 1 }, 3 ]
```

## 五、对象方法

### 1.Object.keys() 、Object.values()

```
Object.keys(obj)
```

- 用于获取对象自身所有的属性(key)/值（value）
- 效果类似 for…in
- 返回一个由属性名组成的数组

```javascript
let obj = { id: 1, name: '琴时' }
console.log('测试:', Object.keys(obj), Object.values(obj))//测试: [ 'id', 'name' ] [ 1, '琴时' ]
```

### 2.Object.defineProperty() 

```
Object.defineProperty(obj, prop, descriptor)
```

- 定义对象中新属性或修改原有的属性
- obj：必需。目标对象 
- prop：必需。需定义或修改的属性的名字【类型：String】
- descriptor：必需。目标属性所拥有的特性【类型：Object】

- **第三个参数 descriptor 说明： 以对象形式 {value,writable ,enumerable,configurable} 书写**

- value: 设置属性的值  默认为undefined
- writable: 值是否可以重写。true | false  默认为false
- enumerable: 目标属性是否可以被枚举。true | false 默认为 false
- configurable: 目标属性是否可以被删除，以及除 `value` 和 `writable` 特性外的其他特性是否可以被修改 true | false  默认为false

```JavaScript
//如果不允许重写，值不会发生改变；如果不允许枚举，将遍历不出来；如果不允许删除，将删除不掉属性值
const obj = {};
Object.defineProperty(obj, 'name', {
    value: '琴时',
    writable: false,//是否允许重写（默认false）
    enumerable: false,//是否允许被枚举-->被遍历出来（默认false）
    configurable: false,//是否允许被删除特性(默认false)
});
obj.name = '小陈'
console.log('测试:', obj, obj.name)//测试: {} 琴时
delete obj.name
console.log('测试:', obj, obj.name)//测试: {} 琴时
```

```JavaScript
//允许重写，允许枚举，允许删除
const obj = {};
Object.defineProperty(obj, 'name', {
    value: '琴时',
    writable: true,//是否允许重写（默认false）
    enumerable: true,//是否允许被枚举-->被遍历出来（默认false）
    configurable: true,//是否允许被删除特性(默认false)
});
obj.name = '小陈'
console.log('测试:', obj, obj.name)//测试: { name: '小陈' } 小陈
delete obj.name
console.log('测试:', obj, obj.name)//测试: {} undefined
```

## 六、ES6对象扩展方法

### 1.变量属性简写

直接写入变量和函数，作为对象的属性和方法

```JavaScript
let uname = '张三', age = 18
const obj = {
    uname,//等价于uname:uname
    age
}
console.log(obj)//{ uname: '张三', age: 18 }
```

### 2.利用[]对key值构造

```JavaScript
const uname = 'a'
const obj = {
    [uname + 'bc']: 123,
    ['f' + uname]() {
        console.log(this);
    }
}
console.log(obj);//{ abc: 123, fa: [Function: fa] }
```

### 3.Object .is()方法

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

### 4.Object.assign() 合并对象

Object.assign() 将一个或者多个对象合并返回一个新对象，属于浅拷贝

```JavaScript
Object.assign(target,obj1,obj2....)//对象合并到target上形成一个新对象
```

```javascript
let newObj = {}
Object.assign(newObj, { a: 1 }, { b: 2 });
console.log(newObj);//{ a: 1, b: 2 } 
```














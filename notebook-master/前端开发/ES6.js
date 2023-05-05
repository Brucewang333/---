// ES6语法
/* 一：(...)的用法 */
// 1、...m把参数m变成动态变量
let sum = (...m) => {
    let total = 0;
    for (let i of m) {
        total += i;
    }
    console.log(`total:${total}`)
};
sum(4, 8, 9, 10);

// 2、拆解数组/扩展
let [x, y] = [4, 8];
console.log(x, y);
console.log(...[4, 8]);
// 拆解后合并
let arr1 = [1, 3];
let arr2 = [4, 8];
console.log(arr3);
let [x, ...y] = [1, 3, 5, 7];
console.log(y);

// 3、字符串拆解、扩展
let [a, b, c] = "ES6";
console.log(a, b, c);
let x = [..."ES6"];
console.log(x)
console.log(x[0]);
// 多个条件判断的时候
printAnimal = (animal) => {
    const animals = ['dog', 'cat', 'snake'];
    if (animals.includes(animal)) {
        console.log(`这个动物是:${animal}`)
    }
}
printAnimal('dog');

/*解构赋值  */
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// foo = 'aaa'
// bar = 'bbb'
console.log(foo, bar);
let { baz: foo1 } = { baz: 'ddd' };
// foo1 = 'ddd'
console.log(foo1);
var { name, sex } = { name: '琴时', sex: 'male' };
console.log(name, sex);

// es8
const obj = { name: '琴时', sex: 'male' };
var val = Object.values(obj);
console.log(val);
// 正则捕捉(利用正则检索字符串)
const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
match=reDate.exec('2020-08-01');
// year=match.groups.year,
// month=match.groups.month,
// day=match.groups.day;
console.log(match)
// console.log(`时间：${year}-${month}-${day}`);
// const reLookbehindNeg = /(?<!\D)\d+/,
//     match = reLookbehindNeg.exec('$123.89');
// console.log(match[0]);
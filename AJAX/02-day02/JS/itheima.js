function resolveData(data) {
  let arr = [];
  for (let key in data) {
    let str = key + "=" + data[key];
    arr.push(str);
  }
  return arr.join("&");
}
let res = resolveData({ name: "jack", age: 35 });
console.log(res);
/* join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，
用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。 */

function itheima(options) {
  var xhr = new XMLHttpRequest();

  // 把外界传递过来的参数对象，转换为 查询字符串
  var qs = resolveData(options.data);
  if (options.method.toUpperCase() === "GET") {
    // 发起GET请求
    xhr.open(options.method, options.url + "?" + qs);
    xhr.send();
  } else if (options.method.toUpperCase() === "POST") {
    //toUpperCase() 方法将调用该方法的字符串转为大写形式并返回
    // （如果调用该方法的值不是字符串类型会被强制转换）。
    // 发起POST请求
    xhr.open(options.method, options.url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(qs);
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      options.success(result);
    }
  };
}

### Node.js 项目中使用 Babel

- 安装依赖

```
 npm install -D @babel/core @babel/cli @babel/preset-env  @babel/node
```

1. @babel/core 是 Bable 进行代码转换的核心，@babel/cli,@babel/node 都依赖他
2. @babel/cli 是一个内置的 CLI，可以通过命令行编译文件
3. @babel/preset-env 是一个预设集合，允许您使用最新的 JavaScript，他会根据目标环境对代码降级处理
4. @babel/node 是一个与 Node.js CLI 完全相同的 CLI，在运行之前使用 Babel 预设和插件进行编译，执行的时候会占用大量内存空间，Babel 官方不建议在生产环境使用

- 新增配置文件:.babelrc 文件

```JavaScript
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

- 修改 package.json 中 script 的启动命令命令

```JavaScript
{
     "start": "babel-node app.js"
}
```

- nodemon 方式的启动修改：

```JavaScript
{
    "start": "nodemon --exec babel-node app.js",
}
```

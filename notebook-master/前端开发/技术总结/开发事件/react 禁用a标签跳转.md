### react 禁用a标签跳转

- 错误代码：

```html
<a href="javascript:;" onClick={this.delete}>删除</a>
```

- 异常信息：

```
Warning: A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed "javascript:;".
```

- 解决方式

```javascript
//将 javascript:; 改成#,然后在操作事件上禁用其默认跳转行为(防止是哈希路由跳转)
<a href="#" onClick={this.delete}>删除</a>
//对应的点击事件函数
delete=(e)=>{
	e.preventDefault();
	/*在写你需要的相关操作方法*/
}
```


  

### style中使用vue  data变量

```
this.$el.style.setProperty('--displayStyle', 'data变量'); //导入
<style>
display: var(--displayStyle);//使用
</style>>

```



```
// 将回调延迟到下次DOM更新循环之后执行
    this.$nextTick(function () {
      this.$el.style.setProperty('--displayStyle', ''); //初始化自定义上传组件样式
    });
```


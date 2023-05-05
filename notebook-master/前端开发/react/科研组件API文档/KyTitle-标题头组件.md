## KyTitle标题头组件

### 1、基本说明

- 需要添加标题头

### 2、基本使用

```react
import { KyTitle } from '@/components';
<KyTitle title="基本信息" />;
```

![image-20220519163017847](https://s2.loli.net/2022/08/15/mah9BGUXWjIgZ6q.png)

```react
import { KyTitle } from '@/components';
<KyTitle title="基本信息" btnText="复制科目" onClick={this.onClick} />
```

![带右边操作按钮的](https://s2.loli.net/2022/08/15/zjRgF18KBkP6DpQ.png)

### 3、API

| 参数    | 是否必须 | 说明             | 类型   | 默认值 |
| :------ | :------- | :--------------- | :----- | :----- |
| title   | 是       | 标题文本         | string | 标题   |
| onClick | 否       | 右侧按钮回调方法 | func   |        |
| btnText | 否       | 右侧按钮文本     | string | 操作   |

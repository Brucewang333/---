## KyContainerFrame-容器面板组件

### 1、基本说明

- 需要添加标题头
- visible为true才展示
- 自定义面板需要填写onOk、onCancel才会出现对应右侧按钮

### 2、基本使用

- 自定义按钮面板

```react
import { KyContainerFrame } from '@/components';
<KyContainerFrame title="研究机构新增" visible={true} onOk={this.handleOk} onCancel={this.handleCancel}>
  <子组件 />
</KyContainerFrame>;
```

![自定义按钮面板](https://s2.loli.net/2022/08/15/Xb1HRUayqTOYsMj.png)

- pageHeader类型面板

```react
import { KyContainerFrame } from '@/components';
<KyContainerFrame title="研究机构新增" visible={true}  onOk={this.handleOk} onCancel={this.handleCancel}>
  <子组件 />
</KyContainerFrame>;
```

![pageHeader类型面板](https://s2.loli.net/2022/08/15/Wtj4zXVGSbR2Tar.png)

### 3、API

| 参数       | 是否必须 | 说明                                                         | 类型   | 默认值  |
| :--------- | :------- | :----------------------------------------------------------- | :----- | :------ |
| title      | 是       | 标题文本                                                     | string | 标题    |
| pageHeader | 否       | pageHeader类型面板【使用后onOk不生效】                       | bool   | false   |
| onOk       | 否       | 点击保存按钮回调方法【自定义面板-prop有该方法才有保存按钮】  | func   | -       |
| onCancel   | 是       | 点击返回箭头/按钮回调方法【自定义面板下-prop有该方法才有返回按钮】 | func   | -       |
| okText     | 否       | 保存按钮文本                                                 | string | 保存    |
| cancelText | 否       | 返回按钮文本                                                 | string | 返回    |
| hideHeader | 否       | 隐藏头部                                                     | bool   | false   |
| visible    | 是       | 是否可见                                                     | bool   | true    |
| buttons    | 否       | 自定义按钮组                                                 | array  | []      |
| height     | 否       | 内嵌框的高度                                                 | number | -       |
| okType     | 否       | 保存按钮样式                                                 | string | primary |
| okType     | 否       | 返回按钮样式                                                 | string | default |

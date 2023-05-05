## KyCard-卡片组件

### 1、基本说明

- 需要设置标题
- 需要设置高度

### 2、基本使用

- 没有右侧操作按钮

```react
import { KyCard } from '@/components';
<KyCard title="快捷通道" height={263} className="home-shortcut">
    <div className="item-box">卡片内容区</div>
</KyCard>
```

![image-20220816092952239](https://s2.loli.net/2022/08/16/YG6E9OhfmHgkVCa.png)

- 存在右侧操作按钮

```react
import { KyCard } from '@/components';
<KyCard
    title="操作指南"
    height={303}
    className="home-instructions"
    onMore={()=>{}}//操作按钮点击方法
    isScroll//溢出有滚动效果
>
   <ul className="item-box">卡片内容区</ul>
</KyCard>
```

![image-20220816093919268](https://s2.loli.net/2022/08/16/8YDn1zNuVOU2dFX.png)

- 标题右侧存在消息样式

```react
import { KyCard } from '@/components';
<KyCard
  title='我的申请'
  height={303}
  className='home-application'
  content={5}
  onMore={()=>{}}
>
  <div>卡片内容区域</div>
</KyCard>
```

![image-20220816094444286](https://s2.loli.net/2022/08/16/puKlxWZsz9TBSaE.png)

### 4、API

| 参数     | 是否必须 | 说明                                     | 类型          | 默认值 |
| :------- | :------- | :--------------------------------------- | :------------ | :----- |
| title    | 是       | 卡片标题                                 | string        | 标题   |
| content  | 否       | 消息内容(存在，则显示在标题右侧旁)       | string/number | -      |
| height   | 是       | 卡片高度                                 | number        | 328    |
| bordered | 否       | 是否有边框                               | boolean       | false  |
| isScroll | 否       | 是否溢出滚动                             | boolean       | false  |
| moreText | 否       | 右侧按钮文本                             | string        | MORE   |
| onMore   | 否       | 点击右侧按钮回调方法(存在则显示右侧按钮) | func          | -      |

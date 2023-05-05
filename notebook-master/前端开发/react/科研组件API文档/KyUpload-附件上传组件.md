## KyUpload附件上传组件

### 1、基本说明

- 需要添加服务标志和模块名称
- value绑定的附件主表id用于回显

### 2、文件上传-路径

```
/**
 * 文件上传路径：
 * file模式：zuul/docrepo/upload
 * redis模式：${baseUrl}/proData/uploadRedis
 * 文件下载路径：
 * file模式：zuul/docrepo/download/file?attachmentId={uuid}
 * redis模式：${baseUrl}/proData/downloadRedis
 * 文件删除路径：
 * front/zhxg-unauth/dynamic/updateDel
 */
```

### 3、基本使用

```react
import { KyUpload } from '@/components';
<KyUpload
  serviceMark={'ky-base-resources'}//服务标志
  moduleName={'基础资源服务'}//模块名称
  onChange={this.onChange}
  value={fjzbid}//附件主表id，用于保存附件后的回显
  listType="text"//上传列表的内建样式
  multiple
/>;
```

![image-20220523145246958](https://s2.loli.net/2022/08/15/YXd2nE9Sierfgtz.png)

- 仅限图片类型（image:true,listType:'picture-card'）

```react
import { KyUpload } from '@/components';
<KyUpload
  serviceMark={'ky-base-resources'}//服务标志
  moduleName={'基础资源服务'}//模块名称
  onChange={this.onChange}
  value={fjzbid}//附件主表id，用于保存附件后的回显
  listType="picture-card"//上传列表的内建样式
  image
  multiple
/>;
```

![image-20220523150310693](https://s2.loli.net/2022/08/15/K8dyh4mMAna1VPr.png)

- 如果defaultEffective为false,文件上传后，在保存数据时需要进行附件状态更改保存操作

```js
// 保存更改附件状态-让上传的附件生效
NHFetch('api/ky-core/dynamic/save', 'POST', ['附件上传的主表id']).then(res => {});
```

### 4、API

| 参数             | 是否必须 | 说明                                                         | 类型          | 默认值   |
| :--------------- | :------- | :----------------------------------------------------------- | :------------ | :------- |
| value            | 否       | 附件主表id，用于保存后下次回显                               | string        | -        |
| fileMainName     | 否       | 附件主表名，存储该附件对应的主表的名称，主要是为了以后进行追溯 | string        | -        |
| serviceMark      | 是       | 服务标志，说明是属于哪个服务                                 | string        | ly-ky    |
| moduleName       | 是       | 模块名称，说明是属于哪个服务的哪个模块                       | string        | 科研系统 |
| multiple         | 否       | 是否支持上传多个文件，默认false                              | boolean       | false    |
| fileList         | 否       | 设置默认上传的内容，格式:[{uuid:’附件文档库的标志’,name:’文件名称’}],只有uploadType为file(文档库)模式的时候才能使用此功能《暂不兼容-无法使用，只有通过附件主表id（value）来回显》 | Array         | -        |
| uploadType       | 否       | 文件上传方式，file:文档库，redis:Redis缓存，如果是需要永久上传请使用文档库，如果只是暂存，建议使用redis缓存 | string        | file     |
| redisData        | 否       | 缓存时间,单位：分钟，设置缓存时间，意思是超过这个时间就会删除这个缓存信息 | number        | 30       |
| fileCountLimit   | 否       | 上传文件个数限制                                             | string\number | 10       |
| fileTypeLimit    | 否       | 上传文件格式限制                                             | obj           | -        |
| sizeWord         | 否       | 大小单位，默认为M                                            | string        | M        |
| disabled         | 否       | 是否禁用                                                     | boolean       | false    |
| onChange         | 否       | 值改变事件回调,参数：resultStr,resultList                    | func          | -        |
| maxFileSize      | 否       | 默认上传最大大小限制20MB                                     | number        | 20       |
| listType         | 否       | 上传列表的内建样式，支持三种基本样式 `text`, `picture` 和 `picture-card` | string        | picture  |
| image            | 否       | `picture-card`样式下使用，是否限制为图片类型                 | boolean       | false    |
| isEdit           | 否       | 是否可以编辑，默认为true，查看模式必须传value                | boolean       | true     |
| disableDelete    | 否       | 是否隐藏删除按钮，默认为false                                | boolean       | false    |
| defaultEffective | 否       | 指定上传的附件是否默认在附件主表有效                         | boolean       | false    |
| describe         | 否       | 描述，对上传的附件的一个描述信息                             | string        | -        |
| disabled         | 否       | 是否禁用组件                                                 | boolean       | false    |
| hideTips         | 否       | 是否隐藏提示语，默认隐藏                                     | boolean       | true     |
| tips             | 否       | 提示语                                                       | string        | -        |


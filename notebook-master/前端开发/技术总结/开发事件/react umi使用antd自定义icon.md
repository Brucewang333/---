### 

### 在react-umi在使用antd自定义icon/默认icon

antd 图标在侧边栏菜单中使用时，第一级没有图标，收缩时会出现文字没有隐藏的情况

- 引入文件

```
import { Icon } from 'antd';
import { ReactComponent as AuthorizationSvg } from '@/assets/svg/permissionResource.svg';//svg
import logo from '@/assets/images/login-logo.png';//图片
```

- 使用方式

```
let menuIcon=''//用于侧边栏菜单的图标
if (引入svg图标) {
  // 引入svg图标
  menuIcon = <Icon component={item.icon} />;
} else if (引入图片) {
  // 引入图片
  menuIcon = (
    <>
      <img className={styles.img} src={item.icon} alt="" />
      {/* 解决菜单导航栏收缩时文字没有隐藏的问题 */}
      <Icon type={'null'} />
    </>
  );
} else {
  // 使用antd默认图标
  menuIcon = <Icon type={item.icon} />;
}
```


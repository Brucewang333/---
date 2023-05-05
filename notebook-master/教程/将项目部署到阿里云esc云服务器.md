### 1.配置好云服务器

购买服务器实例，重置一下密码，记住实例的IP地址。

<img src="https://s2.loli.net/2022/08/15/GWJFL4BCysoADYV.png" alt="image-20210507143354917" style="zoom:67%;" />

### 2.利用xshell软件连接服务器

1. 新建回话，填写配置

<img src="https://s2.loli.net/2022/08/15/1BXDOQP58HKJUnh.png" alt="image-20210507145925814" style="zoom: 67%;" />

2. 填写服务器账号密码，账号：root，密码为服务器实例密码

<img src="https://s2.loli.net/2022/08/15/pYT3Jm91eSqDbla.png" alt="image-20210507150832489" style="zoom:67%;" />

3. 服务器连接成功

<img src="https://s2.loli.net/2022/08/15/gbtxTw9rBHdQE5o.png" alt="image-20210507150953534" style="zoom: 80%;" />

4. 安装宝塔面板

   ```
   yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
   ```

   <img src="https://s2.loli.net/2022/08/15/zLEBxOkfP8C9iVt.png" alt="image-20210507151708705" style="zoom:67%;" />

输入y,回车

<img src="https://s2.loli.net/2022/08/15/31LIpH5kuQlMNgT.png" alt="image-20210507151755759" style="zoom: 80%;" />

安装完成，保存好账号和密码

![image-20210507152033454](https://s2.loli.net/2022/08/15/nPf87aiIvjKBJFc.png)

★如果忘记账号和密码可以输入命令：bt 回车，再输入：14 回车，可以查找

### 3.在阿里云配置安全组

<img src="https://s2.loli.net/2022/08/15/49wxEgjdT7oB21Q.png" alt="image-20210507153716721" style="zoom:67%;" />

![image-20210507154712965](https://s2.loli.net/2022/08/15/cD4k95qxYhdA6ps.png)

### 4.利用宝塔面板搭建环境

1. 打开宝塔面板，复制外网地址到浏览器中打开

   ![image-20210507152527514](https://s2.loli.net/2022/08/15/XgH5dPNrv48QhMu.png)

2. 登录宝塔面板：账号密码为安装时生成的username，password

<img src="https://s2.loli.net/2022/08/15/sngp1Ohax4WDRSH.png" alt="image-20210507152837578" style="zoom:80%;" />

3. 安装系统环境版本建议使用php7.2+phpmyAdmin4.4(防止数据库可视化软件打不开)，**可在软件商店中卸载和更换版本**

<img src="https://s2.loli.net/2022/08/15/KJHPgBQaWchN4k2.png" alt="image-20210507154144350" style="zoom:67%;" />

等等安装...

<img src="https://s2.loli.net/2022/08/15/y8fJl1TAUB3aQFP.png" alt="image-20210507154231650" style="zoom:67%;" />

4. 可在宝塔面板软件商店下载其他需要的环境

   **此次教程部署的是node+vue搭建的项目,所以安装的相关环境有**:(如果是其他项目可根据自己需求在软件商店进行安装)

   ★软件版本可自行在软件商店进行版本更换

   - 代理服务器:Nginx 1.19
- 数据库相关:php7.2+phpmyAdmin4.4+mysql5.7
   - pm2管理器(已经包含node+npm+nvm+pm2)


![image-20210507155926327](https://s2.loli.net/2022/08/15/RwgtxqoaQEpYleP.png)

5. 配置端口

<img src="https://s2.loli.net/2022/08/15/PUORTQhnWNMzlk7.png" alt="image-20210507160737602" style="zoom:67%;" />

6. 添加数据库

![image-20210507161209991](https://s2.loli.net/2022/08/15/moUkJzst9O3lAuF.png)

7. 将本地数据库脚本导入

![image-20210507161239132](https://s2.loli.net/2022/08/15/wYlvFnfPbLSOCug.png)

<img src="https://s2.loli.net/2022/08/15/4hPK9wAr7pnQIcH.png" alt="image-20210507164354143" style="zoom:80%;" />

★如果可视化软件phpmyAdmin打不开建议更改php版本和phpmyAdmin版本（php7.2+phpmyAdmin4.4）

![image-20210507163034017](C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20210507163034017.png)

8. 登录可视化软件:账号root,密码:上一步有讲

<img src="https://s2.loli.net/2022/08/15/jRqrze1Qop27CBE.png" alt="image-20210507163825579" style="zoom:80%;" />

<img src="https://s2.loli.net/2022/08/15/3pG4yamN5Alkvu9.png" alt="image-20210507164457547" style="zoom: 67%;" />

### 5.部署项目

1. 将项目上传到云服务器,首先点击文件进入www/wwwroot目录

<img src="https://s2.loli.net/2022/08/15/VykspuNtM1DBGdm.png" alt="image-20210507165512586" style="zoom: 67%;" />

2. 上传本地项目

<img src="https://s2.loli.net/2022/08/15/DuWBrawt5ObHXAC.png" alt="image-20210507171141091" style="zoom:80%;" />

3. 选择上传的文件,然后上传到服务器

<img src="C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20210507171224181.png" alt="image-20210507171224181" style="zoom:80%;" />

4. 将上传的文件解压

   <img src="C:/Users/Administrator/AppData/Roaming/Typora/typora-user-images/image-20210507171355557.png" alt="image-20210507171355557" style="zoom: 67%;" />

进入文件目录

<img src="https://s2.loli.net/2022/08/15/DdsKNpkS8bo7cJV.png" alt="image-20210507171846153" style="zoom:80%;" />

复制文件路径,打开xshell

<img src="https://s2.loli.net/2022/08/15/ehiGkyrsm852QIj.png" alt="image-20210507171959432" style="zoom:67%;" />

进入相应的文件目录,安装项目依赖

<img src="https://s2.loli.net/2022/08/15/MWvyPgJjmLlNscY.png" alt="image-20210507172657314" style="zoom:80%;" />

注意:项目数据库连接配置要于服务器的配置要一致

<img src="https://s2.loli.net/2022/08/15/Gk6OXicro73RPax.png" alt="image-20210507173505434" style="zoom:80%;" />

使用PM2运行node项目

![image-20210507173525859](https://s2.loli.net/2022/08/15/SMiGdnmO6U5RBVJ.png)

也可以使用可视化面板执行项目或者查看进程

<img src="https://s2.loli.net/2022/08/15/wUJRTOezI3CGArD.png" alt="image-20210507175033900" style="zoom:67%;" />

添加映射

<img src="https://s2.loli.net/2022/08/15/l7uqOH9GxDpmrZc.png" alt="image-20210507200627734" style="zoom:80%;" />

配置Nginx反向代理:

![image-20210507200827965](https://s2.loli.net/2022/08/15/tqCVsXAZpy8NWHf.png)
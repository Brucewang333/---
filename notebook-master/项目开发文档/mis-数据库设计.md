### 用户表:user

```
id:integer,//用户ID
rid:integer,//角色ID
image:string,//头像
username:string,//用户名
phone:string,//密码
sex:integer,//性别
address:string,//地址
status:integer,//状态
```

```
sequelize生成模型类:npx sequelize model:generate --name User --attributes rid:integer,username:string,password:string,phone:string,sex:integer,address:string,status:integer,image:string
```

密钥表:key

```
id:integer,//索引
name:string,//密钥串
username:string,//用户名
```

```
sequelize生成模型类:npx sequelize model:generate --name Key --attributes name:string,username:string
```



### 角色表:role

```
id:integer,//索引ID
rid:integer,//角色ID
role:string,//角色名
describe:string,//角色描述
status:integer,//状态
```

```
sequelize生成模型类:npx sequelize model:generate --name Role --attributes rid:integer,role:string,describe:string,status:integer
```

### 人才表:personnel

```
id:integer,//数据ID
uid:integer,//UID
username:string,//姓名
sex:integer,//性别
status:integer,//状态
```

```
sequelize生成模型类:npx sequelize model:generate --name Personnel --attributes uid:string,username:string,sex:integer,status:integer
```

### 账户表:account

```
id:integer,//数据ID
username:string,//用户名
nikename:string,//昵称
phone:string,//电话
platform:string,//平台
note:string,//备注
status:integer,//状态
```

```
sequelize生成模型类:npx sequelize model:generate --name Account --attributes username:string,phone:string,platform:string,status:integer
```


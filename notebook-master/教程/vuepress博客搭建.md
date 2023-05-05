### 介绍

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器 (opens new window)](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://www.vuepress.cn/theme/)和[插件 API](https://www.vuepress.cn/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://www.vuepress.cn/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

### 说明

- 搭建原生 vuepress,查看[**Vuepress 官方文档**](https://www.vuepress.cn/)教程即可

- 本次教程搭建的是配套[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/) 1.x 主题

### 创建项目

```shell
#全局安装脚手架依赖环境
## npm命令方式
npm install @vuepress-reco/theme-cli@1.0.7 -g
## yarn命令方式
yarn global add @vuepress-reco/theme-cli@1.0.7

#初始化项目 piante:项目名称
theme-cli init piante
# 安装
cd piante
npm install 或者 yarn install

# 运行项目
npm run dev 或者 yarn dev
```

★ 初始化项目时：其他选项默认回车，最后选择 doc

![image-20220819175915080](https://www.image.kim-shift.cn/chfs/shared/markdown/image-20220819175915080.png)

### 项目结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

## 同步到 GitHub/gitee 远程仓库

- 删除远程关联库名：git remote rm 远程仓库名
- 关联GitHub 仓库：git remote add github 仓库地址
- 关联Gitee 仓库：git remote add gitee 仓库地址
- 初次关联远程仓库：git push -u origin master
- 上传到远程仓库：git push origin master
- GitHub：git push github master
- Gitee：git push gitee master
- 整合远程仓库和本地仓库：git pull gitee master --allow-unrelated-histories

```
拒绝合并无关的历史:
首先将远程仓库和本地仓库关联起来:git branch --set-upstream-to=origin/远程分支名  你的分支名
整合远程仓库和本地仓库:git pull --allow-unrelated-histories    (忽略版本不同造成的影响)
重新更新、提交即可。
```

### 关联远程仓库

- 默认方式关联仓库：git remote add origin 仓库地址
- 关联GitHub 仓库：git remote add github 仓库地址
- 关联Gitee 仓库：git remote add gitee 仓库地址

### 查看远程库信息

- 查看远程库信息：git remote -v

### 向 GitHub/gitee 拉取

- 默认拉取更新：git pull origin master
- 拉取github更新：git pull github master
- 拉取gitee更新：git pull giteemaster
- 更新远程代码到本地仓库：git fetch origin master
- 整合远程仓库和本地仓库：git pull gitee master --allow-unrelated-histories

## 同时推送项目至 GitHub和gitee

### 删除远程关联库名

- git remote rm 远程仓库名

### 关联远程库

- 关联 GitHub 的远程库：git remote add github 仓库地址
- 关联 gitee 的远程库：git remote add gitee 仓库地址

### 提交到 GitHub/gitee

- GitHub：git push github master
- Gitee：git push gitee master

### 向 GitHub/gitee 拉取

- 从 github 拉取更新：git pull github master
- 从 gitee 拉取更新：git pull gitee master
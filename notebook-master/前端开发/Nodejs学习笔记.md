## global

### process对象

- process对象是一个全局对象，可以在任何地方都能访问到他，通过这个对象提供的属性和方法，使我们可以对当前运行的程序的进程进行访问和控制

- argv

  Array，一组包含命令行参数的数组. 

- execPath

  开启当前进程的绝对路径. 

- env

  返回用户环境信息.

- version
   返回node版本信息.

-  versions
  返回node以及node依赖包版本信息 

- pid
  当前进程的pid.

- title
  当前进程的显示名称(GetterlSetter) 

- arch
  返回当前CPU处理器架构arm/ia32/x64

- platform
  返回当前操作系统平台 .

- cwd()
  返回当前进程的工作目录. 

- chdir(directory)
  改变当前进程的工作目录. 

- memoryUsage()
  返回node进程的内存使用情况，单位是byte

- exit(code)
  退出 

- kill(pid)
  向进程发送信息

- stdin、stdout:标准输入输出流（IO)
  标准输入设备: http://baike.baidu.com/view/632680.htm

  标准输出设备:http://baike.baidu.com/view/632676.htm 

  stdin和stdout提供了操作输入数据和输出数据的方法，我们也通常称为IO操作

- stdin
  标准输入流. 
- stdout
  标准输出流
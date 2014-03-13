---
title: vsftpd防火墙设置
author: windea
layout: post
permalink: /archives/142.html
categories:
  - Linux
  - 未分类
---
vsftpd防火墙设置

一.权限导致vsftpd不能正常访问  
安装vsftpd软件后，ftp默认的家目录为/var/ftp, 就是这个/var/ftp的权限设置错误导致的，这个目录的权限是不能打开所有权限的；是您运行了chmod 777 /var/ftp所致。

如下FTP用户的家目录是不能针对所有用户、用户组、其它用户组完全开放；

[root@localhost ~]# ls -ld /var/ftp

drwxrwxrwx 3 root root 4096 2009-03-23 /var/ftp  
修正这个错误，应该用下面的办法；

[root@localhost ~]# chown root:root /var/ftp

[root@localhost ~]# chmod 755 /var/ftp  
 

二.开启LINUX服务器防火墙后，不能正常登录。  
常规设置在防火墙配置文件中添加21端口，还是不能正常访问到FTP服务器。

首先要了解概念；

FTP支持两种模式，一种方式叫做Standard (也就是 PORT方式，主动方式)，一种是 Passive (也就是PASV，被动方式)。 Standard模式 FTP的客户端发送 PORT 命令到FTP服务器。Passive模式FTP的客户端发送 PASV命令到 FTP Server。

PORT 和 PASV的简单区别如下：

Port模式FTP 客户端首先和FTP服务器的TCP 21端口建立连接，通过这个通道发送命令，客户端需要接收数据的时候在这个通道上发送PORT命令。 PORT命令包含了客户端用什么端口接收数据。在传送数据的时候，服务器端通过自己的TCP 20端口连接至客户端的指定端口发送数据。 FTP server必须和客户端建立一个新的连接用来传送数据。

Passive模式在建立控制通道的时候和Standard模式类似，但建立连接后发送的不是Port命令，而是Pasv命令。FTP服务器收到 Pasv命令后，随机打开一个高端端口（端口号大于1024）并且通知客户端在这个端口上传送数据的请求，客户端连接FTP服务器此端口，然后FTP服务器将通过这个端口进行数据的传送，这个时候FTP server不再需要建立一个新的和客户端之间的连接。

因为IE浏览器默认使用的是Passive（被动）模式，所以要连接Linux服务器大于1024端口，而防火墙并没有开发1024以上的端口，导致登录ftp服务器被防火墙阻止。

&nbsp;

&nbsp;

解决方法：1.客户端设置  
去掉 前面的复选框，让IE浏览器使用port（主动）模式，但是要对每个客户端进行设置比较麻烦。

&nbsp;

2.服务器端设置(以CentOS为例)  
修改vsftpd.conf配置文件让它支持Passive（被动）模式

#vim /etc/vsftpd/vsftpd.conf  
在最后一行添加如下内容：

pasv\_min\_port=3000 （设置被动模式的端口范围）

pasv\_max\_port=3010 （设置被动模式的端口范围）  
在防火墙配置文件iptables中添加端口

#vim /etc/sysconfig/iptables

-A RH-Firewall-1-INPUT -m state &#8211;state NEW -m tcp -p tcp &#8211;dport 3000:3010 -j ACCEPT  
重启服务使其生效

#service vsftpd rstart  
#service iptables restart

&nbsp;

&nbsp;
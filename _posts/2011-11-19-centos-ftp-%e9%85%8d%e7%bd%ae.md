---
title: CentOS Ftp 配置
author: windea
layout: post
permalink: /archives/134.html
categories:
  - Linux
---
CentOS Ftp 配置

&nbsp;

启动命令：/etc/rc.d/init.d/vsftpd start

&nbsp;

vsftpd的配置  
vsftpd.ftpusers：位于/etc目录下。它指定了哪些用户账户不能访问FTP服务器，例如root等。  
vsftpd.user\_list：位于/etc目录下。该文件里的用户账户在默认情况下也不能访问FTP服务器，仅当vsftpd .conf配置文件里启用userlist\_enable=NO选项时才允许访问。  
vsftpd.conf：位于/etc/vsftpd目录下。来自定义用户登录控制、用户权限控制、超时设置、服务器功能选项、服务器性能选项、服务器响应消息等FTP服务器的配置。

(1)用户登录控制  
anonymous_enable=YES，允许匿名用户登录。  
no\_anon\_password=YES，匿名用户登录时不需要输入密码。  
local_enable=YES，允许本地用户登录。  
deny\_email\_enable=YES，可以创建一个文件保存某些匿名电子邮件的黑名单，以防止这些人使用Dos攻击。  
banned\_email\_file=/etc/vsftpd.banned\_emails，当启用deny\_email\_enable功能时，所需的电子邮件黑名单保存路径(默认为/etc/vsftpd.banned\_emails)。

(2)用户权限控制  
write_enable=YES，开启全局上传权限。  
local_umask=022，本地用户的上传文件的umask设为022(系统默认是077，一般都可以改为022)。  
anon\_upload\_enable=YES，允许匿名用户具有上传权限，很明显，必须启用write_enable=YES，才可以使用此项。同时我们还必须建立一个允许ftp用户可以读写的目录(前面说过，ftp是匿名用户的映射用户账号)。  
anon\_mkdir\_write_enable=YES，允许匿名用户有创建目录的权利。  
chown_uploads=YES，启用此项，匿名上传文件的属主用户将改为别的用户账户，注意，这里建议不要指定root账号为匿名上传文件的属主用户！  
chown\_username=whoever，当启用chown\_uploads=YES时，所指定的属主用户账号，此处的whoever自然要用合适的用户账号来代替。  
chroot\_list\_enable=YES，可以用一个列表限定哪些本地用户只能在自己目录下活动，如果chroot\_local\_user=YES，那么这个列表里指定的用户是不受限制的。  
chroot\_list\_file=/etc/vsftpd.chroot\_list，如果chroot\_local\_user=YES，则指定该列表(chroot\_local\_user)的保存路径(默认是/etc/vsftpd.chroot\_list)。  
nopriv_user=ftpsecure，指定一个安全用户账号，让FTP服务器用作完全隔离和没有特权的独立用户。这是vsftpd系统推荐选项。  
async\_abor\_enable=YES，强烈建议不要启用该选项，否则将可能导致出错！  
ascii\_upload\_enable=YES；ascii\_download\_enable=YES，默认情况下服务器会假装接受ASCⅡ模式请求但实际上是忽略这样的请求，启用上述的两个选项可以让服务器真正实现ASCⅡ模式的传输。  
注意：启用ascii\_download\_enable选项会让恶意远程用户们在ASCⅡ模式下用“SIZE/big/file”这样的指令大量消耗FTP服务器的I/O资源。  
这些ASCⅡ模式的设置选项分成上传和下载两个，这样我们就可以允许ASCⅡ模式的上传(可以防止上传脚本等恶意文件而导致崩溃)，而不会遭受拒绝服务攻击的危险。

(3)用户连接和超时选项  
idle\_session\_timeout=600，可以设定默认的空闲超时时间，用户超过这段时间不动作将被服务器踢出。  
data\_connection\_timeout=120，设定默认的数据连接超时时间。

(4)服务器日志和欢迎信息  
dirmessage\_enable=YES，允许为目录配置显示信息，显示每个目录下面的message\_file文件的内容。  
ftpd_banner=Welcome to blah FTP service，可以自定义FTP用户登录到服务器所看到的欢迎信息。  
xferlog_enable=YES，启用记录上传/下载活动日志功能。  
xferlog_file=/var/log/vsftpd.log，可以自定义日志文件的保存路径和文件名，默认是/var/log/vsftpd.log。
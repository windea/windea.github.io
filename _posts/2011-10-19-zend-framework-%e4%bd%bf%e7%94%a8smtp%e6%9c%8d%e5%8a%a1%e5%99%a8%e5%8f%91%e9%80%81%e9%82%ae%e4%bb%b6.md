---
title: Zend Framework 使用SMTP服务器发送邮件
author: windea
layout: post
permalink: /archives/115.html
categories:
  - Zend Framework
tags:
  - Framework
  - SMTP
  - Zend
---
set\_include\_path(dirname(\_\_FILE\_\_) . &#8216;/library&#8217;);  
require(&#8216;Zend/Mail.php&#8217;);  
require(&#8216;Zend/Mail/Transport/Smtp.php&#8217;);

$config = array(&#8216;auth&#8217; => &#8216;login&#8217;,  
&#8216;username&#8217; => &#8216;windea&#8217;,  
&#8216;password&#8217; => &#8216;\***\***&#8217;,  
);

$transport = new Zend\_Mail\_Transport_Smtp(&#8216;smtp.163.com&#8217;, $config);  
$mail = new Zend_Mail(&#8216;UTF-8&#8242;);  
$mail->setFrom(&#8216;xxxx@163.com&#8217;, &#8216;发件人&#8217;);  
$mail->addTo(&#8216;xxxx@163.com&#8217;[/email], &#8216;收件人&#8217;);  
$mail->setSubject(&#8216;Test&#8217;);  
$mail->setBodyHtml(&#8216;HTML Mail&#8217;);  
$mail->send($transport);

ps:如果使用Gmail的SMTP服务器需要再加几个参数,红色部分是关键哦

$config = array(&#8216;auth&#8217; => &#8216;login&#8217;,  
&#8216;username&#8217; => &#8216;windea&#8217;,  
&#8216;password&#8217; => &#8216;\***\***&#8217;,  
<span style="color: #ff0000;">                       &#8216;ssl&#8217; => &#8216;tls&#8217;,</span>  
<span style="color: #ff0000;">                       &#8216;port&#8217; => 587,</span>  
);
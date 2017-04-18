---
title: ABOUT
layout: page
comments: no
---

{{ site.about }}

----

###联系方式：

{% if site.qq %}
ＱＱ：[{{ site.qq }}](tencent://message/?uin={{ site.qq }})
{% endif %}
网站：[{{ site.name }}]({{ site.url }})

GitHub : [http://github.com/{{ site.github }}](http://github.com/{{ site.github }})

摄影作品 : [http://windea.lofter.com/](http://windea.lofter.com/)

----

{% if site.weibo %}
[![新浪微博](http://service.t.sina.com.cn/widget/qmd/{{ site.weibo }}/f78fbcd2/1.png)](http://weibo.com/u/{{ site.weibo }})
{% endif %}

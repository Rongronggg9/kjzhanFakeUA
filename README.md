# 阻止课件站跳转下载 2345 加速浏览器

[www.kjzhan.com](http://www.kjzhan.com)

**[Greasy Fork](https://greasyfork.org/zh-CN/scripts/30689)**

## 原理

通过返回错误 ~~(正确)~~ 的 User-Agent 欺骗网页。

参考 ~~(抄袭)~~ 了其他类似的 User-script.


    navigator.__defineGetter__('userAgent', function() {
		return 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.108 Safari/537.36 WangPai 2345Explorer/8.4.1.14998';
	});

## 前情提要

其实还不会写代码来着...

最近想下载一些电子课本导入到 Kindle 里面，这是为数不多的提供下载的网站了。  
可是那有一个比较令人讨厌的设定呢...

不过稍微 view-source: 就可以知道只是有一个判断 UA 的条件在刷存在感而已。

	 <script type="text/javascript">
		var userAgent = navigator.userAgent;
			if(userAgent.indexOf('WangPai')=='-1'){
		        alert("亲爱的，当您看到这个窗口的时候，说明您没有使用 课件站【独家版权】的8.4版2345，点击“确定”按钮，根据教材进行设置，本站所有课件免费下载，祝你成功！如果不懂，请加QQ群:7021584 ，站长andy亲自接待!");
				window.location.href="http://www.kjzhan.com/js/2345.htm";   
    		}
	</script> 

在 Chrome 的 DevTools 里面开启设备仿真，添加一个 Emulated Device 并填入含有 `WangPai` 字段的 UA 即可解决这个问题。

那么为什么要使用一个 User-script 来解决这个问题呢?   
只能说是因为这样更美观的缘故咯，~~这是病得治(?)~~

这里使用的这段 UA 来自所提供的 2345Explorer v8.4.  
那么为什么要使用~~原汁原味的~~ UA 呢?  
这是强迫症~~得治(?)~~

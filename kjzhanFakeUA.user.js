// ==UserScript==
// @name         阻止课件站跳转下载 2345 加速浏览器
// @namespace    https://github.com/Rongronggg9/kjzhanFakeUA
// @version      0.1a
// @description  There should not be a browser called 2345Explorer :)
// @author       Rongronggg9
// @match        *://www.kjzhan.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	navigator.__defineGetter__('userAgent', function() {
		return 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.108 Safari/537.36 WangPai 2345Explorer/8.4.1.14998';
	});
	//匹配的字段是 "WangPai" , 以上来自所提供的 2345加速浏览器v8.4 的 UA
	
})();


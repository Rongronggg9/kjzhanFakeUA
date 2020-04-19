// ==UserScript==
// @name         直接显示课件站下载链接
// @namespace    https://github.com/Rongronggg9/kjzhanFakeUA
// @version      1.0
// @description  无需微信或 2345 浏览器以及验证码，直接显示下载链接
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
	//匹配的字段是 "WangPai" , 以上来自该网站三年前提供的 2345加速浏览器v8.4 的 UA

    window.addEventListener('load', function() {
        document.getElementById("ys").style.display = "none";
        document.getElementById("dow").style.display = "block";
    }, false);

})();

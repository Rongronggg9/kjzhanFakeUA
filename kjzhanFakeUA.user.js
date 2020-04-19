// ==UserScript==
// @name         直接显示课件站下载链接
// @namespace    https://github.com/Rongronggg9/kjzhanFakeUA
// @version      1.1
// @description  无需微信或 2345 浏览器以及验证码，直接显示下载链接
// @author       Rongronggg9
// @match        *://www.kjzhan.com/plus/download.php*
// @run-at       document-start
// @grant        none
// @supportURL   https://github.com/Rongronggg9/kjzhanFakeUA/issues
// @icon         http://www.kjzhan.com/favicon.ico
// ==/UserScript==


(function() {
	'use strict';
	navigator.__defineGetter__('userAgent', function() {
		return 'WangPai MicroMessenger';
	});

	window.addEventListener('load', function() {
		document.getElementById("ys").style.display = "none";
		document.getElementById("dow").style.display = "block";
	}, false);

})();

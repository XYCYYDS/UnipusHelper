// ==UserScript==
// @name         Unipus网课助手
// @namespace    https://www.github.com/SSmJaE/
// @description  显示U校园题目答案；支持单元测试、班级测试；自动答题；刷时长；开放自定义设置
// @version      1.3.4
// @author       rui & dan & SSmJaE
// @license      GPL-3.0
// @compatible   Chrome
// @run-at       document-end
// @match        *://u.unipus.cn/*
// @match        *://ucamapi.unipus.cn/*
// @match        *://sso.unipus.cn/sso/login*
// @match        *://uexercise.unipus.cn/uexercise*
// @match        *://u.unipus.cn/user/student/homework*
// @match        *://ucontent.unipus.cn/_pc_default/pc.html?*
// @match        *://ucontent.unipus.cn/_utalk_default/pc.html?*
// @connect      localhost
// @connect      mz.3ds2.top
// @connect      u.unipus.cn
// @connect      47.97.90.127
// @connect      ucamapi.unipus.cn
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @require      https://cdn.jsdelivr.net/npm/vue/dist/vue.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// ==/UserScript==

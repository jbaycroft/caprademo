/* Copyright (c) 2006 Yahoo! Inc. All rights reserved. */
YAHOO.util.CustomEvent=function(e,t){this.type=e,this.scope=t||window,this.subscribers=[],YAHOO.util.Event&&YAHOO.util.Event.regCE(this)},YAHOO.util.CustomEvent.prototype={subscribe:function(e,t,n){this.subscribers.push(new YAHOO.util.Subscriber(e,t,n))},unsubscribe:function(e,t){var n=!1;for(var r=0;r<this.subscribers.length;++r){var i=this.subscribers[r];i&&i.contains(e,t)&&(this._delete(r),n=!0)}return n},fire:function(){for(var e=0;e<this.subscribers.length;++e){var t=this.subscribers[e];if(t){var n=t.override?t.obj:this.scope;t.fn.call(n,this.type,arguments,t.obj)}}},unsubscribeAll:function(){for(var e=0;e<this.subscribers.length;++e)this._delete(e)},_delete:function(e){var t=this.subscribers[e];t&&(delete t.fn,delete t.obj),delete this.subscribers[e]}},YAHOO.util.Subscriber=function(e,t,n){this.fn=e,this.obj=t||null,this.override=n},YAHOO.util.Subscriber.prototype.contains=function(e,t){return this.fn==e&&this.obj==t},YAHOO.util.Event||(YAHOO.util.Event=function(){var e=!1,t=[],n=[],r=[],s=[],o=[],u=[];return{EL:0,TYPE:1,FN:2,WFN:3,SCOPE:3,ADJ_SCOPE:4,isSafari:navigator.userAgent.match(/safari/gi),isIE:!this.isSafari&&navigator.userAgent.match(/msie/gi),addListener:function(i,s,a,f,l){if(this._isValidCollection(i)){var c=!0;for(var h=0;h<i.length;++h)c=this.on(i[h],s,a,f,l)&&c;return c}if(typeof i=="string"){if(!e)return n[n.length]=[i,s,a,f,l],!0;i=this.getEl(i)}if(!i)return!1;if("unload"==s&&f!==this)return r[r.length]=[i,s,a,f,l],!0;var p=l?f:i,d=function(e){return a.call(p,YAHOO.util.Event.getEvent(e),f)},v=[i,s,a,d,p],m=t.length;t[m]=v;if(this.useLegacyEvent(i,s)){var g=this.getLegacyIndex(i,s);g==-1&&(g=o.length,o[g]=[i,s,i["on"+s]],u[g]=[],i["on"+s]=function(e){YAHOO.util.Event.fireLegacyEvent(YAHOO.util.Event.getEvent(e),g)}),u[g].push(m)}else i.addEventListener?i.addEventListener(s,d,!1):i.attachEvent&&i.attachEvent("on"+s,d);return!0},fireLegacyEvent:function(e,n){var r=!0,s=u[n];for(i=0;i<s.length;++i){var o=s[i];if(o){var a=t[o],f=a[this.ADJ_SCOPE],l=a[this.WFN].call(f,e);r=r&&l}}return r},getLegacyIndex:function(e,t){for(var n=0;n<o.length;++n){var r=o[n];if(r&&r[0]==e&&r[1]==t)return n}return-1},useLegacyEvent:function(e,t){return!e.addEventListener&&!e.attachEvent||t=="click"&&this.isSafari},removeListener:function(e,n,r){if(typeof e=="string")e=this.getEl(e);else if(this._isValidCollection(e)){var i=!0;for(var s=0;s<e.length;++s)i=this.removeListener(e[s],n,r)&&i;return i}var o=null,u=this._getCacheIndex(e,n,r);return u>=0&&(o=t[u]),!e||!o?!1:(e.removeEventListener?e.removeEventListener(n,o[this.WFN],!1):e.detachEvent&&e.detachEvent("on"+n,o[this.WFN]),delete t[u][this.WFN],delete t[u][this.FN],delete t[u],!0)},getTarget:function(e,t){var n=e.target||e.srcElement;return t&&n&&"#text"==n.nodeName?n.parentNode:n},getPageX:function(e){var t=e.pageX;return!t&&0!==t&&(t=e.clientX||0,this.isIE&&(t+=this._getScrollLeft())),t},getPageY:function(e){var t=e.pageY;return!t&&0!==t&&(t=e.clientY||0,this.isIE&&(t+=this._getScrollTop())),t},getRelatedTarget:function(e){var t=e.relatedTarget;return t||(e.type=="mouseout"?t=e.toElement:e.type=="mouseover"&&(t=e.fromElement)),t},getTime:function(e){if(!e.time){var t=(new Date).getTime();try{e.time=t}catch(n){return t}}return e.time},stopEvent:function(e){this.stopPropagation(e),this.preventDefault(e)},stopPropagation:function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},getEvent:function(e){var t=e||window.event;if(!t){var n=this.getEvent.caller;while(n){t=n.arguments[0];if(t&&Event==t.constructor)break;n=n.caller}}return t},getCharCode:function(e){return e.charCode||e.type=="keypress"?e.keyCode:0},_getCacheIndex:function(e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(s&&s[this.FN]==r&&s[this.EL]==e&&s[this.TYPE]==n)return i}return-1},_isValidCollection:function(e){return e&&e.length&&typeof e!="string"&&!e.tagName&&!e.alert&&typeof e[0]!="undefined"},elCache:{},getEl:function(e){return document.getElementById(e)},clearCache:function(){for(i in this.elCache)delete this.elCache[i]},regCE:function(e){s.push(e)},_load:function(t){e=!0},_tryPreloadAttach:function(){var t=!e;for(var r=0;r<n.length;++r){var i=n[r];if(i){var s=this.getEl(i[this.EL]);s&&(this.on(s,i[this.TYPE],i[this.FN],i[this.SCOPE],i[this.ADJ_SCOPE]),delete n[r])}}t&&setTimeout("YAHOO.util.Event._tryPreloadAttach()",50)},_unload:function(e,n){for(var i=0;i<r.length;++i){var u=r[i];if(u){var a=u[this.ADJ_SCOPE]?u[this.SCOPE]:window;u[this.FN].call(a,this.getEvent(e),u[this.SCOPE])}}if(t&&t.length>0){for(i=0;i<t.length;++i)u=t[i],u&&this.removeListener(u[this.EL],u[this.TYPE],u[this.FN]);this.clearCache()}for(i=0;i<s.length;++i)s[i].unsubscribeAll(),delete s[i];for(i=0;i<o.length;++i)delete o[i][0],delete o[i]},_getScrollLeft:function(){return this._getScroll()[1]},_getScrollTop:function(){return this._getScroll()[0]},_getScroll:function(){var e=document.documentElement;return db=document.body,e&&e.scrollTop?[e.scrollTop,e.scrollLeft]:db?[db.scrollTop,db.scrollLeft]:[0,0]}}}(),YAHOO.util.Event.on=YAHOO.util.Event.addListener,document&&document.body?YAHOO.util.Event._load():YAHOO.util.Event.on(window,"load",YAHOO.util.Event._load,YAHOO.util.Event,!0),YAHOO.util.Event.on(window,"unload",YAHOO.util.Event._unload,YAHOO.util.Event,!0),YAHOO.util.Event._tryPreloadAttach());
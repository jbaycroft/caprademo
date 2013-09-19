/* Copyright (c) 2006 Yahoo! Inc. All rights reserved. */
/**
 * @class The Yahoo global namespace
 */
var YAHOO=function(){return{util:{},widget:{},example:{},namespace:function(e){if(!e||!e.length)return null;var t=e.split("."),n=YAHOO;for(var r=t[0]=="YAHOO"?1:0;r<t.length;++r)n[t[r]]=n[t[r]]||{},n=n[t[r]];return n}}}();
//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
function eXcell_calendar(e){try{this.cell=e,this.grid=this.cell.parentNode.grid}catch(t){}this.edit=function(){window._grid_calendar||_grid_calendar_init();var e=this.grid.getPosition(this.cell),t=this._date2str2(this.cell.val||new Date);window._grid_calendar.render(e[0],e[1]+this.cell.offsetHeight,this,t);var n=function(e){(e||event).cancelBubble=!0};dhtmlxEvent(window._grid_calendar.table.parentNode.parentNode,"click",n),this.cell._cediton=!0,this.val=this.cell.val},this.getValue=function(){return this.cell.val?this._date2str2(this.cell.val):this.cell.innerHTML.toString()._dhx_trim()},this.getContent=function(){return this.cell.innerHTML.toString()._dhx_trim()},this.detach=function(){var e=window._grid_calendar.getSelectedDates()[0];window._grid_calendar.hide();if(!this._skip_detach&&e.getFullYear())return this.cell.val=new Date(e.valueOf()),this.setCValue(this._date2str(e),e),this.val?e.valueOf()!=this.val.valueOf():!0},this._2dg=function(e){return e.toString().length==1?"0"+e.toString():e},this._date2str2=function(e){return"m/d/y".replace("m",this._2dg(e.getMonth()*1+1)).replace("d",this._2dg(e.getDate())).replace("y",this._2dg(e.getFullYear()*1))},this._date2str=function(e){return(this.grid._dtmask||"m/d/y").replace("m",this._2dg(e.getMonth()*1+1)).replace("d",this._2dg(e.getDate())).replace("y",this._2dg(e.getFullYear()*1))}}document.write("<script src='"+_js_prefix+"calendar/YAHOO.js'></script>"),document.write("<script src='"+_js_prefix+"calendar/event.js'></script>"),document.write("<script src='"+_js_prefix+"calendar/calendar.js'></script>"),document.write("<script src='"+_js_prefix+"calendar/calendar_init.js'></script>"),document.write("<link rel='stylesheet' type='text/css' href='"+_js_prefix+"calendar/calendar.css'></link>"),eXcell_calendar.prototype=new eXcell,eXcell_calendar.prototype.setValue=function(e){if(!e||e.toString()._dhx_trim()=="")e="";this.cell.val=new Date(e.toString()),this.cell.val=="NaN"||this.cell.val=="Invalid Date"?(this.cell.val="",this.setCValue("&nbsp;",0)):this.setCValue(this._date2str(this.cell.val),this.cell.val)};
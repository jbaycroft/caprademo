//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
function eXcell_dhxCalendar(e){if(e&&(this.cell=e,this.grid=this.cell.parentNode.grid,!this.grid._grid_calendarA)){var t=this.grid._grid_calendarA=new dhtmlxCalendarObject;this.grid.callEvent("onDhxCalendarCreated",[t]);var n=this.grid;t.attachEvent("onClick",function(){return this._last_operation_calendar=!0,window.setTimeout(function(){n.editStop()},1),!0});var r=function(e){(e||event).cancelBubble=!0};dhtmlxEvent(t.base,"click",r),t=null}}function eXcell_dhxCalendarA(e){if(e&&(this.cell=e,this.grid=this.cell.parentNode.grid,!this.grid._grid_calendarA)){var t=this.grid._grid_calendarA=new dhtmlxCalendarObject;this.grid.callEvent("onDhxCalendarCreated",[t]);var n=this.grid;t.attachEvent("onClick",function(){return this._last_operation_calendar=!0,window.setTimeout(function(){n.editStop()},1),!0});var r=function(e){(e||event).cancelBubble=!0};dhtmlxEvent(t.base,"click",r)}}eXcell_dhxCalendar.prototype=new eXcell,eXcell_dhxCalendar.prototype.edit=function(){var e=this.grid.getPosition(this.cell);this.grid._grid_calendarA._show(!1,!1),this.grid._grid_calendarA.setPosition(e[0],e[1]+this.cell.offsetHeight),this.grid._grid_calendarA._last_operation_calendar=!1,this.grid.callEvent("onCalendarShow",[this.grid._grid_calendarA,this.cell.parentNode.idd,this.cell._cellIndex]),this.cell._cediton=!0,this.val=this.cell.val,this._val=this.cell.innerHTML;var t=this.grid._grid_calendarA.draw;this.grid._grid_calendarA.draw=function(){},this.grid._grid_calendarA.setDateFormat(this.grid._dtmask||"%d/%m/%Y"),this.grid._grid_calendarA.setDate(this.val||new Date),this.grid._grid_calendarA.draw=t},eXcell_dhxCalendar.prototype.getDate=function(){return this.cell.val?this.cell.val:null},eXcell_dhxCalendar.prototype.getValue=function(){return this.cell._clearCell?"":this.grid._dtmask_inc&&this.cell.val?this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask_inc,this.cell.val).toString():this.cell.innerHTML.toString()._dhx_trim()},eXcell_dhxCalendar.prototype.detach=function(){if(this.grid._grid_calendarA&&(this.grid._grid_calendarA.hide(),this.cell._cediton)){this.cell._cediton=!1;if(this.grid._grid_calendarA._last_operation_calendar){var e=this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y"),t=this.grid._grid_calendarA.getDate();this.cell.val=new Date(t),this.setCValue(e,t),this.cell._clearCell=!e;var n=this.val;return this.val=this._val,this.cell.val.valueOf()!=n}return!1}},eXcell_dhxCalendar.prototype.setValue=function(e){e&&typeof e=="object"?(this.cell.val=e,this.cell._clearCell=!1,this.setCValue(this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y",e).toString(),this.cell.val)):(!e||e.toString()._dhx_trim()==""?(e="&nbsp",this.cell._clearCell=!0,this.cell.val=""):(this.cell._clearCell=!1,this.cell.val=new Date(this.grid._grid_calendarA.setFormatedDate(this.grid._dtmask_inc||this.grid._dtmask||"%d/%m/%Y",e.toString(),null,!0)),this.grid._dtmask_inc&&(e=this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y",this.cell.val))),this.cell.val=="NaN"||this.cell.val=="Invalid Date"?(this.cell._clearCell=!0,this.cell.val=new Date,this.setCValue("&nbsp;",0)):this.setCValue((e||"").toString(),this.cell.val))},eXcell_dhxCalendarA.prototype=new eXcell,eXcell_dhxCalendarA.prototype.edit=function(){var e=this.grid.getPosition(this.cell);this.grid._grid_calendarA._show(!1,!1),this.grid._grid_calendarA.setPosition(e[0]*1+this.cell.offsetWidth,e[1]*1),this.grid.callEvent("onCalendarShow",[this.grid._grid_calendarA,this.cell.parentNode.idd,this.cell._cellIndex]),this.grid._grid_calendarA._last_operation_calendar=!1,this.cell._cediton=!0,this.val=this.cell.val,this._val=this.cell.innerHTML;var t=this.grid._grid_calendarA.draw;this.grid._grid_calendarA.draw=function(){},this.grid._grid_calendarA.setDateFormat(this.grid._dtmask||"%d/%m/%Y"),this.grid._grid_calendarA.setDate(this.val),this.grid._grid_calendarA.draw=t,this.grid._grid_calendarA.draw(),this.cell.atag=!this.grid.multiLine&&(_isKHTML||_isMacOS||_isFF)?"INPUT":"TEXTAREA",this.obj=document.createElement(this.cell.atag),this.obj.style.height=this.cell.offsetHeight-(_isIE?4:2)+"px",this.obj.className="dhx_combo_edit",this.obj.wrap="soft",this.obj.style.textAlign=this.cell.align,this.obj.onclick=function(e){(e||event).cancelBubble=!0},this.obj.onmousedown=function(e){(e||event).cancelBubble=!0},this.obj.value=this.getValue(),this.cell.innerHTML="",this.cell.appendChild(this.obj),_isFF&&(this.obj.style.overflow="visible",this.grid.multiLine&&this.obj.offsetHeight>=18&&this.obj.offsetHeight<40)&&(this.obj.style.height="36px",this.obj.style.overflow="scroll"),this.obj.onselectstart=function(e){return e||(e=event),e.cancelBubble=!0},this.obj.focus(),this.obj.focus()},eXcell_dhxCalendarA.prototype.getDate=function(){return this.cell.val?this.cell.val:null},eXcell_dhxCalendarA.prototype.getValue=function(){return this.cell._clearCell?"":this.grid._dtmask_inc&&this.cell.val?this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask_inc,this.cell.val).toString():this.cell.innerHTML.toString()._dhx_trim()},eXcell_dhxCalendarA.prototype.detach=function(){if(this.grid._grid_calendarA&&(this.grid._grid_calendarA.hide(),this.cell._cediton)){this.cell._cediton=!1;if(this.grid._grid_calendarA._last_operation_calendar){this.grid._grid_calendarA._last_operation_calendar=!1;var e=this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y"),t=this.grid._grid_calendarA.getDate();this.cell.val=new Date(t),this.setCValue(e,t),this.cell._clearCell=!e;var n=this.val;return this.val=this._val,this.cell.val.valueOf()!=(n|0).valueOf()}return this.setValue(this.obj.value),n=this.val,this.val=this._val,this.cell.val.valueOf()!=(n||"").valueOf()}},eXcell_dhxCalendarA.prototype.setValue=function(e){e&&typeof e=="object"?(this.cell.val=e,this.cell._clearCell=!1,this.setCValue(this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y",e).toString(),this.cell.val)):(!e||e.toString()._dhx_trim()==""?(e="&nbsp",this.cell._clearCell=!0,this.cell.val=""):(this.cell._clearCell=!1,this.cell.val=new Date(this.grid._grid_calendarA.setFormatedDate(this.grid._dtmask_inc||this.grid._dtmask||"%d/%m/%Y",e.toString(),null,!0)),this.grid._dtmask_inc&&(e=this.grid._grid_calendarA.getFormatedDate(this.grid._dtmask||"%d/%m/%Y",this.cell.val))),this.cell.val=="NaN"||this.cell.val=="Invalid Date"?(this.cell.val=new Date,this.cell._clearCell=!0,this.setCValue("&nbsp;",0)):this.setCValue((e||"").toString(),this.cell.val))};
//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
dhtmlXGridObject.prototype._select_ifpossible=function(){this.editor&&this.editor.obj&&this.editor.obj.select&&this.editor.obj.select()},dhtmlXGridObject.prototype._key_events={k13_1_0:function(){this.editStop()},k13_0_1:function(){this._key_events.k9_0_1.call(this)},k13_0_0:function(){this._key_events.k9_0_0.call(this)},k9_0_0:function(){this.editStop();if(!this.callEvent("onTab",[!0]))return!0;var e=this._getNextCell(null,1);e&&(this.pagingOn&&this.showRow(e.parentNode.idd),this.selectCell(e.parentNode,e._cellIndex,this.row!=e.parentNode,!1,!0),this._still_active=!0),this._select_ifpossible()},k9_0_1:function(){this.editStop();if(!this.callEvent("onTab",[!1]))return!0;var e=this._getNextCell(null,-1);e&&(this.selectCell(e.parentNode,e._cellIndex,this.row!=e.parentNode,!1,!0),this._still_active=!0),this._select_ifpossible()},k113_0_0:function(){this._f2kE&&this.editCell()},k32_0_0:function(){var e=this.cells4(this.cell);if(!e.changeState||e.changeState()===!1)return!1},k27_0_0:function(){this.editStop(!0)},k33_0_0:function(){this.pagingOn?this.changePage(this.currentPage-1):this.scrollPage(-1)},k34_0_0:function(){this.pagingOn?this.changePage(this.currentPage+1):this.scrollPage(1)},k37_0_0:function(){if(this.editor)return!1;this.isTreeGrid()?this.collapseKids(this.row):this._key_events.k9_0_1.call(this)},k39_0_0:function(){if(this.editor)return!1;!this.editor&&this.isTreeGrid()?this.expandKids(this.row):this._key_events.k9_0_0.call(this)},k37_1_0:function(){if(this.editor)return!1;this.selectCell(this.row,0,!1,!1,!0),this._select_ifpossible()},k39_1_0:function(){if(this.editor)return!1;this.selectCell(this.row,this._cCount-1,!1,!1,!0),this._select_ifpossible()},k38_1_0:function(){this.selectCell(this.rowsCol[0],this.cell._cellIndex,!1,!1,!0),this._select_ifpossible()},k40_1_0:function(){this.selectCell(this.rowsCol[this.rowsCol.length-1],this.cell._cellIndex,!1,!1,!0),this._select_ifpossible()},k38_0_1:function(){var e=this.getRowIndex(this.row.idd),t=this._nextRow(e,-1);if(!t||t._sRow||t._rLoad)return!1;this.selectCell(t,this.cell._cellIndex,!1,!1,!0),this._select_ifpossible()},k40_0_1:function(){var e=this.getRowIndex(this.row.idd),t=this._nextRow(e,1);if(!t||t._sRow||t._rLoad)return!1;this.selectCell(t,this.cell._cellIndex,!1,!1,!0),this._select_ifpossible()},k38_1_1:function(){for(var e=this.getRowIndex(this.row.idd),t=e;t>=0;t--)this.selectCell(this.rowsCol[t],this.cell._cellIndex,!0,!1,!0)},k40_1_1:function(){for(var e=this.getRowIndex(this.row.idd),t=e+1;t<this.rowsCol.length;t++)this.selectCell(this.rowsCol[t],this.cell._cellIndex,!0,!1,!0)},k40_0_0:function(){if(this.editor&&this.editor.combo)this.editor.shiftNext();else{if(!this.row.idd)return;var e=e=this.getRowIndex(this.row.idd)+1;if(this.rowsBuffer[e]){var t=this._nextRow(e-1,1);this.pagingOn&&t&&this.showRow(t.idd),this._Opera_stop=0,this.selectCell(t,this.cell._cellIndex,!1,!1,!0)}else{if(!this.callEvent("onLastRow",[]))return!1;this._key_events.k34_0_0.apply(this,[])}}this._still_active=!0},k36_0_0:function(){return this._key_events.k37_1_0.call(this)},k35_0_0:function(){return this._key_events.k39_1_0.call(this)},k36_1_0:function(){if(this.editor||!this.rowsCol.length)return!1;this.selectCell(this.rowsCol[0],0,!1,!1,!0),this._select_ifpossible()},k35_1_0:function(){if(this.editor||!this.rowsCol.length)return!1;this.selectCell(this.rowsCol[this.rowsCol.length-1],this._cCount-1,!1,!1,!0),this._select_ifpossible()},k33_0_0:function(){this.pagingOn?this.changePage(this.currentPage-1):this.scrollPage(-1)},k34_0_0:function(){this.pagingOn?this.changePage(this.currentPage+1):this.scrollPage(1)},k38_0_0:function(){if(this.editor&&this.editor.combo)this.editor.shiftPrev();else{if(!this.row.idd)return;var e=e=this.getRowIndex(this.row.idd)+1;if(e!=-1){var t=this._nextRow(e-1,-1);this._Opera_stop=0,this.pagingOn&&t&&this.showRow(t.idd),this.selectCell(t,this.cell._cellIndex,!1,!1,!0)}else this._key_events.k33_0_0.apply(this,[])}this._still_active=!0}};
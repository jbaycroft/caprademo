//v.3.5 build 120822
/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
dhtmlXGridObject.prototype.enableBlockSelection=function(e){if(typeof this._bs_mode=="undefined"){var t=this;this.obj.onmousedown=function(e){return t._bs_mode&&t._OnSelectionStart(e||event,this),!0},this._CSVRowDelimiter=this.csv.row,this.attachEvent("onResize",function(){return t._HideSelection(),!0}),this.attachEvent("onGridReconstructed",function(){return t._HideSelection(),!0}),this.attachEvent("onFilterEnd",this._HideSelection)}if(e===!1)return this._bs_mode=!1,this._HideSelection();this._bs_mode=!0},dhtmlXGridObject.prototype.forceLabelSelection=function(e){this._strictText=convertStringToBoolean(e)},dhtmlXGridObject.prototype.disableBlockSelection=function(){this.obj.onmousedown=null},dhtmlXGridObject.prototype._OnSelectionStart=function(e){var t=this;if(e.button!=2){var n=e.srcElement||e.target;if(this.editor){if(!(!n.tagName||n.tagName!="INPUT"&&n.tagName!="TEXTAREA"))return;this.editStop()}t.isActive||t.setActive(!0);var r=this.getPosition(this.obj),i=e.clientX-r[0]+(document.body.scrollLeft||(document.documentElement?document.documentElement.scrollLeft:0)),s=e.clientY-r[1]+(document.body.scrollTop||(document.documentElement?document.documentElement.scrollTop:0));this._CreateSelection(i-4,s-4);if(n==this._selectionObj)this._HideSelection(),this._startSelectionCell=null;else{for(;n.tagName.toLowerCase()!="td";)n=n.parentNode;this._startSelectionCell=n}if(this._startSelectionCell&&!this.callEvent("onBeforeBlockSelected",[this._startSelectionCell.parentNode.idd,this._startSelectionCell._cellIndex]))return this._startSelectionCell=null;this.obj.onmousedown=null,this.obj[_isIE?"onmouseleave":"onmouseout"]=function(){t._blsTimer&&window.clearTimeout(t._blsTimer)},this.obj.onmmold=this.obj.onmousemove,this._init_pos=[i,s],this._selectionObj.onmousemove=this.obj.onmousemove=function(n){n=n||e,n.returnValue=!1,t._OnSelectionMove(n)},this._oldDMP=document.body.onmouseup,document.body.onmouseup=function(n){return n=n||e,t._OnSelectionStop(n,this),!0},this.callEvent("onBeforeBlockSelection",[]),document.body.onselectstart=function(){return!1}}},dhtmlXGridObject.prototype._getCellByPos=function(e,t){this._fake&&(e+=this._fake.entBox.offsetWidth);for(var n=0,r=0;r<this.obj.rows.length;r++)if(t-=this.obj.rows[r].offsetHeight,t<=0){n=this.obj.rows[r];break}if(!n||!n.idd)return null;for(r=0;r<this._cCount;r++)if(e-=this.getColWidth(r),e<=0)for(;;){if(!n._childIndexes||n._childIndexes[r+1]!=n._childIndexes[r])return this.cells(n.idd,r).cell;n=n.previousSibling}return null},dhtmlXGridObject.prototype._OnSelectionMove=function(e){var t=this;this._ShowSelection();var n=this.getPosition(this.obj),r=e.clientX-n[0]+(document.body.scrollLeft||(document.documentElement?document.documentElement.scrollLeft:0)),i=e.clientY-n[1]+(document.body.scrollTop||(document.documentElement?document.documentElement.scrollTop:0));if(Math.abs(this._init_pos[0]-r)<5&&Math.abs(this._init_pos[1]-i)<5)return this._HideSelection();var s=this._endSelectionCell;if(this._startSelectionCell==null)this._endSelectionCell=this._startSelectionCell=this.getFirstParentOfType(e.srcElement||e.target,"TD");else if(e.srcElement||e.target)if((e.srcElement||e.target).className=="dhtmlxGrid_selection")this._endSelectionCell=this._getCellByPos(r,i)||this._endSelectionCell;else{var o=this.getFirstParentOfType(e.srcElement||e.target,"TD");o.parentNode.idd&&(this._endSelectionCell=o)}this._endSelectionCell&&!this.callEvent("onBeforeBlockSelected",[this._endSelectionCell.parentNode.idd,this._endSelectionCell._cellIndex])&&(this._endSelectionCell=s);var u=this.objBox.scrollLeft+this.objBox.clientWidth,a=this.objBox.scrollTop+this.objBox.clientHeight,f=this.objBox.scrollLeft,l=this.objBox.scrollTop,c=!1;this._blsTimer&&window.clearTimeout(this._blsTimer),r+20>=u?(this.objBox.scrollLeft+=20,c=!0):r-20<f&&(this.objBox.scrollLeft-=20,c=!0),i+20>=a&&!this._realfake?(this.objBox.scrollTop+=20,c=!0):i-20<l&&!this._realfake&&(this.objBox.scrollTop-=20,c=!0),this._selectionArea=this._RedrawSelectionPos(this._startSelectionCell,this._endSelectionCell);if(c){var h=e.clientX,p=e.clientY;this._blsTimer=window.setTimeout(function(){t._OnSelectionMove({clientX:h,clientY:p})},100)}},dhtmlXGridObject.prototype._OnSelectionStop=function(e){var t=this;this._blsTimer&&window.clearTimeout(this._blsTimer),this.obj.onmousedown=function(n){return t._bs_mode&&t._OnSelectionStart(n||e,this),!0},this.obj.onmousemove=this.obj.onmmold||null,this._selectionObj.onmousemove=null,document.body.onmouseup=this._oldDMP||null;if(parseInt(this._selectionObj.style.width)<2&&parseInt(this._selectionObj.style.height)<2)this._HideSelection();else{var n=this.getFirstParentOfType(e.srcElement||e.target,"TD");if(!n||!n.parentNode.idd)n=this._endSelectionCell;if(!n)return this._HideSelection();for(;n.tagName.toLowerCase()!="td";)n=n.parentNode;this._stopSelectionCell=n,this._selectionArea=this._RedrawSelectionPos(this._startSelectionCell,this._stopSelectionCell),this.callEvent("onBlockSelected",[])}document.body.onselectstart=function(){}},dhtmlXGridObject.prototype._RedrawSelectionPos=function(e,t){var n={};n.LeftTopCol=e._cellIndex,n.LeftTopRow=this.getRowIndex(e.parentNode.idd),n.RightBottomCol=t._cellIndex,n.RightBottomRow=this.getRowIndex(t.parentNode.idd);var r=e.offsetWidth,i=e.offsetHeight,e=this.getPosition(e,this.obj),s=t.offsetWidth,o=t.offsetHeight,t=this.getPosition(t,this.obj);if(e[0]<t[0])var u=e[0],a=t[0]+s;else{var f=n.RightBottomCol;n.RightBottomCol=n.LeftTopCol,n.LeftTopCol=f,u=t[0],a=e[0]+r}if(e[1]<t[1])var l=e[1],c=t[1]+o;else f=n.RightBottomRow,n.RightBottomRow=n.LeftTopRow,n.LeftTopRow=f,l=t[1],c=e[1]+i;var h=a-u,p=c-l;return this._selectionObj.style.left=u+"px",this._selectionObj.style.top=l+"px",this._selectionObj.style.width=h+"px",this._selectionObj.style.height=p+"px",n},dhtmlXGridObject.prototype._CreateSelection=function(e,t){if(this._selectionObj==null){var n=document.createElement("div");n.style.position="absolute",n.style.display="none",n.className="dhtmlxGrid_selection",this._selectionObj=n,this._selectionObj.onmousedown=function(e){e=e||event;if(e.button==2||_isMacOS&&e.ctrlKey)return this.parentNode.grid.callEvent("onBlockRightClick",["BLOCK",e])},this._selectionObj.oncontextmenu=function(e){return(e||event).cancelBubble=!0,!1},this.objBox.appendChild(this._selectionObj)}this._selectionObj.style.width="0px",this._selectionObj.style.height="0px",this._selectionObj.style.left=e+"px",this._selectionObj.style.top=t+"px",this._selectionObj.startX=e,this._selectionObj.startY=t},dhtmlXGridObject.prototype._ShowSelection=function(){this._selectionObj&&(this._selectionObj.style.display="")},dhtmlXGridObject.prototype._HideSelection=function(){this._selectionObj&&(this._selectionObj.style.display="none"),this._selectionArea=null},dhtmlXGridObject.prototype.copyBlockToClipboard=function(){if(this._selectionArea!=null){var e=[];this._agetm=this._mathSerialization?"getMathValue":this._strictText?"getTitle":"getValue";for(var t=this._selectionArea.LeftTopRow;t<=this._selectionArea.RightBottomRow;t++){var n=this._serializeRowToCVS(this.rowsBuffer[t],null,this._selectionArea.LeftTopCol,this._selectionArea.RightBottomCol+1);e[e.length]=this._csvAID?n:n.substr(n.indexOf(this.csv.cell)+1)}e=e.join(this._CSVRowDelimiter),this.toClipBoard(e)}},dhtmlXGridObject.prototype.pasteBlockFromClipboard=function(){var e=this.fromClipBoard();if(this._selectionArea!=null)var t=this._selectionArea.LeftTopRow,n=this._selectionArea.LeftTopCol;else{if(this.cell==null||!!this.editor)return!1;t=this.getRowIndex(this.cell.parentNode.idd),n=this.cell._cellIndex}var e=this.csvParser.unblock(e,this.csv.cell,this.csv.row),r=t+e.length,i=n+e[0].length;i>this._cCount&&(i=this._cCount);for(var s=0,o=t;o<r;o++){var u=this.render_row(o);if(u!=-1){for(var a=0,f=n;f<i;f++){var l=this.cells3(u,f);if(l.isDisabled())a++;else{this._onEditUndoRedo&&this._onEditUndoRedo(2,u.idd,f,e[s][a],l.getValue());if(l.combo){for(var c=l.combo.values,h=0;h<c.length;h++)if(e[s][a]==c[h]){l.setValue(l.combo.keys[h]),c=null;break}c!=null&&l.editable?l.setValue(e[s][a++]):a++}else l[l.setImage?"setLabel":"setValue"](e[s][a++]);l.cell.wasChanged=!0}}this.callEvent("onRowPaste",[u.idd]),s++}}},dhtmlXGridObject.prototype.getSelectedBlock=function(){return this._selectionArea?this._selectionArea:this.getSelectedRowId()!==null?{LeftTopRow:this.getSelectedRowId(),LeftTopCol:this.getSelectedCellIndex(),RightBottomRow:this.getSelectedRowId(),RightBottomCol:this.getSelectedCellIndex()}:null};
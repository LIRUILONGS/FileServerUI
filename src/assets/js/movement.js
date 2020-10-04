var EventUtil = new Object();
EventUtil.addEventHandler = function (oTarget, sEventType, fnHandler) {
  if (oTarget.addEventListener) {
    oTarget.addEventListener(sEventType, fnHandler, false);
  } else if (oTarget.attachEvent) {
    oTarget.attachEvent('on' + sEventType, fnHandler);
  }
  else {
    oTarget['on' + sEventType] = fnHandler;
  }
}
EventUtil.removeEventHandler = function (oTarget, sEventType, fnHandler) {
  if (oTarget.removeEventListener) {
    oTarget.removeEventListener(sEventType, fnHandler, false);
  }
  else if (oTarget.detachEvent) {
    oTarget.detachEvent('on' + sEventType, fnHandler);
  }
  else {
    oTarget['on' + sEventType] = null;
  }
}
EventUtil.getEvent = function () {
  if (window.event) {
    return window.event;
  } else {
    return EventUtil.getEvent.caller.arguments[0];
  }
}
var iDiffX = 0;
var iDiffY = 0;
var oDiv ;

function handleMouseMove () {
  var oEvent = EventUtil.getEvent();
  oDiv.style.left = (oEvent.clientX - iDiffX) + 'px';
  oDiv.style.top = (oEvent.clientY - iDiffY) + 'px';
}
function handleMouseUp () {
  EventUtil.removeEventHandler(document, 'mousemove', handleMouseMove);
  EventUtil.removeEventHandler(document, 'mouseup', handleMouseUp);
}
export function handleMouseDown(vle){
  oDiv = vle;
  var oEvent = EventUtil.getEvent();
  iDiffX = oEvent.clientX - oDiv.offsetLeft;
  iDiffY = oEvent.clientY - oDiv.offsetTop;
  EventUtil.addEventHandler(document, 'mousemove', handleMouseMove);
  EventUtil.addEventHandler(document, 'mouseup', handleMouseUp);
}

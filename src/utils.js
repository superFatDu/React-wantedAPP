/**
 * 适配设置(1rem = 100px)
 * @author superduchengwu@gmail.com
 * @date 2019/04/19
 */
(function(doc, win) {
  let docEl = doc.documentElement;
  /*let resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";*/
  let resizeEvt;
  if ("orientationchange" in window) {
    resizeEvt = "orientationchange";
  } else {
    resizeEvt = "resize";
  }
  let reCalc = function() {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 375) + "px";
    // rate = clientWidth / 375;
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, reCalc, false);
  doc.addEventListener("DOMContentLoaded", reCalc, false);
})(document, window);
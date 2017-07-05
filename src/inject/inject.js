// Yes it's very complicated I know.

var actualCodeToInject = '(' + function () {
  window.Suls.SmoothScroller = {}
} + ')();'
var scriptToInject = document.createElement('script')
scriptToInject.textContent = actualCodeToInject;
(document.head || document.documentElement).appendChild(scriptToInject)
scriptToInject.remove()

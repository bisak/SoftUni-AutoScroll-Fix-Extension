// Yes it's very complicated I know.

var actualCodeToInject = '(' + function () {
  let uDontScroll = function () {
    console.log('nema da scrollvash')
  }
  window.Suls.SmoothScroller.scrollToElement = uDontScroll
  window.Suls.SmoothScroller.scrollToElementBottom = uDontScroll
  window.Suls.SmoothScroller.scrollToPageHash = uDontScroll
  window.Suls.SmoothScroller.scrollToPageHashAndOpenAccordion = uDontScroll
} + ')();'

var scriptToInject = document.createElement('script')

scriptToInject.textContent = actualCodeToInject;

(document.head || document.documentElement).appendChild(scriptToInject)

scriptToInject.remove()

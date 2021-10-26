export function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`)
  const parentSpanElem = spanElem.parentNode
  return parentSpanElem.getAttribute('data-section')
}
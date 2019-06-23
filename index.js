function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
}

function increaseRankBy(n) {
  const increase = document.querySelectorAll( '.ranked-list')
  for (var i = 0; i < increase.length; i++) {
    increase[i].innerHTML = i + n
  }
}

function deepestChild() {
  return document.querySelector(`#grand-node div div div div`)
}

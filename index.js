function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

  function increaseRankBy(n) {
  const increase = document.querySelectorAll( `main#app ul.ranked-list`)
  for (var i = 0; i < increase.length; i++) {
    increase[i].innerHTML = i + n
  }
}

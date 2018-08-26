function getFirstSelector(selector) {
  const result = document.querySelector(selector)
  return result
}

function nestedTarget() {
  const result = document.querySelector(`#nested div div div div.target`)
  return result
}

function increaseRankBy(n) {
  const result = document.querySelectorAll( `main#app ul.ranked-list`)
  for (var i = 0; i < result.length; i++) {
    result[i].innerHTML = i + n
  }
}

function deepestChild() {
  const result = document.querySelector(`#grand-node div div div div`)
  return result
}

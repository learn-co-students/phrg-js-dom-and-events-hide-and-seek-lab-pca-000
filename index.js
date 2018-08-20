function getFirstSelector(div) {
  return document.querySelector(div)
}

function nestedTarget() {
  const nested = document.getElementById('nested')
  const target = document.getElementsByClassName('target')
  const goal = document.getElementsByTagName('div')[4]
  return goal
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')

  for (let i = 0, r = ranked.length; i < r; i++) {
    let children = ranked[i].children

    for (let t = 0, l = children.length; t < l; t++) {
      children[t].innerHTML = parseInt(children[t].innerHTML) + n
    }
  }
}

function deepestChild() {
  const grand = document.getElementById('grand-node')
  const goal = grand.getElementsByTagName('div')[3]
  return goal
}

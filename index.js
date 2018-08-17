function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  const nested = document.getElementById("nested")
  const target = nested.getElementsByClassName("target")
  const exact = nested.getElementsByTagName('div')[3]
  return exact
}

function deepestChild() {
  const grand = document.getElementById("grand-node")
  const deepest = grand.getElementsByTagName('div')[3]
  return deepest
}


function increaseRankBy(n) {
  let ranked = document.getElementById("app").querySelectorAll("ul.ranked-list")
  for (let i = 0, all = ranked.length; i < all; i++) {
    let children = ranked[i].children
    for (let a = 0, b = children.length; a < b; a++) {
      children[a].innerHTML = parseInt(children[a].innerHTML) + n
    }
  }
}

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
   while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
   return node
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list")

  for (let i = rankedLists.length - 1; i >= 0; i--) {
    let children = rankedLists[i].children

    for (let j = children.length - 1; j >= 0; j--) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

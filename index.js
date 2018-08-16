function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested")
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')
  let firstList = rankedLists[0]
  let firstChildren = firstList.children
  let secondList = rankedLists[1]
  let secondChildren = secondList.children
  for (let i = 0; i < firstChildren.length; i++) {
    let child1 = firstChildren[i].innerHTML
    let toInteger = parseInt(child1)
     let test = toInteger + n
    firstChildren[i].innerHTML = `${test}`
  }
  for (let i = 0; i < secondChildren.length; i++) {
    let child2 = secondChildren[i].innerHTML
     let toInteger = parseInt(child2)
      let test = toInteger + n
    secondChildren[i].innerHTML = `${test}`
  }
}

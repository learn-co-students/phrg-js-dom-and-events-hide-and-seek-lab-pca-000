function getFirstSelector(selector){
  const first = document.querySelector(selector)
  return first
}

function nestedTarget(){
  const nested = document.querySelector(`#nested div div div div.target`)
  return nested
}

function increaseRankBy(n) {
  const increase = document.querySelectorAll( `main#app ul.ranked-list`)
  for (var i = 0; i < increase.length; i++) {
    increase[i].innerHTML = i + n
  }
}

function deepestChild() {
  const deep = document.querySelector(`#grand-node div div div div`)
  return deep
}

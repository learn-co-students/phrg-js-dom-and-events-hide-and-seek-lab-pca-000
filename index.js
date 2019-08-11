 function getFirstSelector(selector) {
  return document.querySelector(selector);
 }

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let forSearching = document.getElementById('grand-node')
  const search = document.getElementById('grand-node').querySelectorAll('div');
  for (let i = 0; i < search.length; i++) {
    forSearching = forSearching.querySelector('div');
  }
  return forSearching;
}

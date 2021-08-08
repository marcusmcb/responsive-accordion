function changePanel(event, panelname) {
  document.querySelector('.active').classList.remove('active')
  event.target.classList.add('active')
  let symbols = document.querySelectorAll('p')
  for (let i = 0; i < symbols.length; i++) {
    symbols[i].innerHTML = '+'
  }
  event.target.children[0].innerHTML = '-'
  document.querySelector('.active-panel').classList.remove('active-panel')
  let x = document.getElementById(panelname)
  x.classList.add('active-panel')
}

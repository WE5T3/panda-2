import string from './css'

const player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    html: document.querySelector('#html'),
    demo: document.querySelector('#demo'),
    demoStyle: document.querySelector('#demoStyle'),
    button: document.querySelectorAll('.button1'),
    fold1 : document.querySelector('#btnFold'),
    
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnRefresh': 'refresh',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnCode': 'code',
    '#btnPicture': 'picture',
    '#btnSplit': 'split',
    '#btnFold': 'fold',
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demoStyle.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    for (let key in player.events) {
      const value = player.events[key] // play/pause/slow...
      document.querySelector(key).onclick = player[value]
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demoStyle.innerHTML = string.substr(0, player.n)
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  refresh: () => {
    location.reload()
  },
  update: () => {
    player.pause()
    player.play()
  },
  slow: () => {
    player.time = 100
    player.update()
  },
  normal: () => {
    player.time = 50
    player.update()
  },
  fast: () => {
    player.time = 0
    player.update()
  },
  code: () => {
    player.ui.demo.style.height = '100vh'
    player.ui.html.style.height = '0vh'
  },
  picture: () => {
    player.ui.demo.style.height = '0vh'
    player.ui.html.style.height = '100vh'
  },
  split: () => {
    player.ui.demo.style.height = '20vh'
    player.ui.html.style.height = '80vh'
  },
  fold: () => {
    for (const buttonItem of player.ui.button) {
      if (buttonItem.className === 'button1') {
        if (buttonItem.style.visibility === 'hidden') {
          buttonItem.style.visibility = 'visible'
          player.ui.fold1.innerText = '折叠按钮'
        } else {
          buttonItem.style.visibility = "hidden"
          player.ui.fold1.innerText = '展开按钮'
        }
      }
    }
  },
}

player.init()

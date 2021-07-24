const GC = document.querySelector('.gameContainer')
const dot = document.querySelector('.mainDot')

let gameScreen = 650
let rDorInterval
let interval = 5000

dot.style.left = '340px'
dot.style.top = '340px'

function createTag(name, className = '', text = '') {
  let newTag = document.createElement(name)
  newTag.className = className
  newTag.innerHTML = text
  return newTag
}

document.addEventListener('keydown', function (event) {
  const key = event.key

  switch (key) {
    case "ArrowLeft":
      moveLeft()
      break;
    case "ArrowRight":
      moveRight()
      break;
    case "ArrowUp":
      moveUp()
      break;
    case "ArrowDown":
      moveDown()
      break;
  }
})

function moveLeft() {
  dot.style.left = parseInt(dot.style.left) - 10 + "px"
}
function moveUp() {
  dot.style.top = parseInt(dot.style.top) - 10 + "px"
}
function moveRight() {
  dot.style.left = parseInt(dot.style.left) + 10 + "px"
}
function moveDown() {
  dot.style.top = parseInt(dot.style.top) + 10 + "px"
}

function randomDot() {
  let rDot = createTag("div", "random")
  rDot.style.left = `${Math.random() * gameScreen}px`
  rDot.style.top = `${Math.random() * gameScreen}px`
  GC.appendChild(rDot)
}

function setRandomDot() {
  rDorInterval = setInterval(() => randomDot(), interval)
}

setRandomDot()


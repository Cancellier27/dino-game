const dot = document.querySelector('.mainDot')

function moveLeft() {
  if (dot.style.left === "0px") return
  dot.style.left = parseInt(dot.style.left) - 10 + "px"
}
function moveUp() {
  if (dot.style.top === "0px") return
  dot.style.top = parseInt(dot.style.top) - 10 + "px"
}
function moveRight() {
  if (dot.style.left === "680px") return
  dot.style.left = parseInt(dot.style.left) + 10 + "px"
}
function moveDown() {
  if (dot.style.top === "680px") return
  dot.style.top = parseInt(dot.style.top) + 10 + "px"
}

export {moveDown, moveUp, moveRight, moveLeft}
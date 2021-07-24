const ROOT = document.querySelector('.root')
const dot = document.querySelector('.mainDot')

dot.style.left = '340px'
dot.style.top = '340px'

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
    case "ArrowDown" && "ArrowLeft":
      moveDown()
      moveLeft()
      break;
    // case "ArrowDown":
    //   moveDown()
    //   console.log('down')
    //   break;
    // case "ArrowDown":
    //   moveDown()
    //   console.log('down')
    //   break;
    // case "ArrowDown":
    //   moveDown()
    //   console.log('down')
    //   break;
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

// let interval = 1000
// let intervall = (num) => {
//   setInterval(() => {
//     return num -= 20
//   }, interval)
// }

// function createTag(name, className = '', text = '') {
//   let newTag = document.createElement(name)
//   newTag.className = className
//   newTag.innerHTML = text
//   return newTag
// }

// function dinoMovement() {   
//   let dinoHeight = dino.style.bottom
//   let minus = 150
//   // minus -= 20
//   // dino.style.bottom = `${minus}px`
//   // console.log(minus)

//   if(minus > -20) {
//     intervall(minus)
//     console.log(minus)
//   } else {

//   }




// }

// document.addEventListener('keydown', event => {
//   if( event.keyCode === 38) {
//     dinoJump()
//     dinoMovement()
//   }
// })

// arrow up	38
// arrow down	40







// const ROOT = document.querySelector('.root')
// const dino = document.querySelector('.dinoImg')
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

// function dinoJump() {
//     dino.style.bottom = "150px";
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



  
}

document.addEventListener('keydown', event => {
  if( event.keyCode === 38) {
    dinoJump()
    dinoMovement()
  }
})

// arrow up	38
// arrow down	40
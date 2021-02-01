function BoxGame () {
let square = document.getElementById("square");
let div = document.createElement('div')
let div1 = document.createElement('div')
let IncreaseSpeed = document.createElement('button')
let DecreaseSpeed = document.createElement('button')
let GenerateOpponent = document.createElement('button')
let Gothrough = document.createElement('button')
let Nokia3310 = document.createElement('a')
document.body.append(IncreaseSpeed,DecreaseSpeed,GenerateOpponent,Gothrough,Nokia3310,div,div1)
IncreaseSpeed.innerText = "Increase Speed"
DecreaseSpeed.innerText = "Decrease Speed"
GenerateOpponent.innerText = "Generate Opponent"
Gothrough.innerText = "Gothrough"

let game = document.getElementById("game")
let opp = document.createElement('div')
game.append(opp)
opp.style.position = "absolute"
opp.style.width = "50px"
opp.style.height = "50px"

let top = '0px'
let left = '0px'
let timer = document.getElementById('timer')
timer.style.position = "absolute"
timer.style.color = "red"
timer.style.top = "-15px"
let count = document.getElementById('count')
count.style.color = "green"
count.style.position = "absolute"
count.style.left = "50px"
count.style.top = '2px'
let mins = 0
let level = document.getElementById('level')
level.style.color = "green"
level.style.position = "absolute"
level.style.left = "270px"
level.style.top = '2px'
let levelcount = document.getElementById('levelcount')
levelcount.style.color = "green"
levelcount.style.position = "absolute"
levelcount.style.left = "320px"
levelcount.style.top = '3px'
let scorecount = 1
function scorecounts () {
  levelcount.innerText = scorecount ++
}
function counttime () {
  count.innerText = mins ++ + ' sec'
}
count.innerText = mins
let timer2 = setInterval( counttime, 1000)
  let rpx = 200,lpx = 150,button = 10
    IncreaseSpeed.addEventListener("click", () => {
       if(button < 70)button += 5
    })
    function color() {
      let colors = Math.floor(Math.random()*16777215).toString(16)
      square.style.backgroundColor = `#${colors}`
    }
    DecreaseSpeed.addEventListener("click", () => {
       if(button >= 10)button -= 5
    })
    Gothrough.addEventListener("click", () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      document.addEventListener("keydown", function(e) {
        if (e.key === 'ArrowDown') {
            if(rpx < 300) {
              rpx += button
            }else {
              color()
              rpx = 0
            }
            square.style.top = `${rpx}px`
        }else if (e.key === 'ArrowRight') {
          if(lpx < 300) {
            lpx += button
          }else {
            color()
            lpx = 0
          }
          square.style.left = `${lpx}px`
        }else if (e.key === 'ArrowLeft') {
          if(lpx >= 0) {
            lpx -= button
          }else {
            color()
          lpx = 300
          }
          square.style.left = `${lpx}px`
        }else {
        if (rpx >= 5) {
          rpx -= button
        }else {
          color()
        rpx = 300
        }
        square.style.top = `${rpx}px`
      }
      });
   })
   function rand() {
     top = Math.floor(Math.random() * 300)
     left = Math.floor(Math.random() * 300)
     opp.style.top = `${top}px`
     opp.style.left = `${left}px`
   }
   GenerateOpponent.addEventListener("click", function(e) {
        rand()
    opp.style.backgroundColor = "white"
  })
  document.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowDown') {
      if(rpx < 300)rpx += button
      square.style.top = `${rpx}px`
    }else if (e.key === 'ArrowRight') {
      if(lpx < 300)lpx += button
      square.style.left = `${lpx}px`
    }else if (e.key === 'ArrowLeft') {
      if(lpx >= 0)lpx -= button
      square.style.left = `${lpx}px`
    }else {
      if (rpx >= 5)rpx -= button
    square.style.top = `${rpx}px`
    }
    if (rpx < top + 50 && rpx + 50 > top && lpx + 50 > left && lpx < left + 50)  {
     scorecounts()
      color()
       rand()
    } 
  })
  square.addEventListener("click", (e) => {
   color()
  })
  function nokia() {
  div1.innerText = "Gothrough"
  let gif = document.createElement("img")
  div1.append(gif)
  gif.src = "https://art.pixilart.com/16c3630a9147a08.gif"
  gif.style.width = "200px"
  }
  setTimeout(nokia, 5000)
  ref = document.createElement('button')
  Nokia3310.append(ref)
  ref.innerText = "Nokia 3310"
  Nokia3310.addEventListener("click", () => {  
    Nokia3310.href = "nokia.html"
    }) 
}
BoxGame()

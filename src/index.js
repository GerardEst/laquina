import * as quadCreator from "./modules/quadCreator.js";

quadCreator.createQuad("#quad", 10, 50);

document.addEventListener('keyup',keypress)
document.querySelector('.popup__close').addEventListener('click',closePopup)
document.querySelector('.roulette_spin').addEventListener('click',spin)

let message = '';
let control;
let roulette = document.querySelector('.roulette')
let numbers = JSON.parse(localStorage.getItem('numbers')) || []

initMarks()

function initMarks(){
  for(let number of numbers) markNum(number)
}

function keypress(e){
  if(/\b[0-9r]+/.test(e.key)){  
    clearTimeout(control)
    control = setTimeout(getMessage,1000)

    message += e.key
    premarkNum(message,isMarked(message))
    if(isMarked(message)) document.querySelector('.message').classList.add('repeated')

    document.querySelector('.message__input').textContent = message
  }
}
function getMessage(){
  if(message === 'r'){
    startRoulette()
  }else{
    markNum(message)

    numbers.push(message)
    localStorage.setItem("numbers", JSON.stringify(numbers))
  }
  message = ''
}
function unmarkAll(){
  for( let markedCubes of document.querySelectorAll('.cube.premark') ){
    markedCubes.classList.remove('premark')
    markedCubes.classList.remove('premark--repeated')
    markedCubes.classList.remove('repeated')  
  }
  document.querySelector('.message').classList.remove('repeated')
}
function premarkNum(num, repeated){
  unmarkAll()
  if(repeated){
    document.querySelector(`#cube_${num}`)?.classList.toggle('premark')
    document.querySelector(`#cube_${num}`)?.classList.toggle('premark--repeated')
  }else{
    document.querySelector(`#cube_${num}`)?.classList.toggle('premark')
  }
}
function markNum(num){
  unmarkAll()
  document.querySelector(`#cube_${num}`)?.classList.toggle('mark')
}
const isMarked = num => document.querySelector(`#cube_${num}`)?.classList.contains('mark')

function startRoulette(){
  console.log("Roulette")
  document.querySelector('.popup').classList.add('show')
}

function spin(){
  roulette.className = "roulette"
  
  let trueSlice = Math.ceil(Math.random() * 10);
  console.log(trueSlice)
  roulette.classList.add(`slice${trueSlice}`)
}

function resetRoulette(){
  roulette.className = 'roulette slice0'
}
function closePopup(){
  document.querySelector('.popup').classList.remove('show')
  resetRoulette()
}
import * as quadCreator from "./modules/quadCreator.js";

quadCreator.createQuad("#quad", 10);

document.addEventListener('keyup',keypress)
document.querySelector('.popup__close').addEventListener('click',closePopup)
document.querySelector('.roulette_spin').addEventListener('click',spin)

let message = '';
let control;
let roulette = document.querySelector('.roulette')

function keypress(e){
    clearTimeout(control)
    control = setTimeout(getMessage,1000)

    document.querySelector('.lastPress').value = e.key

    message += e.key
    document.querySelector('.message').textContent = message
}
function getMessage(){
    console.log(message)
    if(/[0-9]/.test(message)){
        markNum(message)
        spin(message)
    }else if(message === 'r'){
        startRoulette()
    }
    message = ''
}
function markNum(num){
    document.querySelector(`#cube_${num}`)?.classList.toggle('mark')
}

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
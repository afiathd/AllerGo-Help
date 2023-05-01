
/* const femAllergia = document.getElementById('types-2')
const allergiaBox = document.querySelector('.box')
const typesContent = document.querySelector('.types-content')
const typesBtn = document.querySelector('.types-btn')
 */


const etelAllergia = document.getElementById('types-1')
const types1Btn = document.getElementById('types-1-btn')
const types1Content = document.getElementById('types-1-content')

etelAllergia.addEventListener('click', () => {
    etelAllergia.classList.toggle('types-1')
    types1Content.classList.toggle('active')
    types1Btn.classList.toggle('active')
    
})


const femAllergia = document.getElementById('types-2')
const types2Btn = document.getElementById('types-2-btn')
const types2Content = document.getElementById('types-2-content')

femAllergia.addEventListener('click', () => {
    femAllergia.classList.toggle('types-2')
    types2Content.classList.toggle('active')
    types2Btn.classList.toggle('active')
    
})


const gyogyszerAllergia = document.getElementById('types-3')
const types3Btn = document.getElementById('types-3-btn')
const types3Content = document.getElementById('types-3-content')

gyogyszerAllergia.addEventListener('click', () => {
    gyogyszerAllergia.classList.toggle('types-3')
    types3Content.classList.toggle('active')
    types3Btn.classList.toggle('active')
    
})


const pollenAllergia = document.getElementById('types-4')
const types4Btn = document.getElementById('types-4-btn')
const types4Content = document.getElementById('types-4-content')

pollenAllergia.addEventListener('click', () => {
    pollenAllergia.classList.toggle('types-4')
    types4Content.classList.toggle('active')
    types4Btn.classList.toggle('active')
    
})


const poratkaAllergia = document.getElementById('types-5')
const types5Btn = document.getElementById('types-5-btn')
const types5Content = document.getElementById('types-5-content')

poratkaAllergia.addEventListener('click', () => {
    poratkaAllergia.classList.toggle('types-5')
    types5Content.classList.toggle('active')
    types5Btn.classList.toggle('active')
    
})


const allatAllergia = document.getElementById('types-6')
const types6Btn = document.getElementById('types-6-btn')
const types6Content = document.getElementById('types-6-content')

allatAllergia.addEventListener('click', () => {
    allatAllergia.classList.toggle('types-6')
    types6Content.classList.toggle('active')
    types6Btn.classList.toggle('active')
    
})


const rovarAllergia = document.getElementById('types-7')
const types7Btn = document.getElementById('types-7-btn')
const types7Content = document.getElementById('types-7-content')

rovarAllergia.addEventListener('click', () => {
    rovarAllergia.classList.toggle('types-7')
    types7Content.classList.toggle('active')
    types7Btn.classList.toggle('active')
    
})
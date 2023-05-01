const etelAllergia = document.querySelector('.types-1')
const femAllergia = document.querySelector('.types-2')
const allergiaBox = document.querySelector('.box')
const typesContent = document.querySelector('.types-content')
const typesBtn = document.querySelector('.types-btn')



allergiaBox.addEventListener('click', () => {
    allergiaBox.classList.toggle('types-1')
    typesContent.classList.toggle('active')
    typesBtn.classList.toggle('active')
})




const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu-bar')
const riport = document.querySelector('.riport')
const menuContainer = document.querySelector('.menu-container')
const logo = document.querySelector('.logo')

const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')

const monthsContainer = document.querySelector('.months-container')
const footerIcon = document.getElementById('footer-icon')

hamburger.addEventListener('click', () => {
   
    line1.classList.toggle('line-1-active')
    line2.classList.toggle('line-2-active')
    line3.classList.toggle('line-3-active')

    menuContainer.classList.toggle('menu-container-active')
    menuContainer.classList.toggle('menu-container')

    logo.classList.toggle('logo-active')

    riport.classList.toggle('riport-active')
    riport.classList.toggle('riport')

    menu.classList.toggle('menu-bar-active')
    menu.classList.toggle('menu-bar')

    footerIcon.classList.toggle('inactive-grid')

    

})

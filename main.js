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


/* carousel */

const images = document.querySelector('.car-box')
const left = document.querySelector('.left')
const center = document.querySelector('.center')
const right = document.querySelector('.right')

let index = 0

setInterval(function () {
  slide('right')
}, 10000)

function slide(direction) {
  if (direction === 'right') {
    if (index === 2) {
      index = 0
    } else {
      index++
    }
    images.style.transform = `translateX(${-100 * index}vw)`
  }

  if (direction === 'center') {
    if (index != 1) {
      index = 1
    }
    images.style.transform = `translateX(${-100 * index}vw)`
  }

  if (direction === 'left') {
    if (index === 0) {
      index = 2
    } else {
      index--
    }
    images.style.transform = `translateX(${-100 * index}vw)`
  }
}

right.addEventListener('click', function () {
  slide('right')
})

center.addEventListener('click', function () {
  slide('center')
})

left.addEventListener('click', function () {
  slide('left')
})

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

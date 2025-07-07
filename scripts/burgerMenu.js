const burgerMenuBtn = document.getElementById('burgerBtn')
const burgerMenuCloseBtn = document.getElementById('burgerCloseBtn')
const burgerOverlay = document.getElementById('burgerOverlay')
const burgerMenuItems = document.querySelectorAll('#burgerMenuItem')

const openMenu = (e) => {
  burgerOverlay.classList.remove('burger--not-visible')
}

const closeMenu = (e) => {
  burgerOverlay.classList.add('burger--not-visible')
}

burgerMenuBtn.addEventListener('click', openMenu)

burgerMenuCloseBtn.addEventListener('click', closeMenu)

burgerOverlay.addEventListener('click', (e) => {
  if (e.target === burgerOverlay) {
    closeMenu()
  }
})

burgerMenuItems.forEach(item => item.addEventListener('click', closeMenu))

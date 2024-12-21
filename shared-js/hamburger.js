const hamburgerMenu = document.querySelector('.mobile-menu-button')
const navContainer = document.querySelector('.nav-container')
const socialContainer = document.querySelector('.social-container')

hamburgerMenu.addEventListener('click', () => {
  ;[navContainer, socialContainer].forEach((el) => {
    el.classList.toggle('hidden')
  })
})

const heroImage = document.querySelector('.hero-image img')
const modalElement = document.querySelector('.modal')
const modalImage = document.querySelector('#modal-image')

const toggleModal = (e) => {
  console.log(e.target)
  if (e.target === modalImage) return
  modalElement.classList.toggle('open')
}

heroImage.addEventListener('click', toggleModal)

modalElement.addEventListener('click', toggleModal)

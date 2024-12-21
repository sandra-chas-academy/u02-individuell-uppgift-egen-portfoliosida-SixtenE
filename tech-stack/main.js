const techStackList = document.querySelector('.tech-stack-list')

const removeLoaders = () => {
  const loaders = document.querySelectorAll('.loader')
  loaders.forEach((loader) => loader.remove())
}

const fetchTechStack = async () => {
  try {
    const response = await fetch('./technologies.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const displayTechStack = async () => {
  const techStack = await fetchTechStack()

  removeLoaders()
  for (const n in techStack) {
    techStackList.innerHTML += `<li class="tech-stack-item">${techStack[n].svg}</li>`
  }
}

displayTechStack()

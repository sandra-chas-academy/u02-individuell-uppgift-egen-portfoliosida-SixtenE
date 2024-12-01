const techStackList = document.querySelector('.tech-stack-list')

const clearList = () => {
  techStackList.innerHTML = ''
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

  clearList()
  for (const n in techStack) {
    techStackList.innerHTML += `<li class="tech-stack-item">${techStack[n].svg}</li>`
  }
}

displayTechStack()

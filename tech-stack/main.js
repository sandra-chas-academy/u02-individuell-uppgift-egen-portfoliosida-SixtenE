const techStackList = document.querySelector('.tech-stack-list')

const fetchJson = async () => {
  try {
    const response = await fetch('./technologies.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    console.log(data)
    for (const n in data) {
      techStackList.innerHTML += `
      <li class="tech-stack-item">${data[n].svg}</li>
      `
    }
  } catch (error) {
    console.error(error)
  }
}

fetchJson()

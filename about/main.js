const workComponent = (workExperience) => `
<li class="experience-list-item">
    <div class="item-left">
        <h2 class="experience-title">
            ${workExperience.title}
        </h2>
        <span class="experience-company"
            >🏢 ${workExperience.company}</span
        >
    <span class="experience-location">📍 
        ${workExperience.location}
    </span>
    </div>
    <div class="item-right">
        <span class="experience-type">${workExperience.type}</span>
        <span class="experience-date">📅 ${workExperience.date}</span>
    </div>
</li>
`

const educationComponent = (education) => `
<li class="experience-list-item">
    <div class="item-left">
        <h2 class="experience-title">
            ${education.title}
        </h2>
        <span class="experience-company"
            >🏫 ${education.company}</span
        >
    </div>
    <div class="item-right">
        <span class="experience-type">${education.type}</span>
        <span class="experience-date">📅 ${education.date}</span>
    </div>
</li>
`

const experienceList = document.querySelector('.experience-container .experience-list')
const educationList = document.querySelector('.education-container .experience-list')

const removeLoaders = () => {
  const loaders = document.querySelectorAll('.loader')
  loaders.forEach((loader) => loader.remove())
}

const fetchResume = async () => {
  try {
    const response = await fetch('./cv.json')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const displayResume = async () => {
  const { workExperience, education } = await fetchResume()

  removeLoaders()

  workExperience.forEach((work) => {
    experienceList.innerHTML += workComponent(work)
  })

  education.forEach((edu) => {
    educationList.innerHTML += educationComponent(edu)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  displayResume()
})

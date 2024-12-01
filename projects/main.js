const projectComponent = (project) => `
    <li class="project-item">
        <img src="../assets/project1.jpeg" alt="project1 image" />
        <h2>${project.title}</h2>
        <p>${project.description ? project.description : 'No description provided'}</p>
        <p><span>Tech stack:</span> ${project.language ? project.language : 'Not specified'}</p>
        <div class="item-links">
            <a href="${project.liveUrl}">
                <span class="link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                </span>
                Live Preview
            </a>
            <a href="${project.repoUrl}">
                <span class="link-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </span>
                View Code
            </a>
        </div>
    </li>
`

const githubAPI = 'https://api.github.com/users/SixtenE/repos'

const projectList = document.querySelector('.project-list')

const clearList = () => {
  projectList.innerHTML = ''
}

const fetchProjects = async () => {
  //Simulera en långsam nätverksförfrågan
  //await new Promise((resolve) => setTimeout(resolve, 2000))
  try {
    const response = await fetch(githubAPI)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()

    const formattedData = data
      .filter((project) => ![592543022, 590209581].includes(project.id))
      .map((project) => ({
        title: project.name,
        description: project.description,
        language: project.language,
        liveUrl: `https://sixtene.github.io/${project.name}`,
        repoUrl: project.html_url,
      }))
    return formattedData
  } catch (error) {
    console.error(error)
  }
}

const displayProcess = async () => {
  const projects = await fetchProjects()

  clearList()
  for (const project of projects) {
    projectList.innerHTML += projectComponent(project)
  }
}

displayProcess()

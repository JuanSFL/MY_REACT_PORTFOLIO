import React from 'react'
import '../Styles/Projects.css'
import { projectList } from "../helpers/ProjectList"
import ProjectItem from '../Components/ProjectItem'

function Projects() {
  return (
    <div className='projects'>
        <h1>Here are some Projects I have built!</h1>
          <div className='projectList'>
            {projectList.map((project)=>{
              return <ProjectItem name={project.name} image={project.image} description={project.description}/>
            })}
          </div>
    </div>
  )
}

export default Projects

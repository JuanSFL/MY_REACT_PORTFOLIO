import React from 'react'

function ProjectItem({image , name, description, repo}) {
  return (
    <div className='projectItem'>
        <a href={repo} target='_blank'><div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1 className='projectTitle'>{name}</h1>
        <p>{description}</p></a>
    </div>
  )
}

export default ProjectItem
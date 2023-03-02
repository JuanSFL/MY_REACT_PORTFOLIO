import React from 'react'

function ProjectItem({image , name, description, repo}) {
  return (
    <div className='projectItem'>
        <a href={repo} target='_blank'><div style={{backgroundImage: `url(${image})`}} className='bgImage'/></a>
        <h1 className='projectTitle'>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default ProjectItem
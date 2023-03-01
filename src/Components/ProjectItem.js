import React from 'react'

function ProjectItem({image , name, description}) {
  return (
    <div className='projectItem'>
        <div style={{backgroundImage: `url(${image})`}} className='bgImage'/>
        <h1 className='projectTitle'>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default ProjectItem
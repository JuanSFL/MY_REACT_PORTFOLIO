import React from 'react'
import LinkedinIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import Email from '@material-ui/icons/Email'
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className='socialMedia'> 
        <a href='https://www.linkedin.com/in/juan-molina-7978761b2/' target="_blank" rel="noreferrer"><LinkedinIcon/></a>
        <a href="https://github.com/JuanSFL" target="_blank" rel="noreferrer"><GithubIcon/></a>  
        <a href='mailto:Molina98j@yahoo.com'><Email/></a>
        </div>
        <p>  </p>
    </div>
  )
}

export default Footer

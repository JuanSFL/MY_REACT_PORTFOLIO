import  ReorderIcon  from '@material-ui/icons/Reorder'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
function Navbar() {
    const [expandNavbar,SetExpandNavbar]=useState(false);
    const location = useLocation();

    const changeNavbar = ()=>{
        SetExpandNavbar((prev)=>!prev)
    }

    useEffect(()=>{
        SetExpandNavbar(false)
    },[location])

  return (
    <div className="navbar" id={expandNavbar ? "open":"close"}> 
        <div className="toggleButton">
            <button onClick={changeNavbar}> <ReorderIcon/> </button>
         </div>
         <div className="links"> 
            <Link to="/"> About Me </Link>
            <Link to="skills">Skills </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="experience"> Experience </Link>
            
            <Link to="contact">Contact Me </Link>
         </div>
    </div>     
       
  )
}

export default Navbar
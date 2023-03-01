import React from "react";
import JuanResume from '../Assets/JuanResume.jpg'
import "../index.css"
import "../Styles/Experience.css"

function Experience(){
    return (
        <div>
            <section className="Resume">
  <img  src={JuanResume}/>
            <a id="resDl" src={JuanResume} href={JuanResume} download={"Juan Molina JuanResume.jpg"}>Click here to download my Experience!</a> 
            </section>
            
        </div>
    )
}
    
export default Experience
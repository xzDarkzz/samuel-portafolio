import React from "react";
import MyPhoto from "../assets/MyPhoto.jpg"

function Presentation(){
    return (
        <div className='ContainerPresentation ToDo'>
          <section className='SectionInfo'>
            <h1>
              FULL STACK DEVELOPER 
            </h1>
            <p>
              Student from Hybridge university in software engineering.
            </p>
          </section>
          <div className='MyPhoto'>
            <img src={MyPhoto} alt="" />
          </div>
      </div>
    )
}

export default Presentation; 
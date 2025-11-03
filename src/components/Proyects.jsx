import React from "react";
import TorneoImg from "../assets/ProyectsPng/Torneo.png"
import Freddy from "../assets/ProyectsPng/FreddyProyecto.png"
import TaskM from "../assets/ProyectsPng/TaskManager.png"

export default function Proyects(){
    return(
        <div className='ContainerProyects'>
          <div className='AllProyects'>
            <section className='TitlePageProyects'>
              <h1 className="ToDo">PROYECTS</h1>
              <p className="ToDo">This part is about all the proyects that I have done sinces I finished the full stack course</p>
            </section>
            <div className='ContainerCardsProyects'>
              <div className='CardLayout CToDo'>
                <div className='ImageProyect'>
                  <img src={TorneoImg} alt="" />
                </div>
                <div className='DescriptionProyectPart'>
                  <section className='DescriptionProyect'>
                    <h1>
                      TOURNAMENT GENERATOR
                    </h1>
                    <p>
                      this proyect it´s a Frontend proyect where the user can select how many teams wants and who is gonna be the winner with a simple way to use it.
                    </p>
                    <a target="_blank" className = "LinkTry" href="https://lpnr5k.csb.app/">Try</a>
                  </section>
                </div>                       
              </div>
              <div className='CardLayout CToDo'>
                <div className='ImageProyect'>
                  <img src={TaskM} alt="" />
                </div>
                <div className='DescriptionProyectPart'>
                  <section className='DescriptionProyect'>
                    <h1>
                      TASK MANAGER
                    </h1>
                    <p>
                      this proyect it´s a Fullstack proyect with a data base integrated, The user in this proyect can assing tasks for any roles he wants. 
                    </p>
                  </section>
                </div>                       
              </div>
              <div className='CardLayout CToDo'>
                <div className='ImageProyect'>
                  <img src={Freddy} alt="" />
                </div>
                <div className='DescriptionProyectPart'>
                  <section className='DescriptionProyect'>
                    <h1>
                      FREDDY_MEMORIES
                    </h1>
                    <p>
                      This is a personal proyect made with unity and c-sharp, All the process and the mechanics were streming in the plataform of twitch
                    </p>
                    <a target="_blank" className = "LinkTry" href="https://darki-dev.itch.io/freddy-fazber">Try</a>
                    <a target="_blank" className = "LinkTry Twitch" href="https://www.twitch.tv/dreamlish">Twitch</a>
                  </section>
                </div>                       
              </div>
            </div>
          </div>
        </div>
    )
}
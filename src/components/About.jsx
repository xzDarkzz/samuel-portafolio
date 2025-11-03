import React from "react";
import cSharp from "../assets/Sharp.png"
import Css from "../assets/Css.png"
import Html from "../assets/Html.png"
import Js from "../assets/Js.png"
import Node from "../assets/Node.png"
import Python from "../assets/Python.png"
import ReactImg from "../assets/React.png"

function About(){
    return(
        <div className='ContainerDescription'>
            <div>
                <section className='PartDescription'>
                <h1 className="ToDo">ABOUT ME</h1>
                <p className="ToDo">I´m Samuel Eliseo Martinez Aguilar, 19 years old, from México but I have B2 with certificacion in the language: English.  
                    I took a course about full stack web developer, also I have learned about videogames delevoping and I finished one proyect and the second one I´m still working in it.
                    I´m an active participant in the Seventh-day Adventist church.
                </p>
                </section>
                <div className='knowledge ToDo'>
                <h2>
                    KNOWLEDGE :
                </h2>
                </div>
            </div>
            <div className='IconsIknow' >
                <div className='ContainerIcons '>
                    <div className='IconsBox '>
                        <img src={Html} alt="" />
                    </div>
                    <div className='IconsBox'>
                        <img src={Css} alt="" />
                    </div>
                    <div className='IconsBox'>
                        <img src={Js} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={Node} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={ReactImg} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={cSharp} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={Python} alt="" />

                    </div>
                </div>
                <div aria-hidden className='ContainerIcons'>
                    <div className='IconsBox'>
                        <img src={Html} alt="" />
                    </div>
                    <div className='IconsBox'>
                        <img src={Css} alt="" />
                    </div>
                    <div className='IconsBox'>
                        <img src={Js} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={Node} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={ReactImg} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={cSharp} alt="" />

                    </div>
                    <div className='IconsBox'>
                        <img src={Python} alt="" />

                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default About; 
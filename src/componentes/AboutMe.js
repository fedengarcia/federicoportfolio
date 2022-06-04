import React from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
const AboutMe = () => {

    
    return (
        <div className='root'>
            <Navbar/>
            <div className="description-container ">
                <TitlePage title={"Sobre mi"}/>

                <h2>Federico Nicolas Garcia</h2>

                <p>Texto Texto personal Texto personal Texto personalTexto personalTexto personalTexto personalTexto personalTexto personalTexto personal
                Texto personalpersonalTexto personalTexto personalTexto personalTexto personalTexto personalTexto personal</p>
                
                <h3>Experiencia</h3>

                <button>Ver proyectos</button>
            </div>
        </div>
    );
};



export default AboutMe;

import React from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import profilePicture from '../img/fotoperfil.png'


const AboutMe = () => {

    
    return (
        <div className='root'>
            <Navbar/>
            <div className="description-container ">
                <TitlePage title={"Sobre mi"}/>

                <div>

                    <div className='img_profile_container animate_animated animate__zoomIn'>
                        <img src={profilePicture} alt='foto de perfil'/>
                    </div>

                    <div className='description-container'>
                        <h2>Federico Nicolas Garcia</h2>

                        <p>Texto Texto personal Texto personal Texto personalTexto personalTexto personalTexto personalTexto personalTexto personalTexto personal
                        Texto personalpersonalTexto personalTexto personalTexto personalTexto personalTexto personalTexto personal</p>

                        <h3>Experiencia</h3>
                    </div>
                </div>
                
                <button>Ver proyectos</button>
            </div>
        </div>
    );
};



export default AboutMe;

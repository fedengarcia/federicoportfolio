import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const AboutMe = () => {

    
    return (
        <div className='aboutme-root'>

            <div className="description-container animate__animated animate__bounceInUp">
                <div>
                    <h2>Sobre mi</h2>
                </div>
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

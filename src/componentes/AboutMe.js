import React from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import profilePicture from '../img/fotoperfil.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const AboutMe = () => {

    
    return (
        <div className='root'>
            <Navbar/>
            <div className="description-container ">
                <TitlePage title={"SOBRE MI"}/>

                <div>


                    <div className='description animate__animated animate__fadeIn'>
                        <div className='img_profile_container animate_animated animate__zoomIn'>
                            <img src={profilePicture} alt='foto de perfil'/>
                        </div>

                        <ul>
                            <li><h3>Nombre: Federico Nicolas Garcia</h3></li>
                            <li><h3>Fecha de Nacimiento: 30/05/1994</h3></li>
                            <li><h3>Nacionalidad: Argentino - Italiano</h3></li>
                            <li><h3>Desarrollador de Software</h3></li>
                        </ul>

                      
                        <div className='navabout'>
                            <button>EXPERIENCIA</button>
                            <button>EDUCACION</button>
                            <button>SKILLS</button>
                        </div>
                    
                    </div>
                    <KeyboardArrowDownIcon/>

     
                    <div className='experience about-section'>
                        <h2>EXPERIENCIA</h2>
                        <ul>
                            <li><h3>2018 - 2021: Consultor IA - Etermax IA Labs</h3></li>
                            <li><h3>2022 - Desarrollo E-Commerce con integracion a plataforma de pago - Freelance</h3></li>
                            <li><h3>2022 - Actualidad: Desarrollador Front End - Efilm Bibliotecas</h3></li>

                        </ul>
                    </div>

                    <div className='skills about-section'>
                        <h2>SKILLS</h2>
                        <ul>
                            <li><h3>BIG DATA - Analytics and Visualization: Python</h3></li>
                            <li><h3>ARTIFICIAL INTELLIGENCE - Machine Learning, Deep Learning: Python Libraries</h3></li>
                            <li><h3>CHAT BOTS SDK: Watson Assistant</h3></li>
                            <li><h3>DATABASE MANAGMENT: SQL, NOSQL, Firebase, MongoDB</h3></li>
                            <li><h3>FRONT END DEVELOPMENT: HTML5, CSS, JAVASCRIPT, BOOSTRAP, SCSS, MATERIAL UI</h3></li>
                            <li><h3>FRAMEWORKS: REACT JS, NEXT JS</h3></li>
                            <li><h3>AGILE METHODOLOGY: Trello, Jira</h3></li>

                        </ul>
                    </div>


                    <div className='education about-section'>
                        <h2>EDUCACION</h2>
                        <ul>
                            <li><h3>2018 - 2021: Consultor IA - Etermax IA Labs</h3></li>
                            <li><h3>2022 - Actualidad: Desarrollador Front End - Efilm Bibliotecas</h3></li>
                            <li><h3>2022 - Desarrollo E-Commerce con integracion a plataforma de pago - Freelance</h3></li>
                        </ul>
                    </div> 
                </div>
                
                <button>Ver proyectos</button>
            </div>
        </div>
    );
};



export default AboutMe;

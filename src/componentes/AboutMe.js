import React from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import profilePicture from '../img/fotoperfil.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AnimationOnScroll } from 'react-animation-on-scroll';


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
                            <a href="#experiencia">EXPERIENCIA</a>
                            <a href="#educacion">EDUCACION</a>
                            <a href="#skills">SKILLS</a>
                        </div>
                    
                    </div>

     
                    <div id="experiencia" className='experience about-section'>

                        <div className='title-section'>
                            <AnimationOnScroll animateIn="animate__fadeInDown">
                                <h2 className="title1">EXPERIENCIA</h2>
                                <h2 className="title2">EXPERIENCIA</h2>
                            </AnimationOnScroll>
                        </div>
                    

                        <ul>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>2022 - Actualidad: Desarrollador Front End - Efilm Bibliotecas</h3>
                            </AnimationOnScroll>
                            </li>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>2022 - Desarrollo E-Commerce con integracion a plataforma de pago - Freelance</h3>
                            </AnimationOnScroll>
                            </li>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>2018 - 2021: Consultor IA - Etermax Games, IA Labs</h3>
                            </AnimationOnScroll>
                            </li>
                        </ul>
                    </div>


                    <div id="educacion" className='education about-section' style={{width:"71%"}}>

                        <div className='title-section'>
                            <AnimationOnScroll animateIn="animate__fadeInDown">
                            <h2 className="title1">EDUCACION</h2>
                            <h2 className="title2">EDUCACION</h2>
                            </AnimationOnScroll>
                        </div>

                        <ul>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>Coder House Latin America - Front End Developer Certificate | 2021</h3>
                            </AnimationOnScroll>
                            </li>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>Universidad Argentina de la Empresa ("Argentine Business University") - 
                                    Software Development Technician Diploma | 2014-2018</h3>
                            </AnimationOnScroll>
                            </li>
                            <li><AnimationOnScroll animateIn="animate__fadeIn">
                                <h3>Juan Manuel Estrada High School, Zarate, Province of Buenos Aires, Argentina - 
                                    Bachellor's degree in Natural Sciences | 2007-2011</h3>
                            </AnimationOnScroll>
                            </li>

                        </ul>
                    </div> 



                    <div id="skills" className='skills about-section'>
                        <div className='title-section'>
                            <AnimationOnScroll animateIn="animate__fadeInDown">
                                <h2 className="title1">SKILLS</h2>
                                <h2 className="title2">SKILLS</h2>
                            </AnimationOnScroll>
                        </div>                    
                        <ul>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>BIG DATA - Analytics and Visualization: Python</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>ARTIFICIAL INTELLIGENCE - Machine Learning, Deep Learning: Python Libraries</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>CHAT BOTS SDK: Watson Assistant</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>DATABASE MANAGMENT: SQL, NOSQL, Firebase, MongoDB</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>FRONT END DEVELOPMENT: HTML5, CSS, JAVASCRIPT, BOOSTRAP, SCSS, MATERIAL UI</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>FRAMEWORKS: REACT JS, NEXT JS</h3>
                            </AnimationOnScroll></li>
                            <li><AnimationOnScroll animateIn="animate__fadeInDown">
                                <h3>AGILE METHODOLOGY: Trello, Jira</h3>
                            </AnimationOnScroll></li>
    
                        </ul>
                    </div>


                    
                </div>
                
            </div>
        </div>
    );
};



export default AboutMe;

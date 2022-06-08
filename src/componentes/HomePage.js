import React from 'react';
import profilePicture from '../img/fotoperfil.png'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import TitlePage from './TitlePage';

const HomePage = () => {

    const navigate = useNavigate()

    const handleNav = (route) =>{
        navigate(`/${route}`)
    }

    return (
        <div className='root'>
        
        <div className='home-container'>
            <TitlePage title={"Federico Nicolas Garcia"}/>
            <div className='home_nav'>
                <div className='img_profile_container animate_animated animate__zoomIn'>
                    <img src={profilePicture} alt='foto de perfil'/>
                </div>
                <div className='home'>
                    <button className='animate__animated animate__fadeInRight' onClick={() => handleNav("Aboutme")}>Sobre mi</button>
                    <button className='animate__animated animate__fadeInRight' onClick={() => handleNav("Proyects")}>Ver proyectos</button>
                    <button className='animate__animated animate__fadeInRight' onClick="">Descargar CV</button>
                </div>
            </div>
            
        </div>
        </div>
    );
}

export default HomePage;

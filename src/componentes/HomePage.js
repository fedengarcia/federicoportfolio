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
                <div className='img_profile_container'>
                    <img src={profilePicture} alt='foto de perfil'/>
                </div>
                <div className='home'>
                    <button onClick={() => handleNav("Aboutme")}>Sobre mi</button>
                    <button onClick={() => handleNav("Proyects")}>Ver proyectos</button>
                    <button>Descargar CV</button>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default HomePage;

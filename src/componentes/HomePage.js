import React from 'react';
import profilePicture from '../img/fotoperfil.png'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {

    const navigate = useNavigate()

    const handleNav = (route) =>{
        navigate(`/${route}`)
    }

    return (
        <div className='root'>
        <Navbar/>
        <div className='home-container'>
            <img src={profilePicture} alt='foto de perfil'/>
            <div className='home'>
                <button onClick={() => handleNav("Aboutme")}>Sobre mi</button>
                <button onClick={() => handleNav("Proyects")}>Ver proyectos</button>
                <button>Descargar CV</button>
            </div>
        </div>
    </div>
    );
}

export default HomePage;

import React from 'react';
import profilePicture from '../img/fotoperfil.png'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate()

    const handleNav = (route) =>{
        navigate(`/${route}`)
    }

    return (
        <div className='root'>
        <div className='home-container animate__animated animate__bounceInUp'>
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

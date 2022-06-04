import React, { useState } from 'react';
import profilePicture from '../img/fotoperfil.png'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [visible,setVisible] = useState(true);
    const [invisible,setInvvisible] = useState(false);


    const navigate = useNavigate()

    const handleNav = (route) =>{
        navigate(`/${route}`)
    }

    const handleScreens = () => {

    }

    return (
        <div className='homepage-root'>
        <div className='home-container animate__animated animate__bounceInUp'>
            <img src={profilePicture} alt='foto de perfil'/>
            <div className='home'>
                <button onClick={() => handleNav("Aboutme")}>Sobre mi</button>
                <button onClick={() => handleNav("Proyectos")}>Ver proyectos</button>
                <button>Descargar CV</button>
            </div>
        </div>
    </div>
    );
}

export default HomePage;

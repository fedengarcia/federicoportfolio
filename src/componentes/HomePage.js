import React, { useState } from 'react';
import profilePicture from '../img/fotoperfil.png'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [visible,setVisible] = useState(true);
    const [invisible,setInvvisible] = useState(false);


    const navigate = useNavigate()

    const handleNav = (route) =>{
        // navigate(`/${route}`)
    }

    const handleScreens = () => {

    }

    return (
        <div className='navbar-root'>
        <div className='background-navbar'>
            <img src={profilePicture} alt='foto de perfil'/>
            <div className='nav'>
                <div>

                    <motion.button
                    animate={{  x:-100}}
                    transition={{ duration: 1 }}
                    onClick={() => handleNav("Aboutme")}
                    >Sobre mi
                    </motion.button>

                    <motion.button
                    animate={{  x:-100 }}
                    transition={{ duration: 1 }}
                    onClick={() => handleNav("Proyectos")}
                    >Ver proyectos
                    </motion.button>

                    <motion.button
                    animate={{  x:-100 }}
                    transition={{ duration: 1 }}
                    >Descargar CV
                    </motion.button>

                </div>
                
            </div>
        </div>
    </div>
    );
}

export default HomePage;

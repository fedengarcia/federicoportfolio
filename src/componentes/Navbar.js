import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()

    const handleNav = (route) => {
        navigate(`/${route}`)
    }

    return (
        <div className='navbar '>
            <button className='animate__animated animate__fadeInRight' onClick={() => handleNav("")}>INICIO</button>
            <button className='animate__animated animate__fadeInRight' onClick={() => handleNav("Aboutme")}>SOBRE MI</button>
            <button className='animate__animated animate__fadeInRight' onClick={() => handleNav("Proyects")}>PROYECTOS</button>
            
        </div>
    );
}

export default Navbar;

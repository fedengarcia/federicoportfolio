import React from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()

    const handleNav = (route) => {
        navigate(`/${route}`)
    }

    return (
        <div className='navbar'>
            <button onClick={() => handleNav("")}>Inicio</button>
            <button onClick={() => handleNav("Aboutme")}>Sobre mi</button>
            <button onClick={() => handleNav("Proyects")}>Proyectos</button>
            
        </div>
    );
}

export default Navbar;

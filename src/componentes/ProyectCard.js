import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProyectCard = ({proyect}) => {
    const navigate = useNavigate();
    
    const handleNav = (route) => {

        navigate(route)
    }
    
    return (
        <div className='card-container'>
            <h2>{proyect.name}</h2>


            <div className='card-actions'>
                <button onClick={() => handleNav(proyect.html_url)}>Github</button>
                <button onClick={() => handleNav("")}>Web Oficial</button>
                <button onClick={() => handleNav(proyect.downloads_url)}>Descargar Repositorio</button>
            </div>
        </div>
    );
}

export default ProyectCard;

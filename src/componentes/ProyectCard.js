import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProyectCard = ({name,repo,urlDeploy}) => {
    const navigate = useNavigate();
    
    const handleNav = (route) => {

        navigate(route)
    }
    
    return (
        <div className='card-container'>
            <h2>{name}</h2>

            <h3>IMAGEN</h3>

            <div className='card-actions'>
                <button onClick={() => handleNav(repo)}>Github</button>
                <button onClick={() => handleNav(urlDeploy)}>Web Oficial</button>
                <button onClick={() => handleNav("proyect.download")}>Descargar Repositorio</button>
            </div>
        </div>
    );
}

export default ProyectCard;

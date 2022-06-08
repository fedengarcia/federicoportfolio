import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProyectCard = ({name,repo,urlDeploy,urlDownload,description}) => {
    const navigate = useNavigate();
    
    const handleNav = (route) => {

        navigate(route)
    }
    
    return (
        <div className='card-container'>
            <h2>{name}</h2>

            <h3>IMAGEN</h3>

            <h4>{description}</h4>
            <div className='card-actions'>
                <a href={repo}>Github</a>
                <a href={urlDeploy}>Web Oficial</a>
                <a download={urlDownload}>Descargar Repositorio</a>
            </div>
        </div>
    );
}

export default ProyectCard;

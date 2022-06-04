import React from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';

const Proyects = () => {
    return (
        <div className='root'>
        <Navbar/>
        <div className="proyects-container animate__animated animate__bounceInUp">
            <TitlePage title={"Proyectos"}/>
            
        </div>
</div>

    );
}

export default Proyects;

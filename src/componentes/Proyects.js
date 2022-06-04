import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import ProyectCard from './ProyectCard';
import { getGithubRepos } from '../utils/github';


const Proyects = () => {
    const [proyectdata, setProyectdata] = useState(undefined);

    useEffect(() => {
        getGithubRepos().then(res => {
            setProyectdata(res.data);
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }, []);

    return (
        <div className='root'>
        <Navbar/>
        <TitlePage title={"Proyectos"}/>
        <div className="proyects-container">
            
            {proyectdata && proyectdata.map(proyect => <ProyectCard key={proyect.id} proyect={proyect}/>)}
        </div>
</div>

    );
}

export default Proyects;

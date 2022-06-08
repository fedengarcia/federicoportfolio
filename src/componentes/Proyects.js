import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TitlePage from './TitlePage';
import ProyectCard from './ProyectCard';
// import { getGithubRepos } from '../utils/github';


const Proyects = () => {
    // const [proyectdata, setProyectdata] = useState(undefined);

    useEffect(() => {
        // getGithubRepos().then(res => {
        //     setProyectdata(res.data);
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // })

    }, []);

    return (
        <div className='root'>
        <Navbar/>
        <div className="proyects-container">
            <TitlePage title={"Proyectos"}/>
            <div>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>
                <ProyectCard name={"name"} repo={"proyect"} urlDeploy={"url"}/>

            </div>
            
        </div>
</div>

    );
}

export default Proyects;

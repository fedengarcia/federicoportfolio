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
            <TitlePage title={"PROYECTOS"}/>

            <div>
                <ProyectCard name={"TicTacToe"} repo={"https://github.com/fedengarcia/tictactoe-react"} urlDeploy={"url"} description={"Desafio de una prueba practica. Juego tic tac toe, con ranking. Se puede jugar multiplayer o computadora."}/>
                <ProyectCard name={"Rose Aromas"} repo={"https://github.com/fedengarcia/ecommerce-rosearomas"} urlDeploy={"https://www.rosearomas.com.ar"} description={"Ecommerce con integracion a la plataforma de pago de latinoamerica Mercado Pago"}/>
                <ProyectCard name={"React Games"} repo={"https://github.com/fedengarcia/reactGames.git"} urlDeploy={"url"} description={"Juegos sencillos en react para practicar animations, routes, components"}/>
                <ProyectCard name={"Web3 Dashboard"} repo={"https://github.com/fedengarcia/web3-dashboard"} urlDeploy={"url"} description={"Dashboard web3. Te puedes conectar mediante una wallet, ver tus transacciones, NFT, balances y mas."}/>
                <ProyectCard name={"Ecommerce Shoes"} repo={"https://github.com/fedengarcia/e-commerce"} urlDeploy={"url"} description={"Ecommerce realizado en el curso de Coder House. No cuenta con integracion a plataforma de pago."}/>
                

            </div>
            
        </div>
</div>

    );
}

export default Proyects;

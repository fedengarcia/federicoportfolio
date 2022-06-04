import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutMe from '../componentes/AboutMe';
import HomePage from '../componentes/HomePage';
import Proyects from '../componentes/Proyects';

const Router = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/Aboutme' element={<AboutMe/>}/>
                <Route path='/Proyects' element={<Proyects/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router;
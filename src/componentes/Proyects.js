import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';


const Proyects = () => {
    return (
        <motion.div
        animate={{  x:-100}}
        transition={{ duration: 1 }}
        className="root"
        >
            <Navbar/>
            <h2>Proyectos</h2>

        </motion.div>

    );
}

export default Proyects;

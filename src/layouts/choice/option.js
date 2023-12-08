import React from 'react'
import "./option.css"
import Background from '../../component/background/backgound'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Option() {
    return (
        <div className='option-container'>
            <motion.h2 
             animate={{opacity:1}}
             initial={{opacity:0}}
             transition={{duration:.2,}}
            >What To Do !</motion.h2>
            <div style={{ display: "flex", gap: "1.5rem" }}>
                <motion.div
                animate={{x:0,opacity:1}}
                initial={{x:-100,opacity:0}}
                transition={{duration:.6,}}
                >
                    <Link to="/organize-form" className='organize-opt opt'>organize party</Link>
                </motion.div>
                <motion.div
                 animate={{x:0,opacity:1}}
                 initial={{x:100,opacity:0}}
                 transition={{duration:.6,}}
                >
                    <Link to="/join-page" className='join-opt opt'>Join party</Link>
                </motion.div>
            </div>
            <Background />
        </div>
    )
}

export default Option
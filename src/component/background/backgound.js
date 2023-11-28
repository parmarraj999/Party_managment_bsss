import React from 'react'
import "./background.css"
import { motion } from 'framer-motion'

function Background() {
  return (
    <div className='bg-container'>
        <motion.div className='bubble'
        animate={{opacity:[0,1,0]}}
        initial={{opacity:0}}
        transition={{duration:4,loop:Infinity,repeat:Infinity}}
        ></motion.div>
        <motion.div className='bubble2'
        animate={{opacity:[0,1,0]}}
        initial={{opacity:0}}
        transition={{duration:4,delay:.8,loop:Infinity,repeat:Infinity}}
        ></motion.div>
    </div>
  )
}

export default Background
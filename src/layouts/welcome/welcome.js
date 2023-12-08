import React from 'react'
import Background from '../../component/background/backgound'
import "./welcome.css"
import PrimaryButton from '../../component/button/button'
import { motion } from 'framer-motion'

function Welcome() {
  return (
    <div className='welcome-page'>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
        <motion.h1
          animate={{ opacity: 1, y: "0px"}}
          initial={{ opacity: 0, y: "50px" }}
          transition={{ duration: .5, ease: "easeInOut" }}
        >Manage Your Party</motion.h1>
        <motion.h1
        animate={{ opacity: 1, y: "0px"}}
        initial={{ opacity: 0, y: "50px" }}
          transition={{ duration: .5, ease: "easeInOut", delay: .2 }}
        >In Easy Way</motion.h1>
      </div>
      <motion.div
      animate={{ opacity: 1, y: "0px"}}
      initial={{ opacity: 0, y: "50px" }}
       transition={{ duration: .5, ease: "easeInOut",delay:.4 }}
      >
        <PrimaryButton text="let's start" arrow={true} link="choice" />
      </motion.div>
      <Background />
    </div>
  )
}

export default Welcome
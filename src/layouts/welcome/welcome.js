import React from 'react'
import Background from '../../component/background/backgound'
import "./welcome.css"
import Button from '../../component/button/button'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className='welcome-page'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <h1>Manage Your Enjoy</h1>
            <h1>In Easy Way</h1>
        </div>
        <Link to="/home">Lets start</Link>
        <Background/>
    </div>
  )
}

export default Welcome
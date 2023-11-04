import React, { useState } from 'react'
import "./landing.css"

function Landing() {

  const [theme,setTheme] = useState(true);

  return (
    <div className={theme ? "landing-wrapper bw" : "landing-wrapper bb"}>
      <div className='bubble-container'>
        <section id="up"></section>
        <section id="second"></section>
        <section id="third"></section>
      </div>
      <div className='landing-page-container'>
        <div className={theme ? "toggle-container bb fs" : "toggle-container bw fe"} onClick={()=>setTheme(!theme)}>
          <div className={theme ? "toggle-button bw" : "toggle-button bb"}></div>
        </div>
        <h1 style={ theme ? {color:"black"} : {color:"white"}}>A new <span style={{background:"rgb(32, 15, 49)",color:"rgb(179, 102, 255)"}}>way</span> to <span style={{background:"rgb(14, 50, 20)",color:"rgb(0, 255, 38)"}}>enjoy</span></h1>
      </div>
    </div>
  )
}

export default Landing
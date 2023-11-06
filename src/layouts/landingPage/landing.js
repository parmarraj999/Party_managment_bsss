import React, { useState } from 'react'
import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Landing() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? "landing-wrapper bw" : "landing-wrapper bb"}>
      <div className='bubble-container'>
        <section id="up"></section>
        <section id="second"></section>
        <section id="third"></section>
      </div>
      <div className='landing-page-container'>
        <div className={theme ? "toggle-container bb fs" : "toggle-container bw fe"} onClick={() => setTheme(!theme)}>
          <div className={theme ? "toggle-button bw" : "toggle-button bb"}></div>
        </div>
        <div>
          <h1>Logo</h1>
        </div>
        <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={theme ? { color: "black" } : { color: "white" }}>A new <span style={{ background: "rgb(32, 15, 49)", color: "rgb(179, 102, 255)" }}>way</span> to <span style={{ background: "rgb(14, 50, 20)", color: "rgb(0, 255, 38)" }}>enjoy</span></h1>
          <p className='para'>This is the plateform where you arrange your party with perfect analysis and systematic way</p>
        </div>
        <div className="btn-container" >
          <Link to="/admin" className={theme ? "organize-btn bb" : "organize-btn bw"}>
            <div className='Obtn' to="">Organize Party</div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} style={theme ? { color: "white" } : { color: "black" }} />
            </div>
          </Link>
            <Link className='button' to="/user" >Join Party</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
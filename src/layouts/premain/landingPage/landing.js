import React, { useContext } from 'react'
import "./landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ThemeSetup } from '../../../context/context';
import Overlay from '../../../component/overlay/overlay';

function Landing() {

  const themeValue = useContext(ThemeSetup)

  return (
    <div className={themeValue.theme ? "landing-wrapper bw" : "landing-wrapper bb"}>
      <Overlay/>
      <div className='landing-page-container'>
        <div className={themeValue.theme ? "toggle-container bb fs" : "toggle-container bw fe"} onClick={() => themeValue.setTheme(!themeValue.theme)}>
          <div className={themeValue.theme ? "toggle-button bw" : "toggle-button bb"}></div>
        </div>
        <div>
          <h1>Logo</h1>
        </div>
        <div style={{ width: "90%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={themeValue.theme ? { color: "black" } : { color: "white" }}>A new <span style={{ background: "rgb(32, 15, 49)", color: "rgb(179, 102, 255)" }}>way</span> to <span style={{ background: "rgb(14, 50, 20)", color: "rgb(0, 255, 38)" }}>enjoy</span></h1>
          <p className='para'>This is the plateform where you arrange your party with perfect analysis and systematic way</p>
        </div>
        <div className="btn-container" >
          <Link to="/admin" className={themeValue.theme ? "organize-btn bb" : "organize-btn bw"}>
            <div className='Obtn' to="">Organize Party</div>
            <div>
              <FontAwesomeIcon icon={faArrowRight} style={themeValue.theme ? { color: "white" } : { color: "black" }} />
            </div>
          </Link>
            <Link className='button' to="/join" >Join Party</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
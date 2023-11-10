import React from 'react'
import "./overlay/overlay.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Button(props) {
  return (
    <button style={{width:`${props.width}`}} >{props.text}
    {props.arrow ? <FontAwesomeIcon icon={faArrowRight}/> : ""}
    </button>
  )
}

export default Button
import React from 'react'
import "./button.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function PrimaryButton({text ,link ,arrow=false}) {
  return (
    <div>
         <Link to={`/${link}`} className='button'> {text}
         {
          arrow ? <FontAwesomeIcon icon={faArrowRight}/> : ""
         }
         </Link>
    </div>
  )
}

export function SecondaryButton( {text ,link,arrow}){
  return(
    <div>
       <Link to={`${link}`} className='button secondary-btn'> {text}
         {
          arrow ? <FontAwesomeIcon icon={faArrowRight}/> : ""
         }
         </Link>
    </div>
  )
}

export function NormalButton({text ,arrow=false}) {
  return (
    <div>
         <div className='button'> {text}
         {
          arrow ? <FontAwesomeIcon icon={faArrowRight}/> : ""
         }
         </div>
    </div>
  )
}
export function SecondButton({text ,arrow=false}) {
  return (
    <div>
         <div className='button secondary-btn'> {text}
         {
          arrow ? <FontAwesomeIcon icon={faArrowRight}/> : ""
         }
         </div>
    </div>
  )
}



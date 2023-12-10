import React from 'react'
import "./error.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function FormError({text, setError}) {

    const handleClick = () => {
        setError("")
    }

    return (
        <div className='form-error-container'>
            <div className='form-error-box'>
                <h2>{text}</h2>
                <div className='close-box' onClick={handleClick}>
                    <FontAwesomeIcon icon={faClose}/>
                </div>
            </div>
        </div>
    )
}

export default FormError
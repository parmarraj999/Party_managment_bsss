import React, { useState } from 'react'
import Background from '../../component/background/backgound'
import "./organize-form.css"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { NormalButton, SecondButton, SecondaryButton } from '../../component/button/button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../module/firebase';

function OrganizeForm() {


  const [moreInput, setMoreInput] = useState(true)
  const naviagate = useNavigate();

  const [partyName,setPartyName] = useState("");
  const [partyDate,setPartyDate] = useState("");
  const [partyTime,setPartyTime] = useState("");
  const [place,setPlace] = useState("");
  const [orgName,setOrgName] = useState("");
  const [orgNumber,setOrgNumber] = useState("");
  const [city,setCity] = useState("");
  const [pin,setPin] = useState("");
  const [security_code,setSecurity_code] = useState("");

  const handleName = (e) => {
    setPartyName(e.target.value)
  }

  const handleDate = (e) => {
    setPartyDate(e.target.value)
  }

  const handleTime = (e) => {
    setPartyTime(e.target.value)
  }

  const handlePlace = (e) => {
    setPlace(e.target.value)
  }

  const handleOrgName = (e) => {
    setOrgName(e.target.value)
  }

  const handleOrgNumber = (e) => {
    setOrgNumber(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handlePin = (e) => {
    setPin(e.target.value)
  }

  const handleSecurityCode = (e) => {
    setSecurity_code(e.target.value)
  }


  const handleClick = async () => {
    const dataRef = await addDoc(collection(db, `${security_code}-info`), data);
    console.log("documnet added ", dataRef.id)
    setTimeout(() => {
      naviagate("/dashboard")
    }, 2000);
  }

  const data = {
    party_name : partyName,
    party_date : partyDate,
    party_time : partyTime,
    party_place : place,
    oragnizer_name : orgName,
    oragnizer_number : orgNumber,
    city : city,
    pin_code : pin,
    securityode : security_code
  }

  console.log(data)

  return (
    <div className='organize-form-container'>
      <Background />
      <div className='organize-form'>
        <h2>Create</h2>
        <div className='org-input-container'>
          {
            moreInput ?
              <>
                <div className='input-container'>
                  <div className='input-wrapper '>
                    <h4>Party Name</h4>
                    <input type='text' className='org-input' placeholder="" name="party_name" value={partyName} onChange={handleName} />
                  </div>
                  <div className='input-wrapper '>
                    <h4>Party Date</h4>
                    <input type='date' className='org-input' placeholder="" name='party_date' value={partyDate} onChange={handleDate} />
                  </div>
                  <div className='input-wrapper '>
                    <h4>Party Time</h4>
                    <input type='time' className='org-input' placeholder="" name='party_time' value={partyTime} onChange={handleTime} />
                  </div>
                  <div className='input-wrapper ' style={{ marginBottom: "2rem" }}>
                    <h4>Party Place</h4>
                    <input type='text' className='org-input' placeholder="" name='party_place' value={place} onChange={handlePlace} />
                  </div>
                  <SecondaryButton text="Already Have Party" />
                  <div onClick={() => setMoreInput(false)}>
                    <NormalButton text="Next" arrow={true} />
                  </div>
                </div>
              </>
              : <>
                <div className='input-container'>
                  <div className='input-wrapper '>
                    <h4>Organizer Name</h4>
                    <input type='string' className='org-input' placeholder="" name="organize_name" value={orgName} onChange={handleOrgName} />
                  </div>
                  <div className='input-wrapper '>
                    <h4>Organizer Number</h4>
                    <input type='number' className='org-input' placeholder="" name="organizer_number" value={orgNumber} onChange={handleOrgNumber} />
                  </div>
                  <div className='input-wrapper '>
                    <h4>city</h4>
                    <input type='text' className='org-input' placeholder="" name="city" value={city} onChange={handleCity} />
                  </div>
                  <div className='input-wrapper ' >
                    <h4>Pin Code</h4>
                    <input type='number' className='org-input' placeholder="" name="pin_code" value={pin} onChange={handlePin} />
                  </div>
                  <div className='input-wrapper ' style={{ marginBottom: "2rem" }}>
                    <h4 style={{ color: "tomato" }}>Security Code - ( unique )</h4>
                    <input className='org-input' placeholder="" style={{ border: "2px solid tomato" }} name="security_code" onChange={handleSecurityCode} />
                  </div>
                  <div onClick={() => setMoreInput(true)}>
                    <SecondButton text="Back" />
                  </div>
                  <div onClick={handleClick}>
                    <NormalButton text="Let's Create" />
                  </div>
                </div>
              </>
          }
        </div>
      </div>
      <div className='close-container'>
        <Link to="/choice" className='close-circle'><FontAwesomeIcon icon={faClose} /></Link>
      </div>
    </div>
  )
}

export default OrganizeForm
import React, { useState } from 'react'
import Background from '../../component/background/backgound'
import "./organize-form.css"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { NormalButton, SecondButton } from '../../component/button/button'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../module/firebase';
import { motion } from 'framer-motion'
import FormError from '../../component/error/form-error'
import Readyform from '../alreadyForm/readyForm'


function OrganizeForm() {


  const [moreInput, setMoreInput] = useState(true)
  const [showForm,setShowForm] = useState();
  const naviagate = useNavigate();

  const [partyName, setPartyName] = useState("");
  const [partyDate, setPartyDate] = useState("");
  const [partyTime, setPartyTime] = useState("");
  const [place, setPlace] = useState("");
  const [orgName, setOrgName] = useState("");
  const [orgNumber, setOrgNumber] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [security_code, setSecurity_code] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState("");

  const handleName = (e) => {
    if (/\d/.test(e.target.value)) {
      setError('Please enter a valid name without numbers.');
    } else {
      setError('');
      setPartyName(e.target.value)
    }
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
    if (/\d/.test(e.target.value)) {
      setError('Please enter a valid name without numbers.');
    } else {
      setError('');
      setOrgName(e.target.value)
    }
  }

  const handleOrgNumber = (e) => {
    setOrgNumber(e.target.value)
  }

  const handleCity = (e) => {
    if (/\d/.test(e.target.value)) {
      setError('Please enter a valid name without numbers.');
    } else {
      setError('');
      setCity(e.target.value)
    }
  }

  const handlePin = (e) => {
    setPin(e.target.value)
  }

  const handleSecurityCode = (e) => {
    setSecurity_code(e.target.value)
  }
  const hanldePrice = (e) => {
    setPrice(e.target.value)
  }

  const dataTwo = {

  }

  const handleClick = async () => {
    if (security_code !== "") {
      const dataRef = await addDoc(collection(db, `${security_code}-info`), data);
      // eslint-disable-next-line 
      const secondDataRef = await addDoc(collection(db, `${security_code}-user-info`), dataTwo);
      console.log("documnet added ", dataRef.id)
      setTimeout(() => {
        naviagate("/dashboard")
      }, 2000);
    } else {
      setError("Make Security Code !")
    }
    // eslint-disable-next-line 
    if (partyName, partyDate, partyTime, place === "") {
      setError("Please fill all fields")
    }
  }

  const data = {
    party_name: partyName,
    party_date: partyDate,
    party_time: partyTime,
    party_place: place,
    oragnizer_name: orgName,
    join_number: orgNumber,
    city: city,
    pin_code: pin,
    securitycode: security_code,
    ticket_price: price,
  }

  return (
    <div className='organize-form-container'>
      <Background />
      {
        showForm ?
        <Readyform setShowForm={setShowForm}/>
        :""
      }
      {
        error !== "" ?
          <FormError text={error} setError={setError} />
          : ""
      }
      <motion.div className='organize-form'
        animate={{ height: "100%" }}
        initial={{ height: "0" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <div className='form-header'>
          <motion.h2
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: .5, ease: "easeInOut", delay: 1.1 }}
          >Create</motion.h2>
        </div>
        <div className='org-input-container'>
          {
            moreInput ?
              <>
                <div className='input-container'>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 1.2 }}
                  >
                    <h4>Party Name</h4>
                    <input type='text' className='org-input' placeholder="" name="party_name" value={partyName} onChange={handleName} />
                  </motion.div>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 1.4 }}
                  >
                    <h4>Party Date</h4>
                    <input type='date' className='org-input' placeholder="" name='party_date' value={partyDate} onChange={handleDate} />
                  </motion.div>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 1.6 }}
                  >
                    <h4>Party Time</h4>
                    <input type='time' className='org-input' placeholder="" name='party_time' value={partyTime} onChange={handleTime} />
                  </motion.div>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 1.8 }}
                  >
                    <h4>Party Place</h4>
                    <input type='text' className='org-input' placeholder="" name='party_place' value={place} onChange={handlePlace} />
                  </motion.div>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 2 }}
                  >
                    <h4>Pin Code</h4>
                    <input type='number' className='org-input' placeholder="" name="pin_code" value={pin} onChange={handlePin} />
                  </motion.div>
                  <motion.div
                    animate={{ opacity: 1, x: "0px" }}
                    initial={{ opacity: 0, x: "-150px" }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 1.9 }}
                  >
                    <div onClick={()=>setShowForm(true)} >
                      <SecondButton text="Already Have Party" />
                    </div>
                  </motion.div>
                  <motion.div onClick={() => setMoreInput(false)}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: .5, ease: "easeInOut", delay: 2 }}
                  >
                    <NormalButton text="Next" arrow={true} />
                  </motion.div>
                </div>
              </>
              : <>
                <div className='input-container'>
                  <motion.div className='input-wrapper '
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 3 }}
                  >
                    <h4>Organizer Name</h4>
                    <input type='string' className='org-input' placeholder="" name="organize_name" value={orgName} onChange={handleOrgName} />
                  </motion.div>
                  <div className='input-wrapper '>
                    <h4>unique join Number</h4>
                    <input type='number' className='org-input' placeholder="" name="organizer_number" value={orgNumber} onChange={handleOrgNumber} />
                  </div>
                  <div className='input-wrapper '>
                    <h4>city</h4>
                    <input type='text' className='org-input' placeholder="" name="city" value={city} onChange={handleCity} />
                  </div>
                  <div className='input-wrapper ' >
                    <h4>Ticket Price</h4>
                    <input type='number' className='org-input' placeholder="" style={{ border: "2px solid green" }} name="price" value={price} onChange={hanldePrice} />
                  </div>
                  <div className='input-wrapper ' style={{ marginBottom: ".5rem" }}>
                    <h4 style={{ color: "#90e242" }}>Security Code - ( unique )</h4>
                    <input className='org-input' placeholder="" style={{ border: "2px solid #90e242" }} name="security_code" onChange={handleSecurityCode} />
                  </div>
                  <div className='btn-container-form'>
                    <div onClick={() => setMoreInput(true)}>
                      <SecondButton text="Back" />
                    </div>
                    <div onClick={handleClick}>
                      <NormalButton text="Create" />
                    </div>
                  </div>
                </div>
              </>
          }
        </div>
      </motion.div>
      <motion.div className='close-container'
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: .4, delay: 1 }}
      >
        <Link to="/choice" className='close-circle'><FontAwesomeIcon icon={faClose} /></Link>
      </motion.div>
    </div>
  )
}

export default OrganizeForm
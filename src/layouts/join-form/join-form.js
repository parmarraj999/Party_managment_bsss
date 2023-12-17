import React, { useState } from 'react'
import "./join-form.css"
import { NormalButton, SecondaryButton } from '../../component/button/button'
import { getDocs, doc, collection, QuerySnapshot } from 'firebase/firestore'
import { db } from '../../module/firebase';
import { useNavigate } from 'react-router-dom';

function JoinForm() {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [DOB, setDOB] = useState();
  const [address, setAddress] = useState();
  const [partyCode, setPartyCode] = useState();

  const navigate = useNavigate();

  const handleFullName = (e) => {
    setFullName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleDOB = (e) => {
    setDOB(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  const handlePartyCode = (e) => {
    setPartyCode(e.target.value);
  }

  const data = {
    name: fullName,
    email: email,
    number: number,
    DOB: DOB,
    address: address,
    partyCode: partyCode
  }


  const addUser = async() => {
    // const docSnap = await getDocs(collection(db, "123rajparmar-info"))
    // console.log(docSnap)
    await db.collection("123rajparmar-info").get().then((querySnapshot)=>{
      querySnapshot.forEach(element=>{
        var data = element.data()
        console.log(data )
      })
    })
  }

  return (
    <div className='join-form-container'>
      <div className='form-header'>
        <h2>Join Form</h2>
      </div>
      <div className='form-input-wrapper'>
        <div className='form-input-container'>
          <div className='row'>
            <div className='input-wrapper ' >
              <h4>Full Name</h4>
              <input type='text' className='org-input' placeholder="" value={fullName} onChange={handleFullName} />
            </div>
            <div className='input-wrapper ' >
              <h4>Email</h4>
              <input type='text' className='org-input' placeholder="" value={email} onChange={handleEmail} />
            </div>
            <div className='input-wrapper ' >
              <h4>Phone Number</h4>
              <input type='text' className='org-input' placeholder="" value={number} onChange={handleNumber} />
            </div>
            <div className='input-wrapper ' >
              <h4>date of birth</h4>
              <input type='date' className='org-input' placeholder="" value={DOB} onChange={handleDOB} />
            </div>
            <div className='input-wrapper ' >
              <h4>Address</h4>
              <input type='text' className='org-input' placeholder="" value={address} onChange={handleAddress} />
            </div>
            <div className='input-wrapper ' >
              <h4 style={{ color: "#d3f" }}>Party code</h4>
              <input style={{ border: "2px solid #d3f", color: "#d3f" }} type='text' className='org-input' placeholder="" value={partyCode} onChange={handlePartyCode} />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1.2rem" }}>
            <SecondaryButton text="back" link="choice" />
            <div onClick={addUser}>
              <NormalButton text="Join" arrow={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinForm
import React, { useContext, useState } from 'react'
import "./readyForm.css"
import { motion } from 'framer-motion'
import PrimaryButton, { NormalButton, SecondButton } from '../../component/button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../module/firebase';
import { doc, getDocs, collection } from 'firebase/firestore';
import { MainPartyData } from '../../context/context';

function Readyform({ setShowForm }) {

  const [present, setPresent] = useState(false);

  const [securityCode, setSecurityCode] = useState();
  const [number, setNumber] = useState();

  const mainDataValue = useContext(MainPartyData)

  const handleCode = (e) => {
    setSecurityCode(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleClose = () => {
    setShowForm(false)
  }
  const handleCheck = async () => {
    // eslint-disable-next-line 
    const docRef = doc(db, "123rajparmar-info", "ImM7Pbt9dE8RGCRUUd6t");
    const querySnapshot = await getDocs(collection(db, `${securityCode}-info`));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      const data = doc.data();
      mainDataValue.setMainData(data)
      if(data.securitycode !== securityCode && data.join_number !== number){
        console.log("not matching")
        setPresent(false)
      }
      if(data.securitycode === securityCode && data.join_number === number){
        setPresent(true)
      }
    });
  }

  return (
    <motion.div className='ready-form-container'
      animate={{ backdropFilter: "blur(50px)" }}
      initial={{ backdropFilter: "blur(0px)" }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      <motion.div className='ready-form-card'
        animate={{ height: "auto" ,opacity:1}}
        initial={{ height: "0px",opacity:0 }}
        transition={{ duration: .8,type:"spring ", delay: 1.3 }}
      >
        <div className='icon-header'>
          <motion.div className='icon' onClick={handleClose}
            animate={{ x: "0", opacity: 1 }}
            initial={{ x: "-50px", opacity: 0 }}
            transition={{ duration: .8, ease: 'easeInOut',type:"spring", delay: 1.5 }}
          >
            <FontAwesomeIcon icon={faClose} />
          </motion.div>
        </div>
        <motion.div
          animate={{ x: "0", opacity: 1 }}
          initial={{ x: "-50px", opacity: 0 }}
          transition={{ duration: .8, ease: 'easeInOut', delay: 1.7 }}
        >
          <h2>Security Code</h2>
          <input type='text' value={securityCode} onChange={handleCode} />
        </motion.div>
        <motion.div
          animate={{ x: "0", opacity: 1 }}
          initial={{ x: "-50px", opacity: 0 }}
          transition={{ duration: .8, ease: 'easeInOut', delay: 1.9 }}
        >
          <h2>organizer Number</h2>
          <input type='text' value={number} onChange={handleNumber} />
        </motion.div>
        <div onClick={handleCheck}>
          <NormalButton text="check"/>
        </div>
        <motion.div
          animate={{ x: "0", opacity: 1 }}
          initial={{ x: "-50px", opacity: 0 }}
          transition={{ duration: .8, ease: 'easeInOut', delay: 2.1 }}
        >
          {
            present ?
              <div>
                <PrimaryButton text="join" link="dashboard" arrow={true} />
                {/* <button>click</button> */}
              </div>
              :
              <SecondButton text="not Found" />
          }
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Readyform
import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './layouts/welcome/welcome'
import Option from './layouts/choice/option'
import OrganizeForm from './layouts/organize form/organize-form'
import { MainPartyData } from './context/context'
import JoinForm from './layouts/join-form/join-form'
import Payment from './layouts/paymentPage/payment'

function App() {

  const [mainData,setMainData] = useState({})
  console.log("data in app ",mainData)
 
  return (
    <MainPartyData.Provider value={{mainData,setMainData}} >
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/choice' element={<Option />} />
            <Route path='/organize-form' element={<OrganizeForm />} />
            <Route path='/join-form' element={<JoinForm/>}/>
            <Route path='/payment_page' element={<Payment/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </MainPartyData.Provider>
  )
}

export default App
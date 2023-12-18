import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './layouts/welcome/welcome'
import Option from './layouts/choice/option'
import OrganizeForm from './layouts/organize form/organize-form'
import { MainPartyData, UniqueId } from './context/context'
import JoinForm from './layouts/join-form/join-form'
import Payment from './layouts/paymentPage/payment'
import Dashboard from './layouts/dashboard/dashboard'

function App() {

  const [mainData,setMainData] = useState({})
  const [uniqueId,setUniqueId] = useState();
 
  return (
    <UniqueId.Provider value={{uniqueId,setUniqueId}} >
    <MainPartyData.Provider value={{mainData,setMainData}} >
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/choice' element={<Option />} />
            <Route path='/organize-form' element={<OrganizeForm />} />
            <Route path='/join-form' element={<JoinForm/>}/>
            <Route path='/payment_page' element={<Payment/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </MainPartyData.Provider>
    </UniqueId.Provider>
  )
}

export default App
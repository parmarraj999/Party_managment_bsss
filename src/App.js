import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './layouts/welcome/welcome'
import Option from './layouts/choice/option'
import OrganizeForm from './layouts/organize form/organize-form'
import { MainPartyData, UniqueId } from './context/context'
import JoinForm from './layouts/join-form/join-form'
<<<<<<< HEAD
import Dashboard from './layouts/dashboard/dashboard'
import Payment from './layouts/payment/payment'
import { Elements } from '@stripe/react-stripe-js'
import StripeCheckout from './server/StripeCheckout'
=======
import Payment from './layouts/paymentPage/payment'
import Dashboard from './layouts/dashboard/dashboard'
>>>>>>> 9ea5aa1cbc094e826a7b635ccf2d03a7bb7f52a5

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
<<<<<<< HEAD
            <Route path='/payment-page' element={<Payment/>}/>
            <Route path='/checkout' element={<StripeCheckout/>}/>
=======
            <Route path='/payment_page' element={<Payment/>}/>
>>>>>>> 9ea5aa1cbc094e826a7b635ccf2d03a7bb7f52a5
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </MainPartyData.Provider>
    </UniqueId.Provider>
  )
}

export default App
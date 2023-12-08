import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './layouts/welcome/welcome'
import Option from './layouts/choice/option'
import OrganizeForm from './layouts/organize form/organize-form'
import { OrganizeInfoContext } from './context/context'

function App() {

 
  return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/choice' element={<Option />} />
            <Route path='/organize-form' element={<OrganizeForm />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
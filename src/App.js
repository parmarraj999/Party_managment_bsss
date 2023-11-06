import React from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import Landing from './layouts/landingPage/landing'
import Dashboard from './layouts/admin/dashboard'
import User from './layouts/user/user'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/> 
          <Route path='/admin' element={<Dashboard/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
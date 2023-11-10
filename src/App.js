import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './layouts/premain/landingPage/landing'
import Form from './layouts/premain/join-form/form'
import Dashboard from './layouts/main/admin/dashboard'
import User from './layouts/main/user/user'
import { ThemeSetup } from './context/context'

function App() {

  const [theme,setTheme] = useState(true);

  return (
    <ThemeSetup.Provider value={{theme,setTheme}}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/admin' element={<Dashboard />} />
            <Route path='/user' element={<User />} />
            <Route path='/join' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeSetup.Provider>
  )
}

export default App
import React from 'react'
import "./App.css"
import Background from './component/background/backgound'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Welcome from './layouts/welcome/welcome'
import Home from './module/home'

function App() {

  return (
   <div className='app'> 
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Welcome/>}/>
       <Route path='/home' element={<Home/>}/>
     </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
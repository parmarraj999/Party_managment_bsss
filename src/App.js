import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'  

function App(){

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  
  const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzc3FsY2hkeG13Ym1ma3d1cWJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MjYzMDUsImV4cCI6MjAxNDEwMjMwNX0.M-R7GTYv1LCubCKU1r9JMM_adU4vRvxGMmx7fFWZQTA";
  const supabase = createClient('https://wssqlchdxmwbmfkwuqbw.supabase.co', `${projectKey}`)

const add = async()=> {
  await supabase.auth.signUp({
    email : `${email}`,
    password : `${password}`
  })
}

const handleEmail = (e) => {
  setEmail(e.target.value)
}
const handlePassword = (e) => {
  setPassword(e.target.value)
}

  return (
    <div>
      <button onClick={add}>login </button>
      <input type='text' placeholder='email' onChange={handleEmail} value={email}/>
      <input type='password' placeholder='password' onChange={handlePassword} value={password}/>
    </div>
  )
}

export default App


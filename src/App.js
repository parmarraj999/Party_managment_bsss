import React from 'react';
import { createClient } from '@supabase/supabase-js'  

function App(){

  
  const projectKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzc3FsY2hkeG13Ym1ma3d1cWJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1MjYzMDUsImV4cCI6MjAxNDEwMjMwNX0.M-R7GTYv1LCubCKU1r9JMM_adU4vRvxGMmx7fFWZQTA";
// Create a single supabase client for interacting with your database
const supabase = createClient('https://xyzcompany.supabase.co', `${projectKey}`)

const add = async()=> {
  await supabase.auth.signUp({
    email : 'developerSucks@gmail.com',
    password : "123123"
  })
}

  return (
    <div>
      <button onClick={add}>login </button>
    </div>
  )
}

export default App


import React, { useContext } from 'react'
import { UniqueId } from '../../context/context'
import "./dashboard.css"

function Dashboard() {

    const uniqueIdValue = useContext(UniqueId)
  return (
<<<<<<< HEAD
    <div className='dashboard_container'>
        <h1>dashboard</h1>
=======
    <div>
        <h1>unique id</h1>
>>>>>>> 9ea5aa1cbc094e826a7b635ccf2d03a7bb7f52a5
        {uniqueIdValue.uniqueId}
    </div>
  )
}

export default Dashboard
import React, { useContext } from 'react'
import { UniqueId } from '../../context/context'
import "./dashboard.css"

function Dashboard() {

    const uniqueIdValue = useContext(UniqueId)
  return (
    <div className='dashboard_container'>
        <h1>dashboard</h1>
        {uniqueIdValue.uniqueId}
    </div>
  )
}

export default Dashboard
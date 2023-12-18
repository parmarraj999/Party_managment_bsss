import React, { useContext } from 'react'
import { UniqueId } from '../../context/context'
import "./dashboard.css"

function Dashboard() {

    const uniqueIdValue = useContext(UniqueId)
  return (
    <div>
        <h1>unique id</h1>
        {uniqueIdValue.uniqueId}
    </div>
  )
}

export default Dashboard
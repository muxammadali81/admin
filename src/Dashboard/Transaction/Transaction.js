import React from 'react'
import "./transaction.css"
import Sidebar from "../Sidebar"
import TransTable from './TransTable'

function Transaction() {
  return (
    <div className='wrapper'>
        <Sidebar />
        <TransTable />
    </div>
  )
}

export default Transaction
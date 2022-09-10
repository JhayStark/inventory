import React from 'react'
import "./newTransfer.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const NewTransfer = () => {
  return (
    <div className="transfer">
    <Sidebar/>
    <div className="transferContainer">
    <Navbar/>
      NewTransfer page
    </div>
    </div>
  )
}

export default NewTransfer

import React from 'react'
import "./manageTransfer.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const MangeTransfer = () => {
  return (
    <div className="manage">
    <Sidebar/>
    <div className="manageContainer">
    <Navbar/>
      NewTransfer page
    </div>
    </div>
  )
}

export default MangeTransfer

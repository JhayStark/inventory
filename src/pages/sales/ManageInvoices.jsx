import React from 'react';
import "./manageinvoice.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ManageInvoices = () => {
  return (
    <div className="manage">
    <Sidebar/>
    <div className="manageContainer">
    <Navbar/>
      ManageInvoice page
    </div>
    </div>
  )
}

export default ManageInvoices

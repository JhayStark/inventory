import React from 'react';
import "./manageQuote.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ManageQuote = () => {
  return (
    <div className="manage">
    <Sidebar/>
    <div className="manageContainer">
    <Navbar/>
      ManageQuote page
    </div>
    </div>
  )
}

export default ManageQuote

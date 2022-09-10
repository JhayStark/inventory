import React from 'react';
import "./"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const MangeStockQuote = () => {
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

export default MangeStockQuote

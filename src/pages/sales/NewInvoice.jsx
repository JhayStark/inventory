    import React from 'react'
    import "./newInvoice.scss"
    import Sidebar from "../../components/sidebar/Sidebar";
    import Navbar from "../../components/navbar/Navbar";
    
    const NewInvoice = () => {
      return (
        <div className="invoice">
        <Sidebar/>
        <div className="InvoiceContainer">
        <Navbar/>
          NewInvoice page
        </div>
        </div>
      )
    }
    
    export default NewInvoice
    
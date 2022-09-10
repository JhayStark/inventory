import React from 'react';
import "./newQuote.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewStockQuote = () => {
  return (
    <div className="quote">
    <Sidebar/>
    <div className="quoteContainer">
    <Navbar/>
    NewStockQuote page
    </div>
    </div>
  )
}

export default NewStockQuote

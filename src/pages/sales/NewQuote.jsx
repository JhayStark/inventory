import React from 'react'
import "./newquote.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const NewQuote = () => {
  return (
    <div className="quote">
    <Sidebar/>
     <div className="quoteContainer">
      <Navbar/>
       New Quote Page
     </div>
    </div>
  )
}

export default NewQuote

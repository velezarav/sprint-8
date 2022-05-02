import React from "react";
import { Link } from "react-router-dom";
import "../css/Welcome.css"

export default () => {
  return (
    <div className="welcome-container">
      <div className="welcome-message"><h5>Welcome to the <span>Star Wars</span> experience</h5>
      <p>Star Wars is an epic space-opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon.</p>
      <p>In this site you can access to all the Star Wars information regarding every Starships that appears in the whole film collection.</p>
      <Link to="/home">START YOUR JOURNEY</Link></div>
      
    </div>
  )
}
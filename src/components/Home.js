import React, { useEffect, useState } from "react";
import "../css/Home.css"
import Login from "./Login";
import Signup from "./Signup";

export default () => {
  const [logged, setLogged] = useState(
    localStorage.getItem('logged') === 'true'
  )

  const [userlist, setUserList] = useState([{
    username: "seba",
    password: "1234"
  }])

  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(()=> {
    const data = localStorage.getItem('userlist');
    if (data) {
      setUserList(data)
    }
  })

  useEffect(()=>{
    localStorage.setItem('userlist', JSON.stringify(userlist))
  }, [])

  const handleShowSignUp = () =>{
    setShowSignUp(!showSignUp)
  }

  const loginMessage = <div>
    <h5>Hi! Welcome to our Star Wars database</h5>
    <p>You need to be logged in to access the content.</p>
    <Login />
    {!logged && <p>If you don't have an account, <a onClick={handleShowSignUp}>register here.</a></p>}
  </div>

const signUpMessage = <div>
<h5>Hi! Welcome to our Star Wars database</h5>
<p>Create your own profile to have access to all our Star Wars data.</p>
<Signup handleShowSignUp={handleShowSignUp} />
<p>If you already have an account, <a onClick={handleShowSignUp}>log in here.</a></p>
</div>

    return (
    <div className="home-container">
      {!logged && !showSignUp && loginMessage}
      {!logged && showSignUp && signUpMessage}
      {logged && <Login />}
    </div>
  )
}
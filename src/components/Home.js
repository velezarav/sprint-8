import React, { useEffect, useState } from "react";
import "../css/Home.css"

export default () => {
  const [logged, setLogged] = useState(
    localStorage.getItem('logged') === 'true'
  )

  const [userlist, setUserList] = useState([{
    username: "seba",
    password: "1234"
  }])

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const [newUser, setNewUser] = useState()

  const [showSignUp, setShowSignUp] = useState(false)

  const [userNotFound, setUserNotFound] = useState(false)

  useEffect(() => {
    const userlist = localStorage.getItem('userlist')
    const newUserList = [...JSON.parse(userlist)]
    newUserList.push(newUser)
    localStorage.setItem('userlist', JSON.stringify(newUserList))
  }, [newUser])

  useEffect(() => {
    const data = localStorage.getItem('userlist');
    if (data) {
      setUserList(data)
    }
  }, [newUser])

  useEffect(() => {
    localStorage.setItem('logged', logged)
  }, [logged])

  useEffect(() => {
    const data = localStorage.getItem('logged')
    if (data) {
      setLogged(JSON.parse(data === 'true'))
    }
  }, [])

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp)
  }

  const handleChangeLogin = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmitLogin = e => {
    const userlist = localStorage.getItem('userlist')
    const newUserList = [...JSON.parse(userlist)]
    const cleanList = newUserList.filter(item => item !== null)
    const getUser = cleanList.filter(searchUser => searchUser.username === user.username)
    const userFound = getUser[0]

    if (userFound === undefined) {
      setUserNotFound(true)
    } else {
      if (userFound.password == user.password) {
        setLogged(true)
        setUserNotFound(false)
      }
    }
  }

  const handleLogOut = () => {
    setLogged(!logged)
  }

  const handleSubmitSign = (e) => {
    setNewUser(user)
    setShowSignUp(!showSignUp)
  }

  const handleChangeSign = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const notFoundMessage = <p className="login-error">Username or password not found</p>

  const loggin = <div className="loggin-container">
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="username"
      value={user.username}
    />
    <label htmlFor="password">Password: </label>
    <input
      type="text"
      onChange={handleChangeLogin}
      name="password"
      value={user.password}
    />
    <button className="log-button" onClick={handleSubmitLogin}>LOG IN</button>
  </div>

  const signUp = <div className="loggin-container">
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      onChange={handleChangeSign}
      name="username"
      value={user.username}
    />
    <label htmlFor="password">Password: </label>
    <input
      type="text"
      onChange={handleChangeSign}
      name="password"
      value={user.password}
    />
    <button className="log-button" onClick={handleSubmitSign}>SIGN UP</button>
  </div>

  const logginIntegrated = <div>
    {userNotFound && notFoundMessage}
    {!logged && loggin}
    {logged && <div><p>Hi, you are already logged.</p>
      <button className="log-button" onClick={handleLogOut}>LOG OUT</button>
    </div>}
  </div>

  const loginMessage = <div>
    <h5>Hi! Welcome to our Star Wars database</h5>
    <p>You need to be logged in to access the content.</p>
    {logginIntegrated}
    {!logged && <div>If you don't have an account, <a onClick={handleShowSignUp}>register here.</a></div>}
  </div>

  const signUpMessage = <div>
    <h5>Hi! Welcome to our Star Wars database</h5>
    <p>Create your own profile to have access to all our Star Wars data.</p>
    {signUp}
    <div>If you already have an account, <a onClick={handleShowSignUp}>log in here.</a></div>
  </div>


  return (
    <div className="home-container">
      {!logged && !showSignUp && loginMessage}
      {!logged && showSignUp && signUpMessage}
      {logged && logginIntegrated}
    </div>
  )
}
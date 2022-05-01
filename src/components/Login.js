import React, { useState, useEffect } from "react";
import '../css/Home.css'

export default () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  const [logged, setLogged] = useState(
    localStorage.getItem('logged') === 'true'
  )
  const [userNotFound, setUserNotFound] = useState(false)

  useEffect(() => {
    localStorage.setItem('logged', logged)
  }, [logged])

  useEffect(() => {
    const data = localStorage.getItem('logged')
    if (data) {
      setLogged(JSON.parse(data === 'true'))
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    const userlist = localStorage.getItem('userlist')
    const newUserList = [...JSON.parse(userlist)]
    // esta linea es porque hay un bug cuando se guardan los usuarios :(
    const cleanList = newUserList.filter(item => item !== null) 
    const getUser = newUserList.filter(searchUser => searchUser.username === user.username)
    const userFound = getUser[0]
    if (userFound === undefined) {
      setUserNotFound(true)
    } else {
      if (userFound.password == user.password) {
        setLogged(true)
        setUserNotFound(false)
      }
    }
    document.location.reload(true)
  }

  const handleLogOut = () => {
    setLogged(!logged)
    document.location.reload(true)
  }

  const notFoundMessage = <p className="login-error">Username or password not found</p>

  const loggin = <div className="loggin-container">
    <label htmlFor="username">Username: </label>
    <input
      type="text"
      onChange={handleChange}
      name="username"
      value={user.username}
    />
    <label htmlFor="password">Password: </label>
    <input
      type="text"
      onChange={handleChange}
      name="password"
      value={user.password}
    />
    <button className="log-button" onClick={handleSubmit}>LOG IN</button>
  </div>

  return (
    <div>
      {userNotFound && notFoundMessage}
      {!logged && loggin}
      {logged && <div><p>Hi, you are already logged.</p>
        <button className="log-button" onClick={handleLogOut}>LOG OUT</button>
      </div>}
    </div>
  )
}
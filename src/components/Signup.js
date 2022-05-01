import React, { useEffect, useState } from "react";

export default ({handleShowSignUp}) => {
  const [user, setUser] = useState({
    userName: "",
    password: ""
  })

  const [newUser, setNewUser] = useState()

  useEffect(() => {
    const userlist = localStorage.getItem('userlist')
    const newUserList = [...JSON.parse(userlist)]
    newUserList.push(newUser)
    localStorage.setItem('userlist', JSON.stringify(newUserList))
  }, [newUser])

  const handleChange = e => {
    const {name, value} = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewUser(user)
  }

  return(
    <div className="loggin-container">
      <label htmlFor="userName">Username: </label>
      <input 
        type="text"
        onChange={handleChange}
        name="userName"
        value={user.userName}
      />
      <label htmlFor="password">Password: </label>
      <input 
        type="text"
        onChange={handleChange}
        name="password"
        value={user.password}
      />
      <button className="log-button" onClick={handleSubmit}>SIGN UP</button>
    </div>
  )
}
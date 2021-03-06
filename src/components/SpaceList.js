import React, { useEffect, useState } from "react";
import '../css/SpaceList.css'
import axios from "axios";
import { Link } from "react-router-dom";

export default function SpaceList() {
  const [ships, setShips] = useState([])

  const [loadingShips, setLoadingShips] = useState(true);

  const [logged, setLogged] = useState(
    localStorage.getItem('logged') === 'true'
  )

  let pages = 1;
  const loadPages = () => {
    axios.get(`https://swapi.dev/api/starships/?page=${pages}`)
      .then(({ data }) => {
        const newShips = [];
        data.results.map(ship => newShips.push(ship))
        data.next == null ? setLoadingShips(false) : setLoadingShips(true);
        setShips(ships => [...ships, ...newShips])
      })
    pages += 1;
  }

  const handleScroll = e => {
    if (loadingShips == true && window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      loadPages();
    }
  }

  useEffect(() => {
    loadPages()
    window.addEventListener("scroll", handleScroll)
  }, [])

  const getLength = "https://swapi.dev/api/starships/".length;

  const showShips = ships.map(ship => <div key={ship.url} className="list-item">
    <Link to={"/spaceship-file/" + parseInt(ship.url.slice(getLength, -1))} >
      <p>{ship.name.toUpperCase()}</p>
      <p>{ship.model}</p>
    </Link>
  </div>)

  const notLogged = <div>
    <p>You need to be logged to see the Starships.</p>
    <Link to="/home"><span className="login-redirect">Go to login area</span></Link>
  </div>

  return (
    <div className="space-list">
      {logged && showShips}
      {logged && loadingShips && <div className={'loading-ships'}>Loading spaceships...</div>}
      {!logged && notLogged}
    </div>
  )
}
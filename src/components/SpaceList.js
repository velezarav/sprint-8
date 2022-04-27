import React, { useEffect, useState } from "react";
import '../css/SpaceList.css'
import axios from "axios";
import { Link } from "react-router-dom";

export default function SpaceList(){
    const [ships, setShips] = useState([])

    const [loadingShips, setLoadingShips] = useState(true);

    // const [hasMore, setHasMore] = useState(true)

    let pages = 1;
    const loadPages = () => {
        axios.get(`https://swapi.dev/api/starships/?page=${pages}`)
        .then(({data}) => {
            const newShips = [];
            console.log(data)
            data.results.map(ship => newShips.push(ship))
            data.next == null ? setLoadingShips(false) : setLoadingShips(true);
            setShips( ships => [...ships, ...newShips])
        })
        pages += 1;
    }

    const handleScroll = e => {
        if(loadingShips == true && window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
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

    return(
        <div className="space-list">
            {showShips}
            {loadingShips && <div className={'loading-ships'}>Loading spaceships...</div>}
        </div>
    )
}
import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/SpaceFiles.css'

export default function Films({films}) {

    const [selectedFilms, setSelectedFilms] = useState([])

    const getLength = "https://swapi.dev/api/films/".length;

    useEffect(() => {
        let newArray = []
        films.map(film => {
            axios.get(film)
            .then(({data}) => {
                const imgNum = parseInt(data.url.slice(getLength, -1))
                const img = `http://starwars-visualguide.com/assets/img/films/${imgNum}.jpg`
                const newData = {...data, img: img}
                newArray.push(newData)
            })
        })
        setSelectedFilms(newArray)
    }, [])

    const singleFilm = selectedFilms.map(film => <div key={film.url} className="pilots-films">
                        <img src={film.img}/>
                        <p>{film.title.toUpperCase()}</p>
                        <p>Episode number: {film.episode_id}</p>
                        <p>Release date: {film.release_date}</p>
                    </div>)

    return(
        <div className="films-container">
            <h5>STARS IN FILMS:</h5>
            {singleFilm}
        </div>
    )
}
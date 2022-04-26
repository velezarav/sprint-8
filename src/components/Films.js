import axios from "axios";
import React, { useEffect, useState } from "react";
import '../css/SpaceFiles.css'

export default function Films({films}) {

    const [selectedFilms, setSelectedFilms] = useState([])

    useEffect(() => {
        films.map(film => {
            axios.get(film)
            .then(({data}) => {
                setSelectedFilms(prevFilms => [...prevFilms, data])
            })
        })
    }, [])

    const singleFilm = selectedFilms.map(film => <div key={film.url} className="pilots-films">
                        <p>{film.title.toUpperCase()}</p>
                        <p>Episode number: {film.episode_id}</p>
                        <p>Release date: {film.release_date}</p>
                    </div>)

    return(
        <div className="films-container">
            <h5>FILMS WHERE APPEARS</h5>
            {singleFilm}
        </div>
    )
}
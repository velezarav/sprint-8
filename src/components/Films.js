import "../css/SpaceFiles.css";

export default function Films({ films }) {
  
    const singleFilm = films.map((film) => (
        <div key={film.url} className="pilots-films">
            <img src={film.img} />
            <p>{film.title.toUpperCase()}</p>
            <p>Episode  number: {film.episode_id}</p>
            <p>Release date: {film.release_date}</p>
        </div>
    ));
        console.log(films)
    return (
        <div className="films-container">
            <h5>STARS IN FILMS:</h5>
            {singleFilm}
        </div>
    );
}

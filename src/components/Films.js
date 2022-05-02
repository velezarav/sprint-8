import "../css/SpaceFiles.css";

export default function Films({ films }) {
  console.log(films)
  const newFilms = [...films]
  const singleFilm = newFilms.map(currentFilm => (
    <div key={currentFilm.url} className="pilots-films">
      <img src={currentFilm.img} />
      <p>{currentFilm.title}</p>
      <p>Episode  number: {currentFilm.episode_id}</p>
      <p>Release date: {currentFilm.release_date}</p>
    </div>
  ));
  console.log(newFilms)
  return (
    <div className="films-container">
      {films.length > 0 && <h5>APPEARS IN:</h5>}
      {singleFilm}
    </div>
  );
}

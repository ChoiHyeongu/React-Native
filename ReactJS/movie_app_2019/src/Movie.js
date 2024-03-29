import React from "react";
import PropTyeps from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movies__movie">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">
                    {genre}
                    </li>
                ))}</ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    )
}

Movie.prototype = {
    id: PropTyeps.number.isRequired,
    year: PropTyeps.number.isRequired,
    title: PropTyeps.string.isRequired,
    summary: PropTyeps.string.isRequired,
    poster: PropTyeps.string.isRequired,
    genres: PropTyeps.arrayOf(PropTyeps.string.isRequired)
}

export default Movie;
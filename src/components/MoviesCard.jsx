import { useState } from "react";

function MovieCard({ movie }) {
    const [liked, setLiked] = useState(false);

    function onLike() {
        setLiked(!liked);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onLike}>
                        {liked ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title || "Unknown Title"}</h3>
                <p>{movie.release_date || "Release Date Not Available"}</p>
            </div>
        </div>
    );
}

export default MovieCard;

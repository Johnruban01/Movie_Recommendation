import MovieCard from "../components/MoviesCard.jsx";
import React, { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api.js";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(null);
            } catch (error) {
                console.error(error);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevents form submission refresh
        if (!searchQuery.trim() || loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.error(error);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for movies"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.length > 0 ? (
                        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Home;

import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=987bb2e2';

function App() {
  // api key: 987bb2e2

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  // in starting website will load movies according to this useEffect
  useEffect(() => {
    searchMovies('harry potter');
  }, []);

  return (
    <div className='App'>
      <h1>MovieOne</h1>

      <div className="search ">
        <input type="text" placeholder='search for movies' value={searchTerm}
          onChange={(event) => { setSearchTerm(event.target.value) }}
        />
        <img src={searchIcon} alt="search" onClick={() => { searchMovies(searchTerm) }}
        />
      </div>

      {
        movies?.length > 0
          ? (<div className="container">
            {movies.map((movie) => (
              <MovieCard movie1={movie} />
            ))}
          </div>
          ) : (
            <div className='empty'>
              <h2>no movies found</h2>
            </div>
          )
      }
    </div>
  );
};

export default App;

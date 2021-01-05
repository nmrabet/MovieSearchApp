import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Movies, ListMovies } from "../types/index";

export default function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<ListMovies[]>([]);

  const searchMovies = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submitted!");
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=78a45bdd567d01f68ab740cc013ce05a&language=en-US&query=${query}&page=1&include_adult=false`;

    fetch(url)
      .then((res) => res.json())
      .then((data: Movies) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  return (
    <>
      <form className='form' onSubmit={searchMovies}>
        <label className='label' htmlFor='query'>
          Movie Name
        </label>
        <input
          className='input'
          type='text'
          name='query'
          placeholder='i.e. Jurassic Park'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='button' type='submit'>
          Search
        </button>
      </form>
      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

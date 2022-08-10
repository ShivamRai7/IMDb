import React, { useEffect, useState } from 'react';
import './MovieList.css';
import Card from '../components/Card.js';
import { useParams } from 'react-router-dom';

export default function MovieList() {

  const [moviesList, setMoviesList] = useState([])
  const { type } = useParams()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=aae6b0115bb5cd3686da88970b8752d7&language=en-US&page=1`)
      .then(res => res.json())
      .then(data => setMoviesList(data.results))
  }


  return (
    <>
      <div className="movieLists">
        <h2 className="listTitle">{(type ? type : "popular").toUpperCase()}</h2>
        <div className="listCards">
          {
            moviesList.map(movieCard => (
              <Card key={movieCard.id} movie={movieCard} />
            ))
          }
        </div>
      </div>
    </>
  )
}

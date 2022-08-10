import React, { useEffect, useState } from 'react';
import './Card.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


export default function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1300)
  }, [])

  return (
    <>
    {
      isLoading
      ?
      <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#FFFFFF">
          <Skeleton height={300} duration={2} />
        </SkeletonTheme>
      </div> 
      :
      <Link to={`/movie/${movie.id}`}>
        <div className="cards">
          <img className="cardImg" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
          <div className="cardOverlay">
            <div className="cardTitle">{movie ? movie.original_title : ""}</div>
            <div className="cardRuntime">
              {movie ? movie.release_date : ""}
              <span className="cardRating">
                {movie ? movie.vote_average : ""}
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="cardDescription">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
          </div>
        </div>
      </Link>
    }
    </>
  )
}

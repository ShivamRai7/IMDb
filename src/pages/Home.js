import React, { useEffect, useState } from 'react';
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./MovieList";

export default function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=aae6b0115bb5cd3686da88970b8752d7&language=en-US&page=1")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            {popularMovies.length > 0 &&
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} transitionTime={2} stopOnHover={false}>
                    {
                        popularMovies.map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <div className="carouselImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                                </div>
                                <div className="carouselOverlay">
                                    <div className="carouselTitle">{movie ? movie.original_title : ""}</div>
                                    <div className="carouselReleaseDate">
                                        {movie ? movie.release_date : ""}
                                        <span className="carouselRating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <div className="carouselDescription">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            }
            <MovieList />
        </>
    )
}

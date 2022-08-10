import React, { useEffect, useState } from 'react';
import './MovieDetail.css';
import { useParams } from 'react-router-dom';

export default function MovieDetail() {
    const [currMovie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aae6b0115bb5cd3686da88970b8752d7&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }
    return (
        <>
            <div className="movie">
                <div className="movieBackground">
                    <img className="backdropImg" src={`https://image.tmdb.org/t/p/original${currMovie ? currMovie.backdrop_path : ""}`} />
                </div>
                <div className="movieDetail">
                    <div className="moviePosterBox">
                        <img className="moviePoster" src={`https://image.tmdb.org/t/p/original${currMovie ? currMovie.poster_path : ""}`} />
                    </div>
                    <div className="movieInfo">
                        <div className="movieImpInfo">
                            <div className="movieName">{currMovie ? currMovie.original_title : ""}</div>
                            <div className="movieTagline">{currMovie ? currMovie.tagline : ""}</div>
                            <div className="movieRating">
                                {currMovie ? currMovie.vote_average : ""} <i className="fa-solid fa-star"></i>
                                <span className="movieVoteCount">{currMovie ? "(" + currMovie.vote_count + ") votes" : ""}</span>
                            </div>
                            <div className="movieRuntime">{currMovie ? currMovie.runtime + " mins" : ""}</div>
                            <div className="movieReleaseDate">{currMovie ? "Release date: " + currMovie.release_date : ""}</div>
                            <div className="movieGenres">
                                {
                                    currMovie && currMovie.genres
                                        ?
                                        currMovie.genres.map(genre => (
                                            <div className="movieGenre">{genre.name}</div>
                                        ))
                                        :
                                        ""
                                }
                            </div>
                        </div>

                        <div className="movieSynopsis">
                            <h3 className="synopsisHeading">Synopsis</h3>
                            <div className="synopsis">
                                {currMovie ? currMovie.overview : ""}
                            </div>
                            <div className="movieLinks">
                            {
                                currMovie && currMovie.homepage && <a href={currMovie.homepage} target="_blank">Homepage</a>
                            }
                            {
                                currMovie && currMovie.imdb_id && <a href={"https://www.imdb.com/title/" + currMovie.imdb_id} target="_blank">IMDb</a>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

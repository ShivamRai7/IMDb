import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const [result, setResult] = useState([])

    const onChange = (e)=>{
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=aae6b0115bb5cd3686da88970b8752d7&language=en-US&page=1&query=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors)
                console.log(data.results);
            
            else
                setResult([]);
        });   
    };

    return (
        <>
            <div className="header">
                <div className="headerLeft">
                    <Link to="/"><img className="imdbIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                    <input 
                    className="searchBar" 
                    type="text" 
                    placeholder="Search you movie here" 
                    onChange = {onChange}
                    />
                    
                    
                    <i className="fa-solid fa-magnifying-glass" onClick={onChange}></i>
                    {/* <input type="checkbox" id="click"/> */}
                    <label htmlFor="click"><i className="fa-solid fa-bars"></i></label>
                </div>
                <div className="headerRight"> 
                    <Link to="/movies/now_playing"> <div className="headerButtons">Now Playing</div></Link>
                    <Link to="/movies/upcoming"> <div className="headerButtons">Upcoming</div></Link>
                    <Link to="/movies/top_rated"> <div className="headerButtons">Top Rated</div></Link>
                </div>
            </div>
        </>
    )
}

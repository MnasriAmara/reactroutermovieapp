
import React from 'react'
import {useParams} from 'react-router-dom'
 
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom'
import './Details.css'


function MovDetails ({props}){
//    const {idmov}=useParams()
//    const movie = props.find((el) =>  el.id === Number(idmov))
    return (
        <div className="descPage" >
            {/* <Link to="/" >
                <form>
                    <button >Home</button>
                </form>
            </Link> */}
            <div className="FilmDesc">
            <div className="DescContent" >
                <img className="FilmDescImg" src="{movie.poster}" alt="movie poster " />
                <div  className="InformationsColumn">
                    <h1>title</h1>
                    <div className="rate-Type">
                        <ReactStars count={5} value="{movie.rate}" edit={false} size={40} isHalf={true} activeColor="#ffd700" />
                        {/* <h5>{movie.filmType}</h5> */}
                    </div>
                    {/* <div className="Overview-Div">
                        <h3>Overview</h3>
                        <p>{movie.filmoverview}</p>
                    </div>
                    <div className="Director-Writer"style={{display:"flex"}}>
                        <h3>Director:</h3>
                        <h3>Writer:</h3>
                    </div>
                    <div  className="Director-Writer-Names">
                        <h4>{movie.filmWriter}</h4>
                        <h4>{movie.filmDirector}</h4>
                    </div> */}
                </div>
            </div>
            <div className="trailer-Div">
                <h3 >Trailer</h3>
                <iframe src="{movie.trailer}" title='video'/>
            </div>
        </div>
        </div>
        )}

export default MovDetails
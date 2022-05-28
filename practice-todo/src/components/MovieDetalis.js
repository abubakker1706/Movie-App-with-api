import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom"

import './MovieDetails.css'
import {useHistory} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
const MovieDetalis=()=>{
const history=useHistory()
const {MovieId} =useParams()


const [movieDetail,setMovieDetail]=useState({})
const getMovieDetail=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies/'+ MovieId
                         )
                         .then(data=>data.json())
                         .then((mv)=>setMovieDetail(mv))        
}


useEffect(getMovieDetail,[])

return (
                        
<div>


                         <div>
                        
                         <div className="movie-frame">
                        
                         <iframe width="1350vh" height="600vh" src={movieDetail.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                         <div className="movie-details">
                         <h1>{movieDetail.name}</h1>
                         <h2>⭐{movieDetail.rating}</h2>
                         </div>
                        
                         <p>{movieDetail.summary}</p>
                        
                        </div>
                        <IconButton onClick={()=>history.goBack()} color="error"><ArrowBackIcon/>Back</IconButton>



</div>   
)
}
export default MovieDetalis
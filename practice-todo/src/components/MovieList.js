import React,{useState,useEffect} from 'react'
import MovieItem from "./MovieItem"
import './movieList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import {useHistory} from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
// import { useEffect} from "react";


const MovieList=()=>{
const [movie,setMovie]=useState([])
const history = useHistory()
const getMovie=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies',
                         {method:"GET"})
                         .then(data=>data.json())
                         .then((mv)=>setMovie(mv))        
}


useEffect(getMovie,[])
const deleteMovie=(id) =>{
          fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies/'+id ,{
                                   method:"DELETE"
          }).then(data=>data.json()).then(()=>getMovie())
}
return <div>
<section className="movie-list">

{movie.map((movie,index)=>(
<MovieItem
id={movie.id}
name={movie.name}
summary={movie.summary}
poster={movie.poster}
rating={movie.rating}


deleteButton={
                         
                         
                         
                         <IconButton onClick={()=>deleteMovie(movie.id)}
                        



color="error"

><DeleteIcon/></IconButton>}

EditButton={
                         
                         
                         
                         <IconButton onClick={()=>
                         { history.push('/movies/edit/'+ movie.id)

}}


color="success"

><EditIcon/></IconButton>}

/>
))}





</section>
</div>
}
export default MovieList
import './InputForm.css'
import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {useHistory,useParams} from "react-router-dom";






const EditForm=()=>{
 const {id} = useParams()



const [movieUpdate,setMovieUpdate]=useState(null)
const getMovieUpdate=()=>{
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies/'+ id)
                         .then(data=>data.json())
                         .then((mv)=>setMovieUpdate(mv))        
}


useEffect(getMovieUpdate,[])





return movieUpdate?<UpdateForm movieUpdate={movieUpdate} />:"";





}

const UpdateForm=({movieUpdate})=>{


const history = useHistory()
const [name,setName]=useState(movieUpdate.name)
const [rating ,setRating]= useState(movieUpdate.rating)
const [poster,setPoster]= useState(movieUpdate.poster)
const [summary,setSummary]= useState(movieUpdate.summary)
const [trailer,setTrailer]= useState(movieUpdate.trailer)
const formHandler=(event)=>{
                         event.preventDefault();
                         const onUpdateMovie={
                                                  name:name,
                                                  rating:rating,
                                                  poster:poster,
                                                  summary:summary,
                                                  trailer:trailer
                         }
                         fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies/' + movieUpdate.id,{
                                                  method: 'PUT',
                                                  body:JSON.stringify(onUpdateMovie),
                                                  headers: {'Content-Type': 'application/json'}
                         }).then(()=>  history.goBack())
                         
                       
                         }
return (
<div>

<form onSubmit={formHandler} className="form-control">


<TextField type ="text"
 id="outlined-basic" 
 label="Title" 
 variant="outlined" 
 onChange={(event)=>setName(event.target.value)} 
 value={name}
 />

<TextField type="number" 
 id="outlined-basic" 
 label="Rating" 
 variant="outlined" 
 onChange={(event)=>setRating(event.target.value)} 
 value={rating}/>

<TextField  
type="url"
 id="outlined-basic"
label="Image-url" 
variant="outlined" 
onChange={(event)=>setPoster(event.target.value)} 
value={poster}/>

<TextField 
type="text" 
id="outlined-basic"
label="Summary" 
variant="outlined" 
onChange={(event)=>setSummary(event.target.value)}
value={summary}
/>
<TextField 
type="url" 
id="outlined-basic"
label="Trailer" 
variant="outlined" 
onChange={(event)=>setTrailer(event.target.value)}
value={trailer}
/>
<Button type="submit" variant="outlined">Save Movie</Button>

</form>


</div>
)
}
export default EditForm ;

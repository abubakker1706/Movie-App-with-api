
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './InputForm.css'
import {useHistory} from "react-router-dom";





const InputForm=()=>{
const history = useHistory()
const [name,setName]=useState('')
const [rating ,setRating]= useState('')
const [poster,setPoster]= useState('')
const [summary,setSummary]= useState('')
const [trailer,setTrailer]= useState('')

const formHandler=(event)=>{
event.preventDefault();
const onAddMovie ={
                         name:name,
                         rating:rating,
                         poster:poster,
                         summary:summary,
                         trailer:trailer

}
fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies',{
                         method: 'POST',
                         body:JSON.stringify(onAddMovie),
                         headers: {'Content-Type': 'application/json'}
}).then(()=>history.push('/movies')
)
}
return (
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
<Button type="submit" variant="outlined">Add Movie</Button>

</form>)

}
export default InputForm;

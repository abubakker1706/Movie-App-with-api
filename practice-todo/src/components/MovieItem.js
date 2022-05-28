
import "./MovieItem.css"
import { useState} from "react";
import Counter from './Counter';

import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory } from 'react-router-dom'


const MovieItem=(props)=>{
const [show,setShow]= useState(true)
                         const toggleHandler=()=>{
                            setShow(!show)
                           
                         }
const history =useHistory();
const styles={color: props.rating>=8.5?"green":"red"}
const summaryStyle ={display: show ?"block":'none'}

return (
<Card className="movie-container">
<CardContent>

<ul>

<li>
<div>
<img src ={props.poster} alt={props.title} className="movie-poster"/>
</div>
<div className="movie-specs">
<h3 className='movie-name'>{props.name} </h3>
<IconButton  onClick={toggleHandler} aria-label="delete">
 {show? <ExpandLessIcon/>: <ExpandMoreIcon/>}
</IconButton>
<IconButton  onClick={()=>history.push('/movies/' +props.id)} aria-label="delete" color='primary'>

<InfoIcon/>
</IconButton>




<p className='movie-rating' style={styles}>⭐ {props.rating}</p>


</div>
<div>



<p className='movie-description' style={summaryStyle}>{props.summary}</p>
</div>

<div className='movie-button'>


<Counter/> {props.deleteButton} {props.EditButton}
</div>




</li>

</ul>
</CardContent>
</Card>


)
}
export default MovieItem
import React,{useState} from 'react'

import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

const Counter=()=>{
const[like,setLike]= useState(0)
const[dislike,setDisLike]= useState(0)

const LikeHanler=()=>setLike(like+1);
const disLikehanlder=()=>setDisLike(dislike+1);


return (
<div>

<IconButton onClick={LikeHanler} color="primary" aria-label="add to shopping cart">
<Badge badgeContent={like} color="primary">
👍
</Badge>
</IconButton>
<IconButton onClick={disLikehanlder} color="error" aria-label="add to shopping cart">
<Badge badgeContent={dislike} color="error">
👎
</Badge>
</IconButton>







</div>

)}
export default Counter
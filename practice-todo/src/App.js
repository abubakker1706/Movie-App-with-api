import React,{useState} from 'react'
import './App.css';
import InputForm from './components/InputForm';
import MovieList from './components/MovieList';
import{Switch,Route} from 'react-router-dom'
import Home from './Router/home'
import PageNotFound from './components/PageNotFound';
import MovieDetalis from './components/MovieDetalis';
import EditForm from './components/EditForm';
import AppBar from '@mui/material/AppBar';
import {useHistory} from "react-router-dom"
import Paper from '@mui/material/Paper';

import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Button from '@mui/material/Button';

  ;
function App() {
  const [mode,setMode]=useState("dark")
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  
const history=useHistory();

  const [movie,setMovie]=useState([])
  // useEffect(()=>{
  //   fetch('https://6291ca0c9d159855f0802547.mockapi.io/movies')
  //   .then(data=>data.json())
  //   .then((mv)=>setMovie(mv))
  // },[])

  const movieHandler=(currentMovie)=>{
    setMovie((preMovie)=>{
      return [currentMovie,...preMovie];
    })
  }

  return (
    <ThemeProvider theme={themeCtx}>
    <Paper sx={{minHeight:"100vh"}} elevation={5}>
   
    
  <div>
  
  <AppBar position="static" color ="error">
        <Toolbar>
        <Button onClick={()=>history.push('/')} color="inherit">Home</Button>
        <Button onClick={()=>history.push('/movies')} color="inherit">Movie</Button>
        <Button onClick={()=>history.push('/movies/addmovies')} color="inherit">Add Movie</Button>
        <Button  
        style={{marginLeft:"auto"}}
        onClick={()=>setMode(mode=== "light"? "dark":"light")} 
        color="inherit"
        startIcon={mode==='dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
        {mode==="light"?"dark":"light"} mode
        
        </Button>
        </Toolbar>
      </AppBar>
  
 
  <Switch>
  <Route exact path='/movies/addmovies'>
  <InputForm />
  </Route>
  <Route exact path='/movies'>
 
  <MovieList  />
 </Route>
 <Route exact path='/'>
  <Home/>
  
 </Route>
  <Route exact path='/movies/edit/:id'>

 Edit movie
  <EditForm onUpdateMovie={movieHandler} editDetails={movie} updatedMovie={setMovie}/>
  
  </Route>
  

  <Route exact path='/movies/:MovieId'>
  
  <MovieDetalis/>
  
  </Route>
  <Route exact path='**'>
 <PageNotFound/>
  </Route>

 </Switch>
 
 
  </div>
  </Paper>
  </ThemeProvider>
  
 
  
  )
}
export default App;

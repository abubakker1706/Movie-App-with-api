import{Link} from "router-react-dom"
import Home from "../Router/home"
import MovieList from '../components/MovieList'
import InputForm from "../components/InputForm"


const Router = ()=>{
                         return
                          <div>
                         <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/movies">Add Movie</Link>
          </li>
         
        </ul>
      </nav>
      <Outlet />

                         </div>
}
export default Router
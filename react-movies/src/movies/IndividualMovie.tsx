import { movieDTO } from "./movies.model"
import css from './IndividualMovie.module.css'
import { Link } from "react-router-dom"
import { urlMovies } from "../endpoints"
import axios from "axios"
import AlertContext from "../utils/AlertContext"
import { useContext } from "react"
import customConfirm from "../utils/customConfirm"

export default function IndividualMovie(props: movieDTO){
    const buildLink = () => `/movie/${props.id}`
    const customAlert = useContext(AlertContext);


    function deleteMovie(){
        axios.delete(`${urlMovies}/${props.id}`)
        .then(() =>{
            customAlert();
        });
        
    }

    
    return(
        <div className={css.div}>
            <Link to={buildLink()}>
                <img src={props.poster} alt="Poster" />
            </Link>
            <p>
                <Link to={buildLink()}>{props.title}</Link>
            </p>
        </div>
    )
}
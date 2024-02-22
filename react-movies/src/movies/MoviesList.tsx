import { movieDTO } from "./movies.model";
import IndividualMovie from "./IndividualMovie";
import css from './MoviesList.module.css';

export default function MoviesList(props:moviesListProps){
    return (
        <div className={css.div}>
            {
                props.movies.map(movie => 
                    <IndividualMovie{...movie}/>)
            }
        </div>
    )
}

interface moviesListProps{
    movies:movieDTO[];
}
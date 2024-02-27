import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieFrom from "./MovieForm";

export default function EditMovie(){

    const nonSelectedGenres:genreDTO[]=[{id:2,name:'Drama'}]
    const selectedGenres:genreDTO[]=[{id:1,name:"Comedy"}]
    const nonSelectedMovieTheaters:movieTheaterDTO[]=[{id:1,name:"Sambil"}]
    const selectedMovieTheaters:movieTheaterDTO[]=[{id:2,name:'Agora'}]


    return  (
        <>
            <h3>Edit Movie</h3>
            <MovieFrom model={{title:'Toy Story',inTheaters:true,trailer:'url',releaseDate:new Date('2019-01-01T00:00:00')}}
                onSubmit={values=>console.log(values)}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}

                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}


                />
        </>
    )
}
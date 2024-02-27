import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheaters(){
    return  (
        <>
            <h3>Edit Theaters</h3>
            <MovieTheaterForm 
                model={{name:'PVR CINEMAS'}}
                onSubmit={values=>console.log(values)}
            />
        </>
    )
}
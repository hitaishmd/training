import { Link } from "react-router-dom";

export default function IndexMovieTheaters(){
    return (
        <>
            <h3>Movie Theaters</h3>
            <Link className="btn btn-primary" to="/movietheaters/create">Create Movie theaters</Link>
            <Link className="btn btn-primary" to="/movietheaters/edit">Edit Movie theaters</Link>
        </>
    )
}
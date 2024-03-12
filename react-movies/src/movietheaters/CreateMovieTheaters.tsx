import axios from "axios";
import { urlMovieTheaters } from "../endpoints";
import MovieTheaterForm from "./MovieTheaterForm";
import { movieTheaterCreationDTO } from "./MovieTheater.model";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateMovieTheaters(){
    
    const history=useHistory();
    const [errors,setErrors]=useState<string[]>([]);
    

    async function create(movieTheater:movieTheaterCreationDTO){
        try{
            await axios.post(urlMovieTheaters,movieTheater)
            history.push("/movietheaters");
        }
        catch(error:any){
            if(error && error.response){
                setErrors(error.response.data);
            }
        }
    }
    return  (
        <>
            <h3>Create Movie Theaters</h3>
            <DisplayErrors errors={errors}/>
            <MovieTheaterForm 
                model={{name:''}}
                onSubmit={async values=>await create(values)}
            />
                
            
        </>
    )
}
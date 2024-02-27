import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO, movieDTO } from "./movies.model";
import * as Yup from'yup';
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";

export default function MovieFrom(props:movieFormProps){

    const[selectedGenres,setSelectedGenres]=useState(mapToModel(props.selectedGenres));
    const[nonSelectedGenres,setnonSelectedGenres]=useState(mapToModel(props.nonSelectedGenres));

    const[selectedMovieTheaters,setSelectedMovieTheaters]=useState(mapToModel(props.selectedMovieTheaters));
    const[nonSelectedMovieTheaters,setnonSelectedMovieTheaters]=useState(mapToModel(props.nonSelectedMovieTheaters));

    function mapToModel(items:{id:number,name:string}[]):multipleSelectorModel[]{
        return items.map(item=>{
            return {key:item.id,value:item.name}
        })
    }
    return(
        <Formik
            initialValues={props.model}
            onSubmit={(values,actions)=>{
                values.genresIds=selectedGenres.map(item=>item.key);
                values.movieTheaterIds=selectedMovieTheaters.map(item=>item.key);
                props.onSubmit(values,actions)}}
            validationSchema={Yup.object({
                title:Yup.string().required('This field is mandatory').firstLetterUppercase()
            })}>
            {(formikProps)=>(
                <Form placeholder={undefined}>

                    <TextField displayName="Title" field="title"/>
                    <CheckboxField displayName="In Theaters" field="inTheaters"></CheckboxField>
                    <TextField displayName="Trailer" field='trailer'/>
                    <DateField displayName="Release Date" field="releaseDate"/>
                    <ImageField displayName="Poster" field="poster"
                        imageURL={props.model.posterURL}/>

                    <MultipleSelector displayName="Genres"
                        nonSelected={nonSelectedGenres}
                        selected={selectedGenres}
                        onChange={(selected,nonSelected)=>{
                            setSelectedGenres(selected);
                            setnonSelectedGenres(nonSelected);
                    }}/>

                        <MultipleSelector displayName="Movie Theaters"
                        nonSelected={nonSelectedMovieTheaters}
                        selected={selectedMovieTheaters}
                        onChange={(selected,nonSelected)=>{
                            setSelectedMovieTheaters(selected);
                            setnonSelectedMovieTheaters(nonSelected);
                    }}/>

                    <TypeAheadActors displayName="Actors"actors={[]}  />

                    
                    <Button disabled ={formikProps.isSubmitting}type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps{
    model:movieCreationDTO;
    onSubmit(values:movieCreationDTO,actions:FormikHelpers<movieCreationDTO>):void;
    selectedGenres:genreDTO[];
    nonSelectedGenres:genreDTO[];
    selectedMovieTheaters:movieTheaterDTO[];
    nonSelectedMovieTheaters:movieTheaterDTO[];
}
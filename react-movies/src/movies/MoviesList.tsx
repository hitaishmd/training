import React from 'react';
 // Assuming GenericList is imported from the correct location
import IndividualMovie from './IndividualMovie'; // Assuming IndividualMovie is imported from the correct location
import css from './MoviesList.module.css'; // Assuming you're using CSS modules for styling
import GenericList from '../utils/GenericList';
import { movieDTO } from './movies.model';

export default function MoviesList(props: moviesListProps) {
    return (
        <GenericList list={props.movies}>
            <div className={css.movieWrapper}>
                {props.movies?.map(movie =>
                    <div className={css.movieItem} key={movie.id}>
                        <IndividualMovie {...movie} />
                    </div>
                )}
            </div>
        </GenericList>
    );
}

interface moviesListProps {
    movies?: movieDTO[];
}

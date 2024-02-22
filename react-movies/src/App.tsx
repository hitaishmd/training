
import { useEffect, useState } from 'react';
import './App.css';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {

    const[movies,setMovies]=useState<landingPageDTO>({});

    useEffect(()=>{
        const timerId=setTimeout(()=>{
            setMovies({
                inTheaters: [ 
                    {
                    id:1,
                    title:'SPIDERMAN : FAR FROM HOME',
                    poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14569140_v_h10_ap.jpg'
                    }
                    ,
                    {
                    id:2,
                    title:'INTERSTELLAR',
                    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX'
                    }
                    ,
                    {
                    id:3,
                    title:'INCEPTION',
                    poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw'
                    }
                ],

                upcomingReleases:[
                    {
                        id:4,
                        title : 'LUCA',
                        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhQZlzN2TDvMHk-ByF881UtRBHwP_yHZa5mamNFjscuc-GTpfYxUEoqIZMho6JPwlO-Wx2xg'
                    }
                    ,
                    {
                        id:5,
                        title : 'TENET',
                        poster:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTYoAGfY4ffCXIoBdPYfxypbrvpGxQ5FA6w0r3ihzqzMZ5kxMaPXWGE50muitVS2CULBCdGvg'
                    }
                ]
            })
        },1000);
        return ()=>clearTimeout(timerId);
    });

    
    return (
        <>
          <h3>In Theaters</h3>
          <MoviesList movies={movies.inTheaters}/>
          <h3>Upcoming Releases</h3>
          <MoviesList movies={movies.upcomingReleases}/>
        </>
    )
  
}

export default App;

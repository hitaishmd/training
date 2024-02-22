
import './App.css';
import { movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {

    const  inTheaters:movieDTO[] =[ {
        id:1,
        title:'Spiderman : Far from home',
        poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14569140_v_h10_ap.jpg'
    }
    ,
    {
        id:2,
        title:'InterStellar',
        poster: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p14569140_v_h10_ap.jpg'
    }
];
    return (
        <>
          <h3>In Theaters</h3>
          <MoviesList movies={inTheaters}/>
          <h3>Upcoming Releases</h3>
        </>
    )
  
}

export default App;

import { useState, useEffect } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
<div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
  <div className="movie-section" style={{ marginBottom: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', padding: '20px', width: '100%' }}>
    <h3 className="section-title" style={{ border: '2px solid #333', textAlign: 'center', padding: '10px', backgroundColor: '#333', color: '#fff', borderRadius: '5px' }}>In Theaters</h3>
    <div className="movie-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
      <MoviesList movies={movies.inTheaters} />
    </div>
  </div>

  <div className="movie-section" style={{ marginBottom: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', padding: '20px', width: '100%' }}>
    <h3 className="section-title" style={{ border: '2px solid #333', textAlign: 'center', padding: '10px', backgroundColor: '#333', color: '#fff', borderRadius: '5px' }}>Upcoming Releases</h3>
    <div className="movie-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyContent: 'center' }}>
      <MoviesList movies={movies.upcomingReleases} />
    </div>
  </div>
</div>






    </AlertContext.Provider>
  );
}
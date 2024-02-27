export interface movieDTO{
    id:number;
    title:string;
    poster:string;
}

export interface landingPageDTO{
    inTheaters? : movieDTO[];
    upcomingReleases? : movieDTO[];
}

export interface movieCreationDTO{
    title:string;
    inTheaters:boolean;
    trailer:string;
    releaseDate?:Date;
    poster?:File;
    posterURL?:string;
    genresIds?:number[];
    movieTheaterIds?:number[];

}
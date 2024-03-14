# 		Movies Manager 
####	The Movies Manager project is a web application designed to manage a collection of movies. It provides functionalities to view, add, edit, and delete movies, actors, movie theaters and genres from a database. This documentation aims to provide guidance on setting up the application and understanding its structure and functionality.
##   System Architecture

#### The application follows a client-server architecture where the frontend is built with React and TypeScript, and the backend is developed using .NET. The frontend communicates with the backend via RESTful APIs to fetch and update movie information.

##   Technology stack used
	-React.js
	-Node.js
	-CSS
	-Dot Net ASP.Core
	-MSSQL Local Database

##   Folder Structure (Front-End)

![image](https://github.com/hitaishmd/training/assets/160744753/ce19a1f7-06b0-453e-ae21-7834a548268a)


##  Folder Structure (Back-End)
 ![folderstructure](https://github.com/hitaishmd/training/assets/160744753/0aac0011-8a26-4165-a738-5e10d37a420e)


##  Usage
###    Once the application is running, users can perform the following actions:
	-View a list of movies.
	-Add a new movie.
	-Edit an existing movie.
	-Delete a movie.
	-View a list of genres.
	-Add a new genre.
	-Edit an existing genre.
	-Delete a genre.
	-View a list of actor.
	-Add a new actor.
	-Edit an existing actor.
	-Delete a actor.
	-View a list of movie theaters.
	-Add a new movie theater.
	-Edit an existing movie theater.
	-Delete a movie theater.
	-Filter through different movie theaters

##  Links
	-Landing Page - http://localhost:3000/
	-Genres Page - http://localhost:3000/genres
	-Actors Page - http://localhost:3000/actors
	-Movies Page - http://localhost:3000/movies
	-Movie Theaters Page - http://localhost:3000/movietheaters
	-Filter Movies Page - http://localhost:3000/movies/filter?page=1
 ## API Documentation
![api](https://github.com/hitaishmd/training/assets/160744753/e4340578-c9ba-46a9-8493-e1504ba4209d)
### ACTORS API

1) GET  (/api/actors)      
	-Passing Parameters : null    
	-Returns : List of Actors

3) GET  (/api/actors/{id})    
	-Passing Parameters : int (id of the actor to get)    
	-Returns : ActorDTO     

4) GET  (/api/actors/searchByName/{query})    
	-Passing Parameters : String (Name of the actor we are looking for)    
	-Returns : List of actors matching thesaearch query.    

5) POST (/api/actors/)    
	-Passing Parameters : String(Name),Picture(File Upload),String(Biography),Date(DOB)  
	-Returns : null  

6) PUT  (api/actors/{id})    
	-Passing Parameters : int(id to edit),String(name),Picture(File),String(Biography),Date(DOB)  

7) DELETE (/api/actors/{id})    
	-Passing Parameters : int (id of actor to delete)    

 ### GENRES API

1) GET  (/api/genres)  
   --Passing Parameters : null  
	-Returns : List of All Genres  

3) GET  (/api/genres/{id})  
	-Passing Parameters : int (id of the genre to get)  
	-Returns : GenreDTO   

4) POST (/api/genres/)  
	-Passing Parameters : String(Name)  
	-Returns : null  

5) PUT  (/api/genres/{id})  
	-Passing Parameters : int(id of genre to edit),String(name to replace)  
	-Returns : null  

6) DELETE (/api/actors/{id})  
	-Passing Parameters : int (id of genre to delete)  
	-Returns : null  

 ### MOVIES API

1) GET  (/api/movies)  
	-Passing Parameters : null  
	-Returns : List of All movies  

2) GET  (/api/movies/{id})  
	-Passing Parameters : int (id of the movie to get)  
	-Returns : MovieDTO   

3) GET  (/api/movies/filter)  
	-Passing Parameters : String (name of the movie to filter)  
	-Returns : List of movies the match the search query   

4) POSTGET  (/api/movies/PostGet)
	-Passing Parameters : String(Name),String(Summary),String(TrailerURL),File(Image for poster)  
	-Returns : List of All movies  

5) PUTGET  (/api/movies/PostGet)  
	-Passing Parameters : String(Name),String(Summary),String(TrailerURL),File(Image for poster)  
	-Returns : List of All movies  

6) POST (/api/movies/)
	-Passing Parameters : String(Name),String(Summary),String(TrailerURL),File(Image for poster)  
	-Returns : null  

7) PUT  (/api/movies/{id})
	-Passing Parameters : int(id of movie to edit),String(name to replace name),String(To edit TrailerURL),File(To replace Image for poster)  
	-Returns : null  

8) DELETE (/api/movies/{id})  
	-Passing Parameters : int (id of movie to delete)  
	-Returns : null  

##  Learnings
	- How to use CORS to communicate between the  Front-End and Back-End.  
	- How to set up a Web API
	- How to make Https requests
	- How to handle exceptions
	- Learnt how to do input validation
	- Learnt how to set up the routes and defire urls
	- Learnt how to set up a database and to CRUD operations
	- Used CSS for styling and UI elements
	- Learnt about how JSX Element must be used
	- Learnt how to display errors and troubleshoot the bugs
 
 ##   Challenges
 	- Installing the necessary dependencies
  	- Downloading the right versions of plugins
   	- Creating and using the local Database
	- Fixing version clashes
     

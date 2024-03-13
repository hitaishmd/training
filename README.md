		#Movies Manager Documentation
Introduction
	The Movies Manager project is a web application designed to manage a collection of movies. It provides functionalities to view, add, edit, and delete movies, actors, movie theaters and genres from a database. This documentation aims to provide guidance on setting up the application and understanding its structure and functionality.
.
#Table of contents
1.	Technology stack used
2.	Folder Structure (Front-End )
3.	Folder Structure (Back-End )
4.	Usage.
5.	Links

#1)  Technology stack used
⦁	React.js
⦁	Node.js
⦁	CSS
⦁	Dot Net ASP.Core
⦁	MSSQL Local Database

#2)  Folder Structure (Front-End)
React-movies/
│
├── src/                 # Source files
│   ├── actors/      	# Actor components
│   ├── forms/          	 # Forms for individual components
│   ├── genres/         	 # Genre components
│   ├── movie theaters/        # Movies Theaters component
│   └── movies			# Movies component
│   └── utils             		# Utilities component
│   └── App.tsx                      # Main application component
│   └── App.css                      # Main styling component
│   └── endpoints                      # Endpoints to components
│   └── route-config		# Routes component
│   └── validations                      # Input validation component

│
├── public/              # Public files
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

#3)  Folder Structure (Back-End)
 ![folderstructure](https://github.com/hitaishmd/training/assets/160744753/3eaf3e6f-5f27-46eb-bdda-f554cd55d8d7)


#4) Usage
     Once the application is running, users can perform the following actions:
⦁	View a list of movies.
⦁	Add a new movie.
⦁	Edit an existing movie.
⦁	Delete a movie.
⦁	View a list of genres.
⦁	Add a new genre.
⦁	Edit an existing genre.
⦁	Delete a genre.
⦁	View a list of actor.
⦁	Add a new actor.
⦁	Edit an existing actor.
⦁	Delete a actor.
⦁	View a list of movie theaters.
⦁	Add a new movie theater.
⦁	Edit an existing movie theater.
⦁	Delete a movie theater.
⦁	Filter through different movie theaters

#4)  Links
⦁	Landing Page - http://localhost:3000/
⦁	Genres Page - http://localhost:3000/genres
⦁	Actors Page - http://localhost:3000/actors
⦁	Movies Page - http://localhost:3000/movies
⦁	Movie Theaters Page - http://localhost:3000/movietheaters
⦁	Filter Movies Page - http://localhost:3000/movies/filter?page=1

#5)  Learnings
⦁	How to use CORS to communicate between the  Front-End and Back-End.
⦁	How to set up a Web API
⦁	How to make Https requests
⦁	How to handle exceptions
⦁	Learnt how to do input validation
⦁	Learnt how to set up the routes and defire urls
⦁	Learnt how to set up a database and to CRUD operations
⦁	Used CSS for styling and UI elements
⦁	Learnt about how JSX Element must be used
⦁	Learnt how to display errors and troubleshoot the bugs




 
 

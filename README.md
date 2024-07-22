# Movie Rating Application (Backend)
- Create a RESTful API for a movie rating application where users can browse movies, rate them, and write reviews.

 

## Tech Stack
- Backend Framework: Node.js with Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens) for user authentication

 

## Features and Endpoints
### User Authentication

- Register: POST /api/users/register - Registers a new user with username, email, and password.

- Login: POST /api/users/login - Authenticates a user and returns a JWT token.

### Movies

- Add Movie: POST /api/movies - Allows users to add a new movie. Requires details such as title, director, genre, releaseYear, and description.

- Update Movie: PUT /api/movies/:id - Enables users to update an existing movie's details by its ID.

- Delete Movie: DELETE /api/movies/:id - Permits users to delete a movie by its ID.

- Get Movie Details: GET /api/movies/:id - Retrieves details of a specific movie.

- List Movies: GET /api/movies - Lists all movies. Supports filtering by genre, releaseYear, or director through query parameters.

### Ratings and Reviews

- Rate and Review Movie: POST /api/movies/:id/reviews - Allows authenticated users to post a rating and review for a movie, including rating and text.

- Update Review: PUT /api/movies/:movieId/reviews/:reviewId - Enables users to update their review and rating for a specific movie.

- Delete Review: DELETE /api/movies/:movieId/reviews/:reviewId - Allows users to delete their own review.

- List Reviews: GET /api/movies/:id/reviews - Retrieves all reviews for a particular movie.

- Movie Average Rating: GET /api/movies/:id/averageRating - Calculates and returns the average rating for a movie.


## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   - git clone https://github.com/GowthamAkula89/movie-rating.git
2. Navigate to the project directory:
    - cd movie-rating
3. Install dependencies:
    - npm install
### Running the Application
- Start the development server:
    - npm start
    - Open http://localhost:3000 in your web browser to view the application.


### Live web URL
- Backend: https://movie-rating-ag.onrender.com/
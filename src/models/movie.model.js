const { timeStamp } = require('console');
const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    releaseYear: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
    },
    {
        timeStamp: true
    }
);

movieSchema.statics.isMovieNameTaken = async function (movieTitle){
    const movie = await this.findOne({title: movieTitle})
    return !!movie;
}
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie
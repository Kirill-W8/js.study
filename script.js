"use strict";

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', ''),
      personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false

    };

 const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
       rateFilm = prompt('На сколько оцените этот фильм?');

 personalMovieDB.movies[lastFilm] = rateFilm;

 const lastFilm2 = prompt('Один из последних просмотренных фильмов', ''),
       rateFilm2 = prompt('На сколько оцените этот фильм?');

 personalMovieDB.movies[lastFilm2] = rateFilm2;
 
 console.log(personalMovieDB.movies);
 console.log(personalMovieDB.count);

 
    

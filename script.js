"use strict";

let numberOfFilms;


 
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: ["fdfdf", "fdfdfd"],
        privat: false

    };



    

    
    personalMovieDB.toggleVisibleMyDB = function(){
        if(personalMovieDB.privat){
         personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    };

    personalMovieDB.start = function(){
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
        }
    };


    personalMovieDB.showMyDB = function(){
        if(!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    };


    personalMovieDB.writeYourGeneres = function(){
        for(let i = 1; i < 4; i++){

            let c = prompt(`Ваш любимый жанр под номером ${i}`,'');
            while(c == '' || c == null ){
                c = prompt(`Ваш любимый жанр под номером ${i}`,'');
            }
            personalMovieDB.genres[i - 1] = c;
            

        }
    };


    personalMovieDB.rememberMyFilms = function(){
        let c,
            a;
     for(let i = 0;i < 2; i++){
           c = prompt('какой это фильм?','');
           a = prompt('какую оценку Вы ему дадите?','');
           if(c == '' || c == null || c.length >= 50 ){
    
               i--;
           }
           else if(a == '' || a == null || c.length >= 50 ){
               i--;
           }
           else{
            personalMovieDB.movies[c] = a;
           }
    }        
    };


    personalMovieDB.detectPersonalLvl = function(){
        if(numberOfFilms < 10){
            alert('MALO');
          }else if(numberOfFilms >= 10 && numberOfFilms < 30){
           alert('NORM');
          }else if(numberOfFilms >= 30){
           alert('KRASAWCHIK');
          }else{
           alert('(');
          }
    };



    // personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.writeYourGeneres();
    personalMovieDB.start();
    personalMovieDB.rememberMyFilms();
    personalMovieDB.detectPersonalLvl();
    personalMovieDB.showMyDB();







    
    
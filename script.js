"use strict";

let numberOfFilms;


 
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false

    };

    writeYourGeneres();
    start();
    rememberMyFilms();
    detectPersonalLvl();
    showMyDB();

    function start(){
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
        }
    }

    function showMyDB(){
        if(personalMovieDB.privat){
            console.log(personalMovieDB);
        }else{
            console.log(personalMovieDB);
        }
    }

    function writeYourGeneres(){
        for(let i = 1; i < 4; i++){

            let c = prompt(`Ваш любимый жанр под номером ${i}`,'');
            
            personalMovieDB.genres[i - 1] = c;
            

        }
    }

    function rememberMyFilms(){
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
    }

    function detectPersonalLvl(){
        if(numberOfFilms < 10){
            alert('MALO');
          }else if(numberOfFilms >= 10 && numberOfFilms < 30){
           alert('NORM');
          }else if(numberOfFilms >= 30){
           alert('KRASAWCHIK');
          }else{
           alert('(');
          }
    }

   

 
     
 
 
  
 
    

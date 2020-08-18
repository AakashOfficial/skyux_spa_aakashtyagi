import { Injectable } from '@angular/core';

import { Movie } from '../model/movie';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    public addMovie(movie: Movie){
        if ( movie.movieName !== '' && movie.movieDirector !== '' && movie.movieActor !== '' &&
            movie.movieType !== '' && movie.movieReleased !== '' && movie.movieRating > 0 ) {
                if(this.getValidMovie(movie.movieName)){
                    let objMovieData = [] ;
                    let dataLength = 0 ;

                    let data = localStorage.getItem('movieData') ;

                    // alert(data);
                    if ( data !== undefined && data != null) {
                        objMovieData = JSON.parse(data);
                        dataLength = objMovieData.length ;
                    }
                    movie.movieId = dataLength + 1;
                    objMovieData[dataLength] = movie ;

                     // alert(JSON.stringify(objData));
                
                    let stringData = JSON.stringify(objMovieData) ;
                    localStorage.setItem('movieData', stringData);
                    return true;
                }else{
                    alert('Duplicate Movie Name');
                    return false;
                }
        } else {
            return false;
        }
    }

    public getMovies(){
        let data = localStorage.getItem('movieData') ;
        if(data !== undefined && data != null){
            let objData = JSON.parse(data);
            return objData;
        }
        return null;        
    }

    public getTopTenMovie(){
        let data = localStorage.getItem('movieData') ;
        if(data !== undefined && data != null){
            let objData = JSON.parse(data);

            objData.sort((x: Movie,y: Movie) => {return y.movieRating - x.movieRating;});
            // objData.sort(function(obj1: Movie, obj2: Movie) {
            //     return obj2.movieRating - obj1.movieRating;
            // });

            return objData.slice(0, 10);
        }else{
            return null;
        }
        
    }

    public getValidMovie(movieName: String){
        let data = localStorage.getItem('movieData') ;
        if ( data !== undefined && data != null ) {
            let objData = JSON.parse(data);

            for(var i = 0; i < objData.length; i++) {
                if(objData[i].movieName == movieName) {
                    return false;
                }
            }  
        }
        return true;
    }

    public removeData(movieName: String){
        let data = localStorage.getItem('movieData') ;
        let index = -1 ;
        if ( data !== undefined && data != null ) {
            let objData = JSON.parse(data);
            for(var i = 0; i < objData.length; i++) {
                if(objData[i].movieName == movieName) {
                    index = i;
                }
            }  
        }
        
        if(index >= 0){
            data = localStorage.getItem('movieData') ;
            let objData = JSON.parse(data);
            objData.splice(index,1);
            let stringData = JSON.stringify(objData) ;
            localStorage.setItem('movieData', stringData);
            return true;
        }
        return false;
    }

    public removeAllData(){
        localStorage.removeItem('movieData');
    }

    public editData(movieData: Movie[]){
        let stringData = JSON.stringify(movieData) ;
        localStorage.setItem('movieData', stringData);
        return true;
    }

    public saveDemoData(){
        let movie = new Movie();
        // movie 1 Data
        movie.movieName = 'Kesari';
        movie.movieDirector = 'Anurag Singh';
        movie.movieActor = 'Akshay Kumar'
        movie.movieType = 'Action';       
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 1 Data
        this.addMovie(movie);

        // movie 2 Data
        movie.movieName = 'Padman';
        movie.movieDirector = 'R. Balki';
        movie.movieActor = 'Akshay Kumar'
        movie.movieType = 'Comedy Drama';       
        movie.movieReleased = '2018';
        movie.movieRating = 9;

        // Save movie 2 Data
        this.addMovie(movie);

        // movie 3 Data
        movie.movieName = 'Gabbar is Back';
        movie.movieDirector = 'Krish';
        movie.movieActor = 'Akshay Kumar'
        movie.movieType = 'Action';       
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 3 Data
        this.addMovie(movie);

        // movie 4 Data
        movie.movieName = 'Bajrangi Bhaijaan';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Salman Khan'
        movie.movieType = 'Action Adventure';       
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 4 Data
        this.addMovie(movie);

        // movie 5 Data
        movie.movieName = 'Sultan';
        movie.movieDirector = 'Ali Abbas Zafar';
        movie.movieActor = 'Salman Khan'
        movie.movieType = 'Sport Drama';       
        movie.movieReleased = '2016';
        movie.movieRating = 9;

        // Save movie 5 Data
        this.addMovie(movie);

        // movie 6 Data
        movie.movieName = 'Gangs Of Wasseypur';
        movie.movieDirector = 'Anurag Kashyap';
        movie.movieActor = 'Manoj Bajpayee, Nawazuddin Siddiqui'
        movie.movieType = 'Crime Drama';       
        movie.movieReleased = '2012';
        movie.movieRating = 9;

        // Save movie 6 Data
        this.addMovie(movie);

        // movie 7 Data
        movie.movieName = 'Uri: The Surgical Strike';
        movie.movieDirector = 'Aditya Dhar';
        movie.movieActor = 'Vicky Kaushal'
        movie.movieType = 'Action War';       
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 7 Data
        this.addMovie(movie);

        // movie 8 Data
        movie.movieName = 'Force';
        movie.movieDirector = 'Nishikant Kamat';
        movie.movieActor = 'John Abraham'
        movie.movieType = 'Action Thriller';       
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 8 Data
        this.addMovie(movie);

        // movie 9 Data
        movie.movieName = 'Kuch Kuch Hota Hai';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Shahrukh Khan'
        movie.movieType = 'Romance Musical';       
        movie.movieReleased = '1998';
        movie.movieRating = 9;

        // Save movie 9 Data
        this.addMovie(movie);

        // movie 10 Data
        movie.movieName = 'Chennai Express';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Shahrukh Khan'
        movie.movieType = 'Action Comedy';       
        movie.movieReleased = '2013';
        movie.movieRating = 9;

        // Save movie 10 Data
        this.addMovie(movie);

        // movie 11 Data
        movie.movieName = 'Singham';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Ajay Devgn'
        movie.movieType = 'Action Drama';       
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 11 Data
        this.addMovie(movie);

        // movie 12 Data
        movie.movieName = 'Sooryavanshi';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar, Ajay Devgn, Ranveer Singh'
        movie.movieType = 'Action Thriller';       
        movie.movieReleased = '2020';
        movie.movieRating = 9;

        // Save movie 12 Data
        this.addMovie(movie);
    }
}

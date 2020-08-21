import { Injectable } from '@angular/core';

import { Movie } from '../model/movie';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    public addMovie (movie: Movie) {
        if ( movie.movieName !== '' && movie.movieDirector !== '' && movie.movieActor !== '' &&
            movie.movieType !== '' && movie.movieReleased !== '' && movie.movieRating > 0 ) {
                if ( this.getValidMovie(movie.movieName) ) {
                    let objMovieData = [] ;
                    let dataLength = 0 ;
                    let movieID = 1 ;

                    let data = localStorage.getItem('movieData') ;

                    // alert(data);
                    if ( data !== undefined && data !== null) {
                        objMovieData = JSON.parse(data);
                        dataLength = objMovieData.length;
                        movieID = objMovieData[dataLength - 1].movieId + 1;
                    }
                    movie.movieId = movieID;
                    objMovieData[dataLength] = movie ;

                     // alert(JSON.stringify(objData));

                    let stringData = JSON.stringify(objMovieData) ;
                    localStorage.setItem('movieData', stringData);
                    return true;
                } else {
                    alert('Duplicate Movie Name');
                    return false;
                }
        } else {
            alert('Fill the Required Fields');
            return false;
        }
    }

    public getMovies () {
        let data = localStorage.getItem('movieData');
        if ( data !== undefined && data !== null ) {
            let objData = JSON.parse(data);
            return objData;
        }
        // return null;
    }

    public getTopTenMovie () {
        let data = localStorage.getItem('movieData') ;
        if ( data !== undefined && data !== null ) {
            let objData = JSON.parse(data);

            objData.sort((x: Movie, y: Movie) => { return y.movieRating - x.movieRating; } );
            // objData.sort(function(obj1: Movie, obj2: Movie) {
            //     return obj2.movieRating - obj1.movieRating;
            // });

            return objData.slice(0, 10);
        }
        //  else {
        //     return null;
        // }
    }

    public getValidMovie ( movieName: String ) {
        let data = localStorage.getItem('movieData') ;
        if ( data !== undefined && data !== null) {
            let objData = JSON.parse(data);

            for (let i = 0; i < objData.length; i++) {
                if (objData[i].movieName === movieName) {
                    return false;
                }
            }
        }
        return true;
    }

    public removeData ( movieName: String ) {
        let data = localStorage.getItem('movieData') ;
        let index = -1 ;
        if ( data !== undefined && data !== null ) {
            let objData = JSON.parse(data);
            for (let i = 0; i < objData.length; i++) {
                if ( objData[i].movieName === movieName ) {
                    index = i;
                }
            }
        }

        if ( index >= 0 ) {
            data = localStorage.getItem('movieData') ;
            let objData = JSON.parse(data);
            objData.splice(index, 1 );
            let stringData = JSON.stringify(objData) ;
            localStorage.setItem('movieData', stringData);
            return true;
        }
        return false;
    }

    public removeAllData () {
        localStorage.removeItem('movieData');
    }

    public editData ( movieData: Movie[] ) {
        let stringData = JSON.stringify(movieData) ;
        localStorage.setItem('movieData', stringData);
        return true;
    }

    public getMoviebyname(movieName: String){
        let data = localStorage.getItem('movieData') ;
        let objData = JSON.parse(data);

        let movieData = new Movie();
        for (let i = 0; i < objData.length; i++) {
            if (objData[i].movieName === movieName) {
                movieData.movieActor = objData[i].movieActor;
                movieData.movieDirector = objData[i].movieDirector;
                movieData.movieId = objData[i].movieId;
                movieData.movieName = objData[i].movieName;
                movieData.movieRating = objData[i].movieRating;
                movieData.movieReleased = objData[i].movieReleased;
                movieData.movieType = objData[i].movieType;
                return [movieData];
            }
        }
    }

    public editSingleMovie(movieData: Movie){
        let savedMovieData = localStorage.getItem('movieData');
        let savedMovieObject = JSON.parse(savedMovieData);
        
        for (let i = 0; i < savedMovieObject.length; i++) {
            if (savedMovieObject[i].movieName === movieData.movieName) {
                savedMovieObject[i].movieActor = movieData.movieActor;
                savedMovieObject[i].movieDirector = movieData.movieDirector;
                savedMovieObject[i].movieId = savedMovieObject[i].movieId;
                savedMovieObject[i].movieName = movieData.movieName;
                savedMovieObject[i].movieRating = movieData.movieRating;
                savedMovieObject[i].movieReleased = movieData.movieReleased;
                savedMovieObject[i].movieType = movieData.movieType;
            }
        }

        let stringData = JSON.stringify(savedMovieObject) ;
        localStorage.setItem('movieData', stringData);
        return true;
    }

    public saveDemoData () {
        let movie = new Movie();

        // movie 1 Data
        movie.movieName = 'Kesari';
        movie.movieDirector = 'Anurag Singh';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 1 Data
        this.addMovie(movie);

        // movie 2 Data
        movie.movieName = 'Padman';
        movie.movieDirector = 'R. Balki';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Comedy Drama';
        movie.movieReleased = '2018';
        movie.movieRating = 9;

        // Save movie 2 Data
        this.addMovie(movie);

        // movie 3 Data
        movie.movieName = 'Gabbar is Back';
        movie.movieDirector = 'Krish';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 3 Data
        this.addMovie(movie);

        // movie 4 Data
        movie.movieName = 'Bajrangi Bhaijaan';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Action Adventure';
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 4 Data
        this.addMovie(movie);

        // movie 5 Data
        movie.movieName = 'Sultan';
        movie.movieDirector = 'Ali Abbas Zafar';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Sport Drama';
        movie.movieReleased = '2016';
        movie.movieRating = 9;

        // Save movie 5 Data
        this.addMovie(movie);

        // movie 6 Data
        movie.movieName = 'Gangs Of Wasseypur';
        movie.movieDirector = 'Anurag Kashyap';
        movie.movieActor = 'Manoj Bajpayee, Nawazuddin Siddiqui';
        movie.movieType = 'Crime Drama';
        movie.movieReleased = '2012';
        movie.movieRating = 9;

        // Save movie 6 Data
        this.addMovie(movie);

        // movie 7 Data
        movie.movieName = 'Uri: The Surgical Strike';
        movie.movieDirector = 'Aditya Dhar';
        movie.movieActor = 'Vicky Kaushal';
        movie.movieType = 'Action War';
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 7 Data
        this.addMovie(movie);

        // movie 8 Data
        movie.movieName = 'Force';
        movie.movieDirector = 'Nishikant Kamat';
        movie.movieActor = 'John Abraham';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 8 Data
        this.addMovie(movie);

        // movie 9 Data
        movie.movieName = 'Kuch Kuch Hota Hai';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Romance Musical';
        movie.movieReleased = '1998';
        movie.movieRating = 9;

        // Save movie 9 Data
        this.addMovie(movie);

        // movie 10 Data
        movie.movieName = 'Chennai Express';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Action Comedy';
        movie.movieReleased = '2013';
        movie.movieRating = 9;

        // Save movie 10 Data
        this.addMovie(movie);

        // movie 11 Data
        movie.movieName = 'Singham';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action Drama';
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 11 Data
        this.addMovie(movie);

        // movie 12 Data
        movie.movieName = 'Sooryavanshi';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar, Ajay Devgn, Ranveer Singh';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2020';
        movie.movieRating = 9;

        // Save movie 12 Data
        this.addMovie(movie);

        // movie 13 Data
        movie.movieName = 'Movie 13';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar, Ajay Devgn, Ranveer Singh';
        movie.movieType = 'Action';
        movie.movieReleased = '2020';
        movie.movieRating = 6;

        // Save movie 13 Data
        this.addMovie(movie);

        // movie 14 Data
        movie.movieName = 'Movie 14';
        movie.movieDirector = 'Aakash Tyagi';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2020';
        movie.movieRating = 10;

        // Save movie 14 Data
        this.addMovie(movie);

        // movie 15 Data
        movie.movieName = 'Movie 15';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action';
        movie.movieReleased = '2010';
        movie.movieRating = 10;

        // Save movie 15 Data
        this.addMovie(movie);

        // movie 16 Data
        movie.movieName = 'Movie 16';
        movie.movieDirector = 'Rajkumar Hirani';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action Drama';
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 16 Data
        this.addMovie(movie);

        // movie 17 Data
        movie.movieName = 'Movie 17';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2020';
        movie.movieRating = 7;

        // Save movie 17 Data
        this.addMovie(movie);

        // movie 18 Data
        movie.movieName = 'Movie 18';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Ranveer Singh';
        movie.movieType = 'Action';
        movie.movieReleased = '2018';
        movie.movieRating = 6;

        // Save movie 18 Data
        this.addMovie(movie);

        // movie 19 Data
        movie.movieName = 'Movie 19';
        movie.movieDirector = 'Aakash Tyagi';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2019';
        movie.movieRating = 8;

        // Save movie 19 Data
        this.addMovie(movie);

        // movie 20 Data
        movie.movieName = 'Movie 20';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action';
        movie.movieReleased = '2011';
        movie.movieRating = 10;

        // Save movie 20 Data
        this.addMovie(movie);

            // movie 21 Data
        movie.movieName = 'Movie 21';
        movie.movieDirector = 'Anurag Singh';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2019';
        movie.movieRating = 8;

        // Save movie 21 Data
        this.addMovie(movie);

        // movie 22 Data
        movie.movieName = 'Movie 22';
        movie.movieDirector = 'R. Balki';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Comedy Drama';
        movie.movieReleased = '2018';
        movie.movieRating = 6;

        // Save movie 22 Data
        this.addMovie(movie);

        // movie 23 Data
        movie.movieName = 'Movie 23';
        movie.movieDirector = 'Krish';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 23 Data
        this.addMovie(movie);

        // movie 24 Data
        movie.movieName = 'Movie 24';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Action Adventure';
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 24 Data
        this.addMovie(movie);

        // movie 25 Data
        movie.movieName = 'Movie 25';
        movie.movieDirector = 'Ali Abbas Zafar';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Sport Drama';
        movie.movieReleased = '2016';
        movie.movieRating = 6;

        // Save movie 25 Data
        this.addMovie(movie);

        // movie 26 Data
        movie.movieName = 'Movie 26';
        movie.movieDirector = 'Anurag Kashyap';
        movie.movieActor = 'Manoj Bajpayee, Nawazuddin Siddiqui';
        movie.movieType = 'Crime Drama';
        movie.movieReleased = '2012';
        movie.movieRating = 8;

        // Save movie 26 Data
        this.addMovie(movie);

        // movie 27 Data
        movie.movieName = 'Movie 27';
        movie.movieDirector = 'Aditya Dhar';
        movie.movieActor = 'Vicky Kaushal';
        movie.movieType = 'Action War';
        movie.movieReleased = '2019';
        movie.movieRating = 8;

        // Save movie 27 Data
        this.addMovie(movie);

        // movie 8 Data
        movie.movieName = 'Movie 28';
        movie.movieDirector = 'Nishikant Kamat';
        movie.movieActor = 'John Abraham';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2011';
        movie.movieRating = 6;

        // Save movie 28 Data
        this.addMovie(movie);

        // movie 29 Data
        movie.movieName = 'Movie 29';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Romance Musical';
        movie.movieReleased = '1998';
        movie.movieRating = 8;

        // Save movie 29 Data
        this.addMovie(movie);

        // movie 30 Data
        movie.movieName = 'Movie 30';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Action Comedy';
        movie.movieReleased = '2013';
        movie.movieRating = 7;

        // Save movie 30 Data
        this.addMovie(movie);

        // movie 31 Data
        movie.movieName = 'Movie 31';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action Drama';
        movie.movieReleased = '2011';
        movie.movieRating = 8;

        // Save movie 31 Data
        this.addMovie(movie);

        // movie 32 Data
        movie.movieName = 'Movie 32';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar, Ajay Devgn, Ranveer Singh';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2020';
        movie.movieRating = 7;

        // Save movie 32 Data
        this.addMovie(movie);

        // movie 33 Data
        movie.movieName = 'Movie 33';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar, Ajay Devgn, Ranveer Singh';
        movie.movieType = 'Action';
        movie.movieReleased = '2020';
        movie.movieRating = 6;

        // Save movie 33 Data
        this.addMovie(movie);

        // movie 34 Data
        movie.movieName = 'Movie 34';
        movie.movieDirector = 'Aakash Tyagi';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2020';
        movie.movieRating = 4;

        // Save movie 34 Data
        this.addMovie(movie);

        // movie 35 Data
        movie.movieName = 'Movie 35';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action';
        movie.movieReleased = '2010';
        movie.movieRating = 5;

        // Save movie 35 Data
        this.addMovie(movie);

        // movie 36 Data
        movie.movieName = 'Movie 36';
        movie.movieDirector = 'Rajkumar Hirani';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action Drama';
        movie.movieReleased = '2011';
        movie.movieRating = 9;

        // Save movie 36 Data
        this.addMovie(movie);

        // movie 37 Data
        movie.movieName = 'Movie 37';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2020';
        movie.movieRating = 7;

        // Save movie 37 Data
        this.addMovie(movie);

        // movie 38 Data
        movie.movieName = 'Movie 38';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Ranveer Singh';
        movie.movieType = 'Action';
        movie.movieReleased = '2018';
        movie.movieRating = 6;

        // Save movie 38 Data
        this.addMovie(movie);

        // movie 39 Data
        movie.movieName = 'Movie 39';
        movie.movieDirector = 'Aakash Tyagi';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2019';
        movie.movieRating = 8;

        // Save movie 39 Data
        this.addMovie(movie);

        // movie 40 Data
        movie.movieName = 'Movie 40';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Ajay Devgn';
        movie.movieType = 'Action';
        movie.movieReleased = '2011';
        movie.movieRating = 8;

        // Save movie 40 Data
        this.addMovie(movie);

        // movie 41 Data
        movie.movieName = 'Movie 41';
        movie.movieDirector = 'Anurag Singh';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 41 Data
        this.addMovie(movie);

        // movie 2 Data
        movie.movieName = 'Movie 42';
        movie.movieDirector = 'R. Balki';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Comedy Drama';
        movie.movieReleased = '2018';
        movie.movieRating = 8;

        // Save movie 42 Data
        this.addMovie(movie);

        // movie 43 Data
        movie.movieName = 'Movie 43';
        movie.movieDirector = 'Krish';
        movie.movieActor = 'Akshay Kumar';
        movie.movieType = 'Action';
        movie.movieReleased = '2015';
        movie.movieRating = 8;

        // Save movie 43 Data
        this.addMovie(movie);

        // movie 44 Data
        movie.movieName = 'Movie 44';
        movie.movieDirector = 'Kabir Khan';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Action Adventure';
        movie.movieReleased = '2015';
        movie.movieRating = 9;

        // Save movie 44 Data
        this.addMovie(movie);

        // movie 45 Data
        movie.movieName = 'Movie 45';
        movie.movieDirector = 'Ali Abbas Zafar';
        movie.movieActor = 'Salman Khan';
        movie.movieType = 'Sport Drama';
        movie.movieReleased = '2016';
        movie.movieRating = 7;

        // Save movie 45 Data
        this.addMovie(movie);

        // movie 46 Data
        movie.movieName = 'Movie 46';
        movie.movieDirector = 'Anurag Kashyap';
        movie.movieActor = 'Manoj Bajpayee, Nawazuddin Siddiqui';
        movie.movieType = 'Crime Drama';
        movie.movieReleased = '2012';
        movie.movieRating = 9;

        // Save movie 46 Data
        this.addMovie(movie);

        // movie 47 Data
        movie.movieName = 'Movie 47';
        movie.movieDirector = 'Aditya Dhar';
        movie.movieActor = 'Vicky Kaushal';
        movie.movieType = 'Action War';
        movie.movieReleased = '2019';
        movie.movieRating = 9;

        // Save movie 47 Data
        this.addMovie(movie);

        // movie 48 Data
        movie.movieName = 'Movie 48';
        movie.movieDirector = 'Nishikant Kamat';
        movie.movieActor = 'John Abraham';
        movie.movieType = 'Action Thriller';
        movie.movieReleased = '2011';
        movie.movieRating = 6;

        // Save movie 48 Data
        this.addMovie(movie);

        // movie 49 Data
        movie.movieName = 'Movie 49';
        movie.movieDirector = 'Karan Johar';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Romance Musical';
        movie.movieReleased = '1998';
        movie.movieRating = 7;

        // Save movie 49 Data
        this.addMovie(movie);

        // movie 50 Data
        movie.movieName = 'Movie 50';
        movie.movieDirector = 'Rohit Shetty';
        movie.movieActor = 'Shahrukh Khan';
        movie.movieType = 'Action Comedy';
        movie.movieReleased = '2013';
        movie.movieRating = 8;

        // Save movie 50 Data
        this.addMovie(movie);
    }
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DataService} from '../services/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'top-ten-movie',
  templateUrl: './toptenmovie.component.html'
})
export class TopTenMovieComponent implements OnInit {
    public items: BehaviorSubject<any>;
    public movieData: Movie[] ;

    constructor (
        private userservice: DataService
    ) { }

     public ngOnInit (): void {
        this.getTopTenMovie();
        this.getSKYUXList();
     }

     public ngOnChange () {
        this.getTopTenMovie();
     }

     public getSKYUXList () {
         this.items = new BehaviorSubject(this.movieData);
     }

     public getTopTenMovie () {
         let movieData = this.userservice.getTopTenMovie();
        //  if ( movieData !== undefined && movieData != null ) {
        if ( movieData !== undefined ) {
             this.movieData = movieData;
            // alert(JSON.stringify(movieData));
         } else {
            let movieModel = new Movie();
            // movieModel.movieActor = '';
            // movieModel.movieDirector = '';
            // movieModel.movieName = '';
            // movieModel.movieRating = 1;
            // movieModel.movieReleased = '';
            // movieModel.movieType = '';
            this.movieData = [movieModel];
         }
     }

     public saveDemoData () {
         this.userservice.saveDemoData();
     }

     public removeAllData () {
        this.userservice.removeAllData();
     }
}

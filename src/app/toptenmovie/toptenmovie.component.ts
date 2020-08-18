import { Component, OnInit } from '@angular/core';

import { DataService} from '../services/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'top-ten-movie',
  templateUrl: './toptenmovie.component.html'
})
export class TopTenMovieComponent implements OnInit {
    public movieData: Movie[] ;
    constructor(
        private userservice: DataService
    ) { }

     public ngOnInit(): void {
        this.getTopTenMovie();
     }

     public ngOnChange()  {    
        this.getTopTenMovie();
     }

     public getTopTenMovie(){
         let movieData = this.userservice.getTopTenMovie();
         if( movieData != null){
             this.movieData = movieData;
            // alert(JSON.stringify(movieData));
         }
     }

     public saveDemoData(){
         this.userservice.saveDemoData();
     }

     public removeAllData(){
        this.userservice.removeAllData();
     }
}
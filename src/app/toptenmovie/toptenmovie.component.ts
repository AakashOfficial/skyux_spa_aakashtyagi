import { Component, OnInit } from '@angular/core';
// import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { SkyLibResourcesService } from '@skyux/i18n';

import { BehaviorSubject } from 'rxjs';

import { DataService} from '../services/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'top-ten-movie',
  templateUrl: './toptenmovie.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopTenMovieComponent implements OnInit {
    public libDefaultGreeting: string;
    public items: BehaviorSubject<any>;
    public movieData: Movie[] ;

    public hindiBtn = '';
    public dutchBtn = '';
    public italianBtn = '';
    public frenchBtn = '';
    public spanichBtn = '';
    public englishBtn = '';
    public esperantoBtn = '';

    constructor (
        private userservice: DataService,
        private libResources: SkyLibResourcesService
    ) { }

     public ngOnInit (): void {
        this.initializeButton();
        this.changeLanguage('hi_IN');
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

     public changeLanguage(localeSelected: String){
         if (localeSelected === 'hi_IN') {
             this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'hi_IN' }, 'top_message'
             );
         } else if (localeSelected === 'nl_NL') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'nl_NL' }, 'top_message'
             );
         } else if (localeSelected === 'en_US') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'en_US' }, 'top_message'
             );
         } else if (localeSelected === 'eo') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'eo' }, 'top_message'
             );
         } else if (localeSelected === 'en_ES') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'en_ES' }, 'top_message'
             );
         } else if (localeSelected === 'fr_FR') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'fr_FR' }, 'top_message'
             );
         } else if (localeSelected === 'it_IT') {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'it_IT' }, 'top_message'
             );
         } else  {
            this.libDefaultGreeting = this.libResources.getStringForLocale(
                { locale: 'hi_IN' }, 'top_message'
             );
         }
     }

     public initializeButton(){
        this.hindiBtn = this.libResources.getStringForLocale(
                { locale: 'hi_IN' }, 'btn_Message'
             );
        this.dutchBtn = this.libResources.getStringForLocale(
                { locale: 'nl_NL' }, 'btn_Message'
             );
        this.italianBtn = this.libResources.getStringForLocale(
                { locale: 'it_IT' }, 'btn_Message'
             );
        this.frenchBtn = this.libResources.getStringForLocale(
                { locale: 'fr_FR' }, 'btn_Message'
             );
        this.spanichBtn = this.libResources.getStringForLocale(
                { locale: 'en_ES' }, 'btn_Message'
             );
        this.englishBtn = this.libResources.getStringForLocale(
                { locale: 'en_US' }, 'btn_Message'
             );
        this.esperantoBtn = this.libResources.getStringForLocale(
                { locale: 'eo' }, 'btn_Message'
             );
     }
}

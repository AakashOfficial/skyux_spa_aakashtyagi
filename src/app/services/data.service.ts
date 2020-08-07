import { Injectable } from '@angular/core';

import {User} from '../model/user';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    // service to save the data to local storage
    public addUser( user: User ) {
        if (  user.firstname !== '' && user.address !== '' && user.dateofbirth !== '' && user.email !== '' &&
            user.lastname !== '' && user.mobilenumber > 0 ) {
            let objData = [] ;
            let dataLength = 0 ;
            // alert(JSON.stringify(user));
            let data = localStorage.getItem('gridAssignment') ;

            // alert(data);
            if ( data !== undefined ) {
                objData = JSON.parse(data);
                dataLength = objData.length ;
                // alert(dataLength) ;
            }

            objData[dataLength] = user ;
            // alert(JSON.stringify(objData));
            let stringData = JSON.stringify(objData) ;
            localStorage.setItem('gridAssignment', stringData);
            return true;
        } else {
            return false;
        }

    }

    // service to get the data from the local storage
    public getUser() {
        let data = localStorage.getItem('gridAssignment') ;
        let objData = JSON.parse(data);

        return objData ;
    }
}

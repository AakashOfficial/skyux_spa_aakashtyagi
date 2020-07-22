import { Injectable } from '@angular/core';

import {User} from '../model/user';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    // service to save the data to local storage
    addUser(user:User) {
        var objData = [] ;
        var dataLength = 0 ;
        // alert(JSON.stringify(user));
        var data = localStorage.getItem("gridAssignment") ;

        // alert(data);
        if(data != null){
            objData = JSON.parse(data);
            dataLength = objData.length ;
            // alert(dataLength) ;
        }
        
        objData[dataLength] = user ;
        // alert(JSON.stringify(objData));
        var stringData = JSON.stringify(objData) ;
        localStorage.setItem("gridAssignment", stringData);
        return true;
    }

    // service to get the data from the local storage
    getUser(){
        var data = localStorage.getItem("gridAssignment") ;
        var objData = JSON.parse(data);

        return objData ;
    }
}
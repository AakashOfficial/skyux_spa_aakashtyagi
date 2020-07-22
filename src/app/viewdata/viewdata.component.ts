import { Component, OnInit } from '@angular/core';

import { DataService} from '../services/data.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.scss']
})
export class ViewdataComponent implements OnInit {

  constructor(private userservice : DataService){}
  
  rowData = '' ;

  columnDefs = [
        {headerName: 'First Name', field: 'firstname',sortable: true, filter: true },
        {headerName: 'Last Name', field: 'lastname',sortable: true, filter: true },
        {headerName: 'Contact', field: 'contact',sortable: true, filter: true },
        {headerName: 'Email', field: 'email',sortable: false, filter: true },
        {headerName: 'DateOfBirth', field: 'dob' },
        {headerName: 'Address', field: 'address'}
    ];

    // rowData = [
    //     { firstname: 'A', lastname: 'A', contact: '9898989898', email: 'a@gmail.com', dob: '1998-12-26', address: 'Test' },
    //     { firstname: 'B', lastname: 'B', contact: '9898989898', email: 'b@gmail.com', dob: '1998-12-26', address: 'Test' },
    //     { firstname: 'C', lastname: 'C', contact: '9898989898', email: 'c@gmail.com', dob: '1998-12-26', address: 'Test' }
    // ];

  public ngOnInit(): void {
    this.rowData = this.userservice.getUser();
  }

}
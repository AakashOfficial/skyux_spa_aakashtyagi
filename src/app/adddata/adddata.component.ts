import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.scss']
})
export class AdddataComponent implements OnInit  {
  public usr = new User();

  public form: FormGroup;

    constructor( private userservice: DataService ) {
      this.form = new FormGroup({
            firstname : new FormControl('', Validators.required),
            lastname : new FormControl('', Validators.required),
            email : new FormControl('', [Validators.required, Validators.email]),
            contact: new FormControl('', Validators.required),
            dob : new FormControl('', [Validators.required]),
            address: new FormControl('', Validators.required)
        }) ;
    }

    public ngOnInit(): void { }

    get firstname() {
      return this.form.get('firstname');
    }

    get lastname() {
        return this.form.get('lastname');
    }

    get contact() {
      return this.form.get('contact');
    }

    get email() {
        return this.form.get('email');
    }

    get dob() {
      return this.form.get('dob');
    }

    get address() {
        return this.form.get('address');
    }

    public Save() {
        if ( this.form.get('firstname').value !== '' && this.form.get('lastname').value !== '' && this.form.get('email').value !== '' &&
        this.form.get('contact').value !== '' && this.form.get('dob').value !== '' && this.form.get('address').value !== '') {
          this.usr.firstname = this.form.get('firstname').value;
          this.usr.lastname = this.form.get('lastname').value ;
          this.usr.email = this.form.get('email').value;
          this.usr.mobilenumber = this.form.get('contact').value;
          this.usr.dateofbirth = this.form.get('dob').value;
          this.usr.address = this.form.get('address').value;
          // let firstname = this.form.get('firstname').value;
          // let lastname = this.form.get('lastname').value ;
          // let email = this.form.get('email').value;
          // let mobilenumber = this.form.get('contact').value;
          // let dateofbirth = this.form.get('dob').value;
          // let address = this.form.get('address').value;

          // this.usr = new User(firstname, lastname, email, address, dateofbirth, mobilenumber);
          // call the service
          let result = this.saveData(this.usr);

          if (result) {
            alert('Saved');
            return true;
          } else {
            alert('Not Saved');
            return false;
          }
        } else {
          alert('Fill all Field of Form') ;
          return false;
        }
    }

    public saveData(user: User) {
          // call the service
          let result = this.userservice.addUser(this.usr);
          return result;
    }
}

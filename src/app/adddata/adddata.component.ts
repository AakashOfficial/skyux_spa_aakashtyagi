import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import {User} from '../model/user';
import { DataService} from '../services/data.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.scss']
})
export class AdddataComponent {
  usr = new User() ;

  constructor(private userservice : DataService){}

  form = new FormGroup({      
            firstname : new FormControl('', Validators.required),
            lastname : new FormControl('', Validators.required),
            email : new FormControl('', [Validators.required,Validators.email]),
            contact: new FormControl('', Validators.required),
            dob : new FormControl('', [Validators.required]),
            address: new FormControl('', Validators.required),
        }) ;

  get firstname(){
    return this.form.get('firstname');
  }

  get lastname(){
      return this.form.get('lastname');
  }

  get contact(){
    return this.form.get('contact');
  }

  get email(){
      return this.form.get('email');
  }

  get dob(){
    return this.form.get('dob');
  }

  get address(){
      return this.form.get('address');
  }

  Save(){
      if(this.form.get("firstname").value != '' && this.form.get("lastname").value != '' && this.form.get("email").value != '' &&
      this.form.get("contact").value != '' && this.form.get("dob").value != '' && this.form.get("address").value != ''){
        this.usr.firstname = this.form.get("firstname").value;
        this.usr.lastname = this.form.get("lastname").value ;
        this.usr.email = this.form.get("email").value;
        this.usr.mobilenumber = this.form.get("contact").value;
        this.usr.dateofbirth = this.form.get("dob").value;
        this.usr.address = this.form.get("address").value;

        // call the service
        var result = this.userservice.addUser(this.usr);

        if(result){
          alert("Saved");
        }else{
          alert("Not Saved");
        }
        

      }else{
        alert("Fill all Field of Form") ;
      }


        
  }
}
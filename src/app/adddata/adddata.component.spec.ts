import { TestBed } from '@angular/core/testing';

import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';

import { expect } from '@skyux-sdk/testing';
// import { FormGroup } from '@angular/forms';
// import { DataService } from '../services/data.service';
import { User } from '../model/user';

// Component we're going to test
import { AdddataComponent } from './adddata.component';

class DataService {
  public addUser (user: User) {
    if ( user.firstname !== '' && user.address !== '' && user.dateofbirth !== '' && user.email !== '' &&
            user.lastname !== '' && user.mobilenumber > 0 ) {
              return true;
            } else {
              return false;
            }
  }

  public getUser() {
    let user = new User();
    user.firstname = 'Demos' ;
    user.lastname = 'Dem' ;
    user.email = 'demos@demos.com' ;
    user.address = 'demos' ;
    user.mobilenumber = 9090909090 ;
    user.dateofbirth = '2020-07-03' ;

    return user;
  }
}

describe('Adddata component', () => {
    let adddata: AdddataComponent;
    let dataservece: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
    dataservece = new DataService();
    adddata = new AdddataComponent(dataservece) ;
  });

  afterEach(() => {
    dataservece = undefined;
    adddata = undefined;
  });

  // Test case for the form Creation
  it('should create forms with 6 controls', () => {

    // Using custom expect matchers
    expect(adddata.form.contains('firstname')).toBe(true);
    expect(adddata.form.contains('lastname')).toBe(true);
    expect(adddata.form.contains('email')).toBe(true);
    expect(adddata.form.contains('contact')).toBe(true);
    expect(adddata.form.contains('dob')).toBe(true);
    expect(adddata.form.contains('address')).toBe(true);
  });

  // Test case for the form Validation
  it('should make the form components required', () => {
    let firstname = adddata.form.get('firstname');
    firstname.setValue('') ;

    let lastname = adddata.form.get('lastname');
    lastname.setValue('') ;

    let email = adddata.form.get('email');
    email.setValue('') ;

    let contact = adddata.form.get('contact');
    contact.setValue('') ;

    let dob = adddata.form.get('dob');
    dob.setValue('') ;

    let address = adddata.form.get('address');
    address.setValue('') ;

    // Using custom expect matchers
    expect(firstname.valid).toBe(false);
    expect(lastname.valid).toBe(false);
    expect(email.valid).toBe(false);
    expect(contact.valid).toBe(false);
    expect(dob.valid).toBe(false);
    expect(address.valid).toBe(false);
  });

  it('should return true if the data is added', () => {
      let user = new User();

      user.firstname = 'Demosss' ;
      user.lastname = 'Demss' ;
      user.email = 'demos@demos.com' ;
      user.address = 'demoss' ;
      user.mobilenumber = 9090909090 ;
      user.dateofbirth = '2020-07-03' ;
      let result = adddata.saveData(user) ;

      // Using custom expect matchers
      expect(result).toBe(true);
  });

  it('should return false is the data is not added', () => {
      let user = new User();

      let result = adddata.saveData(user) ;

      // Using custom expect matchers
      expect(result).toBe(false);
  });

});

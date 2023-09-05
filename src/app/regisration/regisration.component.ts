import { Component } from '@angular/core';

import{
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from'@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

// @Component({
//   selector: 'app-regisration',
//   templateUrl: './regisration.component.html',
//   styleUrls: ['./regisration.component.css']
// })


@Component({
  selector: 'app-registration',
  templateUrl: './regisration.component.html',
  styleUrls: ['./regisration.component.css']           

})



export class RegisrationComponent{

  title = "Welocome to Registration ";
  fname = new FormControl('',Validators.required);
  lname = new FormControl('',Validators.required);
  dob = new FormControl('',Validators.required);
  gender = new FormControl('',Validators.required);
  address = new FormControl('',Validators.required);
  email =new FormControl('',[Validators.required, Validators.email]);
  pwd = new FormControl('',[Validators.required,Validators.minLength(8)]);
  matcher = new MyErrorStateMatcher();

}

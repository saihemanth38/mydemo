import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MustMatch } from './MustMatch';
import { Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;

  isSubmitted = false;


  constructor(private formBuilder: FormBuilder, private router : Router) {

  }
  ngOnInit() {

      this.createForm();
  }
createForm(){
  this.registerForm = this.formBuilder.group({
    idNumber: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    userName:  ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['',Validators.required],
    address:  ['', Validators.required],
    city:  ['', Validators.required],
    state: ['', Validators.required],
  country: ['', Validators.required],

  }
,  {
    validator: MustMatch('password', 'confirmPassword')
  });
}


  get form() { return this.registerForm.controls; }

  signup() {
    // this.submitted = true;
    console.log(this.registerForm.value);
   this.isSubmitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      if(this.registerForm.valid)
      {
        console.log(this.registerForm.value);
      this.router.navigateByUrl('/login');
      }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

  }
   }



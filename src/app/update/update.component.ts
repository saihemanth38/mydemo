import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from  '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;

  
  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      idNumber: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      
      address: ['', Validators.required],
  city: ['', Validators.required],
  state: ['', Validators.required],
  country: ['', Validators.required]
    }
  // ,  {
  //     validator: MustMatch('password', 'confirmPassword') }
      );
}



get form() { return this.registerForm.controls; }

update() {
  console.log(this.registerForm.value);
  this.isSubmitted = true;
 
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.registerForm.valid && this.isSubmitted == true)
    {
    alert("updated successfully");
  }
    this.router.navigateByUrl('/#');
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

   
}
  }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../user.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;

  
 
  data:User[];

  constructor(private formBuilder: FormBuilder, private dataservice : DataService, private router : Router) { 
    
}
// Udata(){
     
//   return this.dataservice.getUsers()
//     .subscribe(arg => this.data = arg);
//   }
  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
        password: ['', Validators.required]
        
      });
          
      return this.dataservice.getUsers()
      .subscribe(arg =>{ this.data = arg; });

  }
  get form() { return this.registerForm.controls; }

  login() {
    console.log(this.data);
      this.isSubmitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.router.navigateByUrl('/update');
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

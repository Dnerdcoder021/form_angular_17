import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { close } from 'fs';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule, matSnackBarAnimations } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from   '@angular/platform-browser/animations';  
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,MatRadioModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:any;
registerForm:any;
activeForm:'login' | 'register'='login';
// gen:'Male'|'Female'='Male';

constructor( private fb: FormBuilder,private snackBar:MatSnackBar,private router:Router){}

ngOnInit(){
  this.loginForm=this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',Validators.required]

  });

  this.registerForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    mobile:[''],
    // gender:['']

  })
}
// func(geni:'Male'|'Female'){
// this.gen=geni;
// this.registerForm.gender=[geni]
// }
toggleForm(form:'login'|'register'){
  this.activeForm=form;
}
login(){
  if(this.loginForm.valid){
    console.log("Login Info:",this.loginForm.value);
    this.router.navigate(['/plan/otp-verify']);
  }else{
    this.snackBar.open('Invalid Email or Password','',{duration:3000});
  }
}
register(){
  if(this.registerForm.valid){
    console.log("Register Info:",this.registerForm.value);
    this.snackBar.open('Submitted Successfully','',{duration:3000});
    this.toggleForm('login');
  }else{
    this.snackBar.open('Please fill the details carefully','',{duration:3000});
  }
}


}

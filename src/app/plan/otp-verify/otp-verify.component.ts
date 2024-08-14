import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,LoginComponent],
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.css'
})
export class OtpVerifyComponent {
  otp=Math.floor(Math.random()*10000);
  activeform: 'sendotp' | 'verifyotp'='sendotp';
otpform:FormGroup=this.fb.group({
    email:''
  })
  constructor(private fb:FormBuilder,private router:Router){}

  async send(){
    emailjs.init('yxWHS2m2awQ0l2VHX')
   let response=await emailjs.send("service_cgrgcjv","template_a3tbuhs",{
      otp_: this.otp,
      to_email: this.otpform.value.email,
      });

    alert('OTP sent');
    this.activeform='verifyotp';

  }
verifyform:FormGroup=this.fb.group({
  otp:''
})
verify(){
  if(this.verifyform.value.otp==this.otp){
    alert('OTP Verified..')
    this.router.navigate(['/plan/dashboard']);
  }
}
}



  



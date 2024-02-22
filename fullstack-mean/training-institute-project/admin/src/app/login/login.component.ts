import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isError = false;

  constructor(private api: ApiService, private router: Router){
    if(sessionStorage.getItem('access_token')){
      this.router.navigateByUrl('/course');
    }
  }

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async doLogin(){
    if(this.loginForm.valid){
      this.isError = false;
      
      // this.api.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((val)=>{
      //   console.log("Value is", val);
      // },(e)=>{
      //   this.isError = true;
      // });

      this.isError = !await this.api.doLogin(this.loginForm.value.username, this.loginForm.value.password);
      this.router.navigateByUrl('/course');
    }else{
      this.isError = true;
      console.log("Please enter valid data")
    }
  }
}

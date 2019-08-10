import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;
  password2: string;
  firstName: string;
  lastName:string;
  errorMessageLogin: string;
  errorMessageRegister: string;
  termsAndConditions: string;
  isChecked: boolean = false;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }
  register() {
    if (this.password === this.password2 && this.password.length >=6 && this.email !== undefined && this.email.includes("@")
        && this.firstName !== undefined && this.lastName !== undefined && this.isChecked === true){
      const content = {
        'firstName': this.firstName,
        'lastName': this.lastName,
        'email': this.email,
        'password': this.password
      }
      this.data.register(content).subscribe((data: any) => {
        console.log('Registering...');
        this.login();
      },
      (error) => {
        if (error.status === 401) {
          this.errorMessageRegister = 'Email already exists';
        }
      });
      } else if (this.email.includes('@') === false) {
        this.errorMessageRegister = 'Email required';
      } else if (this.password !== this.password2) {
        this.errorMessageRegister = 'Passwords do not match';
      } else if (this.password.length < 6 || this.password.length === null) {
        this.errorMessageRegister = 'Password must be at least 6 characters long';
      } else if (this.isChecked === false) {
        this.termsAndConditions = 'You must agree to our policy & terms';
      } else { 
        this.errorMessageRegister = 'All inputs required';
      }
  }


  login() {
    this.data.login(this.email, this.password).subscribe((data: any) => {
      console.log('Logged in!');
      sessionStorage.setItem('Authorization', data['token']);
      this.router.navigate(['rulesRanking']);
    },
    (error: any) => {
      if (error.status === 401) {
          this.errorMessageLogin = 'Incorrect email or password';
      }
    },
    ()=>{
      // window.location.reload()
    });
  }

  rulesPage() {
    this.router.navigate(['rulesRanking']);
  }
}

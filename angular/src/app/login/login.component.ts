import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  password2: string;
  firstName: string;
  lastName:string;
  errorMessage: string;
  registerError: string;

  constructor(private data: DataService, private router: Router, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    this.data.login(this.email, this.password).subscribe((data: any) => {
      this.ngbActiveModal.close();
      console.log('Logged in!');
      sessionStorage.setItem('Authorization', data['token']);
      this.router.navigate(['rulesRanking']);
    },
    (error: any) => {
      if (error.status === 401) {
          this.errorMessage = "Incorrect email or password";
      }
    });
  }

    register() {
    let myPromise = new Promise((resolve, reject) => {
      if (this.password === this.password2 && this.password.length >=6 && this.email !== undefined && this.email.includes("@")
          && this.firstName !== undefined && this.lastName !== undefined){
        const content = {
          'firstName': this.firstName,
          'lastName': this.lastName,
          'email': this.email,
          'password': this.password
        }
        resolve(this.data.register(content).subscribe((data: any) => {
          console.log("Registering...")
        },
        (error) => {
          if (error.status === 401) {
            this.registerError = 'Email already exists';
          }
        }))
        } else if (this.email.includes("@") === false) {
          reject(this.registerError = "Email required");
        } else if (this.password !== this.password2) {
          reject(this.registerError = 'Passwords do not match');
        } else if (this.password.length < 6) {
          reject(this.registerError = 'Password must be at least 6 characters long');
        } else { 
          reject(this.registerError = 'All inputs required');
        }
    });
    myPromise.then(() => this.login()).catch(() => console.log('Bad Login'))
  }


  close() {
    this.ngbActiveModal.close();
  }

  rulesPage() {
    this.router.navigate(['rulesRanking']);
    this.ngbActiveModal.close();
  }
    
  }

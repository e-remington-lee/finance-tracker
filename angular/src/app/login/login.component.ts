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
  isChecked: boolean = false;
  termsAndConditions: string;

  constructor(private data: DataService, private router: Router, private ngbActiveModal: NgbActiveModal) { }

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
            this.registerError = 'Email already exists';
          }
        });
        } else if (this.email.includes('@') === false) {
          this.registerError = 'Email required';
        }  else if (this.password !== this.password2) {
          this.registerError = 'Passwords do not match';
        } else if (this.password.length < 6) {
          this.registerError = 'Password must be at least 6 characters long';
        } else if (this.isChecked === false) {
          this.termsAndConditions = 'You must agree to our policy & terms';
        } else { this.registerError = 'All inputs required';
        }
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
          this.errorMessage = 'Incorrect email or password';
      }
    },
    ()=>{
      // window.location.reload()
    });
  }

  close() {
    this.ngbActiveModal.close();
  }

  rulesPage() {
    this.router.navigate(['rulesRanking']);
    this.ngbActiveModal.close();
  }
    
  }

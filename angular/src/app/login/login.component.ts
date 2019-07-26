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
  registerEmailError: string;

  constructor(private data: DataService, private router: Router, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  login() {
    this.data.login(this.email, this.password).subscribe((data: any) => {

      this.ngbActiveModal.close();
      console.log('Logged in!');
      sessionStorage.setItem('Authorization', data['token']);
      this.router.navigate(['rulesRanking']);

      // var promise1 = new Promise(function(resolve, reject) {
      //   resolve(this.router.navigate(['rulesRanking']));
      // });
      // promise1.then(function() {
      //   location.reload();
      // });
    },
    (error: any) => {
      if (error.status === 401) {
          this.errorMessage = "Incorrect email or password";
      }
    });
  }

  register() {
    if (this.password === this.password2){
      const content = {
        'firstName': this.firstName,
        'lastName': this.lastName,
        'email': this.email,
        'password': this.password
      }
      console.log(content)
      this.data.register(content).subscribe((data: any) => {
        console.log(data)
      },
      (error) => {
        if (error.status ===401) {
          this.registerEmailError = 'Email already exists';
        }
      });
    }
  }

  close() {
    this.ngbActiveModal.close();
  }

  rulesPage() {
    this.router.navigate(['rulesRanking']);
    this.ngbActiveModal.close();
  }
    
  }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.data.login(this.email, this.password).subscribe((data: any) => {
      //Logic to determine if login is successful
      // this.ngbActiveModal.close();
      // this.router.navigate(['portfolio']);
      console.log(data['token']);
      sessionStorage.setItem('Authorization', data['token']);
    },
    (error: any) => {
      if (error.status === 401) {
          this.errorMessage = "Incorrect email or password";
      }
    });
  }

  register() {
    //check if email is already used
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
      });
    }

    
  }
    
  }

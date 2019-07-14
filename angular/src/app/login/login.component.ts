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
    })
  }
    
  }

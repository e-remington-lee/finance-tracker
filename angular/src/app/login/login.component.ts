import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private data: DataService, private router: Router, private modal: NgbModal) { }

  ngOnInit() {
  }

  login() {
  
    console.log(this.email, this.password)
    this.data.login(this.email, this.password).subscribe((data: any) => {

      // this.modal.dismissAll('#Login')
      // this.router.navigate(['portfolio']);
      console.log(data['token']);
      sessionStorage.setItem('Authorization', data['token']);
    })
    console.log(this.email, this.password)
  }
    
  }

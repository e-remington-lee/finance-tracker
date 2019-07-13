import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.email, this.password)
    this.data.login(this.email, this.password).subscribe((data: any) => {
      // const headers = new Headers();
      // headers.append('Content-Type', 'application/json')

      console.log(data['token'])
      sessionStorage.setItem('Authorization', data['token'])
    })
    console.log(this.email, this.password)
  }
    
  }

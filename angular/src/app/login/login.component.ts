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
      console.log(data['token'])
      sessionStorage.setItem('loginKey', data['token'])
    })
  }
    
  }

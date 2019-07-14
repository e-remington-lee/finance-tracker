import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  userId: number;
  // npm instll jwt? then call the sessionStorage, decode jwt, get access to user_id? or subscribe to a route?

  constructor(private data: DataService) {
    this.data.checkLogin(sessionStorage.getItem('Authorization')).subscribe()
  }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Session } from 'protractor';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  constructor(private data: DataService, private auth: AuthService) {
  }


  ngOnInit() {
    
  }

}

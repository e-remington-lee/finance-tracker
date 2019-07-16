import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  default: string = 'My Account';

  constructor(private auth: AuthService) {

   }

  ngOnInit() {
    try {
      this.default = this.auth.decodeUser()['first_name'];
    } 
    catch(error)  {
      return null
    }
  }



}

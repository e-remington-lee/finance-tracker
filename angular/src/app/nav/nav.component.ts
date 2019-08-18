import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  default: string = 'My Account';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    try {
      this.default = this.auth.decodeUser()['first_name'];
    }
    catch (error) {
      return null
    }
  }

  logout() {
   sessionStorage.removeItem('Authorization');
   location.reload();
  }

  renameAccount() {
    try {
      this.default = this.auth.decodeUser()['first_name'];
    }
    catch (error) {
      return null
    }
  }
}

 import { Component, OnInit } from '@angular/core';
 import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLoginModal() {
   const modal = this.modalService.open(LoginComponent);
   modal.componentInstance.symbol = 'bob';
   console.log('open') 
  }
}

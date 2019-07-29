import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BuyModalComponent } from '../buy-modal/buy-modal.component';
import { SellModalComponent } from '../sell-modal/sell-modal.component';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() symbol: any[]=[];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openBuyModal() {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static'
    }
    const modal = this.modalService.open(BuyModalComponent, modalOptions);
    modal.componentInstance.symbol = this.symbol;
  }

  openSellModal() {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static'
    }
    const modal = this.modalService.open(SellModalComponent, modalOptions);
    modal.componentInstance.symbol = this.symbol;
  }

}

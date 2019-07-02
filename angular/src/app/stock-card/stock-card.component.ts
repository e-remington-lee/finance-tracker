import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BuyModalComponent } from '../buy-modal/buy-modal.component';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() symbol: any;
  @Input() symbolString: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openBuyModal() {
    const modal = this.modalService.open(BuyModalComponent);
    modal.componentInstance.symbolString = this.symbolString;
    modal.componentInstance.symbol = this.symbol;
  }

}

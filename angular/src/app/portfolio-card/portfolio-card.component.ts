import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyModalComponent } from '../buy-modal/buy-modal.component';
import { SellModalComponent } from '../sell-modal/sell-modal.component';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input() stock: any[]=[];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openBuyModal() {
    const modal = this.modalService.open(BuyModalComponent);
    modal.componentInstance.symbol = this.stock;
  }

  openSellModal() {
    const modal = this.modalService.open(SellModalComponent);
    modal.componentInstance.symbol = this.stock;
  }

}

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
  // assetData = this.stock['asset_data'];
  // assetValues = this.stock['asset_values']

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

}

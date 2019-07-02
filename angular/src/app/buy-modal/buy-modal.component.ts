import { Component, OnInit, Input } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

  symbol: any[] = [];
  symbolString: string;
  username = 'Remington';
  userId = 1;
  accountId = 1;
  shares: number;
  
  constructor(private stocks: StocksService, private data: DataService, private ngbActiveModal: NgbActiveModal ) { }

  ngOnInit() {
  }

  buyStockButton() {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      this.shares=0;
      
      return false
    } else {
      this.data.checkBalance(this.symbolString, this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          const type= 'buy';
          this.stocks.buyStock2(this.symbolString, this.accountId, this.shares).subscribe();
          this.stocks.updateBalanceBuy(this.symbolString, this.accountId, this.shares).subscribe(data => {
          });
          this.stocks.transactions(this.accountId, this.symbolString, type, this.shares).subscribe(data => {});
          this.shares=0;  
        }
      },
      error => {
        if (error.status == 404) {
          alert('Purchase Failed: Insufficient Funds')
          this.shares = 0;
        }
      });
  }
  this.ngbActiveModal.close();
}

  closeModal() {
    this.ngbActiveModal.close();
  }

}

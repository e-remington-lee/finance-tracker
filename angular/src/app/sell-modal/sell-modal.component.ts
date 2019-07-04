import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.scss']
})
export class SellModalComponent implements OnInit {

  symbol: any[] = [];

  TSLA: any[] = [];
  AMZN: any[] = [];
  FB: any[] = [];
  searchStockData: any[] = [];
  username = 'Remington';
  userId = 1;
  accountId = 1;
  shares: number;
  


  constructor(private stocks: StocksService, private data: DataService, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.symbol);
  }

  sellStockButton() {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      this.ngbActiveModal.close();
      return false
    } else {
      this.data.checkStock(this.symbol[0]['symbol'], this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          this.symbol[0]['accountId']= this.accountId;
          this.symbol[0]['shares'] = this.shares;
          this.symbol[0]['type'] = 'sell';
          
          console.log(this.symbol);
          const type = 'sell';
          this.stocks.sellStock(this.symbol).subscribe();
          this.stocks.updateBalanceSell(this.symbol).subscribe();
          this.stocks.transactions(this.symbol).subscribe();
          this.shares=0
          this.ngbActiveModal.close();
        }
      },
      error => {
        if (error.status == 404) {
          alert('Sell Failed: Insufficient Share Quantity')
          this.shares = 0;
        }
      });
    }
  }

  closeModal() {
    this.ngbActiveModal.close();
  }
}

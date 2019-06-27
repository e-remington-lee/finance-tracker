import { Component, OnInit, Input } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

  @Input() symbol: any;
  @Input() symbolString: string;
  TSLA: any[] =[];
  AMZN: any[] =[];
  FB: any[] =[];
  searchStockData: any[] =[];
  chartInfo: any[] = [];
  lableList: any[] =[];
  priceList: any[] =[];
  username = 'Remington';
  userId = 1;
  accountId = 1;
  shares: number;
  stockPrice = 200.92;
  type: string;
  searchStockSymbol: string;


  constructor(private stocks: StocksService, private data: DataService) { }

  ngOnInit() {
  }

  onClickFaceBook() {
    // set this.symbol = something
  }

  onClickTesla() {

  }
  buyStockButton2(symbol) {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      this.shares=0;
      return false
    } else {
      this.data.checkBalance(symbol, this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          this.type = 'buy';
          this.stocks.buyStock2(symbol, this.accountId, this.shares).subscribe();
          this.stocks.updateBalanceBuy(symbol, this.accountId, this.shares).subscribe(data => {
          });
          this.stocks.transactions(this.accountId, symbol, this.type, this.shares).subscribe(data => {});
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
}

  sellStockButton2(symbol) {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      return false
    } else {
      this.data.checkStock(symbol, this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          this.type = 'sell';
          this.stocks.sellStock(symbol, this.accountId, this.shares).subscribe();
          this.stocks.updateBalanceSell(symbol, this.accountId, this.shares).subscribe(data => {
          });
          this.stocks.transactions(this.accountId, symbol, this.type, this.shares).subscribe(data => {});
          this.shares=0
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
}

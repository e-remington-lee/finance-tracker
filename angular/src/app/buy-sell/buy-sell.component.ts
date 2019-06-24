import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {

  TSLA: any[] =[];
  AMZN: any[] =[];
  FB: any[] =[];
  searchStockData: any[] =[];
  username = 'Remington';
  userId = 1;
  accountId = 1;
  shares: number;
  stockPrice = 200.92;
  type: string;
  searchStockSymbol: string;
 


  constructor(private stocks: StocksService) { }

  ngOnInit() {
    var x = document.getElementById('searchStock');
    x.style.display = "none";


    this.stocks.returnStocks('TSLA').subscribe((data: any[]) => {
      this.TSLA = data;
      console.log(data);
    });

    this.stocks.returnStocks('AMZN').subscribe((data: any[]) => {
      this.AMZN = data;
      console.log(data);
    });

    this.stocks.returnStocks('FB').subscribe((data: any[]) => {
      this.FB =  data;
      console.log(data);
    });
  }

  searchStocks() {
    var x = document.getElementById('searchStock');
    if (x.style.display === "none") {
      x.style.display = "block";
    }

    this.searchStockSymbol = this.searchStockSymbol.toUpperCase();
    this.stocks.returnStocks(this.searchStockSymbol).subscribe((data: any[]) => {
      this.searchStockData = data;
      console.log(this.searchStockSymbol);
    });
  }

  buyStockButton2(symbol) {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      return false
    } else {
      this.type = 'buy';
      this.stocks.buyStock2(symbol, this.accountId, this.shares).subscribe();
      this.stocks.updateBalanceBuy(symbol, this.accountId, this.shares).subscribe(data => {
      });
      this.stocks.transactions(this.accountId, symbol, this.type, this.shares).subscribe(data => {});
      this.shares=0
  }
}

  sellStockButton2(symbol) {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      return false
    } else {
      this.type = 'sell';
      this.stocks.sellStock(symbol, this.accountId, this.shares).subscribe();
      this.stocks.updateBalanceSell(symbol, this.accountId, this.shares).subscribe(data => {
      });
      this.stocks.transactions(this.accountId, symbol, this.type, this.shares).subscribe(data => {});
      this.shares=0
  }
}


buyStockButton3() {
  if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
    alert('Must be a positive whole number');
    return false
  } else {
    this.type = 'buy';
    this.stocks.buyStock2(this.searchStockSymbol, this.accountId, this.shares).subscribe();
    this.stocks.updateBalanceBuy(this.searchStockSymbol, this.accountId, this.shares).subscribe(data => {
    });
    this.stocks.transactions(this.accountId, this.searchStockSymbol, this.type, this.shares).subscribe(data => {});
    this.shares=0
  }
}

sellStockButton3() {
  if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
    alert('Must be a positive whole number');
    return false
  } else {
    this.type = 'sell';
    this.stocks.sellStock(this.searchStockSymbol, this.accountId, this.shares).subscribe();
    this.stocks.updateBalanceSell(this.searchStockSymbol, this.accountId, this.shares).subscribe(data => {
    });
    this.stocks.transactions(this.accountId, this.searchStockSymbol, this.type, this.shares).subscribe(data => {});
    this.shares=0
}
}

}

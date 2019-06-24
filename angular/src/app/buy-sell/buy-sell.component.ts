import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Chart } from 'chart.js';
import { Button } from 'protractor';

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
    var searchStockBox = document.getElementById('searchStock');
    searchStockBox.style.display = "none";

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
    var searchStockBox = document.getElementById('searchStock');
    if (searchStockBox.style.display === "none") {
      searchStockBox.style.display = "block";
    }

    this.searchStockSymbol = this.searchStockSymbol.toUpperCase();
    this.stocks.returnStocks(this.searchStockSymbol).subscribe((data: any[]) => {
      this.searchStockData = data;
      console.log(this.searchStockSymbol);
    });

    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2019-6-22', '2019-6-23', '2019-6-24', '2019-6-25', '2019-6-26',
         '2019-6-27', '2019-6-28', '2019-6-29', '2019-6-30', '2019-7-1',
          '2019-6-27', '2019-6-28', '2019-6-29', '2019-6-30', '2019-7-1',
          '2019-6-22', '2019-6-23', '2019-6-24', '2019-6-25', '2019-6-26', '2019-6-27', '2019-6-28', '2019-6-29', '2019-6-30', '2019-7-1', '2019-6-27', '2019-6-28', '2019-6-29', '2019-6-30', '2019-7-1'],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: `Previous Month's Stock Prices for ${this.searchStockSymbol}`
        }
      }
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

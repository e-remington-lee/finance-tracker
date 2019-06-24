import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Chart } from 'chart.js';

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
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
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

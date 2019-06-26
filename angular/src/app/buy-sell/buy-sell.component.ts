import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
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
  chart: Chart;


  constructor(private stocks: StocksService, private data: DataService) { }

  ngOnInit() {
    var searchStockBox = document.getElementById('searchStock');
    searchStockBox.style.display = "none";

    this.data.returnStocks('TSLA').subscribe((data: any[]) => {
      this.TSLA = data;
      console.log(data);
    });

    this.data.returnStocks('AMZN').subscribe((data: any[]) => {
      this.AMZN = data;
      console.log(data);
    });

    this.data.returnStocks('FB').subscribe((data: any[]) => {
      this.FB =  data;
      console.log(data);
    });

    this.chart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: null,
        datasets: [{ 
            data: null,
            label: 'Stock',
            borderColor: "#3e95cd",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Stock Data"
        }
      }
    });

  }

  searchStocks() {
    var searchStockBox = document.getElementById('searchStock');
    if (searchStockBox.style.display === "none") {
      searchStockBox.style.display = "block";
    }

    this.searchStockSymbol = this.searchStockSymbol.toUpperCase();

    this.data.returnStocks(this.searchStockSymbol).subscribe((data: any[]) => {
      this.searchStockData = data;
    });

  }

  updateChart() {
    this.data.chartData(this.searchStockSymbol).subscribe((data: any[]) => {
      this.chartInfo = data;
      this.lableList = [];
      this.priceList =[];
    
      for (let i = 0; i<data.length; i++) {
          this.lableList.push(data[i].date); 
      }

      for (let y = 0; y<data.length; y++) {
        this.priceList.push(data[y].closing_price)
      }
      this.chart.data.datasets[0].label = this.searchStockSymbol;
      this.chart.data.labels = this.lableList;
      this.chart.data.datasets[0].data = this.priceList;
      this.chart.options.title.text = `Previous Month's Stock Prices for ${this.searchStockSymbol}`

      console.log(this.priceList)

      this.chart.update()
    });
    
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
          this.shares=0
        }
      },
      error => {
        if (error.status == 404) {
          alert('Insufficient Funds')
        }
      });
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

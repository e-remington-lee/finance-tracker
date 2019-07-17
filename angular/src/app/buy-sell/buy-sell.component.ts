import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})

export class BuySellComponent implements OnInit {

  SPY: any[] =[];
  DIA: any[] =[];
  IWM: any[] =[];
  searchStockData: any[] =[];
  chartInfo: any[] = [];
  lableList: any[] =[];
  priceList: any[] =[];
  accountId: number;
  searchStockSymbol: string;
  chart: Chart;
  // chartIndicators: Chart;

  constructor(private stocks: StocksService, private data: DataService, private auth: AuthService) {
    this.accountId = this.auth.decodeUser()['account_id']
   }

  ngOnInit() {
    var searchStockBox = document.getElementById('searchStock');
    searchStockBox.style.display = "none";

    this.data.returnStocks('SPY').subscribe((data: any[]) => {
      this.SPY = data;
    });

    this.data.returnStocks('DIA').subscribe((data: any[]) => {
      this.DIA = data;
    });

    this.data.returnStocks('IWM').subscribe((data: any[]) => {
      this.IWM =  data;
    });
    
    Chart.defaults.line.spanGaps = true;
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

    // this.chartIndicators = new Chart('chartIndicators', {
    //   type: 'line',
    //   data: {
    //     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    //     datasets: [{ 
    //         data: [86,114,106,106,107,111,133,221,783,2478],
    //         label: "Africa",
    //         borderColor: "#3e95cd",
    //         fill: false
    //       }, { 
    //         data: [282,350,411,502,635,809,947,1402,3700,5267],
    //         label: "Asia",
    //         borderColor: "#8e5ea2",
    //         fill: false
    //       }, { 
    //         data: [168,170,178,190,203,276,408,547,675,734],
    //         label: "Europe",
    //         borderColor: "#3cba9f",
    //         fill: false
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: "Stock Indicators"
    //     }
    //   }
    // });
  }

  // portfolioTrade(stock) {
  //   console.log('booobbbbb')
  //   this.searchStockSymbol = stock;
  //   this.searchStocks();
  // }

  searchStocks() {
    var searchStockBox = document.getElementById('searchStock');
    if (searchStockBox.style.display === "none") {
      searchStockBox.style.display = "flex";
    }

    this.searchStockSymbol = this.searchStockSymbol.toUpperCase();

    this.data.returnStocks(this.searchStockSymbol).subscribe((data: any[]) => {   
      this.searchStockData = data;
    },
    (error: any) => {
      if (error.status === 500) {
        alert(`${this.searchStockSymbol} was not found`)
      }
    }
    );
  }

  updateChart() {
    this.data.chartData(this.searchStockSymbol).subscribe((data: any[]) => {
      console.log(data)
      this.chartInfo = data;
      this.lableList = [];
      this.priceList =[];
    
      for (let i = 0; i<data.length; i++) {
          this.lableList.push(data[i].label); 
      }

      for (let y = 0; y<data.length; y++) {
        this.priceList.push(data[y].average)
      }
      this.chart.data.datasets[0].label = this.searchStockSymbol;
      this.chart.data.labels = this.lableList;
      this.chart.data.datasets[0].data = this.priceList;
      this.chart.options.title.text = `Daily Prices For ${this.searchStockSymbol} on ${data[0].date} `

      this.chart.update()
    }); 
  }

}
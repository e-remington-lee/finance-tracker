import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  stockSearch ='TSLA';

  constructor(private stocks: StocksService) { }

  ngOnInit() {
    // var ctx = document.getElementById('myChart').getContext('2d');
    var json = [
        {
            "date": "2019-05-22",
            "open": 199.1,
            "close": 192.73,
            "high": 203.94,
            "low": 191.78,
            "volume": 18685187,
            "uOpen": 199.1,
            "uClose": 192.73,
            "uHigh": 203.94,
            "uLow": 191.78,
            "uVolume": 18685187,
            "change": 0,
            "changePercent": 0,
            "label": "May 22",
            "changeOverTime": 0
        },
        {
            "date": "2019-05-23",
            "open": 194.34,
            "close": 195.49,
            "high": 199.46,
            "low": 186.22,
            "volume": 26547142,
            "uOpen": 194.34,
            "uClose": 195.49,
            "uHigh": 199.46,
            "uLow": 186.22,
            "uVolume": 26547142,
            "change": 2.76,
            "changePercent": 1.4321,
            "label": "May 23",
            "changeOverTime": 0.014321
        },
        {
            "date": "2019-05-24",
            "open": 199.83,
            "close": 190.63,
            "high": 199.98,
            "low": 188.75,
            "volume": 14136572,
            "uOpen": 199.83,
            "uClose": 190.63,
            "uHigh": 199.98,
            "uLow": 188.75,
            "uVolume": 14136572,
            "change": -4.86,
            "changePercent": -2.4861,
            "label": "May 24",
            "changeOverTime": -0.010896
        },
        {
            "date": "2019-05-28",
            "open": 191.2,
            "close": 188.7,
            "high": 195,
            "low": 187.85,
            "volume": 10312901,
            "uOpen": 191.2,
            "uClose": 188.7,
            "uHigh": 195,
            "uLow": 187.85,
            "uVolume": 10312901,
            "change": -1.93,
            "changePercent": -1.0124,
            "label": "May 28",
            "changeOverTime": -0.02091
        },
        {
            "date": "2019-05-29",
            "open": 187.1,
            "close": 189.86,
            "high": 192.39,
            "low": 185.04,
            "volume": 11968638,
            "uOpen": 187.1,
            "uClose": 189.86,
            "uHigh": 192.39,
            "uLow": 185.04,
            "uVolume": 11968638,
            "change": 1.16,
            "changePercent": 0.6147,
            "label": "May 29",
            "changeOverTime": -0.014891
        },
        {
            "date": "2019-05-30",
            "open": 188.75,
            "close": 188.22,
            "high": 192.25,
            "low": 187.02,
            "volume": 7926475,
            "uOpen": 188.75,
            "uClose": 188.22,
            "uHigh": 192.25,
            "uLow": 187.02,
            "uVolume": 7926475,
            "change": -1.64,
            "changePercent": -0.8638,
            "label": "May 30",
            "changeOverTime": -0.023401
        },
        {
            "date": "2019-05-31",
            "open": 185.1,
            "close": 185.16,
            "high": 189.92,
            "low": 184.1,
            "volume": 10406732,
            "uOpen": 185.1,
            "uClose": 185.16,
            "uHigh": 189.92,
            "uLow": 184.1,
            "uVolume": 10406732,
            "change": -3.06,
            "changePercent": -1.6258,
            "label": "May 31",
            "changeOverTime": -0.039278
        },
        {
            "date": "2019-06-03",
            "open": 185.51,
            "close": 178.97,
            "high": 186.68,
            "low": 176.99,
            "volume": 13064410,
            "uOpen": 185.51,
            "uClose": 178.97,
            "uHigh": 186.68,
            "uLow": 176.99,
            "uVolume": 13064410,
            "change": -6.19,
            "changePercent": -3.3431,
            "label": "Jun 3",
            "changeOverTime": -0.071395
        },
        {
            "date": "2019-06-04",
            "open": 181.1,
            "close": 193.6,
            "high": 193.98,
            "low": 179.61,
            "volume": 13807522,
            "uOpen": 181.1,
            "uClose": 193.6,
            "uHigh": 193.98,
            "uLow": 179.61,
            "uVolume": 13807522,
            "change": 14.63,
            "changePercent": 8.1746,
            "label": "Jun 4",
            "changeOverTime": 0.004514
        },
        {
            "date": "2019-06-05",
            "open": 198.68,
            "close": 196.59,
            "high": 201.27,
            "low": 191.84,
            "volume": 13510756,
            "uOpen": 198.68,
            "uClose": 196.59,
            "uHigh": 201.27,
            "uLow": 191.84,
            "uVolume": 13510756,
            "change": 2.99,
            "changePercent": 1.5444,
            "label": "Jun 5",
            "changeOverTime": 0.020028
        },
        {
            "date": "2019-06-06",
            "open": 204.44,
            "close": 205.95,
            "high": 211,
            "low": 201.8,
            "volume": 20242151,
            "uOpen": 204.44,
            "uClose": 205.95,
            "uHigh": 211,
            "uLow": 201.8,
            "uVolume": 20242151,
            "change": 9.36,
            "changePercent": 4.7612,
            "label": "Jun 6",
            "changeOverTime": 0.068593
        },
        {
            "date": "2019-06-07",
            "open": 205,
            "close": 204.5,
            "high": 210.84,
            "low": 203.49,
            "volume": 16003527,
            "uOpen": 205,
            "uClose": 204.5,
            "uHigh": 210.84,
            "uLow": 203.49,
            "uVolume": 16003527,
            "change": -1.45,
            "changePercent": -0.7041,
            "label": "Jun 7",
            "changeOverTime": 0.06107
        },
        {
            "date": "2019-06-10",
            "open": 210.25,
            "close": 212.88,
            "high": 216.94,
            "low": 209.01,
            "volume": 10585039,
            "uOpen": 210.25,
            "uClose": 212.88,
            "uHigh": 216.94,
            "uLow": 209.01,
            "uVolume": 10585039,
            "change": 8.38,
            "changePercent": 4.0978,
            "label": "Jun 10",
            "changeOverTime": 0.10455
        },
        {
            "date": "2019-06-11",
            "open": 219.14,
            "close": 217.1,
            "high": 220.9,
            "low": 213.5,
            "volume": 11653537,
            "uOpen": 219.14,
            "uClose": 217.1,
            "uHigh": 220.9,
            "uLow": 213.5,
            "uVolume": 11653537,
            "change": 4.22,
            "changePercent": 1.9823,
            "label": "Jun 11",
            "changeOverTime": 0.126446
        },
        {
            "date": "2019-06-12",
            "open": 222.95,
            "close": 209.26,
            "high": 223.38,
            "low": 209,
            "volume": 15197544,
            "uOpen": 222.95,
            "uClose": 209.26,
            "uHigh": 223.38,
            "uLow": 209,
            "uVolume": 15197544,
            "change": -7.84,
            "changePercent": -3.6112,
            "label": "Jun 12",
            "changeOverTime": 0.085768
        },
        {
            "date": "2019-06-13",
            "open": 210.38,
            "close": 213.91,
            "high": 214.9,
            "low": 207.51,
            "volume": 8168260,
            "uOpen": 210.38,
            "uClose": 213.91,
            "uHigh": 214.9,
            "uLow": 207.51,
            "uVolume": 8168260,
            "change": 4.65,
            "changePercent": 2.2221,
            "label": "Jun 13",
            "changeOverTime": 0.109895
        },
        {
            "date": "2019-06-14",
            "open": 211.25,
            "close": 214.92,
            "high": 216.65,
            "low": 210.4,
            "volume": 7433402,
            "uOpen": 211.25,
            "uClose": 214.92,
            "uHigh": 216.65,
            "uLow": 210.4,
            "uVolume": 7433402,
            "change": 1.01,
            "changePercent": 0.4722,
            "label": "Jun 14",
            "changeOverTime": 0.115135
        },
        {
            "date": "2019-06-17",
            "open": 215.48,
            "close": 225.03,
            "high": 227,
            "low": 214.27,
            "volume": 12316803,
            "uOpen": 215.48,
            "uClose": 225.03,
            "uHigh": 227,
            "uLow": 214.27,
            "uVolume": 12316803,
            "change": 10.11,
            "changePercent": 4.7041,
            "label": "Jun 17",
            "changeOverTime": 0.167592
        },
        {
            "date": "2019-06-18",
            "open": 228.72,
            "close": 224.74,
            "high": 234.74,
            "low": 222.56,
            "volume": 12715788,
            "uOpen": 228.72,
            "uClose": 224.74,
            "uHigh": 234.74,
            "uLow": 222.56,
            "uVolume": 12715788,
            "change": -0.29,
            "changePercent": -0.1289,
            "label": "Jun 18",
            "changeOverTime": 0.166087
        },
        {
            "date": "2019-06-19",
            "open": 225.11,
            "close": 226.43,
            "high": 227.77,
            "low": 221.06,
            "volume": 6575135,
            "uOpen": 225.11,
            "uClose": 226.43,
            "uHigh": 227.77,
            "uLow": 221.06,
            "uVolume": 6575135,
            "change": 1.69,
            "changePercent": 0.752,
            "label": "Jun 19",
            "changeOverTime": 0.174856
        },
        {
            "date": "2019-06-20",
            "open": 223,
            "close": 219.62,
            "high": 226.9,
            "low": 216.35,
            "volume": 11863462,
            "uOpen": 223,
            "uClose": 219.62,
            "uHigh": 226.9,
            "uLow": 216.35,
            "uVolume": 11863462,
            "change": -6.81,
            "changePercent": -3.0076,
            "label": "Jun 20",
            "changeOverTime": 0.139522
        },
        {
            "date": "2019-06-21",
            "open": 216.22,
            "close": 221.86,
            "high": 222.18,
            "low": 215.5,
            "volume": 8202078,
            "uOpen": 216.22,
            "uClose": 221.86,
            "uHigh": 222.18,
            "uLow": 215.5,
            "uVolume": 8202078,
            "change": 2.24,
            "changePercent": 1.0199,
            "label": "Jun 21",
            "changeOverTime": 0.151144
        }
    ]

    var labelList = []
    for (let i = 0; i<json.length; i++) {
        labelList.push(json[i].date);
    }
    
    var ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
          labels: labelList,
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Stock 1",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267],
            label: "Stock 2",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734],
            label: "Stock 3",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [40,20,10,16,24,38,74,167,508,784],
            label: "Stock 4",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [6,3,2,2,7,26,82,172,312,433],
            label: "Stock 5",
            borderColor: "#c45850",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: `Previous Month's Stock Prices for IDK`
        }
      }
    });

  }

  // searchStock() {
  //   this.stocks.retrieveStockList(this.stockSearch).subscribe(data => {
  //     console.log(data)
  //   });
  // }

  buyStock() {
    this.stocks.returnStocks(this.stockSearch).subscribe(data => {
      console.log(data)}
      );
  }
}

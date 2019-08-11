import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  accountId: number;
  accountData: any[] = [];
  assetData: any[] = [];
  assetValues: any[] = [];
  historicalData: any[] = [];
  historicalPrice: any[] = [];
  historicalDate: any[] = [];
  showSpinner: boolean = true;
  chart: Chart;
  companyName: any[] = [];
  holdingValue: any[] = [];
  color: any[] = [];
  showGraph: boolean = true;

  constructor(private stocks: StocksService, private data: DataService, private auth: AuthService) {
    this.accountId = this.auth.decodeUser()['account_id']
   }

  ngOnInit() {
    this.data.getAccountData(this.accountId).subscribe((data: any[])=> {
      this.accountData = data;
      console.log(this.accountData['asset_data']);
      console.log(this.accountData['asset_values']);
      console.log(this.accountData);

      this.assetData = this.accountData['asset_data'];
      this.assetValues = this.accountData['asset_values'];

      for (let x=0; x < this.assetData.length; x++) {
          this.companyName.push(this.assetData[x]['company'])
          this.holdingValue.push(this.assetData[x]['holding_value_float'])
          this.color.push("#3e95cd")
      }

      this.chart = new Chart(document.getElementById("myChart"), {
        type: 'bar',
        data: {
          labels: this.companyName,
          datasets: [
            {
              label: "Current Stock Value",
              backgroundColor: this.color,
              data: this.holdingValue
            } 
          ]
        },
        options: {
          layout: {
            padding: {
              bottom: 10
            },
          },
          legend: { display: true },
          title: {
            display: true,
            text: 'Portfolio Holdings'
          }
        }
    });
    this.showSpinner = false;
  });

  this.data.getHistoricalData(this.accountId).subscribe((data: any[])=> {
    this.historicalData = data['daily_info'];
    console.log(this.historicalData);

    for (let x=0; x < this.historicalData.length; x++) {
        this.historicalPrice.push(this.historicalData[x]['date_price'])
        this.historicalDate.push(this.historicalData[x]['date'])
    }
  });
  }

  changeGraph () {
    if (this.showGraph === true) {
      this.chart.config.type = 'line';
      this.chart.config.data.datasets[0].label = 'Portfolio Price History';
      this.chart.config.data.labels = this.historicalDate;
      this.chart.config.data.datasets[0].data = this.historicalPrice;
      this.chart.config.data.datasets[0].pointHitRadius = 20;
      this.chart.config.data.datasets[0].borderColor = '#3e95cd'
      this.chart.config.data.datasets[0].pointBackgroundColor = '#3e95cd'
      this.chart.config.data.datasets[0].backgroundColor = 'rgba(62, 149, 205, 0.4)';
      this.chart.update()
      this.showGraph = false;
    } else if (this.showGraph === false) {
      this.chart.config.type = 'bar';
      this.chart.data.datasets[0].label = 'Current Stock Value';
      this.chart.config.data.labels = this.companyName;
      this.chart.config.data.datasets[0].data = this.holdingValue;
      this.chart.config.data.datasets[0].backgroundColor = this.color;
      this.chart.update()
      this.showGraph = true;
    }

  }


}

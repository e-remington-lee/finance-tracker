import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  accountId = 1;
  accountData: any[] = [];
  assetData: any[] = [];
  assetValues: any[] = [];

  constructor(private stocks: StocksService, private data: DataService) { }

  ngOnInit() {
    this.data.getAccountData(this.accountId).subscribe((data: any[])=> {
      this.accountData = data;
      // console.log(this.accountData['asset_data']);
      // console.log(this.accountData['asset_values']);
      // console.log(this.accountData);
      
      this.assetData = this.accountData['asset_data'];
      this.assetValues = this.accountData['asset_values'];

      var companyName = [];
      var holdingValue = [];
      var color = []

      for (let x=0; x < this.assetData.length; x++) {
          companyName.push(this.assetData[x]['company'])
          holdingValue.push(this.assetData[x]['holding_value_float'])
          color.push("#3e95cd")
      }

      new Chart(document.getElementById("myChart"), {
        type: 'bar',
        data: {
          labels: companyName,
          datasets: [
            {
              label: "Current Stock Value",
              backgroundColor: color,
              data: holdingValue
            }
          ]
        },
        options: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Portfolio Holdings'
          }
        }
    });
      
    });
  }

}

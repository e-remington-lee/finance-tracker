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

  constructor(private stocks: StocksService, private data: DataService) { }

  ngOnInit() {
    // this.data.getAccountData(this.accountId).subscribe((data: any[])=> {
    //   this.accountData = data;
    // });
  }

}

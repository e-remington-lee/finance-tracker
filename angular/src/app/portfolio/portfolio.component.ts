import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  stockSearch ='TSLA';

  constructor(private stocks: StocksService) { }

  ngOnInit() {

  }

  searchStock() {
    this.stocks.retrieveStockList(this.stockSearch).subscribe(data => {
      console.log(data)
    });
  }

  buyStock() {
    this.stocks.returnStocks(this.stockSearch).subscribe(data => {
      console.log(data)}
      );
  }
}

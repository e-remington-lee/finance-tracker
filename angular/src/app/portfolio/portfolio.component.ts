import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private stocks: StocksService) { }

  ngOnInit() {
    this.stocks.returnStocks().subscribe(data => {
      console.log(data)}
      );
  }
}

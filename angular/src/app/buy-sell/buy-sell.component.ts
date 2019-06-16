import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {

  TSLA: any[] =[];
  AMZN: any[] =[];
  FB: any[] =[];
  username = 'Remington';
  shares: number;


  constructor(private stocks: StocksService) { }

  ngOnInit() {
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

  buyStockButton(symbol) {
    this.stocks.buyStock(symbol, this.username).subscribe(data => {
      console.log(data);
    });
  }

  buyStockButton2(symbol) {
    this.stocks.buyStock2(symbol, this.username, this.shares).subscribe(data => {
      console.log(data);
    });
    
  }
}

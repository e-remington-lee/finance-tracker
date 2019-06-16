import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { type } from 'os';

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

  buyStockButton2(symbol) {
    if (Number.isInteger(this.shares) != true || this.shares == 0) {
      alert('Must be a whole number');
      return false
    } else {
      this.stocks.buyStock2(symbol, this.username, this.shares).subscribe(data => {
        console.log(data);
        this.shares = 0
    });
  }
}

}

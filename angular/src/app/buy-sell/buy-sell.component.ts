import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss']
})
export class BuySellComponent implements OnInit {

  stockName='Tesla';
  stockID='TSLA';

  constructor() { }

  ngOnInit() {
  }

}

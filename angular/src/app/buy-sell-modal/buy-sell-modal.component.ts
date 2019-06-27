import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-sell-modal',
  templateUrl: './buy-sell-modal.component.html',
  styleUrls: ['./buy-sell-modal.component.scss']
})
export class BuySellModalComponent implements OnInit {

  @Input() symbol: any[]=[];
  @Input() buyTarget: string;
  @Input() sellTarget: string;

  constructor() { }

  ngOnInit() {
  }

}

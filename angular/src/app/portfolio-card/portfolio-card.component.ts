import { Component, OnInit, Input} from '@angular/core';
import { BuySellComponent } from '../buy-sell/buy-sell.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input() stock: any;
  // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private buySell: BuySellComponent, private router: Router) {
   }

  ngOnInit() {
  }

  trade(): void {
    sessionStorage.setItem('symbol', this.stock['symbol'])
    // this.notify.emit(this.stock['symbol'])
    this.router.navigate(['/buySell']);
  }

}

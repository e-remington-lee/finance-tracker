import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sell-modal',
  templateUrl: './sell-modal.component.html',
  styleUrls: ['./sell-modal.component.scss']
})
export class SellModalComponent implements OnInit {

  symbol: any[] = [];
  TSLA: any[] = [];
  AMZN: any[] = [];
  FB: any[] = [];
  searchStockData: any[] = [];
  username = 'Remington';
  accountId: number;
  shares: number;
  errorMessage: string;
  

  constructor(private stocks: StocksService, private data: DataService, private ngbActiveModal: NgbActiveModal,
     private auth: AuthService) {
       this.accountId = this.auth.decodeUser()['account_id'];
      }

  ngOnInit() {
    console.log(this.symbol);
  }

  sellStockButton() {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      this.errorMessage = 'Must be a positive whole number';
      return false
    } else {
      this.data.checkStock(this.symbol[0]['symbol'], this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          this.symbol[0]['accountId']= this.accountId;
          this.symbol[0]['shares'] = this.shares;
          this.symbol[0]['type'] = 'sell';
          this.stocks.sellStock(this.symbol).subscribe();
          this.stocks.updateBalanceSell(this.symbol).subscribe();
          this.stocks.transactions(this.symbol).subscribe();
          this.shares=0
          this.ngbActiveModal.close();
        }
      },
      error => {
        if (error.status == 404 || error.status === 500) {
          this.errorMessage = 'Sell failed: Insufficient share quantity';
          this.shares = 0;
          return false
        }
      },
      () => {
        alert(`Successfully sold ${this.symbol[0]['shares']} shares(s) of ${this.symbol[0]['company']}`)
      });
    }
    
  }

  closeModal() {
    this.ngbActiveModal.close();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataService } from '../data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-buy-modal',
  templateUrl: './buy-modal.component.html',
  styleUrls: ['./buy-modal.component.scss']
})
export class BuyModalComponent implements OnInit {

  symbol: any[]=[];
  accountId: number;
  shares: number;
  
  constructor(private stocks: StocksService, private data: DataService, private ngbActiveModal: NgbActiveModal,
     private auth: AuthService) {
      this.accountId = this.auth.decodeUser()['account_id'];
      }

  ngOnInit() {
    console.log(this.symbol);
  }

  buyStockButton() {
    if (Number.isInteger(this.shares) != true || this.shares == 0 || Math.sign(this.shares) == -1) {
      alert('Must be a positive whole number');
      this.ngbActiveModal.close();
      this.shares=0;
      return false
    } else {
      this.data.checkBalance(this.symbol[0]['symbol'], this.accountId, this.shares).subscribe(resp => {
        if (resp.status == 200) {
          this.symbol[0]['type'] = 'buy'
          this.symbol[0]['accountId'] = this.accountId
          this.symbol[0]['shares'] = this.shares

          console.log(this.symbol)
          this.stocks.buyStock2(this.symbol).subscribe();
          this.stocks.updateBalanceBuy(this.symbol).subscribe();
          this.stocks.transactions(this.symbol).subscribe();
          this.shares=0;  
          alert(`Successful Purchase of ${this.symbol[0]['shares']} Shares(s) of ${this.symbol[0]['company']}`)
        }
      },
      error => {
        if (error.status == 404 || error.status === 500) {
          alert('Purchase Failed: Insufficient Funds')
          this.shares = 0;
        }
      });
  }
  this.ngbActiveModal.close();
}

  closeModal() {
    this.ngbActiveModal.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EthService } from '../services/eth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fiat = 'USD'
  ethereum$: Observable<Crypto>;
  public nbreth : number;

  constructor(private ethProv: EthService) {}
  ngOnInit() {
    this.getEthPrice();
  }

  getEthPrice() {
    this.ethereum$ = this.ethProv.getEthPrice(this.fiat);
  }
}


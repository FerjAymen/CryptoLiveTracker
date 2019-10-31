import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  fiat = 'USD';
  bitcoin$: Observable<Crypto>;
  public nbrbtc: number;
  public nbrfiat: number;
  constructor(private bitcoinProv: BitcoinService) {}

  ngOnInit() {
    this.getBitcoinPrice();
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProv.getBitoinPrice(this.fiat);
  }
}

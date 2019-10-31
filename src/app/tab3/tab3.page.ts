import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { XrpService } from '../services/ripple.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  fiat = 'USD'
  ripple$: Observable<Crypto>;
  public nbrxrp : number;



  constructor(private xrpProv: XrpService) {}
  ngOnInit() {
    this.getXrpPrice();
  }

  getXrpPrice() {
    this.ripple$ = this.xrpProv.getXrpPrice(this.fiat);
  }
  convertToFiat() {
    this.ripple$ = this.xrpProv.getXrpPrice(this.fiat);
  }
}
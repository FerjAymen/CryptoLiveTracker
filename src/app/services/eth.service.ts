import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EthService {
  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' ;

  constructor(private http: HttpClient) { }
  
  getEthPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}${fiat}`);
  }
}
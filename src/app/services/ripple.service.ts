import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XrpService {
  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/XRP' ;

  constructor(private http: HttpClient) { }
  
  getXrpPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}${fiat}`);
  }
}
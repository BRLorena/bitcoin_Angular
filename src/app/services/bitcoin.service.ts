import { HistoryData } from './../_models/history';
import { CoinData } from './../_models/bitcoin';
import { LitsBitcoin } from './../_models/list';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  private getListUrl: string = `${environment.getList}${environment.key}`;


  constructor(private http: HttpClient) {}


  getList(): Observable<LitsBitcoin> {
    return this.http.get<LitsBitcoin>(this.getListUrl);
  }

  getCoin(id: number):Observable<CoinData> {
    return this.http.get<CoinData>(environment.getCoinUrl + id + environment.key);
  }

  getHistory(id: string):Observable<HistoryData> {
    return this.http.get<HistoryData>(environment.getCoinUrl + id + environment.getHistoryUrl + environment.key);
  }
}

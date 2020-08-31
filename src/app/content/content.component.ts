import {  ListCoins } from './../_models/list';
import { Coin } from './../_models/bitcoin';
import { History} from './../_models/history';
import { BitcoinService } from './../services/bitcoin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
   public listCoins: ListCoins[];
   public coin: Coin;
   public history: History[];

  constructor(
    public BitcoinService: BitcoinService,
    ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){this.BitcoinService.getList()
  .subscribe((data) => this.listCoins = data.data.coins);
  }

  getCoin(id: number){
    this.BitcoinService.getCoin(id)
    .subscribe((data) => this.coin = data.data.coin);
  }

  getHistory(id: string){
    this.BitcoinService.getHistory(id)
    .subscribe((data) => {
      this.history = data.data.history;
    });
  }

}

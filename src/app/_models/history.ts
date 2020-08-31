export class History {
  price: string;
  timestamp: number;

}
export class HistoryData {
  data: {
    history: [
      {
        price: string;
        timestamp: number;
      }
    ]
  }
}


//data => this.historyCoins = data.history
//data.history

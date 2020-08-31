export class Coin { // Resposta da API
  id: string;
  slug: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconType: string;
  websiteUrl: string;
}

export class CoinData { // Tratativa da API: Aquilo que vou usar
  data: {
    coin: Coin;
  }
}

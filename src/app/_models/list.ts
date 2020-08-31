export class LitsBitcoin {// Resposta da API
  status: string;
  data: {
    coins: [
      {
        id: number;
        name: string;
      }
    ]
  };
}

export class ListCoins {// Tratativa da API: Aquilo que vou usar
  id: number;
  name: string;
}


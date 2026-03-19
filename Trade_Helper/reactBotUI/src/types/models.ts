export interface Trade {
  symbol: string;
  price: number;
  quantity: number;
  side: string;
  strategy: string;
}

export interface Portfolio {
  cash: number;
  positions: Record<string, number>;
  trades: Trade[];
}
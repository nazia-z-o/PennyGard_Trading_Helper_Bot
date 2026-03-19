import { useEffect, useState } from "react";
import { runTrading } from "../services/api";

export const useTradingData = (symbols: string[]) => {
  const [portfolio, setPortfolio] = useState<any>(null);
  const [equityHistory, setEquityHistory] = useState<number[]>([]);
  const [priceHistory, setPriceHistory] = useState<Record<string, number[]>>({});

  useEffect(() => {
    if (symbols.length === 0) return;

    const interval = setInterval(async () => {
        try {
            const res = await runTrading(symbols);
            const data = res.data;

            setPortfolio(data);

            // equity tracking
            setEquityHistory(prev => [...prev, data.cash]);

            // price tracking per symbol
            symbols.forEach((s: string) => {
                const price = data.trades?.slice(-1)[0]?.price || 0;

                setPriceHistory(prev => ({
                    ...prev,
                    [s]: [...(prev[s] || []), price]
                }));
            });
        }
        catch (err) {
            console.error("API ERROR:", err);
        }
     
    }, 2000);

    return () => clearInterval(interval);
  }, [symbols]);

  return { portfolio, equityHistory, priceHistory };
};
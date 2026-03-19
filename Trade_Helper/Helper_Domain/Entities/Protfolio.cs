namespace Helper_Domain.Entities;

public class Portfolio
{
    public decimal Cash { get; private set; }
    public Dictionary<string, decimal> Positions { get; } = new();
    public List<Trade> Trades { get; } = new();

    public Portfolio(decimal startingCash)
    {
        Cash = startingCash;
    }

    public void Buy(string symbol, decimal qty, decimal price, string strategy)
    {
        var cost = qty * price;
        if (Cash < cost) return;

        Cash -= cost;

        if (!Positions.ContainsKey(symbol))
            Positions[symbol] = 0;

        Positions[symbol] += qty;

        Trades.Add(new Trade
        {
            Symbol = symbol,
            Price = price,
            Quantity = qty,
            Side = "BUY",
            Strategy = strategy
        });
    }

    public void Sell(string symbol, decimal price, string strategy)
    {
        if (!Positions.ContainsKey(symbol)) return;

        var qty = Positions[symbol];
        Cash += qty * price;

        Positions[symbol] = 0;

        Trades.Add(new Trade
        {
            Symbol = symbol,
            Price = price,
            Quantity = qty,
            Side = "SELL",
            Strategy = strategy
        });
    }
}

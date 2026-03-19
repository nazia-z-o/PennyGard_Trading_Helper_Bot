

using Helper_Application.Interfaces;
using Helper_Domain.Entities;
using Helper_Domain.Enums;

namespace Helper_Application.Services
{
    public class PortfolioService : IPortfolioService
    {
        private readonly Portfolio _portfolio = new(10000);
        private const decimal MaxPercent = 0.2m;

        public void Execute(string symbol, decimal price, TradeSignal signal, string strategy)
        {
            var allocation = _portfolio.Cash * MaxPercent;

            if (signal == TradeSignal.Buy && _portfolio.Cash > 0)
            {
                var qty = allocation / price;
                _portfolio.Buy(symbol, qty, price, strategy);
            }

            if (signal == TradeSignal.Sell)
            {
                _portfolio.Sell(symbol, price, strategy);
            }
        }

        public Portfolio Get() => _portfolio;
    }
}

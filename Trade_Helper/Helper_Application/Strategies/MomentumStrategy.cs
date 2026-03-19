using Helper_Application.Interfaces;
using Helper_Domain.Enums;


namespace Helper_Application.Strategies
{
    public class MomentumStrategy : IStrategy
    {
        public string Name => "Momentum";

        public TradeSignal GenerateSignal(List<decimal> prices)
        {
            if (prices.Count < 3) return TradeSignal.Hold;

            var diff = prices.Last() - prices[^3];

            if (diff > 1) return TradeSignal.Buy;
            if (diff < -1) return TradeSignal.Sell;

            return TradeSignal.Hold;
        }
    }
}

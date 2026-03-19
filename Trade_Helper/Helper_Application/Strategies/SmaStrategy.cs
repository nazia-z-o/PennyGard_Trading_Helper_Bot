using Helper_Application.Interfaces;
using Helper_Domain.Enums;

namespace Helper_Application.Strategies
{
    public class SmaStrategy : IStrategy
    {
        public string Name => "SMA";

        public TradeSignal GenerateSignal(List<decimal> prices)
        {
            if (prices.Count < 3) return TradeSignal.Hold;

            var shortAvg = prices.TakeLast(2).Average();
            var longAvg = prices.TakeLast(3).Average();

            if (shortAvg > longAvg) return TradeSignal.Buy;
            if (shortAvg < longAvg) return TradeSignal.Sell;

            return TradeSignal.Hold;
        }
    }
}

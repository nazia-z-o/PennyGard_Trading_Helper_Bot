using Helper_Application.Strategies;
using Helper_Domain.Enums;

namespace Trade_UnitTests
{
    public class SmaStrategyTests
    {
        [Fact]
        public void Returns_Buy_When_ShortAboveLong()
        {
            var strategy = new SmaStrategy();

            var prices = Enumerable.Range(1, 20)
                .Select(x => (decimal)x)
                .ToList();

            var result = strategy.GenerateSignal(prices);

            Assert.Equal(TradeSignal.Buy, result);
        }
    }
}
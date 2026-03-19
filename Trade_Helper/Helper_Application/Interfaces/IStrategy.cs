

using Helper_Domain.Enums;

namespace Helper_Application.Interfaces
{
    public interface IStrategy
    {
        string Name { get; }
        TradeSignal GenerateSignal(List<decimal> prices);
    }
}

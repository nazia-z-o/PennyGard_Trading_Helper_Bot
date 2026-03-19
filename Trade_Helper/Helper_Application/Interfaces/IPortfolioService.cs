using Helper_Domain.Entities;
using Helper_Domain.Enums;

namespace Helper_Application.Interfaces
{
    public interface IPortfolioService
    {
        void Execute(string symbol, decimal price, TradeSignal signal, string strategy);
        Portfolio Get();
    }
}

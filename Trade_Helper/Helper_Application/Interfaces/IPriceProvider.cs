

namespace Helper_Application.Interfaces
{
    public interface IPriceProvider
    {
        Task<decimal> GetPriceAsync(string symbol);
    }
}

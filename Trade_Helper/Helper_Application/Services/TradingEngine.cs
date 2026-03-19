using Helper_Application.Interfaces;
using Helper_Domain.Enums;
using System.Diagnostics;


namespace Helper_Application.Services
{
    public class TradingEngine
    {
        private readonly IPriceProvider _priceProvider;
        private readonly IEnumerable<IStrategy> _strategies;
        private readonly IPortfolioService _portfolio;

        private readonly Dictionary<string, List<decimal>> _history = new();

        public TradingEngine(
            IPriceProvider priceProvider,
            IEnumerable<IStrategy> strategies,
            IPortfolioService portfolio)
        {
            _priceProvider = priceProvider;
            _strategies = strategies;
            _portfolio = portfolio;
        }

        private readonly object _lock = new();
        public async Task RunAsync(List<string> symbols)
        {
            var tasks = symbols.Select(async symbol =>
            {
                var price = await _priceProvider.GetPriceAsync(symbol);
                Console.WriteLine($"Processing {symbol}");
                Console.WriteLine($"Price: {price}");

                lock (_lock)
                {
                     if (!_history.ContainsKey(symbol))
                            _history[symbol] = new ();

                             _history[symbol].Add(price);
                    Console.WriteLine($"History count: {_history[symbol].Count}");
                }
   

                foreach (var strategy in _strategies)
                {
                    var signal = strategy.GenerateSignal(_history[symbol]);

                    Console.WriteLine($"Strategy: {strategy.Name}, Signal: {signal}");

                    if (signal != TradeSignal.Hold)
                    {
                        Console.WriteLine("EXECUTING TRADE");

                        _portfolio.Execute(symbol, price, signal, strategy.Name);
                    }
                }
            });

            await Task.WhenAll(tasks);
        }
    }
}

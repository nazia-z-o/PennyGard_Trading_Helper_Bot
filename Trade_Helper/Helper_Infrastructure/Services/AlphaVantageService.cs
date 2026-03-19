using Helper_Application.Interfaces;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;

namespace Helper_Infrastructure.Services
{
    public class AlphaVantageService : IPriceProvider
    {
        private readonly HttpClient _http;
        private readonly string _apiKey;

        public AlphaVantageService(HttpClient http, IConfiguration config)
        {
            _http = http;
            _apiKey = config["AlphaVantage:ApiKey"];
        }

        private static readonly Random _rand = new();
        private static readonly Dictionary<string, decimal> _lastPrices = new();

        public async Task<decimal> GetPriceAsync(string symbol)
        {
            try
            {
                var url = $"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={_apiKey}";

                var json = await _http.GetStringAsync(url);
                var obj = JObject.Parse(json);

                var priceToken = obj["Global Quote"]?["05. price"];

                if (priceToken != null)
                {
                    var realPrice = decimal.Parse(priceToken.ToString());

                    // ✅ add slight movement for realism
                    var noise = (decimal)(_rand.NextDouble() - 0.5) * 5;
                    var adjusted = realPrice + noise;

                    _lastPrices[symbol] = adjusted;

                    return adjusted;
                }

                throw new Exception("API limit hit");
            }
            catch
            {
                // ✅ fallback with trend simulation
                if (!_lastPrices.ContainsKey(symbol))
                    _lastPrices[symbol] = 100;

                var change = (decimal)(_rand.NextDouble() - 0.5) * 5;

                _lastPrices[symbol] += change;

                return _lastPrices[symbol];
            }
        }
    }
}

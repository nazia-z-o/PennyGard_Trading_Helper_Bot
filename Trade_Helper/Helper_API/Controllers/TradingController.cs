using Helper_Application.Interfaces;
using Helper_Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace Helper_API.Controllers
{
    [ApiController]
    [Route("api/trading")]
    public class TradingController : ControllerBase
    {
        private readonly TradingEngine _engine;
        private readonly IPortfolioService _portfolio;

        public TradingController(TradingEngine engine, IPortfolioService portfolio)
        {
            _engine = engine;
            _portfolio = portfolio;
        }
        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("API is working");
        }

        [HttpPost("run")]
        public async Task<IActionResult> Run([FromBody] List<string> symbols)
        {
            await _engine.RunAsync(symbols);
            return Ok(_portfolio.Get());
        }
    }
}

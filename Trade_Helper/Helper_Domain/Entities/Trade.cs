namespace Helper_Domain.Entities;

public class Trade
{
    public string Symbol { get; set; }
    public decimal Price { get; set; }
    public decimal Quantity { get; set; }
    public string Side { get; set; }
    public string Strategy { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;
}

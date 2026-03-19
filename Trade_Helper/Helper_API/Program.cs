using Helper_Application.Interfaces;
using Helper_Application.Services;
using Helper_Application.Strategies;
using Helper_Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// Add CORS for React Dev Server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

// Add services
builder.Services.AddHttpClient<IPriceProvider, AlphaVantageService>();
builder.Services.AddSingleton<IPortfolioService, PortfolioService>();
builder.Services.AddSingleton<TradingEngine>();
builder.Services.AddSingleton<IStrategy, SmaStrategy>();
builder.Services.AddSingleton<IStrategy, MomentumStrategy>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger for dev
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS
app.UseCors("AllowReact");

// Serve React static files
app.UseDefaultFiles();      // Serve index.html by default
app.UseStaticFiles();       // Serve wwwroot content (assets, JS, CSS)

// API endpoints
app.MapControllers();

// Fallback to index.html for React Router
app.MapFallbackToFile("index.html");

// Test endpoint
app.MapGet("/test", () => "API is working ✅");

app.Run();
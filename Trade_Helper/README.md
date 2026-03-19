# 📈 PennyGard Trading Bot

## 🚀 Overview

PennyGard is a full-stack paper trading application built using **.NET Core (backend)** and **React + TypeScript (frontend)**.

The system simulates algorithmic trading strategies, executes trades on a virtual portfolio, and visualizes performance through an interactive dashboard.

---

## 🧠 Features

* 📊 Live / simulated price data ingestion
* ⚙️ Pluggable trading strategies:

  * Simple Moving Average (SMA)
  * Momentum Strategy
* 💼 Paper trading portfolio:

  * Tracks positions
  * Realized & unrealized P&L
  * Trade history
* 🛡️ Risk management:

  * Max position size
  * Stop-loss logic
* 📉 Interactive charts:

  * Price charts per symbol
  * Portfolio equity curve
* 🌐 Full-stack UI dashboard (React)

---

## 🏗️ Architecture

### Backend (.NET Core)

* **Controllers** → API endpoints
* **Services** → Trading engine, portfolio logic
* **Strategies** → Pluggable strategy pattern (`IStrategy`)
* **Infrastructure** → Price provider (API or simulated)

### Frontend (React + Vite + TypeScript)

* **Components**:

  * SymbolSelector
  * PortfolioSummary
  * PositionsGrid
  * TradesTable
  * PriceChart
  * EquityChart
* **Hooks**:

  * `useTradingData` for API integration

---

## 📂 Project Structure

```
Trade_Helper/
├─ Helper_Application/ # .NET Class Library backend
├─ Helper_Domain/  # .NET Class Library backend
├─ Helper_Infrastructure/   # .NET Class Library backend
├─ Helper_API/         # .NET backend
├─ reactBotUI/       # React frontend
└─ README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Backend

```bash
cd Helper_API
dotnet restore
dotnet run
```

Backend runs on:

```
http://localhost:5142
```

---

### 🔹 2. Frontend (Development Mode)

```bash
cd reactBotUI
npm install
npm run dev
```



---

### 🔹 3. Production Mode (Combined App)

```bash
cd reactBotUI
npm run build
```

Copy build to backend:

```powershell
Remove-Item -Recurse -Force ..\Helper_API\wwwroot\*

Copy-Item -Recurse -Force .\dist\* ..\Helper_API\wwwroot\
```

Run backend:

```bash
cd ../Helper_API
dotnet run
```

Open:

```
http://localhost:5142
```

---


## 🤖 AI Tools Used

* ChatGPT (primary tool)
  * Understand Trading Processed
  * Designed system architecture
  * Generated initial C# service and strategy code
  * Assisted in React UI structure
  * Helped debug integration issues (.NET + Vite)

---

## ⚠️ Limitations

* Uses polling instead of real-time streaming
* Basic risk management logic
* No authentication or user accounts
* Limited historical backtesting

---

## 🔮 Future Improvements

* Real-time updates using SignalR
* Backtesting engine with historical data
* Advanced strategies (RSI, ML-based)
* Docker containerization
* Cloud deployment (Azure)

---



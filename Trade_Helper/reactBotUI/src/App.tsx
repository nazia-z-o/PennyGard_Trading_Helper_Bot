import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

import { useState } from "react";
import { useTradingData } from "./hooks/useTradingData";
import { SymbolSelector } from "./components/SymbolSelector";
import { PortfolioSummary } from "./components/PortfolioSummary";
import { PositionsGrid } from "./components/PositionsGrid";
import { TradesTable } from "./components/TradesTable";
import { PriceChart } from "./components/PriceChart";
import { EquityChart } from "./components/EquityChart";
import  logo from "./assets/PennyGard.png";
function App() {
    const [symbols, setSymbols] = useState<string[]>([]);
    const data = useTradingData(symbols) || {};

    const portfolio = data.portfolio;
    const equityHistory = data.equityHistory || [];
    const priceHistory = data.priceHistory || {};
    
    return (
        <div style={{ padding: 20, background: "#0f172a", minHeight: "100vh", width: "100%", boxSizing: "border-box" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: 20, marginTop:30 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Logo */}
                    <img
                        src={logo}
                        style={{ width: 50, height: 50, objectFit: "contain", borderRadius: "30%" }}
                    />
                    {/* Dashboard Title */}
                    <h1 style={{ color: "white", margin: 0, fontSize: 36 }}>PennyGard Trading</h1>
                </div>
            </div>
            <SymbolSelector symbols={symbols} setSymbols={setSymbols} />
            <PortfolioSummary portfolio={portfolio} />
            <div style={{ display: "flex", gap: 16, width: "100%" }}>
               
                {/* Left Side: Positions + Charts */}
                <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: 16, alignItems: 'flex-start' }}>
                    
                    <div style={{ width: "100%" }}>
                        {equityHistory && equityHistory.length > 0 && <EquityChart  history={equityHistory} />}
                    </div>
                        
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                            gap: 16,
                            width: "100%",
                        }}
                    >
                        {Object.keys(priceHistory || {}).map((symbol) => (
                            <div key={symbol} style={{ width: "100%", padding:10 }}>
                                <PriceChart symbol={symbol} data={priceHistory[symbol]} />
                            </div>
                        ))}
                    </div>
                    
                </div>

                {/* Right Side: Trades Table */}
                <div style={{ flex: 1 }}>
                    {portfolio &&  <PositionsGrid positions={portfolio?.positions} />}
                    {portfolio && portfolio.trades.length > 0 && <TradesTable trades={portfolio?.trades} />}
                </div>
            </div>
        </div>
    );
}

export default App;
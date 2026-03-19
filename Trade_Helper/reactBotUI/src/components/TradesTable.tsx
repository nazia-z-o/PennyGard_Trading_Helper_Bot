import { useState } from "react";

const Card = ({ children }: any) => (
    <div
        style={{
            background: "#1e293b",
            color: "white",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
    >
        {children}
    </div>
);

// Types
interface Trade {
    symbol: string;
    side: "BUY" | "SELL";
    price: number;
    quantity: number;
    strategy: string;
}

export const TradesTable = ({ trades }: { trades: Trade[] }) => {
    const [sortKey, setSortKey] = useState<string>("price");
    const [currentPage, setCurrentPage] = useState(1);

    const rowsPerPage = 100;

    const sortedTrades = [...(trades || [])].sort((a, b) => {
        if (sortKey === "price") return b.price - a.price;
        if (sortKey === "symbol") return a.symbol.localeCompare(b.symbol);
        if (sortKey === "qty") return b.quantity - a.quantity;
        return 0;
    });

    // Pagination logic
    const totalPages = Math.ceil(sortedTrades.length / rowsPerPage);

    const paginatedTrades = sortedTrades.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    return (
        <Card>
            <h3>📈 Trades</h3>

            <div style={{ marginBottom: 10 }}>
                Sort by:
                <select
                    onChange={(e) => {
                        setSortKey(e.target.value);
                        setCurrentPage(1); // reset page on sort
                    }}
                    value={sortKey || ""}
                >
                    <option value="price">Price</option>
                    <option value="symbol">Symbol</option>
                    <option value="qty">Quantity</option>
                </select>
            </div>

            {/* Scrollable table */}
            <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Side</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Strategy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedTrades.map((t, i) => (
                            <tr key={i}>
                                <td>{t.symbol}</td>
                                <td
                                    style={{
                                        color: t.side === "BUY" ? "#22c55e" : "#ef4444"
                                    }}
                                >
                                    {t.side}
                                </td>
                                <td>${t.price.toFixed(2)}</td>
                                <td>{t.quantity}</td>
                                <td>{t.strategy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div
                style={{
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "center",
                    gap: 12
                }}
            >
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                >
                    ⬅ Prev
                </button>

                <span>
                    Page {currentPage} / {totalPages || 1}
                </span>

                <button
                    onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages || totalPages === 0}
                >
                    Next ➡
                </button>
            </div>
        </Card>
    );
};
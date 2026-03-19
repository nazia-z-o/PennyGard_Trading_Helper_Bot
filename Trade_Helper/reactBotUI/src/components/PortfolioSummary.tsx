const Card = ({ children}: any) => (
    <div style={{ color: "white" }}>
        {children}
    </div>
);
export const PortfolioSummary = ({ portfolio }: any) => {
    if (!portfolio) return null;

    return (
        <Card>
            <h2 style={{ color: "white" }}>💰 Cash: ${portfolio.cash.toFixed(2)}</h2>
            <h3>Trades: {portfolio.trades.length}</h3>
        </Card>
    );
};
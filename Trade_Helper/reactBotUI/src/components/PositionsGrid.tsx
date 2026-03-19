const Card = ({ children }: any) => (
    <div style={{ background: "#1e293b", color: "white", padding: 16, borderRadius: 12, boxShadow: "0 4px 10px rgba(0,0,0,0.3)", height: 'auto', display: 'inline-block', width: 'auto', minWidth: 200, marginBottom: 30 }}>
        {children}
    </div>
);
export const PositionsGrid = ({ positions }: any) => {
  return (
      <Card>
          <h3>📦 Positions</h3>
          <table style={{ width: "auto" }}>
              <thead>
                  <tr>
                      <th>Symbol</th>
                      <th>Qty</th>
                  </tr>
              </thead>
              <tbody>
        {Object.keys(positions || {}).map(symbol => (
          <tr key={symbol}>
            <td>{symbol}</td>
            <td>{positions[symbol]}</td>
          </tr>
        ))}
      </tbody>
          </table>
          </Card>
  );
};
const Card = ({ children }: any) => (
    <div style={{  color: "white" }}>
        {children}
    </div>
);
export const SymbolSelector = ({  setSymbols }: any) => {
  const list = ["AAPL", "MSFT", "TSLA", "AMZN"];

  const toggle = (s: string) => {
    setSymbols((prev: string[]) =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

    return (
        <Card>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: 20, marginTop: 30 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <h3>📊 Select Symbols</h3>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {list.map(s => (
                    <label key={s}>
                        <input type="checkbox" onChange={() => toggle(s)} /> {s}
                    </label>
                ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};
import { Line } from "react-chartjs-2";

const Card = ({ children }: any) => (
    <div
        style={{
            background: "#F0F8FF", // added # for valid color
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
    >
        {children}
    </div>
);

export const EquityChart = ({ history }: any) => {
    if (!history || history.length === 0) return null; // hide if null/empty

    return (
        <Card>
            <h3>📊 Equity Curve</h3>
            <Line
                data={{
                    labels: history.map((_: any, i: number) => i),
                    datasets: [
                        {
                            label: "Equity",
                            data: history,
                            borderColor: "#22c55e", // green line
                            backgroundColor: "rgba(34,197,94,0.2)", // light fill
                            tension: 0.3 // smooth curve
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    },
                    scales: {
                        x: { title: { display: true, text: "Time" } },
                        y: { title: { display: true, text: "Equity ($)" } }
                    }
                }}
            />
        </Card>
    );
};
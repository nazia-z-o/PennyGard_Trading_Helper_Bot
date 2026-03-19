import { Line } from "react-chartjs-2";

const Card = ({ children }: any) => (
    <div
        style={{
            background: "#F0F8FF",
            padding: 16,
            borderRadius: 12,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            width: "100%"
        }}
    >
        {children}
    </div>
);

export const PriceChart = ({ data, symbol }: any) => {
    return (
        <Card>
            <h4>{symbol} Price</h4>
            <Line
                data={{
                    labels: data.map((_: any, i: number) => i),
                    datasets: [
                        {
                            label: symbol,
                            data,
                            borderColor: "#3b82f6",
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            tension: 0.3
                        }
                    ]
                }}
                options={{ responsive: true }}
            />
        </Card>
    );
};
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from "recharts";
import type { ActiveUsersTrendPoint } from "../../../types/analytics";

interface ActiveUsersLineChartProps {
  activeUsersTrendData: ActiveUsersTrendPoint[];
}

const Y_AXIS_MAX = 1400;

export function ActiveUsersLineChart({ activeUsersTrendData }: ActiveUsersLineChartProps) {
  return (  
    <LineChart
      responsive
      style={{
        height: "90%",
        minHeight: 150,
        width: "85%",
        aspectRatio: 1.6,
      }}
      
      data={activeUsersTrendData}
    >
      <CartesianGrid />
      <XAxis 
            dataKey={"dayIndex"}  
            fontSize={8}  
            angle={-45} 
            interval={0}
             />
      <YAxis
        domain={[0, Y_AXIS_MAX]}
        label={{
          value: `Active Users`,
          position: "insideLeft",
          dy: 20,
          angle: -90,
        }}
      />
      <Line dataKey="activeUsers" />
    </LineChart>
  );
}

import { CartesianGrid, XAxis, YAxis, Bar, BarChart, Legend } from "recharts";
import CustomContentOfTooltip from "./Tooltip/CustomTooltip";
import type { tickInterval } from "../../../../pages/DashboardPage/DashboardPage";
import type { CompletionRatePoint } from "../../../../shared/types/analytics";
import type { Category } from "../../../../shared/types/filters";

interface CompletionRateChartProps {
    completionRateData: CompletionRatePoint[];
    category: Category;
    tickInterval: tickInterval 
}

export default function CompletionRateChart({
  completionRateData,
  category,
  tickInterval
}: CompletionRateChartProps) {
  return (
    <BarChart
      data={completionRateData} 
      style={{
        height: "90%",
        minHeight: 150,
        width: "85%",
        aspectRatio: 1.6,
      }}
    >
      <CartesianGrid />
      <XAxis  
          interval={tickInterval} 
          dataKey={"dayIndex"} 
          fontSize={8}
          fontWeight={"bold"} 
          tick={{ fill: '#fff'}} 
          tickLine={{ stroke: '#fff'}} 
          />
      <YAxis
        label={{
          value: `Completion Rate ( % )`,
          position: "insideLeft",
          dy: 90,
          angle: -90,
        }}
      />
      {category === "all" && (
        <>
          <Bar dataKey={"powerUsers"} name={"Power Users"} fill="#3B82F6" />
          <Bar dataKey={"regularUsers"}  name={"Regular Users"} fill="#8B5CF6"/>
          <Bar dataKey={"lightUsers"}  name={"Light Users"} fill="#10B981" />
        </>
      )}
      {category === "powerUsers" && <Bar dataKey={"powerUsers"} name={"Power Users"} fill="#3B82F6" />}
      {category === "regularUsers" && <Bar dataKey={"regularUsers"} name={"Regular Users"} fill="#8B5CF6" />}
      {category === "lightUsers" && <Bar dataKey={"lightUsers"} name={"Light Users"}  fill="#10B981" />}
    <CustomContentOfTooltip complementaryDescription={"des utilisateurs ont complété leurs participations ce jour"} 
                            unitOfMeasurement={"%"} />
    <Legend width={"100%"}/>
    </BarChart>
  );
}

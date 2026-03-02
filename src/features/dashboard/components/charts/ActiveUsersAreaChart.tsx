import { CartesianGrid, XAxis, YAxis, Legend, Area, AreaChart } from "recharts";
import type { ActiveUsersTrendPoint } from "../../../../shared/types/analytics";
import CustomContentOfTooltip from "./Tooltip/CustomTooltip";
import { type Category } from '../../../../shared/types/filters';

interface ActiveUsersAreaChartProps {
  activeUsersTrendData: ActiveUsersTrendPoint[];
  tickInterval: number
  category : Category
  
}

export function ActiveUsersAreaChart({ activeUsersTrendData, tickInterval, category }: ActiveUsersAreaChartProps) {

  return (  
    <AreaChart
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
            interval={tickInterval}
            fontWeight={"bold"} 
            tick={{ fill: '#fff'}} 
            tickLine={{ stroke: '#fff'}} 
             />
      <YAxis
        label={{
          value: `Active Users`,
          position: "insideLeft",
          dy: 20,
          angle: -90,
        }}
      />

            {category === "all" && (
              <>
                <Area  dataKey={"powerUsers"}  name={"Power Users"} fill="#3B82F6" stroke="#3B82F6" />
                <Area dataKey={"regularUsers"}  name={"Regular Users"} fill="#8B5CF6" stroke="#8B5CF6"/>
                <Area dataKey={"lightUsers"}  name={"Light Users"} fill="#10B981" stroke="#10B981" />
              </>
            )}

            {category === "powerUsers" && <Area dataKey={"powerUsers"} name={"Power Users"}fill="#3B82F6" stroke="#3B82F6" />}
            {category === "regularUsers" && <Area dataKey={"regularUsers"} name={"Regular Users"} fill="#8B5CF6" stroke="#8B5CF6" />}
            {category === "lightUsers" && <Area dataKey={"lightUsers"} name={"Light Users"} fill="#10B981" stroke="#10B981"/>}
      <CustomContentOfTooltip />
      <Legend/>
    </AreaChart>
  );
}

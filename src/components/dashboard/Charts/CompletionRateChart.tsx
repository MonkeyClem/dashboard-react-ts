import { CartesianGrid, XAxis, YAxis, Bar, BarChart } from "recharts"
import type { CompletionRatePoint } from '../../../types/analytics';
import type { Category } from "../../../types/filters";


interface CompletionRateChartProps {
    completionRateData : CompletionRatePoint[],
    category : Category
}

export default function CompletionRateChart({completionRateData, category} : CompletionRateChartProps){
    return (   <BarChart
            data={completionRateData}
            style={{
              height: "90%",
              minHeight: 150,
              aspectRatio: 1.6,
            }}
          >
            <CartesianGrid />
            <XAxis angle={-45} interval={0} dataKey={"dayIndex"}  fontSize={8} />
            <YAxis         label={{
          value: `Completion Rate ( % )`,
          position: "insideLeft",
          dy: 20,
          angle: -90,
        }}     domain={[0, 100]}/>
            {category === "all" && (
              <>
                <Bar dataKey={"A"} fill="green" />
                <Bar dataKey={"B"} fill="yellow" />
                <Bar dataKey={"C"} fill="red" />
              </>
            )}
            {category === "A" &&  <Bar dataKey={"A"} fill="green" />}
            {category === "B" &&  <Bar dataKey={"B"} fill="yellow" />}
            {category === "C" &&  <Bar dataKey={"C"} fill="red" />}

          </BarChart>)
}
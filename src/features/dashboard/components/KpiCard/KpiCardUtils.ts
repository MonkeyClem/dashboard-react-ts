import type { ActiveUsersTrendPoint } from "../../../../shared/types/analytics";
import type { Category, PeriodDays } from "../../../../shared/types/filters";
import type { KpiCardProps } from "./KpiCard";

export const buildActiveUsersKpi = (
    activeUsersTrend : ActiveUsersTrendPoint[], 
    category : Category, 
    period : PeriodDays) : KpiCardProps => {
    const activeUsers = activeUsersTrend.map((data) => {
      switch (category) {
        case "lightUsers" : 
          return data.lightUsers;
        case "regularUsers":
          return data.regularUsers
        case "powerUsers" : 
          return data.powerUsers; 
        default:
          return data.powerUsers + data.lightUsers + data.regularUsers;
      }
    }).reduce((prev, curr) => prev + curr , 0)

    const activeUsersMean = activeUsers / period

    return {
      id : 1, 
      label : "Utilisateurs Actifs",
      value : activeUsers,
      hint: `${activeUsersMean.toFixed(0)} par jour en moyenne`,
      provenance: "calculated"
    }
}
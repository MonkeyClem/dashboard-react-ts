import type { ActiveUsersTrendPoint, CompletionRatePoint } from "../../../../shared/types/analytics";
import type { Category, PeriodDays } from "../../../../shared/types/filters";
import type { KpiCardProps } from "./KpiCard";


const sumTrendByCategory = (
    trend : ActiveUsersTrendPoint[] | CompletionRatePoint[], 
    category : Category, 
) => {
    return trend.map((element) => {
        switch (category) {
            case "lightUsers" : 
            return element.lightUsers;
            case "regularUsers":
            return element.regularUsers
            case "powerUsers" : 
            return element.powerUsers; 
            default:
            return element.powerUsers + element.lightUsers + element.regularUsers;
        }
    }).reduce((prev, curr) => prev + curr , 0) 
}

export const buildActiveUsersKpi = (
    activeUsersTrend : ActiveUsersTrendPoint[], 
    category : Category, 
    period : PeriodDays) : KpiCardProps => {
        
    const activeUsers = sumTrendByCategory(activeUsersTrend, category)
    const activeUsersMean = activeUsers / period

    return {
      id : 1, 
      label : "Utilisateurs Actifs",
      value : activeUsers,
      hint: `${activeUsersMean.toFixed(0)} par jour en moyenne`,
      provenance: "calculated"
    }
}


export const buildCompletionRateKpi = (
    completionTrend : CompletionRatePoint[], 
    category : Category, 
    period : PeriodDays
) : KpiCardProps => {

    const completionRate =  sumTrendByCategory(completionTrend, category) / period

    const avgCompletionRate = (category : Category) => {
        return (category === "all" ? completionRate / 3 : completionRate).toFixed(2)
    }

    return {
        id: 2,
        label: "Taux de complétion", 
        value: `${avgCompletionRate(category)} %`,
        provenance: "calculated"
    }
}


const formatTime = (fastest : number, slowest : number) => {

    const avgMin = (((fastest + slowest) / 2 ) / 60).toFixed(0)
    const avgSec = (((fastest + slowest) / 2 ) % 60).toFixed(0)

    return `${avgMin} min ${avgSec} s`

}


export const buildAvgTimekpi = () : KpiCardProps => {
    //Hardcoded, doesn't make sense to create a more complex mock for this metric 
    const FASTEST_RECORDED_TIME : number =  580
    const SLOWEST_RECORDED_TIME : number = 1090

    const value = formatTime(FASTEST_RECORDED_TIME, SLOWEST_RECORDED_TIME)
    return {
      id : 3, 
      label : "temps moyen par session",
      value : value,
      hint : "+ 12% par rapport à la semaine passée", //Hardcoded, doesn't make sense to create a more complex mock for this metric 
      provenance: "estimated"
    }
}
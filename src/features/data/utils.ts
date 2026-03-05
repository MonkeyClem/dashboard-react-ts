import type { ActiveUsersTrendPoint, CompletionRatePoint } from "../../shared/types/analytics";
import type { PeriodDays } from "../../shared/types/filters";


export const createFakeUsersActivity = (dayCount : number) : Date => {
    const currentDate = new Date();     
    currentDate.setDate(currentDate.getDate() - dayCount); 
    return currentDate
}

// LINE CHART MOCK DATA FUNCTIONS
export const createMockTrendData = (period : PeriodDays) : ActiveUsersTrendPoint[] => {
            let dayCount = period 
            const mockedTrendData : ActiveUsersTrendPoint[] =  []

            for(let i = period; i >= 1; i --){
                const dayIndex = createFakeUsersActivity(dayCount)
                const newObject : ActiveUsersTrendPoint = {
                                            dayIndex : dayIndex.toLocaleDateString(),  
                                            powerUsers: Number((randomBetween(750, 1500) / 2).toFixed(0)), 
                                            regularUsers: Number((randomBetween(400, 950) / 2).toFixed(0)),
                                            lightUsers: Number((randomBetween(200, 750) / 2).toFixed(0))
                                        }
                mockedTrendData.push(newObject)
                dayCount -= 1
            }

            return mockedTrendData
        }


// Bar chart mock data functions : 

export const randomBetween = (min : number, max: number) : number => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


export const createMockCompletionRateData = (period : PeriodDays) : CompletionRatePoint[] => {
    let dayCount = period
    const mockedCompletionRateData : CompletionRatePoint[] = []

    for(let i = period; i >= 1; i--){
        const dayIndex = createFakeUsersActivity(dayCount)
        const newObject : CompletionRatePoint = {dayIndex : dayIndex.toLocaleDateString(), powerUsers: randomBetween(75, 90) / 2 , regularUsers: randomBetween(60, 75), lightUsers: randomBetween(45, 60)}
        mockedCompletionRateData.push(newObject)
        dayCount -= 1  
    }

    return mockedCompletionRateData
}
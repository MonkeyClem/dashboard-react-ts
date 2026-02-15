import type { PeriodDays, Category } from "./filters";

export interface ActiveUsersTrendPoint {
    dayIndex: string
    activeUsers: number,
    }

export interface ActiveUsersBreakdown {
    category : "A"|"B"|"C",
    activeUsers : number
}

export interface CompletionRatePoint  {
    dayIndex : string, 
    A : number,
    B : number,
    C: number
}
    

// LINE CHART MOCK DATA FUNCTIONS
export const createFakeUsersAmount = (category : Category) : number => {
        switch (category) {
            case "A":
                return Math.random()*1200;
            case "B":
                return Math.random()*950;
            case "C":
                return Math.random()*700
            default:
                return Math.random()*1100;
        }
       
}

export const createFakeActiveUsersActivity = (dayCount : number) : Date => {
    const currentDate = new Date();     
    currentDate.setDate(currentDate.getDate() - dayCount); 
    return currentDate
}


export const createMockTrendData = (period : PeriodDays, category : Category) : ActiveUsersTrendPoint[] => {
            let dayCount = period 
            const mockedTrendData : ActiveUsersTrendPoint[] =  []

           for(let i = period; i >= 1; i--){
                const dayIndex = createFakeActiveUsersActivity(dayCount)
                const activeUsers = createFakeUsersAmount(category)
                const newObject = {dayIndex : dayIndex.toLocaleDateString(), activeUsers: activeUsers}
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
        const dayIndex = createFakeActiveUsersActivity(dayCount)
        const newObject : CompletionRatePoint = {dayIndex : dayIndex.toLocaleDateString(), A: randomBetween(75, 90) , B: randomBetween(60, 75), C: randomBetween(45, 60)}
        mockedCompletionRateData.push(newObject)
        dayCount -= 1  
    }
    return mockedCompletionRateData
}
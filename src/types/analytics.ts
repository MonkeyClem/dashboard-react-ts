import type { PeriodDays, Category } from "./filters";

export interface ActiveUsersTrendPoint {
    dayIndex: string
    activeUsers: number,
    }
    
    
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
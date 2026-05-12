import type { PeriodDays, Category } from '../../../../shared/types/filters';
import styles from './FiltersBar.module.css'

interface FiltersBarProps {
  period: PeriodDays;
  category: Category;
  onPeriodChange: (next: PeriodDays) => void;
  onCategoryChange: (next: Category) => void;
}

const PERIOD_OPTIONS: readonly PeriodDays[] = [7, 30, 90];
const CATEGORY_OPTIONS: readonly Category[] = ["all", "powerUsers", "regularUsers", "lightUsers"];

const transformCategoryOption = (categoryOption : Category) : string => {
    console.log(categoryOption)
    console.log((categoryOption as string).split(/(?=[A-Z])/))

    const strArray = (categoryOption as string).split(/(?=[A-Z])/)
    const firstLetter = strArray[0].charAt(0).toUpperCase()

    strArray[0] = strArray[0].slice(1, strArray[0].length)

    const newStr = firstLetter + strArray[0] + " " + strArray[1]

    return newStr
}

export default function FiltersBar({
  period,
  category,
  onPeriodChange,
  onCategoryChange,
}: FiltersBarProps) {
  return (
    <div className={styles.selectBarWrapper}>
        <div> 
            <span className={styles.filtersTitle} >Filters :</span>
        </div>
        <label htmlFor="period-select">Select Period</label>
        <select
            name="period"
            id="period-select"
            value={period}
            onChange={(e) => {
            const nextPeriod = PERIOD_OPTIONS.find(
                (value) => value === Number(e.target.value),
            );
            if (nextPeriod !== undefined) {
                onPeriodChange(nextPeriod);
            }
            }}
        >
            {PERIOD_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
            ))}
        </select>


        <label htmlFor="category-select">Select Category</label>
        <select
            name="category"
            id="category-select"
            value={category}
            onChange={(e) => {
            const nextCategory = CATEGORY_OPTIONS.find(
                (value) => value === e.target.value,
            );
            if (nextCategory !== undefined) {
                onCategoryChange(nextCategory);
            }
            }}
        >
            {CATEGORY_OPTIONS.map((option) => (
            <option key={option} 
                    value={option}>{option === "all" ? "All" : transformCategoryOption(option)}</option>
            ))}
        </select>
    </div>
  );
}

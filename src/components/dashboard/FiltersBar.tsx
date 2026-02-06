import type { PeriodDays, Category } from "../../types/filters";
import styles from './FiltersBar.module.css'
interface FiltersBarProps {
  period: PeriodDays;
  category: Category;
  onPeriodChange: (next: PeriodDays) => void;
  onCategoryChange: (next: Category) => void;
}

const PERIOD_OPTIONS: readonly PeriodDays[] = [7, 30, 90];
const CATEGORY_OPTIONS: readonly Category[] = ["all", "A", "B", "C"];

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
            <option key={option} value={option}>{option === "all" ? "All" : option}</option>
            ))}
        </select>
    </div>
  );
}

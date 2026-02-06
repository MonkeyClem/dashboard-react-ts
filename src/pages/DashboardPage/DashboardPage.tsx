import { useState } from "react";
import KpiCard from "../../components/dashboard/KpiCard";
import styles from "./DashboardPage.module.css";
import FiltersBar from "../../components/dashboard/FiltersBar";
import type { PeriodDays, Category } from "../../types/filters";

export type kpiMockType = {
  id: number;
  label: string;
  value: string | number;
  hint?: string;
};

const mockedData: kpiMockType[] = [
  {
    id: 1,
    label: "Utilisateurs actifs",
    value: 1246,
    hint: "+12% par rapport à la semaine précédente",
  },
  {
    id: 2,
    label: "Taux de complétion",
    value: "42%",
    hint: "-12% par rapport à la semaine précédente",
  },
  {
    id: 3,
    label: "Temps moyen",
    value: "3m 12s",
    hint: "+18s vs période précédente",
  },
  {
    id: 4,
    label: "Sessions aujourd’hui",
    value: 347,
    hint: "+5% vs hier",
  },
  { id: 5, label: "Erreurs critiques", value: 2, hint: "-1 vs hier" },
  { id: 6, label: "Erreurs non critiques", value: 2, hint: "1 vs hier" },
];


export default function DashboardPage() {
  const [period, setPeriod] = useState<PeriodDays>(30);
  const [category, setCategory] = useState<Category>("C");

  const handlePeriodChange = (period: PeriodDays) => {
    setPeriod(period);
  };
  const handleCategoryChange = (category: Category): void => {
    setCategory(category);
  };

  return (
    <>
      {period}
      {category}
      <FiltersBar
        period={period}
        category={category}
        onCategoryChange={handleCategoryChange}
        onPeriodChange={handlePeriodChange}
      />
      <div className={styles.dashboardKpiContainer}>
        {mockedData.map((data) => (
          <KpiCard
            label={data.label}
            value={data.value}
            hint={data.hint}
            key={data.id}
          />
        ))}
      </div>
    </>
  );
}

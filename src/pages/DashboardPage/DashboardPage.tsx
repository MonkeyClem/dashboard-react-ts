import { useMemo, useState } from "react";
import KpiCard, { type KpiCardProps } from "../../features/dashboard/components/KpiCard/KpiCard";
import styles from "./DashboardPage.module.css";
import FiltersBar from "../../features/dashboard/components/FiltersBar/FiltersBar";
import type { PeriodDays, Category } from "../../shared/types/filters";
import { faBarChart, faUser } from "@fortawesome/free-regular-svg-icons";
import DashboardChartCard from '../../features/dashboard/components/ChartCard/DashboardChartCard';
import CompletionRateChart from "../../features/dashboard/components/charts/CompletionRateChart";
import { createMockCompletionRateData, createMockTrendData } from "../../features/data/utils";
import { ActiveUsersAreaChart } from "../../features/dashboard/components/charts/ActiveUsersAreaChart";
import type { ActiveUsersTrendPoint } from "../../shared/types/analytics";
import { buildActiveUsersKpi } from "../../features/dashboard/components/KpiCard/KpiCardUtils";

export type kpiMockType = {
  id: number;
  label: string;
  value: string | number;
  hint?: string;
};

export type tickInterval = 0 | 4 | 12

// const mockedData: kpiMockType[] = [
//   { id: 1, label: "Utilisateurs actifs", value: 1246, hint: "+12% par rapport à la semaine précédente"},
//   { id: 2, label: "Taux de complétion", value: "42%", hint: "-12% par rapport à la semaine précédente"},
//   { id: 3, label: "Temps moyen", value: "3m 12s", hint: "+18s vs période précédente"},
//   { id: 4, label: "Sessions aujourd’hui", value: 347, hint: "+5% vs hier",},
//   { id: 5, label: "Erreurs critiques", value: 2, hint: "-1 vs hier" },
//   { id: 6, label: "Erreurs non critiques", value: 2, hint: "+ 1 vs hier" },
// ];




const buildKpis = (
    activeUsersTrend : ActiveUsersTrendPoint[], 
    category : Category, 
    period : PeriodDays) : KpiCardProps[] => {

    const activeUsersKpi = buildActiveUsersKpi(activeUsersTrend, category, period)

    return [
      activeUsersKpi,
      activeUsersKpi
    ]
} 





export default function DashboardPage() {
  const [period, setPeriod] = useState<PeriodDays>(7);
  const [category, setCategory] = useState<Category>("all");

  const tickInterval : tickInterval = useMemo(() => {
    switch (period) {
      case 7: 
          return 0
      case 30:
          return 4
      case 90:
          return 12
      default:
        return 4 ;
    }
  }, [period])

  const handlePeriodChange = (period: PeriodDays) => setPeriod(period);

  const handleCategoryChange = (category: Category) => setCategory(category)


  const mockedActiveUsersTrendData = useMemo(() => 
    createMockTrendData(period), 
    [period]
  );

  const mockedCompletionRateData = useMemo(() => 
    createMockCompletionRateData(period),
    [period]
  );

  const kpis = buildKpis(mockedActiveUsersTrendData, category, period)

  return (
    <>
      <h2 id="dashboardKpiSection" className="title">Key Performance Indicator</h2>
      <div className={styles.dashboardKpiContainer}>
        {kpis.map((data) => (
          <KpiCard
            id={data.id}
            label={data.label}
            value={data.value}
            hint={data.hint}
            provenance={data.provenance}
            key={data.id}
          />
        ))}
      </div>
      <h2 id="dashboardChartSection" className="title">Basic Charts</h2>
            <FiltersBar
              period={period}
              category={category}
              onCategoryChange={handleCategoryChange}
              onPeriodChange={handlePeriodChange}
            />
      <div className={styles.dashboardChartsContainer}>
        <DashboardChartCard title="Utilisateurs actifs" icon={faUser}>
          <ActiveUsersAreaChart category={category} activeUsersTrendData={mockedActiveUsersTrendData} tickInterval={tickInterval}/>
        </DashboardChartCard>
        <DashboardChartCard title="Taux de complétion" icon={faBarChart}>
          <CompletionRateChart category={category} completionRateData={mockedCompletionRateData} tickInterval={tickInterval} /> 
        </DashboardChartCard>
      </div>
    </>
  );
}

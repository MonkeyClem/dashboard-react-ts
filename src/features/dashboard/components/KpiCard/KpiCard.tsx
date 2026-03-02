import styles from "./KpiCard.module.css";

interface KpiCardProps {
  label: string;
  value: string | number;
  hint?: string;
}

export default function KpiCard({ label, value, hint }: KpiCardProps) {

  const indicator = hint?.startsWith("+") ? "↑" : "↓";

  return (
    <div className={styles.kpiCard}>
      <p className={styles.kpiCardLabel}>{label}</p>
      <p className={styles.kpiCardValue}>{value}</p>
      {hint ? (
        <div className={styles.kpiCardHint}>
          <span className={indicator === "↑" ? styles.kpiPositiveIndicator : styles.kpiNegativeIndicator}>{indicator}</span>
          <p> {hint}</p>
        </div>
      ) : null}
    </div>
  );
}

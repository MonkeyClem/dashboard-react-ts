import styles from "./KpiCard.module.css";

export type KpiProvenance = "calculated" | "estimated"
export interface KpiCardProps {
  id: number,
  label: string;
  value: string | number;
  hint?: string;
  provenance: KpiProvenance
}

export default function KpiCard({ label, value, hint, provenance }: KpiCardProps) {

  // const indicator = hint?.startsWith("+") ? "↑" : "↓";
  const badgeLabel = provenance === "calculated" ? "calculé" : "estimé"

  return (
    <div className={styles.kpiCard}>
      <div className={styles.kpiCardLabelAndBadgeContainer}>
          <p className={styles.kpiCardLabel}>{label}</p>
          <p className={`${styles.badge} ${styles[`badge--${provenance}`]}`}>
            {badgeLabel}
          </p>
      </div>
      <p className={styles.kpiCardValue}>{value}</p>
      {hint ? (
        <div className={styles.kpiCardHint}>
          {/* <span className={indicator === "↑" ? styles.kpiPositiveIndicator : styles.kpiNegativeIndicator}>{indicator}</span> */}
          <p> {hint}</p>
        </div>
      ) : null}
    </div>
  );
}

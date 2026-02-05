import styles from "./KpiCard.module.css"

interface KpiCardProps {
    label : string,
    value : string | number,
    hint? : string
}

export default function KpiCard({label, value, hint} : KpiCardProps){
    return <div className={styles.kpiCard}>
                <p className={styles.kpiCardLabel}>{label}</p>
                <p className={styles.kpiCardValue}>{value}</p>
                {hint ? <p className={styles.kpiCardHint}>{hint}</p> : null}
            </div>
}
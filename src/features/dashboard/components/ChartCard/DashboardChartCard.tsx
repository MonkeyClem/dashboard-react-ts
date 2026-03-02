import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import styles from "../../../../pages/DashboardPage/DashboardPage.module.css"

export interface DashboardChartCard {
    icon : IconProp,
    title: string,
    subtitle?: string
    children: ReactNode
}
export default function DashboardChartCard({icon, title, subtitle, children } : DashboardChartCard){
    return ( 
            <div className={styles.dashboardChartCard}>
                <div className={styles.dashboardChartCardHeader}>
                    <FontAwesomeIcon icon={icon} />
                    <h3>{title}</h3>
                </div>
                {children}
                {subtitle ? subtitle : null}
            </div>
    ) 
} 
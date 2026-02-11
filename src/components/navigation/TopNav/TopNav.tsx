import { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css"

export default function TopNav(){
    return  <nav className={styles.topNav}>
                <ul>
                    <li>
                        <NavLink to={"/dashboard"} className={styles.link}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/settings"} className={styles.link}>Settings</NavLink>
                    </li>
                </ul>
            </nav>
}
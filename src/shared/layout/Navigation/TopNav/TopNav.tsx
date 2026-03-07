import  { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css"


export default function TopNav() {
  return (
    <nav className={styles.topNav}>
      <a href="/" className={styles.logo}>Dashboard React-TS</a>
      <ul className={styles.ul}>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
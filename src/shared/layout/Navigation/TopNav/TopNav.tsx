import  { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css"
import useTheme from "../../../hooks/useTheme";


export default function TopNav() {

    const {theme, setTheme} = useTheme()
  return (
    <nav className={styles.topNav}>
      <a href="/" className={styles.logo}>Dashboard React-TS</a>
      <ul className={styles.ul}>
                       
        <li> 
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                       {theme === "dark" ? 
                                "Light Mode" 
                                :  
                                "Dark Mode"}
            </button>
        </li>

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
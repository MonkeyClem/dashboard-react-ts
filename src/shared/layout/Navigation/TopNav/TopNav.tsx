import  { NavLink } from "react-router-dom";
import styles from "./TopNav.module.css"
import useTheme from "../../../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";


export default function TopNav() {
    const {theme, setTheme} = useTheme()
  return (
    <nav className={styles.topNav}>
      <a href="/" className={styles.logo}>Dashboard React-TS</a>
      <ul className={styles.ul}>
                       
        <li> 
            <FontAwesomeIcon icon={faSun}/>
            {" "}
                <label className={styles.switch}> 
                    <input type="checkbox" onClick={() =>  setTheme(theme === "light" ? "dark" : "light")}>
                    </input>
                    <span className={styles.slider}></span>
                </label>
            {" "}
            <FontAwesomeIcon icon={faMoon}/>

            
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
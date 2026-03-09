import useTheme from "../../shared/hooks/useTheme"

export default function SettingsPage(){
    const {theme, setTheme} = useTheme()


    return  <div>
            Switch theme to : 
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                   {theme === "dark" ? 
                                "Light Mode" 
                                :  
                                "Dark Mode"}
                </button>
            </div>
}
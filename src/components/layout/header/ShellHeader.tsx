import TopNav from "../../navigation/TopNav/TopNav"

interface ShellHeaderProps {
    title : string
 
}

export default function ShellHeader({title} : ShellHeaderProps){
    return  <> 
                <TopNav/>
                <h1>{title}</h1>
            </> 
}
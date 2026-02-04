interface ShellHeaderProps {
    title : string
}

export default function ShellHeader({title} : ShellHeaderProps){
    return <h1>{title}</h1>
}
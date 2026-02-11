import type { ReactNode } from "react";
import styles from "./PageShell.module.css"
import ShellHeader from "./header/ShellHeader";

export interface PageShellProps {
  children: ReactNode;
  title?: string ;
}

export function PageShell({ children, title }: PageShellProps) {
  return (
    <div className={styles.globalShell}>
      <header>{title ? <ShellHeader title={title} /> : undefined}</header>
      <main>{children}</main>
    </div>
  );
}

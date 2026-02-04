import type { ReactNode } from "react";
import styles from "./PageShell.module.css"
import Header from "./header/ShellHeader";

export interface PageShellProps {
  children: ReactNode;
  title?: string;
}

export function PageShell({ children, title }: PageShellProps) {
  return (
    <div className={styles.globalShell}>
      <header>{title ? <Header title={title} /> : null}</header>
      <main>{children}</main>
    </div>
  );
}

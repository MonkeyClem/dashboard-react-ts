import type { ReactNode } from "react";
import styles from "./PageShell.module.css"
import ShellHeader from "../header/ShellHeader";

export interface PageShellProps {
  children: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className={styles.globalShell}>
      <header><ShellHeader /></header>
      <main>{children}</main>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";

export default function RootLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}

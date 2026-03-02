import { Outlet } from "react-router-dom";
import { PageShell } from "../shared/layout/PageShell/PageShell";

export default function RootLayout() {
    return (
        <PageShell >
            <Outlet />
        </PageShell>
    );
}

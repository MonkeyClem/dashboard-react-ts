import { Outlet } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { useMatches } from "react-router-dom";



function isTitleHandle(handle: unknown): handle is { title?: string } {
  return typeof handle === "object" && handle !== null;
}

export default function RootLayout() {
    const matches = useMatches()

    const lastMatch = matches[matches.length-1]
    const handle = lastMatch?.handle;

    const title = isTitleHandle(handle) && typeof handle.title === "string" ? handle.title : undefined

    return (
        <PageShell title={title}>
        <Outlet />
        </PageShell>
    );
}

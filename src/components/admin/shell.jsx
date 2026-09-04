import { ShieldCheck, BarChart3, MessagesSquare } from "lucide-react";

function NavItem({ to, icon, label }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === to || (to !== "/" && pathname.startsWith(to));
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function AdminShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-[auto_1fr] lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r border-border bg-sidebar lg:flex lg:flex-col">
          <div className="flex items-center gap-2 border-b border-sidebar-border px-5 py-5">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-bold tracking-tight">FraudShield</div>
              <div className="truncate text-xs text-muted-foreground">Admin Console</div>
            </div>
          </div>
          <nav className="flex flex-col gap-1 p-3">
            <NavItem to="/" icon={<BarChart3 className="h-4 w-4" />} label="Reports" />
            <NavItem
              to="/consultations"
              icon={<MessagesSquare className="h-4 w-4" />}
              label="Consultations"
            />
          </nav>
          <div className="mt-auto border-t border-sidebar-border p-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              System status: Operational
            </div>
          </div>
        </aside>

        {/* Mobile rail */}
        <aside className="flex w-16 flex-col items-center gap-2 border-r border-border bg-sidebar py-4 lg:hidden">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <Link
            to="/admin/reports"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Reports"
          >
            <BarChart3 className="h-5 w-5" />
          </Link>
          <Link
            to="/admin/consultations"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Consultations"
          >
            <MessagesSquare className="h-5 w-5" />
          </Link>
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

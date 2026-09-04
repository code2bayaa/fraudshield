import { useEffect, useMemo, useState } from "react";
import { ShieldCheck, BarChart3, MessagesSquare } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import "./style.css"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  Legend,
} from "recharts";
import {
  Users,
  Eye,
  Globe2,
  MonitorSmartphone,
  TrendingUp,
  Activity,
} from "lucide-react";
// import { visits } from "@/lib/mock-data";

const PALETTE = [
  "var(--color-chart-1)",
  "var(--color-chart-2)",
  "var(--color-chart-3)",
  "var(--color-chart-4)",
  "var(--color-chart-5)",
];

function tallyBy(items, key) {
  const m = new Map();
  for (const it of items) {
    const k = key(it);
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return Array.from(m, ([name, value]) => ({ name, value }));
}

function KpiCard({
  icon,
  label,
  value,
  hint,
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
          {icon}
        </span>
      </div>
      <div className="mt-3 text-3xl font-bold tracking-tight">{value}</div>
      {hint ? <div className="mt-1 text-xs text-muted-foreground">{hint}</div> : null}
    </div>
  );
}

function NavItem({ to, icon, label }) {
//   const pathname = useRouterState({ select: (s) => s.location.pathname });
    const location = useLocation();

    console.log(location.pathname);
    console.log(location,"location")
    const pathname = location.pathname
  const active = pathname === to || (to !== "/" && pathname.startsWith(to));
  return (
    <NavLink
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

function ChartCard({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <div className={`rounded-xl border border-border bg-card p-5 ${className}`}>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        {subtitle ? <p className="text-xs text-muted-foreground">{subtitle}</p> : null}
      </div>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const tooltipStyle = {
  contentStyle: {
    backgroundColor: "var(--color-popover)",
    border: "1px solid var(--color-border)",
    borderRadius: "8px",
    color: "var(--color-popover-foreground)",
    fontSize: "12px",
  },
  labelStyle: { color: "var(--color-muted-foreground)" },
};

function useGetVisits(){
    const [visits, setVisits] = useState([])
    useEffect(() => {
        (async() => {
            // console.log("report",import.meta.env.VITE_REPORT)
            const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_REPORT : import.meta.env.VITE_REPORT_LIVE}`,{
                method:"GET",
                headers: {
                    'Content-Type': 'application/json', // Indicates the body is JSON
                    'x-api-key':import.meta.env.VITE_API_KEY
                },
            });
            
            const {
                status,
                data,
                message
            } = await res.json();
            const new_data = data.map(({browser,location,...rest}) => {
                return ({
                    ...rest,
                    browser:JSON.parse(browser),
                    location:JSON.parse(location),
                })
            })
            console.log(status,"status",new_data,"data",message,"message")
            if(status)
                setVisits(new_data)
        })()
    },[])

    return visits
}

function ReportsPage() {

    const visits = useGetVisits()
    console.log(visits,"visits")
    const stats = useMemo(() => {
        
        const uniqueUsers = new Set(visits.map((v) => v.user)).size;
        const byCountry = tallyBy(visits, (v) => v.location.country_name ?? v.location.country);
        const byCity = tallyBy(visits, (v) => v.location.city).sort((a, b) => b.value - a.value).slice(0, 7);
        const byDevice = tallyBy(visits, (v) => v.browser.deviceType);
        const byBrowser = tallyBy(visits, (v) => v.browser.browser);
        const byOs = tallyBy(visits, (v) => v.browser.os);

        const byDate = tallyBy(visits, (v) => v.date).sort((a, b) => a.name.localeCompare(b.name));
        const trend = byDate.map((d) => ({ date: d.name.slice(5), visits: d.value }));

        const hours = Array.from({ length: 24 }, (_, h) => ({
        hour: `${String(h).padStart(2, "0")}h`,
        visits: 0,
        }));
        for (const v of visits) {
        const h = parseInt(v.time.slice(0, 2), 10);
        hours[h].visits += 1;
        }

        const isps = tallyBy(visits, (v) => v.location.isp ?? "Unknown")
        .sort((a, b) => b.value - a.value)
        .slice(0, 6);

        return {
        totalVisits: visits.length,
        uniqueUsers,
        countries: byCountry.length,
        cities: new Set(visits.map((v) => v.location.city)).size,
        byCountry: byCountry.sort((a, b) => b.value - a.value),
        byCity,
        byDevice,
        byBrowser,
        byOs,
        trend,
        hours,
        isps,
        };
    }, [visits]);

  return (
    <div className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Traffic Analytics
          </p>
          <h1 className="mt-1 text-[#fff] truncate text-2xl font-bold tracking-tight sm:text-3xl">
            Reports Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Who visited FraudShield, where from, and on what device.
          </p>
        </div>
        <div className="shrink-0 rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
          Last updated <span className="text-foreground">just now</span>
        </div>
      </header>

      {/* KPIs */}
      <section className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <KpiCard
          icon={<Eye className="h-4 w-4" />}
          label="Total visits"
          value={stats.totalVisits.toLocaleString()}
          hint="Last 30 days"
        />
        <KpiCard
          icon={<Users className="h-4 w-4" />}
          label="Unique users"
          value={stats.uniqueUsers}
          hint="Distinct user IDs"
        />
        <KpiCard
          icon={<Globe2 className="h-4 w-4" />}
          label="Countries"
          value={stats.countries}
          hint={`${stats.cities} cities`}
        />
        <KpiCard
          icon={<MonitorSmartphone className="h-4 w-4" />}
          label="Device types"
          value={stats.byDevice.length}
          hint={`${stats.byBrowser.length} browsers`}
        />
      </section>

      {/* Charts grid */}
      <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ChartCard
          title="Visits over time"
          subtitle="Daily traffic trend"
          className="lg:col-span-2"
        >
          <AreaChart data={stats.trend}>
            <defs>
              <linearGradient id="gVisits" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip {...tooltipStyle} />
            <Area
              type="monotone"
              dataKey="visits"
              stroke="var(--color-chart-1)"
              strokeWidth={2}
              fill="url(#gVisits)"
            />
          </AreaChart>
        </ChartCard>

        <ChartCard title="Device type share" subtitle="What users are on">
          <PieChart>
            <Pie
              data={stats.byDevice}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={85}
              paddingAngle={2}
            >
              {stats.byDevice.map((_, i) => (
                <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
          </PieChart>
        </ChartCard>

        <ChartCard title="Visits by country" subtitle="Geographic distribution">
          <BarChart data={stats.byCountry} layout="vertical">
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis
              type="category"
              dataKey="name"
              stroke="var(--color-muted-foreground)"
              fontSize={11}
              width={90}
            />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="value" fill="var(--color-chart-2)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ChartCard>

        <ChartCard title="Top cities" subtitle="Where visits originate">
          <BarChart data={stats.byCity}>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="var(--color-muted-foreground)"
              fontSize={11}
              interval={0}
              angle={-20}
              textAnchor="end"
              height={60}
            />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {stats.byCity.map((_, i) => (
                <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
              ))}
            </Bar>
          </BarChart>
        </ChartCard>

        <ChartCard title="Browsers" subtitle="Client software mix">
          <RadarChart data={stats.byBrowser}>
            <PolarGrid stroke="var(--color-border)" />
            <PolarAngleAxis
              dataKey="name"
              stroke="var(--color-muted-foreground)"
              fontSize={11}
            />
            <Radar
              dataKey="value"
              stroke="var(--color-chart-3)"
              fill="var(--color-chart-3)"
              fillOpacity={0.5}
            />
            <Tooltip {...tooltipStyle} />
          </RadarChart>
        </ChartCard>

        <ChartCard
          title="Hourly activity"
          subtitle="Visits per hour of day"
          className="lg:col-span-2"
        >
          <LineChart data={stats.hours}>
            <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="hour" stroke="var(--color-muted-foreground)" fontSize={11} />
            <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
            <Tooltip {...tooltipStyle} />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="var(--color-chart-4)"
              strokeWidth={2}
              dot={{ r: 3, fill: "var(--color-chart-4)" }}
            />
          </LineChart>
        </ChartCard>

        <ChartCard title="Operating systems" subtitle="OS breakdown">
          <PieChart>
            <Pie
              data={stats.byOs}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
            >
              {stats.byOs.map((_, i) => (
                <Cell key={i} fill={PALETTE[(i + 1) % PALETTE.length]} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ChartCard>
      </section>

      {/* ISP list */}
      <section className="mt-6 rounded-xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold">Top networks / ISPs</h3>
        </div>
        <div className="space-y-3">
          {stats.isps.map((row) => {
            const pct = Math.round((row.value / stats.totalVisits) * 100);
            return (
              <div key={row.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="min-w-0 truncate pr-2 text-foreground">{row.name}</span>
                  <span className="shrink-0 text-muted-foreground">
                    {row.value} · {pct}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <TrendingUp className="h-3.5 w-3.5" />
          Networks are inferred from visitor IP geolocation.
        </div>
      </section>
    </div>
  );
}

export function ReportShell() {
  const navigate = useNavigate()

  const signout = async() => {
    const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_SIGNOUT : import.meta.env.VITE_SIGNOUT_LIVE}`,{
      method:"GET",
      credentials:"include",
      headers: {
        'Content-Type': 'application/json', // Indicates the body is JSON
        'x-api-key':import.meta.env.VITE_API_KEY
      },
    });
    
    const {
      status,
      error
    } = await res.json();

    if(status){
      toast.success("signing out...")
      navigate("/login")
      return
    }
    toast.error(error)
  }
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
            <NavItem to="/admin/report" icon={<BarChart3 className="h-4 w-4" />} label="Reports" />
            <NavItem
              to="/admin/consultation"
              icon={<MessagesSquare className="h-4 w-4" />}
              label="Consultations"
            />
            <button
              onClick={() => signout()}
              className="underline align-left cursor h-10 w-auto place-items-center rounded-lg text-[#fff] hover:bg-secondary hover:text-foreground"
            >
              SignOut
            </button>
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
          <NavLink
            to="/admin/report"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Reports"
          >
            <BarChart3 className="h-5 w-5" />
          </NavLink>
          <NavLink
            to="/admin/consultation"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
            aria-label="Consultations"
          >
            <MessagesSquare className="h-5 w-5" />
          </NavLink>
          <button
            onClick={() => signout()}
            className="underline align-left cursor h-10 w-auto place-items-center rounded-lg text-[#fff] hover:bg-secondary hover:text-foreground"
          >
            SignOut
          </button>
        </aside>

        <main className="min-w-0">
          <ReportsPage />
        </main>
      </div>
    </div>
  );
}
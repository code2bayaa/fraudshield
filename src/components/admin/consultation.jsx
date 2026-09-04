import { useMemo, useState } from "react";
import { Search, Mail, Phone, MessageCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
// import { consultations, type Consultation } from "@/lib/mock-data";
import { ShieldCheck, BarChart3, MessagesSquare } from "lucide-react";
import "./style.css"
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";

// Server function simulates fetching consultations from a backend.

function NavItem({ to, icon, label }) {
//   const pathname = useRouterState({ select: (s) => s.location.pathname });
    const location = useLocation();

    console.log(location.pathname);
    // console.log(location.search);
    // console.log(location.hash);
    // console.log(location,"location")
    const pathname = location.pathname
    // const to = "admin/consultation"
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

function ContactBadge({ contact }) {
  const map = {
    Email: { icon: Mail, cls: "bg-chart-2/20 text-chart-2" },
    Phone: { icon: Phone, cls: "bg-chart-3/20 text-chart-3" },
    WhatsApp: { icon: MessageCircle, cls: "bg-primary/20 text-primary" },
  };
  const { icon: Icon, cls } = map[contact];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}
    >
      <Icon className="h-3 w-3" />
      {contact}
    </span>
  );
}

function UrgencyBadge({ urgent }) {
  return urgent ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-destructive/15 px-2.5 py-1 text-xs font-semibold text-destructive">
      <AlertTriangle className="h-3 w-3" />
      Urgent
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
      <CheckCircle2 className="h-3 w-3" />
      Standard
    </span>
  );
}

function useGetData(){
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_CONSULTATION : import.meta.env.VITE_CONSULTATION_LIVE}`,{
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
            const new_data = data.map(({inquiry,...rest}) => {
                return ({
                    ...rest,
                    inquiry:JSON.parse(inquiry),
                })
            })
            console.log(status,"status",new_data,"data",message,"message")
            if(status){
                setIsLoading(false)
                setData(new_data)
            }
                
        })()
    },[])

    return { data, isLoading }
}

function ConsultationsPage() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
//   const [isLoading, setIsLoading] = useState(false);

  const {data,isLoading} = useGetData()

  const rows = useMemo(() => {
    let list = data ?? [];
    if (filter === "urgent") list = list.filter((c) => c.urgency === "Yes");
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter((c) =>
        [c.name, c.organization, c.email, c.position, c.description, ...c.inquiry]
          .join(" ")
          .toLowerCase()
          .includes(s),
      );
    }
    return list;
  }, [data, q, filter]);

  const urgentCount = (data ?? []).filter((c) => c.urgency === "Yes").length;

  return (
    <div className="mx-auto max-w-[1400px] p-4 sm:p-6 lg:p-8">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">
            Client Requests
          </p>
          <h1 className="mt-1 truncate text-2xl font-bold tracking-tight sm:text-3xl">
            Consultations
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Incoming fraud &amp; anti-fraud consultation requests from organizations.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <div className="rounded-lg border border-border bg-card px-3 py-2 text-xs">
            <span className="text-muted-foreground">Total:</span>{" "}
            <span className="font-semibold text-foreground">{data?.length ?? 0}</span>
          </div>
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs">
            <span className="text-destructive">Urgent:</span>{" "}
            <span className="font-semibold text-destructive">{urgentCount}</span>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] gap-3 sm:flex sm:items-center">
        <div className="relative min-w-0">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, organization, inquiry…"
            className="w-full rounded-lg border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:w-96"
          />
        </div>
        <div className="flex shrink-0 rounded-lg border border-border bg-card p-1 text-xs font-medium">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("urgent")}
            className={`rounded-md px-3 py-1.5 transition-colors ${
              filter === "urgent"
                ? "bg-destructive text-destructive-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Urgent
          </button>
        </div>
      </div>

      {/* Table container */}
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
        {isLoading ? (
          <div className="p-10 text-center text-sm text-muted-foreground">
            Loading consultations…
          </div>
        ) : (
          <div className="max-h-[70vh] overflow-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead className="sticky top-0 z-10 bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Contact</th>
                  <th className="px-4 py-3 text-left font-semibold">Organization</th>
                  <th className="px-4 py-3 text-left font-semibold">Inquiry</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-left font-semibold">Channel</th>
                  <th className="px-4 py-3 text-left font-semibold">Priority</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((c, i) => (
                  <tr
                    key={c.email + i}
                    className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                      i % 2 === 1 ? "bg-background/30" : ""
                    }`}
                  >
                    <td className="px-4 py-4 align-top">
                      <div className="font-semibold text-foreground">{c.name}</div>
                      <div className="mt-0.5 text-xs text-muted-foreground">{c.position}</div>
                      <div className="mt-1 flex flex-col gap-0.5 text-xs">
                        <a
                          href={`mailto:${c.email}`}
                          className="truncate text-primary hover:underline"
                        >
                          {c.email}
                        </a>
                        <a
                          href={`tel:+${c.phone}`}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          +{c.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="font-medium text-foreground">{c.organization}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        Submitted {c.submitted}
                      </div>
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {c.inquiry.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="max-w-md px-4 py-4 align-top text-sm text-muted-foreground">
                      {c.description}
                    </td>
                    <td className="px-4 py-4 align-top">
                      <ContactBadge contact={c.contact} />
                    </td>
                    <td className="px-4 py-4 align-top">
                      <UrgencyBadge urgent={c.urgency === "Yes"} />
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-sm text-muted-foreground">
                      No consultations match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Showing {rows.length} of {data?.length ?? 0} requests.
      </p>
    </div>
  );
}

export function ConsultationShell() {

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
    <>
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
            <ConsultationsPage />
          </main>
        </div>
      </div>
      <Toaster />    
    </>

  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import { toast, Toaster  } from "sonner";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(null);
  useEffect(() => {
    const check = () => {
      const ua = navigator.userAgent || "";
      const isMobileUA = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(ua);
      const hasTouchOnly = window.matchMedia("(pointer: coarse)").matches;
      const narrow = window.innerWidth < 1024;
      setIsDesktop(!isMobileUA && !(hasTouchOnly && narrow) && !narrow);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}

function useAuthentication() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      (async() => {
        const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_AUTHENTICATION : import.meta.env.VITE_AUTHENTICATION_LIVE}`,{
          method:"GET",
          credentials: "include",
          headers: {
            'Content-Type': 'application/json', // Indicates the body is JSON
            'x-api-key':import.meta.env.VITE_API_KEY
          },
        });  

        const {
          status,
          message
        } = await res.json();
        console.log("Authentication status:", status, "Message:", message);
        if (status ) {
          setIsLoggedIn(true);
        }
      })()
      
    },[]) 

    return isLoggedIn;
}

async function login({username, password, navigate}) {
  // console.log("logging in...", username, password);
  
  try{
    const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_LOGIN : import.meta.env.VITE_LOGIN_LIVE}`,{
      method:"POST",
      credentials: "include",
      body: JSON.stringify({username, password}),
      headers: {
        'Content-Type': 'application/json', // Indicates the body is JSON
        'x-api-key':import.meta.env.VITE_API_KEY
      },
    });  

    const {
      status,
      message
    } = await res.json();
    // console.log("logging status:", status, "Message:", message);
    if (status ) {
      toast.success("successfully logged in")
      setTimeout(() => {
        navigate("/admin/report")
      },1000)
      return
    }

    toast.error(message)
  }catch(error){
    console.log(error,"error")
  }
}

function AdminPage() {
  const isDesktop = useIsDesktop();
  const authed = useAuthentication();
  const navigate = useNavigate();

  if (isDesktop === null) {
    return <div className="min-h-screen bg-background" />;
  }
  if (!isDesktop) return <DesktopOnlyNotice />;
  if (!authed) return <SignInScreen onSuccess={login}/>;
  navigate("/admin/report")
  return
//   return <Dashboard onSignOut={() => setAuthed(false)} />;
}

function DesktopOnlyNotice() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md rounded-md border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="4" width="18" height="12" rx="1.5" />
            <path d="M8 20h8M12 16v4" />
          </svg>
        </div>
        <h1 className="font-serif text-xl font-semibold text-foreground">
          Desktop Access Required
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          For security and operational integrity, the FraudShield Administrative Console is
          accessible only from a supported desktop web browser.
        </p>
        <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
          Restricted System · Authorised Personnel Only
        </p>
      </div>
    </div>
  );
}

function SignInScreen({ onSuccess }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_480px] bg-background">
        
        <aside className="hidden lg:flex flex-col justify-between bg-primary p-12 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-primary-foreground/10 font-serif text-lg">
              F
            </div>
            <img src="./logos/fraudshield-logo.png" className="w-[20%] h-[200px] rounded-md" alt="FraudShield"/>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-tight">
              Integrity in every transaction we investigate.
            </h2>
            <p className="mt-4 max-w-md text-sm text-[#fff]">
              The administrative console provides authorised auditors with secure access to
              active investigations, case files, and client protection dossiers.
            </p>
          </div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50">
            © {new Date().getFullYear()} FraudShield
          </p>
        </aside>

        <main className="flex items-center justify-center px-8 py-16">
          <form
            className="w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setLoading(true);
              setError(null);
              const form = new FormData(e.currentTarget);
              const u = String(form.get("username") || "");
              const p = String(form.get("password") || "");
              setTimeout(() => {
                setLoading(false);
                if (u && p) {
                  onSuccess({username: u, password: p, navigate});
                } else {
                  setError("Invalid credentials. Access attempt has been logged.");
                  toast.error("input all fields")
                }
              }, 500);
            }}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Secure Sign-In Powered By wekesa-apps
            </p>
            <h1 style={{color:"#fff"}} className="mt-2 font-serif text-2xl font-semibold text-[#fff]">
              Administrative Console
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your credentials to continue.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label style={{color:"#fff"}} className="block text-xs font-medium uppercase tracking-wider text-[#fff]">
                  Username
                </label>
                <input
                  name="username"
                  required
                  autoComplete="username"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label style={{color:"#fff"}} className="block text-xs font-medium uppercase tracking-wider text-[#fff]">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
            >
              {loading ? "Verifying…" : "Sign in securely"}
            </button>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              This system is restricted to authorised personnel of FraudShield Financial
              Auditors. All activity is monitored and recorded in compliance with applicable
              data protection and financial regulations.
            </p>
          </form>
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default AdminPage
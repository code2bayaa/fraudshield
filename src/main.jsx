import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './styles.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HOME from './components/index.jsx'
import ABOUT from './components/about.jsx'
import CONTACT from './components/contact.jsx'
import ERROR from './components/error.jsx'
import FOUNDER from './components/founder.jsx'
import INDUSTRIES from './components/industries.jsx'
import SERVICE from './components/service.jsx'
import WORK from './components/work.jsx'
import ADMIN from './components/admin.jsx'
import LOGIN from './components/login/login.jsx'
import { ReportShell } from './components/admin/report.jsx';
import { ConsultationShell } from './components/admin/consultation.jsx';
const routes = [
  {
    path : "/",
    element : <HOME/>,
    errorElement : <ERROR/>
  },
  {
    path : "/about",
    element : <ABOUT/>,
    errorElement : <ERROR/>
  },
  {
    path : "/contact",
    element : <CONTACT/>,
    errorElement : <ERROR/>
  },
  {
    path : "/founder",
    element : <FOUNDER/>,
    errorElement : <ERROR/>
  },
  {
    path : "/industries",
    element : <INDUSTRIES/>,
    errorElement : <ERROR/>
  },
  {
    path : "/services",
    element : <SERVICE/>,
    errorElement : <ERROR/>
  },
  {
    path : "/work",
    element : <WORK/>,
    errorElement : <ERROR/>
  },
  {
    path : "/admin",
    element : <ADMIN/>,
    errorElement : <ERROR/>
  },
  {
    path : "/admin/report",
    element : <ReportShell/>,
    errorElement : <ERROR/>
  },
  {
    path : "/admin/consultation",
    element : <ConsultationShell/>,
    errorElement : <ERROR/>
  },
  {
    path : "/login",
    element : <LOGIN/>,
    errorElement : <ERROR/>
  }
]

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { AdminShell } from "./admin/shell";

const ADMIN = () => {

    const navigate = useNavigate();

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
            if (!status) {
                navigate("/login")
            }
        })()
      
    },[])

    return (
        <>
            <AdminShell />
        </>
    )
}


export default ADMIN
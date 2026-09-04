import { useState, useEffect } from "react"
const FOOTER = () => {
    const [whatsappUrl, setWhatsappUrl] = useState("")
    useEffect(() => {
        setWhatsappUrl(import.meta.env.VITE_WHATSAPP)
    },[])

    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <img className="footer-logo" src="./logos/fraudshield-full-logo.png" alt="FraudShield Confidential Fraud Prevention for Accountable Organizations"/>
                    <p>Confidential Fraud Prevention for Accountable Organizations</p>
                    <p>Company Registration No.: PVT-7LUK573<br/>Location: Mombasa, Kenya</p>
                </div>
                <div><h3>Quick Links</h3><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="services.html">Services</a></li><li><a href="industries.html">Industries</a></li><li><a href="how-we-work.html">How We Work</a></li><li><a href="contact.html">Contact</a></li></ul></div>
                <div><h3>Services</h3><ul><li>Fraud Risk Assessments</li><li>Internal Control Reviews</li><li>Fraud Investigations</li><li>Procurement Reviews</li><li>Donor Compliance Reviews</li><li>Anti-Fraud Training</li></ul></div>
                <div>
                    <h3>Contact Us</h3>
                    <p>Phone / WhatsApp: +254 729 573 134<br/>Email: info@fraudshield.co.ke<br/>Website: fraudshield.co.ke</p>
                </div>
            </div>
            <div className="container disclaimer">FraudShield provides fraud prevention, forensic advisory, financial review, compliance, training, and internal control support. FraudShield does not act as a law enforcement agency, court, or legal representative.<br/>(c) 2026 FraudShield. All rights reserved.</div>
            <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener" aria-label="Chat with FraudShield on WhatsApp">
                <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3.2A12.73 12.73 0 0 0 5.1 22.44L3.5 28.8l6.52-1.52A12.7 12.7 0 1 0 16.04 3.2Zm0 2.38a10.33 10.33 0 0 1 8.78 15.75 10.34 10.34 0 0 1-13.94 3.75l-.45-.25-3.84.9.94-3.72-.29-.48A10.34 10.34 0 0 1 16.04 5.58Zm-4.2 5.35c-.24 0-.62.09-.95.45-.33.36-1.25 1.22-1.25 2.98s1.28 3.45 1.46 3.69c.18.24 2.48 3.96 6.1 5.39 3.01 1.18 3.63.95 4.28.89.66-.06 2.12-.86 2.42-1.7.3-.83.3-1.55.21-1.7-.09-.15-.33-.24-.69-.42-.36-.18-2.12-1.04-2.45-1.16-.33-.12-.57-.18-.81.18-.24.36-.93 1.16-1.14 1.4-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.78-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.56.16-.74.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.8-1.98-1.12-2.7-.29-.69-.59-.6-.81-.61h-.68Z"/></svg>
            </a>
        </footer>  
    )
}

export default FOOTER
//   "beforeend",
//   ``
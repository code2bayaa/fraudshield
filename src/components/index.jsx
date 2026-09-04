import NAVBAR from "./nav"
import FOOTER from "./footer"
import {useEffect} from "react"
import { COLLECT } from "../tools/report"
const HOME = () => {

    useEffect(() => {
        COLLECT()
    },[])

    return (
        <>
            <NAVBAR />

            <main>
            <section className="hero">
                <div className="container hero-grid">
                <div className="hero-copy">
                    <h1>Confidential Fraud Prevention, Investigations & Internal Control Advisory</h1>
                    <p>FraudShield helps organizations prevent fraud, strengthen internal controls, review suspected financial irregularities, and improve accountability through discreet, evidence-based forensic advisory support.</p>
                    <div className="trust-line"><span>Fraud prevention</span><span>Forensic accounting</span><span>Internal controls</span><span>Compliance</span><span>Governance advisory</span></div>
                    <div className="hero-actions"><a className="button" href="contact.html">Book a Confidential Consultation</a><a className="button secondary" href="services.html">View Our Services</a></div>
                </div>
                <div className="hero-media" aria-label="African professionals reviewing financial reports in a boardroom"></div>
                </div>
            </section>

            <section className="section">
                <div className="container intro-grid">
                    <img className="intro-mark" src="./logos/fraudshield-icon.png" alt="FraudShield shield icon"/>
                <div>
                    <div className="accent-line"></div>
                    <h2>Protecting Resources. Strengthening Accountability.</h2>
                    <p>FraudShield is a forensic fraud prevention and advisory firm established to help organizations protect resources, strengthen accountability, and respond to financial irregularities with discretion and evidence-based professionalism.</p>
                    <p>We support NGOs, donor-funded programmes, SACCOs, SMEs, schools, hospitals, religious organizations, community institutions, public institutions, boards, trustees, and management teams that need stronger financial controls and clearer accountability.</p>
                </div>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                <div className="section-head">
                    <h2>Core Services</h2>
                    <div className="accent-line"></div>
                    <p>Practical forensic and fraud-prevention support for organizations that need to identify risks, strengthen controls, and make evidence-based decisions.</p>
                </div>
                <div className="grid four">
                    <article className="card service-card"><div className="card-icon">01</div><h3>Fraud Risk Assessments</h3><p>Identify fraud exposure, control gaps, and areas requiring stronger oversight.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">02</div><h3>Internal Control Reviews</h3><p>Assess approval processes, segregation of duties, documentation, and financial control weaknesses.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">03</div><h3>Confidential Fraud Investigations</h3><p>Review suspected financial irregularities through discreet, evidence-based processes.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">04</div><h3>Procurement Fraud Reviews</h3><p>Review procurement files, supplier patterns, approvals, and potential irregularities.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">05</div><h3>NGO & Donor Compliance Reviews</h3><p>Assess documentation, spending controls, and compliance readiness.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">06</div><h3>Anti-Fraud Training</h3><p>Train staff, boards, and management on fraud red flags, reporting responsibilities, and prevention controls.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">07</div><h3>Whistleblower Hotline Setup</h3><p>Create confidential reporting channels and escalation protocols.</p><a className="link" href="services.html">Learn more</a></article>
                    <article className="card service-card"><div className="card-icon">08</div><h3>Forensic Accounting & Financial Analysis</h3><p>Analyze records, transaction patterns, anomalies, and supporting documentation.</p><a className="link" href="services.html">Learn more</a></article>
                </div>
                </div>
            </section>

            <section className="section">
                <div className="container split">
                <div className="image-frame">
                    <img src="./images/document-control-review.png" alt="African compliance professionals reviewing procurement and financial documents" />
                </div>
                <div>
                    <div className="accent-line"></div>
                    <h2>Why Organizations Work With FraudShield</h2>
                    <div className="grid">
                    <article><h3>Confidential and discreet</h3><p className="muted">Sensitive matters are handled carefully, with clear boundaries on documents, interviews, reports, and findings.</p></article>
                    <article><h3>Evidence-based reviews</h3><p className="muted">Findings are grounded in records, documents, transaction analysis, and review processes.</p></article>
                    <article><h3>Practical recommendations</h3><p className="muted">Boards and management receive actions they can realistically implement to strengthen accountability.</p></article>
                    </div>
                </div>
                </div>
            </section>

            <section className="founder-band">
                <img src="./images/ali-omar-founder.jpeg" alt="CPA Ali Omar, Founder and Director of FraudShield"/>
                <div className="copy">
                <div className="accent-line"></div>
                <h2>Led by CPA Ali Omar</h2>
                <p>FraudShield is led by CPA Ali Omar, a forensic fraud prevention and financial control professional with 15 years of experience in fraud prevention, forensic accounting, investigations, compliance, donor-funded accountability, governance, risk management, and internal control improvement.</p>
                <p>He is a CPA(K), Certified Fraud Forensic Examiner, MBA graduate in Strategic Management, data analyst proficient in R and statistical programming, and expert witness in financial fraud matters.</p>
                <a className="button light" href="/founder">Read Founder Profile</a>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                <div className="section-head"><h2>Industries Served</h2><p>Organizations that manage funds, procurement, donor resources, member contributions, public trust, or community resources.</p></div>
                <div className="industry-strip">
                    <div className="industry-item">NGOs & Donor-Funded Programmes</div><div className="industry-item">SACCOs & Member-Based Institutions</div><div className="industry-item">SMEs & Family Businesses</div><div className="industry-item">Schools, Colleges & Training Institutions</div><div className="industry-item">Hospitals & Healthcare Organizations</div><div className="industry-item">Religious & Community Organizations</div><div className="industry-item">County / Public Institutions</div><div className="industry-item">Boards, Trustees & Management Teams</div>
                </div>
                <div className="section-actions" style={{justifyContent:"center",marginTop:28}}><a className="button" href="industries.html">View All Industries</a></div>
                </div>
            </section>

            <section className="confidential">
                <div className="confidential-grid">
                <div className="confidential-copy">
                    <div className="accent-line"></div>
                    <h2>Confidentiality First</h2>
                    <p>Client documents, reports, interviews, whistleblower information, financial records, and findings are handled discreetly and used only for the agreed engagement purpose.</p>
                    <p>Sensitive documents should be shared through approved secure channels. FraudShield does not encourage sharing sensitive evidence through unsecured social media or informal messaging platforms.</p>
                </div>
                <div className="confidential-media" aria-label="Confidential consultation in a professional office"></div>
                </div>
            </section>

            <section className="section final-cta">
                <div className="container split">
                <div>
                    <h2>Concerned About Fraud Risk, Weak Controls, or Financial Irregularities?</h2>
                    <p>Speak to FraudShield about a confidential fraud risk assessment, internal control review, investigation support, donor compliance review, or anti-fraud training engagement.</p>
                    <p><strong>Phone / WhatsApp:</strong> +254 729 573 134<br/><strong>Email:</strong> info@fraudshield.co.ke</p>
                </div>
                <div className="image-frame">
                    <img src="./images/confidential-consultation.png" alt="African professional consultant handling a confidential phone consultation"/>
                </div>
                <div className="section-actions"><a className="button" href="contact.html">Book a Confidential Consultation</a></div>
                </div>
            </section>
            </main>

            <FOOTER />
        </>
    )
}

export default HOME
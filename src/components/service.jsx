import NAVBAR from "./nav"
import FOOTER from "./footer"

const SERVICE = () => {
    return (
        <>
            <NAVBAR />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>Services</h1>
                            <p>Forensic fraud prevention, internal control, compliance, investigation, training, and governance advisory services for organizations that need to protect resources and strengthen accountability.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container grid three">
                            <article className="card">
                                <h3>Fraud Risk Assessments</h3>
                                <p><strong>Problem:</strong> Organizations know fraud risk exists but may not know where exposure is highest.</p>
                                <p><strong>Deliverable:</strong> Fraud risk assessment report with key risks, control gaps, risk ratings, and practical recommendations.</p>
                            </article>
                            <article className="card">
                                <h3>Internal Control Reviews</h3>
                                <p>Review approval processes, segregation of duties, cash handling, procurement controls, documentation, reconciliations, reporting, and oversight structures.</p>
                                <p><strong>Deliverable:</strong> Internal control review report with practical improvement plan.</p>
                            </article>
                            <article className="card">
                                <h3>Confidential Fraud Investigations</h3>
                                <p>Support suspected fraud, misuse of funds, procurement irregularities, financial discrepancies, or control breaches through structured review and reporting.</p>
                                <p><strong>Deliverable:</strong> Confidential investigation report with findings and recommendations.</p>
                            </article>
                            <article className="card">
                                <h3>Procurement Fraud Reviews</h3>
                                <p>Review procurement files, supplier selection, approvals, pricing patterns, documentation, delivery evidence, and payment support.</p>
                                <p><strong>Deliverable:</strong> Procurement review report with red flags and control recommendations.</p>
                            </article>
                            <article className="card">
                                <h3>NGO & Donor Compliance Reviews</h3>
                                <p>Review grant documentation, procurement records, payment support, budget alignment, reporting trails, and internal controls.</p>
                                <p><strong>Deliverable:</strong> Donor compliance readiness report.</p>
                            </article>
                            <article className="card">
                                <h3>Anti-Fraud Training</h3>
                                <p>Tailored training on fraud risks, internal controls, procurement red flags, whistleblower reporting, board oversight, and accountability responsibilities.</p>
                                <p><strong>Deliverable:</strong> Training session, slides, attendance record, and learning summary.</p>
                            </article>
                            <article className="card">
                                <h3>Whistleblower Hotline Setup</h3>
                                <p>Design reporting channels, intake forms, escalation protocols, confidentiality procedures, and non-retaliation guidance.</p>
                                <p><strong>Deliverable:</strong> Whistleblower reporting framework and hotline setup guide.</p>
                            </article>
                            <article className="card">
                                <h3>Forensic Accounting & Financial Analysis</h3>
                                <p>Analyze records, transactions, supporting documents, trends, anomalies, and reporting inconsistencies.</p>
                                <p><strong>Deliverable:</strong> Forensic accounting or financial analysis report.</p>
                            </article>
                            <article className="card">
                                <h3>Suitable Clients</h3>
                                <p>NGOs, SACCOs, SMEs, schools, hospitals, religious organizations, CBOs, county/public institutions, boards, trustees, and management teams.</p>
                                <a className="button" href="contact.html">Book Consultation</a>
                            </article>
                        </div>
                    </section>
                </main>
            <FOOTER />
        </>
    )
}

export default SERVICE
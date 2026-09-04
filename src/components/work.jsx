import NAVBAR from "./nav"
import FOOTER from "./footer"
const WORK = () => {
    return (
        <>
            <NAVBAR />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>How We Work</h1>
                            <p>FraudShield handles sensitive work. For confidentiality reasons, many fraud prevention, investigation, and advisory engagements cannot be publicly disclosed, so we explain our professional working approach.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container process grid three">
                            <article className="card">
                                <h3>Confidential Inquiry</h3>
                                <p>We begin with a discreet discussion to understand the concern, urgency, decision need, and appropriate next steps.</p>
                            </article>
                            <article className="card">
                                <h3>Scope Definition</h3>
                                <p>We agree on the engagement objective, access requirements, documents needed, confidentiality expectations, reporting lines, and deliverables.</p>
                            </article>
                            <article className="card">
                                <h3>Document and Process Review</h3>
                                <p>We review financial records, procurement files, policies, approvals, reporting trails, and internal control processes.</p>
                            </article>
                            <article className="card">
                                <h3>Analysis and Evidence Review</h3>
                                <p>We analyze transactions, patterns, anomalies, documentation gaps, and control weaknesses.</p>
                            </article>
                            <article className="card">
                                <h3>Findings and Recommendations</h3>
                                <p>We prepare clear, evidence-based findings and practical recommendations for management, boards, trustees, or relevant decision-makers.</p>
                            </article>
                            <article className="card">
                                <h3>Control Strengthening</h3>
                                <p>Where appropriate, we support improved controls, policies, reporting channels, training, and accountability systems.</p>
                            </article>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container split">
                            <div>
                                <h2>Representative Engagement Examples</h2>
                                <p className="muted">These are representative examples, not claims of completed client work.</p>
                                <ul>
                                    <li>Reviewing procurement files where supplier selection appears irregular</li>
                                    <li>Assessing donor-funded project documentation before audit</li>
                                    <li>Reviewing cash handling and approval controls in a school, SACCO, or religious institution</li>
                                    <li>Helping an organization set up a confidential reporting channel</li>
                                    <li>Training board members on fraud red flags and governance responsibilities</li>
                                    <li>Analyzing financial data for unusual trends, duplicate payments, or unsupported transactions</li>
                                </ul>
                            </div>
                            <div className="image-frame">
                                <img src="./images/anti-fraud-training.png" alt="African board members attending anti-fraud training"/>
                            </div>
                        </div>
                    </section>
                    <section className="section navy">
                        <div className="container">
                            <h2>Confidentiality Statement</h2>
                            <p>All client information, documents, interviews, reports, whistleblower information, and findings are handled confidentially and used only for the agreed engagement purpose.</p>
                            <a className="button light" href="/contact">Book a Confidential Consultation</a>
                        </div>
                    </section>
                </main>            
            <FOOTER />
        </>
    )
}

export default WORK
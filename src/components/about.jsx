import NAVBAR from "./nav"
import FOOTER from "./footer"

const ABOUT = () => {
    return (
        <>
            <NAVBAR />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>About FraudShield</h1>
                            <p>FraudShield is a forensic fraud prevention and advisory firm established to help organizations protect resources, strengthen accountability, and respond to financial irregularities with discretion and evidence-based professionalism.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container split">
                            <div>
                                <div className="accent-line"></div>
                                <h2>Our Approach</h2>
                                <p>We begin by understanding the organization's structure, risks, documents, reporting lines, control environment, and governance concerns. We then review relevant records, processes, approvals, and control points before presenting clear findings and practical recommendations.</p>
                                <p>We support organizations that face risks such as weak internal controls, procurement irregularities, donor compliance gaps, misuse of funds, whistleblower concerns, poor documentation, and governance weaknesses.</p>
                            </div>
                            <div className="image-frame">
                                <img src="./images/document-control-review.png" alt="African professionals reviewing control documents"/>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="section-head">
                                <h2>Our Values</h2>
                                <p>The principles that guide every FraudShield engagement.</p>
                            </div>
                            <div className="grid three">
                                <article className="card">
                                    <h3>Integrity</h3>
                                    <p>We approach every engagement with honesty, independence, and professional responsibility.</p>
                                </article>
                                <article className="card">
                                    <h3>Confidentiality</h3>
                                    <p>Sensitive client information is handled discreetly and only for the agreed engagement purpose.</p>
                                </article>
                                <article className="card">
                                    <h3>Accountability</h3>
                                    <p>We help organizations strengthen systems that protect resources and support responsible decisions.</p>
                                </article>
                                <article className="card">
                                    <h3>Evidence-Based Work</h3>
                                    <p>Findings and recommendations are grounded in documents, records, analysis, and clear review processes.</p>
                                </article>
                                <article className="card">
                                    <h3>Practical Problem-Solving</h3>
                                    <p>We focus on recommendations that management, boards, and teams can realistically implement.</p>
                                </article>
                                <article className="card">
                                    <h3>Prevention First</h3>
                                    <p>Fraud prevention is stronger and less costly than responding after losses occur.</p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container split">
                            <div>
                                <h2>Why Fraud Prevention Matters</h2>
                                <p>Fraud prevention is not only about investigating wrongdoing after money has been lost. It is about building systems that make misuse of resources harder to commit, easier to detect, and harder to conceal.</p>
                                <p>Strong controls protect organizations, staff, donors, members, boards, trustees, communities, and public trust.</p>
                            </div>
                            <div className="notice">
                                <strong>Professional boundary:</strong> FraudShield provides forensic fraud prevention, financial review, internal control, compliance, training, and advisory support. We do not act as a law enforcement agency, court, or legal representative.
                            </div>
                        </div>
                    </section>
                </main>            
            <FOOTER />
        </>
    )
}

export default ABOUT
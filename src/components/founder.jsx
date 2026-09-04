import NAVBAR from "./nav"
import FOOTER from "./footer"
const FOUNDER = () => {
    return (
        <>
            <NAVBAR />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>CPA Ali Omar - Founder & Director</h1>
                            <p>Founder-led forensic fraud prevention, financial control, investigations, compliance, governance, and risk management advisory.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container split">
                            <div className="image-frame">
                                <img src="./images/ali-omar-founder.jpeg" alt="CPA Ali Omar"/>
                            </div>
                            <div>
                                <div className="accent-line"></div>
                                <h2>Founder Profile</h2>
                                <p>CPA Ali Omar is the Founder and Director of FraudShield, established to help organizations protect resources, strengthen accountability, and respond to financial irregularities with discretion and evidence-based professionalism.</p>
                                <p>He brings 15 years of experience in fraud prevention, forensic accounting, financial control, investigations, compliance, donor-funded accountability, governance, risk management, and internal control improvement.</p>
                                <p>His work includes reviewing suspected financial irregularities, analyzing financial records, examining procurement processes, monitoring compliance, preparing evidence-based investigation reports, and recommending improvements to internal controls.</p>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <div className="grid three">
                                <article className="card">
                                    <h3>Professional Credentials</h3>
                                    <p>CPA(K), Certified Fraud Forensic Examiner, and MBA graduate in Strategic Management.</p>
                                </article>
                                <article className="card">
                                    <h3>Data Analysis Capability</h3>
                                    <p>Proficient in R and statistical programming for transaction review, trend analysis, and anomaly identification.</p>
                                </article>
                                <article className="card">
                                    <h3>Governance Experience</h3>
                                    <p>Board-level experience in risk management, oversight, accountability strengthening, and fraud prevention training.</p>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container">
                            <h2>FraudShield Reflects His Professional Belief</h2>
                            <p>Fraud prevention is not only about investigating wrongdoing after losses occur. It is about building stronger systems, improving accountability, protecting institutional trust, and helping leaders make informed decisions based on evidence.</p>
                            <a className="button" href="contact.html">Book a Confidential Consultation</a>
                        </div>
                    </section>
                </main>
            <FOOTER />
        </>
    )
}

export default FOUNDER
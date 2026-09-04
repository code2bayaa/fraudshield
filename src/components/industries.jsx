import NAVBAR from "./nav"
import FOOTER from "./footer"

const INDUSTRIES = () => {
    return (
        <>
            <NAVBAR />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>Industries Served</h1>
                            <p>FraudShield supports organizations that manage funds, procurement, public trust, donor resources, member contributions, community resources, or institutional assets.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container grid three">
                            <article className="card">
                                <h3>NGOs & Donor-Funded Programmes</h3>
                                <p>Common risks include unsupported costs, weak procurement records, donor compliance gaps, misuse of project funds, and weak grant reporting controls.</p>
                                <p>FraudShield supports donor compliance reviews, procurement fraud reviews, internal control assessments, fraud-risk reviews, and anti-fraud training.</p>
                            </article>
                            <article className="card">
                                <h3>SACCOs & Member-Based Institutions</h3>
                                <p>Common risks include loan fraud, member account manipulation, cash handling weaknesses, insider abuse, governance gaps, and poor segregation of duties.</p>
                                <p>We review control systems, approval processes, reporting structures, and fraud-risk exposure to help protect member resources.</p>
                            </article>
                            <article className="card">
                                <h3>SMEs & Family Businesses</h3>
                                <p>Common risks include employee theft, supplier fraud, weak bookkeeping, owner overdependence, poor approval systems, and stock or cash leakage.</p>
                                <p>We help SMEs introduce practical controls, review suspicious patterns, and improve accountability without overcomplicating operations.</p>
                            </article>
                            <article className="card">
                                <h3>Schools, Colleges & Training Institutions</h3>
                                <p>Common risks include fee collection weaknesses, procurement gaps, bursary or project fund misuse, poor documentation, and weak approval controls.</p>
                                <p>FraudShield reviews finance processes, fee controls, procurement documentation, and accountability systems.</p>
                            </article>
                            <article className="card">
                                <h3>Hospitals & Healthcare Organizations</h3>
                                <p>Common risks include billing irregularities, inventory leakage, procurement fraud, cash handling concerns, and supplier or invoice manipulation.</p>
                                <p>We review billing, procurement, inventory, approvals, and reporting controls.</p>
                            </article>
                            <article className="card">
                                <h3>Religious & Community Organizations</h3>
                                <p>Common risks include donation handling weaknesses, project fund misuse, volunteer-led finance gaps, limited reporting structures, and weak oversight.</p>
                                <p>We support transparent financial controls, donation accountability, reporting systems, and governance strengthening.</p>
                            </article>
                            <article className="card">
                                <h3>County / Public Institutions</h3>
                                <p>Common risks include procurement irregularities, misuse of funds, weak compliance monitoring, control gaps, and documentation weaknesses.</p>
                                <p>FraudShield provides fraud-risk reviews, procurement control reviews, compliance support, and evidence-based reporting advisory.</p>
                            </article>
                            <article className="card">
                                <h3>Boards, Trustees & Management Teams</h3>
                                <p>Boards and executives need reliable information, discreet review processes, and recommendations that support proper oversight.</p>
                                <p>FraudShield helps decision-makers respond calmly and strengthen accountability systems.</p>
                            </article>
                            <article className="card">
                                <h3>Discuss Your Sector</h3>
                                <p>If your organization manages funds, procurement, donations, grants, public resources, or member contributions, FraudShield can help review risk and controls.</p>
                                <a className="button" href="contact.html">Book a Consultation</a>
                            </article>
                        </div>
                    </section>
                </main>            
            <FOOTER />
        </>
    )
}

export default INDUSTRIES
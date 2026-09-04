import NAVBAR from "./nav"
import FOOTER from "./footer"
import { useState } from "react"
import Select from 'react-select';
import { toast, Toaster  } from "sonner";
const CONTACT = () => {
    const [form,setForm] = useState({
        name:"",
        organization:"",
        position:"",
        email:"",
        phone:"",
        inquiry:[],
        contact:"Email",
        matter:"No",
        description:"",
        understand:false

    })
    const [selectedOption, setSelectedOption] = useState("Select One");

    const options = [
        { value: 'Fraud Risk Assessment', label: 'Fraud Risk Assessment' },
        { value: 'Internal Control Review', label: 'Internal Control Review' },
        { value: 'Fraud Investigation', label: 'Fraud Investigation' },
        { value: 'Procurement Review', label: 'Procurement Review' },
        { value: 'NGO/Donor Compliance', label: 'NGO/Donor Compliance' },
        { value: 'Anti-Fraud Training', label: 'Anti-Fraud Training' },
        { value: 'Whistleblower Hotline Setup', label: 'Whistleblower Hotline Setup' },
        { value: 'General Inquiry', label: 'General Inquiry' },
    ];

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            // console.log("Form submitted successfully!");
            // console.log(form,"form")
            const res = await fetch(`${import.meta.env.VITE_ENVIRONMENT === "development" ? import.meta.env.VITE_CONSULTATION : import.meta.env.VITE_CONSULTATION_LIVE}`,{
                method:"POST",
                body : JSON.stringify({
                    data:form
                }),
                headers: {
                    'Content-Type': 'application/json', // Indicates the body is JSON
                    'x-api-key':import.meta.env.VITE_API_KEY
                },
            });

            const {status, error, message} = await res.json() 
            
            console.log(status,"status",message,"message")
            if(error){
                toast.error('Retry: ' + error)
                return 
            }
            
            if(status){
                toast.success(message)
            }else{
                toast.error(message)
            }

            return;           
        }catch(error){
            console.log(error,"error")
        }
    }
    return (
        <>
            <NAVBAR />
            <Toaster />
                <main>
                    <section className="page-hero">
                        <div className="container">
                            <h1>Contact FraudShield</h1>
                            <p>Fraud concerns require discretion. Whether your organization needs a fraud risk assessment, internal control review, confidential investigation, procurement review, donor compliance support, anti-fraud training, or whistleblower hotline setup, FraudShield will handle your inquiry professionally.</p>
                        </div>
                    </section>
                    <section className="section white">
                        <div className="container contact-grid">
                            <aside className="card"><h2>Contact Details</h2>
                                <div className="contact-list"><div>
                                    <strong>Phone / WhatsApp</strong><br/>+254 729 573 134</div>
                                    <div>
                                        <strong>Email</strong><br/>info@fraudshield.co.ke
                                    </div>
                                    <div>
                                        <strong>Website</strong><br/>fraudshield.co.ke
                                    </div>
                                    <div>
                                        <strong>Location</strong><br/>Mombasa, Kenya
                                    </div>
                                    <div>
                                        <strong>Company Registration No.</strong><br/>PVT-7LUK573
                                    </div>
                                </div>
                                <div className="notice" style={{marginTop:24}}>
                                    Please avoid sending highly sensitive evidence, whistleblower disclosures, or confidential documents through WhatsApp or unsecured social media channels. Use WhatsApp for general inquiries and appointment scheduling only.
                                </div>
                            </aside>
                            <section className="card">
                                <h2>Book a Confidential Consultation</h2>
                                <form onSubmit={handleSubmit} >
                                    <div className="form-grid">
                                        <label>Full Name
                                            <input 
                                                name="fullName" 
                                                autoComplete="name" 
                                                required
                                                onChange={(e) => setForm((prev => ({...prev,name:e.target.value})))}
                                            />
                                        </label>
                                        <label>Organization
                                            <input 
                                                name="organization" 
                                                onChange={(e) => setForm((prev => ({...prev,organization:e.target.value})))}
                                                required
                                            />
                                        </label>
                                        <label>Position / Title
                                            <input 
                                                name="position"
                                                onChange={(e) => setForm((prev => ({...prev,position:e.target.value})))}
                                            />
                                        </label>
                                        <label>Email Address
                                            <input 
                                                type="email" 
                                                name="email" 
                                                autoComplete="email" 
                                                onChange={(e) => setForm((prev => ({...prev,email:e.target.value})))}
                                                required
                                            />
                                        </label>
                                        <label>Phone Number
                                            <input 
                                                name="phone" 
                                                onChange={(e) => setForm((prev => ({...prev,phone:e.target.value})))}
                                                autoComplete="tel"
                                            />
                                        </label>
                                        <label>Type of Inquiry
                                            <Select
                                                defaultValue={selectedOption}
                                                // name={(e) => console.log(e)}
                                                isMulti={true}
                                                // onEnter={(e) => console.log("hey") }
                                                // onChange={setSelectedOption}
                                                onChange={(value) => {
                                                    // e.preventDefault();
                                                    setSelectedOption(value);
                                                    setForm((prev) => {
                                                        prev.inquiry = value.map((item) => item.value);
                                                        return ({...prev})
                                                    })}
                                                }
                                                options={options}
                                            />
                                        </label>
                                        <label>Preferred Contact Method
                                            <select onChange={(e) => {
                                                // e.preventDefault();
                                                setForm((prev => ({...prev,contact:e.target.value})))}} name="preferredContact" required>
                                                <option>Email</option>
                                                <option>Phone Call</option>
                                                <option>WhatsApp</option>
                                            </select>
                                        </label>
                                        <label>Is the matter urgent?
                                            <select name="urgent" onChange={(e) => setForm((prev => ({...prev,matter:e.target.value})))}>
                                                <option>No</option>
                                                <option>Yes</option>
                                            </select>
                                        </label>
                                    </div>
                                    <label>Brief Description of Concern
                                        <textarea 
                                            name="description" 
                                            onChange={(e) => setForm((prev => ({...prev,description:e.target.value})))}
                                            required
                                        ></textarea>
                                    </label>
                                    <label className="checkbox">
                                        <input 
                                            type="checkbox" 
                                            name="confidentialityNotice" 
                                            onClick={() => {
                                                const u = form.understand
                                                const new_u = !u
                                                setForm((prev => ({...prev,understand:new_u})))
                                                // e.target.value = new_u
                                            }}  
                                            value={false} 
                                        required/>
                                        <span>I understand that highly sensitive documents should not be submitted through unsecured channels and that FraudShield may advise on a secure submission process.</span>
                                    </label>
                                    <button 
                                        className="button" 
                                        type="submit"
                                        // onSubmit={(e) => handleSubmit(e) }
                                    >Submit Inquiry</button>
                                    <div className="form-status" data-form-status></div>
                                </form>
                            </section>
                        </div>
                    </section>
                </main>
            <FOOTER />
        </>
    )
}

export default CONTACT
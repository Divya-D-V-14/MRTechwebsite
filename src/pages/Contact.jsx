// // // import React, { useState } from "react";
// // // import "./Contact.css";
// // // import {
// // //   FaEnvelope,
// // //   FaPhoneAlt,
// // //   FaMapMarkerAlt,
// // //   FaCalendarAlt,
// // //   FaBuilding,
// // // } from "react-icons/fa";

// // // export default function Contact() {
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     service: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) =>
// // //     setForm({ ...form, [e.target.name]: e.target.value });

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     alert("Thanks! We’ll get back to you shortly.");
// // //     setForm({
// // //       name: "",
// // //       email: "",
// // //       phone: "",
// // //       service: "",
// // //       message: "",
// // //     });
// // //   };

// // //   return (
// // //     <section className="contact">
// // //       <div className="contact-inner">
// // //         <div className="contact-grid">
// // //           {/* LEFT: Company Info */}
// // //           <div className="card info-card">
// // //             <div className="card-head">
// // //               <FaBuilding className="head-icon" />
// // //               <span>Company Information</span>
// // //             </div>

// // //             <div className="company-name">
// // //               Myth Reality Technologies Private Limited
// // //             </div>
// // //             <p className="company-tag">
// // //               Technology powerhouse for AI-driven healthcare and agriculture
// // //             </p>

// // //             <ul className="info-list">
// // //               <li>
// // //                 <FaEnvelope className="i" />
// // //                 <a href="mailto:info@mythrealitytech.com">
// // //                   info@mythrealitytech.com
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <FaPhoneAlt className="i" />
// // //                 <a href="tel:+917303460418">+91-7303460418</a>
// // //               </li>
// // //               <li>
// // //                 <FaMapMarkerAlt className="i" />
// // //                 <span>Tamil Nadu, India</span>
// // //               </li>
// // //             </ul>

// // //             <a href="tel:+917303460418" className="call-btn">
// // //               <FaCalendarAlt />
// // //               <span>Schedule Call</span>
// // //             </a>
// // //           </div>

// // //           {/* RIGHT: Quick Enquiry Form */}
// // //           <div className="card form-card">
// // //             <div className="card-head">
// // //               <span className="dot" />
// // //               <span>Quick Enquiry</span>
// // //             </div>

// // //             <form onSubmit={handleSubmit} className="form">
// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Your Name"
// // //                 value={form.name}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //                 value={form.email}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 value={form.phone}
// // //                 onChange={handleChange}
// // //               />
// // //               <select
// // //                 name="service"
// // //                 value={form.service}
// // //                 onChange={handleChange}
// // //                 required
// // //               >
// // //                 <option value="">Select Service Interest</option>
// // //                 <option value="health-atm">G Care Health ATM</option>
// // //                 <option value="health-score">Health Score App</option>
// // //                 <option value="telemedicine">SERV Telemedicine</option>
// // //                 <option value="agri-ai">AI Agriculture Solutions</option>
// // //                 <option value="crowdshaki">CrowdShaki Platform</option>
// // //                 <option value="cha-training">CHA Training Program</option>
// // //               </select>
// // //               <textarea
// // //                 name="message"
// // //                 placeholder="Your message"
// // //                 rows="4"
// // //                 value={form.message}
// // //                 onChange={handleChange}
// // //               />
// // //               <button type="submit" className="submit-btn">
// // //                 Send Message
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }




// // import React, { useState } from "react";
// // import "./Contact.css";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "", phone: "", service: "", message: ""
// //   });

// //   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// //   const onSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Message sent!");
// //   };

// //   return (
// //     <main className="c-wrap">
// //       {/* Header (no phone icon) */}
// //       <section className="c-hero">
// //         <h1>Contact Us</h1>
// //         <p>We’re here to collaborate, partner, and answer your questions.</p>
// //       </section>

// //       {/* Cards */}
// //       <section className="c-grid">
// //         {/* LEFT — Company info */}
// //         <article className="c-card c-info">
// //           <h3 className="c-card-title">
// //             <span className="c-emoji">🧾</span> Company Information
// //           </h3>

// //           <h4 className="c-company">Myth Reality Technologies Private Limited</h4>
// //           <p className="c-tagline">
// //             Technology powerhouse for AI-driven healthcare and agriculture
// //           </p>

// //           <div className="c-row">
// //             <div className="c-label c-email">Email:</div>
// //             <div className="c-value">info@mythrealitytech.com</div>
// //           </div>

// //           <div className="c-row">
// //             <div className="c-label c-phone">Phone:</div>
// //             <div className="c-value">+91-XXXXXXXXXX</div>
// //           </div>

// //           <div className="c-row">
// //             <div className="c-label c-office">Office:</div>
// //             <div className="c-value">
// //               Registered Office Address<br/>Tamil Nadu, India
// //             </div>
// //           </div>

// //           <a className="c-cta" href="tel:+919999999999">📅 Schedule Call</a>
// //         </article>

// //         {/* RIGHT — Form */}
// //         <article className="c-card c-form">
// //           <h3 className="c-card-title">
// //             <span className="c-emoji">💬</span> Quick Enquiry
// //           </h3>

// //           <form onSubmit={onSubmit} className="c-form-grid">
// //             <input
// //               name="name"
// //               value={form.name}
// //               onChange={onChange}
// //               placeholder="Your Name"
// //               required
// //             />
// //             <input
// //               name="phone"
// //               value={form.phone}
// //               onChange={onChange}
// //               placeholder="Phone Number"
// //             />
// //                         <input
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={onChange}
// //               placeholder="Email Address"
// //               required
// //             />

// //             <select
// //               name="service"
// //               value={form.service}
// //               onChange={onChange}
// //               required
// //             >
// //               <option value="">Select Service Interest</option>
// //               <option>G Care Health ATM</option>
// //               <option>Health Score App</option>
// //               <option>SERV Telemedicine</option>
// //               <option>AI Agriculture</option>
// //               <option>Partnership</option>
// //               <option>Other</option>
// //             </select>
// //             <textarea
// //               name="message"
// //               value={form.message}
// //               onChange={onChange}
// //               placeholder="Your message"
// //               rows={4}
// //             />
// //             <button type="submit" className="c-send">Send Message</button>
// //           </form>
// //         </article>
// //       </section>
// //     </main>
// //   );
// // }

// import React, { useState } from "react";
// import "./Contact.css";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "", phone: "", service: "", message: ""
//   });

//   const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent!");
//   };

//   return (
//     <main className="c-wrap">
//       {/* Header (no phone icon) */}
//       <section className="c-hero">
//         <h1>Contact Us</h1>
//         <p>We’re here to collaborate, partner, and answer your questions.</p>
//       </section>

//       {/* Cards */}
//       <section className="c-grid">
//         {/* LEFT — Company info */}
//         <article className="c-card c-info">
//           <h3 className="c-card-title">
//             <span className="c-emoji">🧾</span> Company Information
//           </h3>

//           <h4 className="c-company">Myth Reality Technologies Private Limited</h4>
//           <p className="c-tagline">
//             Technology powerhouse for AI-driven healthcare and agriculture
//           </p>

//           <div className="c-row">
//             <div className="c-label c-email">Email:</div>
//             <div className="c-value">info@mythrealitytech.com</div>
//           </div>

//           <div className="c-row">
//             <div className="c-label c-phone">Phone:</div>
//             <div className="c-value">+91-XXXXXXXXXX</div>
//           </div>

//           <div className="c-row">
//             <div className="c-label c-office">Office:</div>
//             <div className="c-value">
//               Registered Office Address<br/>Tamil Nadu, India
//             </div>
//           </div>

//           <a className="c-cta" href="tel:+919999999999">📅 Schedule Call</a>
//         </article>

//         {/* RIGHT — Form */}
//         <article className="c-card c-form">
//           <h3 className="c-card-title">
//             <span className="c-emoji">💬</span> Quick Enquiry
//           </h3>

//           <form onSubmit={onSubmit} className="c-form-grid">
//             <input
//               name="name"
//               value={form.name}
//               onChange={onChange}
//               placeholder="Your Name"
//               required
//             />
//             <input
//               name="phone"
//               value={form.phone}
//               onChange={onChange}
//               placeholder="Phone Number"
//             />
//                         <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={onChange}
//               placeholder="Email Address"
//               required
//             />

//             <select
//               name="service"
//               value={form.service}
//               onChange={onChange}
//               required
//             >
//               <option value="">Select Service Interest</option>
//               <option>G Care Health ATM</option>
//               <option>Health Score App</option>
//               <option>SERV Telemedicine</option>
//               <option>AI Agriculture</option>
//               <option>Partnership</option>
//               <option>Other</option>
//             </select>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={onChange}
//               placeholder="Your message"
//               rows={4}
//             />
//             <button type="submit" className="c-send">Send Message</button>
//           </form>
//         </article>
//       </section>
//     </main>
//   );
// }










import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  // ---------- state ----------
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });

  // API base (local or prod)
  const API_URL =
    process.env.REACT_APP_API_URL || "http://localhost:4000";

  // ---------- handlers ----------
  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");

      setStatus({ loading: false, ok: true, error: null });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setStatus({ loading: false, ok: false, error: err.message });
    }
  };

  // ---------- UI ----------
  return (
    <main className="c-wrap">
      {/* Header */}
      <section className="c-hero">
        <h1>Contact Us</h1>
        <p>We’re here to collaborate, partner, and answer your questions.</p>
      </section>

      {/* Cards */}
      <section className="c-grid">
        {/* LEFT — Company info */}
        <article className="c-card c-info">
          <h3 className="c-card-title">
            <span className="c-emoji">🧾</span> Company Information
          </h3>

          <h4 className="c-company">Myth Reality Technologies Private Limited</h4>
          <p className="c-tagline">
            Technology powerhouse for AI-driven healthcare and agriculture
          </p>

          <div className="c-row">
            <div className="c-label c-email">Email:</div>
            <div className="c-value">info@mythrealitytech.com</div>
          </div>

          <div className="c-row">
            <div className="c-label c-phone">Phone:</div>
            <div className="c-value">+91-XXXXXXXXXX</div>
          </div>

          <div className="c-row">
            <div className="c-label c-office">Office:</div>
            <div className="c-value">
              Registered Office Address
              <br />
              Tamil Nadu, India
            </div>
          </div>

          <a className="c-cta" href="tel:+919999999999">
            📅 Schedule Call
          </a>
        </article>

        {/* RIGHT — Form */}
        <article className="c-card c-form">
          <h3 className="c-card-title">
            <span className="c-emoji">💬</span> Quick Enquiry
          </h3>

          <form onSubmit={onSubmit} className="c-form-grid">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="Phone Number"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email Address"
              required
            />

            <select
              name="service"
              value={form.service}
              onChange={onChange}
              required
            >
              <option value="">Select Service Interest</option>
              <option>G Care Health ATM</option>
              <option>Health Score App</option>
              <option>SERV Telemedicine</option>
              <option>AI Agriculture</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              rows={4}
              required
            />

            <button type="submit" className="c-send" disabled={status.loading}>
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {/* tiny status text */}
            {status.ok && (
              <small style={{ color: "green" }}>
                Thanks! We’ll reach you soon.
              </small>
            )}
            {status.error && (
              <small style={{ color: "crimson" }}>{status.error}</small>
            )}
          </form>
        </article>
      </section>
    </main>
  );
}

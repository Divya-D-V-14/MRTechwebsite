// // import React, { useState } from "react";
// // import "./Contact.css";
// // import {
// //   FaEnvelope,
// //   FaPhoneAlt,
// //   FaMapMarkerAlt,
// //   FaCalendarAlt,
// //   FaBuilding,
// // } from "react-icons/fa";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Thanks! We’ll get back to you shortly.");
// //     setForm({
// //       name: "",
// //       email: "",
// //       phone: "",
// //       service: "",
// //       message: "",
// //     });
// //   };

// //   return (
// //     <section className="contact">
// //       <div className="contact-inner">
// //         <h1 className="contact-title">Contact Us</h1>
// //         <p className="contact-sub">
// //           We're here to collaborate, partner, and answer your questions.
// //         </p>

// //         <div className="contact-grid">
// //           {/* LEFT: Company Information */}
// //           <div className="card info-card">
// //             <div className="card-head">
// //               <FaBuilding className="head-icon" />
// //               <span>Company Information</span>
// //             </div>

// //             <div className="company-name">
// //               Myth Reality Technologies Private Limited
// //             </div>
// //             <p className="company-tag">
// //               Technology powerhouse for AI-driven healthcare and agriculture
// //             </p>

// //             <ul className="info-list">
// //               <li>
// //                 <FaEnvelope className="i" />
// //                 <a href="mailto:info@mythrealitytech.com">
// //                   info@mythrealitytech.com
// //                 </a>
// //               </li>
// //               <li>
// //                 <FaPhoneAlt className="i" />
// //                 <a href="tel:+917303460418">+91-7303460418</a>
// //               </li>
// //               <li>
// //                 <FaMapMarkerAlt className="i" />
// //                 <span>Tamil Nadu, India</span>
// //               </li>
// //             </ul>

// //             <a href="tel:+917303460418" className="call-btn">
// //               <FaCalendarAlt />
// //               <span>Schedule Call</span>
// //             </a>
// //           </div>

// //           {/* RIGHT: Quick Enquiry */}
// //           <div className="card form-card">
// //             <div className="card-head">
// //               <span className="dot" />
// //               <span>Quick Enquiry</span>
// //             </div>

// //             <form onSubmit={handleSubmit} className="form">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Your Name"
// //                 value={form.name}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={form.email}
// //                 onChange={handleChange}
// //                 required
// //               />
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={form.phone}
// //                 onChange={handleChange}
// //               />
// //               <select
// //                 name="service"
// //                 value={form.service}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Service Interest</option>
// //                 <option value="health-atm">G Care Health ATM</option>
// //                 <option value="health-score">Health Score App</option>
// //                 <option value="telemedicine">SERV Telemedicine</option>
// //                 <option value="agri-ai">AI Agriculture Solutions</option>
// //                 <option value="crowdshaki">CrowdShaki Platform</option>
// //                 <option value="cha-training">CHA Training Program</option>
// //               </select>
// //               <textarea
// //                 name="message"
// //                 placeholder="Your message"
// //                 rows="4"
// //                 value={form.message}
// //                 onChange={handleChange}
// //               />
// //               <button type="submit" className="submit-btn">
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import React, { useState } from "react";
// import "./Contact.css";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaBuilding,
// } from "react-icons/fa";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Thanks! We’ll get back to you shortly.");
//     setForm({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       message: "",
//     });
//   };

//   return (
//     <section className="contact">
//       <div className="contact-inner">
//         <h1 className="contact-title">Contact Us</h1>
//         <p className="contact-sub">
//           We're here to collaborate, partner, and answer your questions.
//         </p>

//         <div className="contact-grid">
//           {/* LEFT: Company Information */}
//           <div className="card info-card">
//             <div className="card-head">
//               <FaBuilding className="head-icon" />
//               <span>Company Information</span>
//             </div>

//             <div className="company-name">
//               Myth Reality Technologies Private Limited
//             </div>
//             <p className="company-tag">
//               Technology powerhouse for AI-driven healthcare and agriculture
//             </p>

//             <ul className="info-list">
//               <li>
//                 <FaEnvelope className="i" />
//                 <a href="mailto:info@mythrealitytech.com">
//                   info@mythrealitytech.com
//                 </a>
//               </li>
//               <li>
//                 <FaPhoneAlt className="i" />
//                 <a href="tel:+917303460418">+91-7303460418</a>
//               </li>
//               <li>
//                 <FaMapMarkerAlt className="i" />
//                 <span>Tamil Nadu, India</span>
//               </li>
//             </ul>

//             <a href="tel:+917303460418" className="call-btn">
//               <FaCalendarAlt />
//               <span>Schedule Call</span>
//             </a>
//           </div>

//           {/* RIGHT: Quick Enquiry */}
//           <div className="card form-card">
//             <div className="card-head">
//               <span className="dot" />
//               <span>Quick Enquiry</span>
//             </div>

//             <form onSubmit={handleSubmit} className="form">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={form.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={handleChange}
//               />
//               <select
//                 name="service"
//                 value={form.service}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Service Interest</option>
//                 <option value="health-atm">G Care Health ATM</option>
//                 <option value="health-score">Health Score App</option>
//                 <option value="telemedicine">SERV Telemedicine</option>
//                 <option value="agri-ai">AI Agriculture Solutions</option>
//                 <option value="crowdshaki">CrowdShaki Platform</option>
//                 <option value="cha-training">CHA Training Program</option>
//               </select>
//               <textarea
//                 name="message"
//                 placeholder="Your message"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//               />
//               <button type="submit" className="submit-btn">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We’ll get back to you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          {/* LEFT: Company Info */}
          <div className="card info-card">
            <div className="card-head">
              <FaBuilding className="head-icon" />
              <span>Company Information</span>
            </div>

            <div className="company-name">
              Myth Reality Technologies Private Limited
            </div>
            <p className="company-tag">
              Technology powerhouse for AI-driven healthcare and agriculture
            </p>

            <ul className="info-list">
              <li>
                <FaEnvelope className="i" />
                <a href="mailto:info@mythrealitytech.com">
                  info@mythrealitytech.com
                </a>
              </li>
              <li>
                <FaPhoneAlt className="i" />
                <a href="tel:+917303460418">+91-7303460418</a>
              </li>
              <li>
                <FaMapMarkerAlt className="i" />
                <span>Tamil Nadu, India</span>
              </li>
            </ul>

            <a href="tel:+917303460418" className="call-btn">
              <FaCalendarAlt />
              <span>Schedule Call</span>
            </a>
          </div>

          {/* RIGHT: Quick Enquiry Form */}
          <div className="card form-card">
            <div className="card-head">
              <span className="dot" />
              <span>Quick Enquiry</span>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service Interest</option>
                <option value="health-atm">G Care Health ATM</option>
                <option value="health-score">Health Score App</option>
                <option value="telemedicine">SERV Telemedicine</option>
                <option value="agri-ai">AI Agriculture Solutions</option>
                <option value="crowdshaki">CrowdShaki Platform</option>
                <option value="cha-training">CHA Training Program</option>
              </select>
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

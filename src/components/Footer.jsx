// import React from "react";
// import "./Footer.css";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-inner">
//         {/* Column 1 */}
//         <div className="footer-col">
//           <h3 className="footer-title">Myth Reality <br />Technologies</h3>
//           <p className="footer-desc">
//             AI-powered innovation for healthcare, agriculture & digital transformation
//           </p>
//           <ul className="footer-contact">
//             <li>
//               <FaEnvelope className="icon" /> info@mythrealitytech.com
//             </li>
//             <li>
//               <FaPhoneAlt className="icon" /> +91-XXXXXXXXXX
//             </li>
//             <li>
//               <FaMapMarkerAlt className="icon" /> Tamil Nadu, India
//             </li>
//           </ul>
//         </div>

//         {/* Column 2 */}
//         <div className="footer-col">
//           <h4>Solutions</h4>
//           <ul>
//             <li><a href="#atm">G Care Health ATM</a></li>
//             <li><a href="#score">Health Score App</a></li>
//             <li><a href="#telemed">SERV Telemedicine</a></li>
//             <li><a href="#crowd">CrowdShaki Platform</a></li>
//             <li><a href="#farming">Smart Farming</a></li>
//           </ul>
//         </div>

//         {/* Column 3 */}
//         <div className="footer-col">
//           <h4>Company</h4>
//           <ul>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#team">Our Team</a></li>
//             <li><a href="#partners">Partner Network</a></li>
//             <li><a href="#careers">Careers</a></li>
//             <li><a href="#gallery">Gallery</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Myth Reality Technologies. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }





import React from "react";
import "./Footer.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Column 1 */}
        <div className="footer-col">
          <h3 className="footer-title">
            Myth Reality <br />
            Technologies
          </h3>
          <p className="footer-desc">
            AI-powered innovation for healthcare, agriculture & digital
            transformation
          </p>
          <ul className="footer-contact">
            <li><FaEnvelope className="icon" /> info@mythrealitytech.com</li>
            <li><FaPhoneAlt className="icon" /> +91-XXXXXXXXXX</li>
            <li><FaMapMarkerAlt className="icon" /> Tamil Nadu, India</li>
          </ul>
        </div>

        {/* Column 2 — ✅ each one links to the exact Solutions card */}
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/solutions#gcare">G Care Health ATM</Link></li>
            <li><Link to="/solutions#health-score">Health Score App</Link></li>
            <li><Link to="/solutions#agri">AI Agriculture Solutions</Link></li>
            <li><Link to="/solutions#crowdshaki">CrowdShaki Platform</Link></li>
            <li><Link to="/solutions#cha">CHA Training Program</Link></li>
            <li><Link to="/solutions#attendance">SERV Attendance App</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/partners">Partner Network</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Myth Reality Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
// import React from "react";
// import "./Home.css";
// import { FaShoppingCart, FaMobileAlt, FaChartBar } from "react-icons/fa";
// import AboutUs from "./AboutUs";

// export default function Home() {
//   return (
//     <>
//       {/* HERO */}
//       <section
//         className="hero"
//         style={{ backgroundImage: "url('/digital-art-ai-technology-background.jpg')" }}
//       >
//         <div className="hero-inner">
//           <div className="hero-left">
//             <h1 className="hero-title">
//               AI-Powered Innovation for <br />
//               Healthcare, Agriculture & Digital Transformation
//             </h1>

//             <p className="hero-sub">
//               Welcome to Myth Reality Technologies Private Limited (MRT)—the
//               technology powerhouse behind AI-driven healthcare, smart
//               agriculture, and next-gen digital ecosystems.
//             </p>
//             <p className="hero-sub">
//               From the G Care Health ATM network and Health Score App to the
//               CrowdShaki community intelligence platform, we transform advanced
//               Artificial Intelligence into real-world solutions that create
//               measurable social impact.
//             </p>

//             <div className="hero-buttons">
//               <button className="btn btn-primary">
//                 <FaShoppingCart className="btn-icon" />
//                 Explore Solutions
//               </button>
//               <button className="btn btn-outline">
//                 <FaMobileAlt className="btn-icon" />
//                 Download SERV App
//               </button>
//               <button className="btn btn-outline">
//                 <FaChartBar className="btn-icon" />
//                 Health Score Report
//               </button>
//             </div>
//           </div>
//           <div className="hero-right" aria-hidden="true" />
//         </div>
//       </section>

//       <AboutUs />
//     </>
//   );
// }



import React from "react";
import "./Home.css";
import { FaShoppingCart, FaMobileAlt, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";          // ✅ added
import AboutUs from "./AboutUs";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/digital-art-ai-technology-background.jpg')" }}
      >
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              AI-Powered Innovation for <br />
              Healthcare, Agriculture & Digital Transformation
            </h1>

            <p className="hero-sub">
              Welcome to Myth Reality Technologies Private Limited (MRT)—the
              technology powerhouse behind AI-driven healthcare, smart
              agriculture, and next-gen digital ecosystems.
            </p>
            <p className="hero-sub">
              From the G Care Health ATM network and Health Score App to the
              CrowdShaki community intelligence platform, we transform advanced
              Artificial Intelligence into real-world solutions that create
              measurable social impact.
            </p>

            <div className="hero-buttons">
              {/* ✅ Link to Solutions page */}
              <Link to="/solutions" className="btn btn-primary">
                <FaShoppingCart className="btn-icon" />
                Explore Solutions
              </Link>

              <button className="btn btn-outline">
                <FaMobileAlt className="btn-icon" />
                Download SERV App
              </button>

              <button className="btn btn-outline">
                <FaChartBar className="btn-icon" />
                Health Score Report
              </button>
            </div>
          </div>
          <div className="hero-right" aria-hidden="true" />
        </div>
      </section>

      <AboutUs />
    </>
  );
}
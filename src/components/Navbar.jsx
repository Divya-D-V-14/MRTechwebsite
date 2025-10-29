// // // // import React, { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import "./Navbar.css";

// // // // const Navbar = () => {
// // // //   const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

// // // //   // Toggle dropdown visibility
// // // //   const toggleTeamDropdown = () => {
// // // //     setIsTeamDropdownOpen(!isTeamDropdownOpen);
// // // //   };

// // // //   // Close dropdown when clicking outside
// // // //   const closeDropdown = () => {
// // // //     setIsTeamDropdownOpen(false);
// // // //   };

// // // //   return (
// // // //     <nav className="navbar">
// // // //       <div className="nav-logo">
// // // //         <Link to="/" className="logo-link">
// // // //           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
// // // //           <span className="logo-text">Myth Reality Technologies Private Limited</span>
// // // //         </Link>
// // // //       </div>
      
// // // //       <ul className="nav-links">
// // // //         <li><Link to="/">Home</Link></li>
// // // //         <li><Link to="/about">About Us</Link></li>

// // // //         {/* Click-based Team Dropdown */}
// // // //         <li className="dropdown">
// // // //           <span 
// // // //             className="dropdown-title" 
// // // //             onClick={toggleTeamDropdown}
// // // //           >
// // // //             Team {isTeamDropdownOpen ? '▲' : '▼'}
// // // //           </span>
          
// // // //           {isTeamDropdownOpen && (
// // // //             <ul className="dropdown-menu show">
// // // //               <li>
// // // //                 <Link 
// // // //                   to="/team/ai-scientists" 
// // // //                   onClick={closeDropdown}
// // // //                 >
// // // //                   AI Scientists (16 members)
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link 
// // // //                   to="/team/healthcare" 
// // // //                   onClick={closeDropdown}
// // // //                 >
// // // //                   Healthcare Technologists (12 members)
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link 
// // // //                   to="/team/data-engineers" 
// // // //                   onClick={closeDropdown}
// // // //                 >
// // // //                   Data Engineers (10 members)
// // // //                 </Link>
// // // //               </li>
// // // //               <li>
// // // //                 <Link 
// // // //                   to="/team/social-entrepreneurs" 
// // // //                   onClick={closeDropdown}
// // // //                 >
// // // //                   Social Entrepreneurs (8 members)
// // // //                 </Link>
// // // //               </li>
// // // //             </ul>
// // // //           )}
// // // //         </li>

// // // //         <li><Link to="/solutions">Solutions</Link></li>
// // // //         <li><Link to="/partners">Partners</Link></li>
// // // //         <li><Link to="/gallery">Gallery</Link></li>
// // // //         <li><Link to="/contact">Contact</Link></li>
// // // //       </ul>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Navbar.css";

// // // const Navbar = () => {
// // //   const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

// // //   const toggleTeamDropdown = () => {
// // //     setIsTeamDropdownOpen(!isTeamDropdownOpen);
// // //   };

// // //   const closeDropdown = () => {
// // //     setIsTeamDropdownOpen(false);
// // //   };

// // //   return (
// // //     <nav className="navbar">
// // //       {/* Left Logo */}
// // //       <div className="nav-logo">
// // //         <Link to="/" className="logo-link">
// // //           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
// // //           <span className="logo-text">Myth Reality Technologies Private Limited</span>
// // //         </Link>
// // //       </div>

// // //       {/* Middle Links */}
// // //       <ul className="nav-links">
// // //         <li><Link to="/">Home</Link></li>
// // //         <li><Link to="/about">About Us</Link></li>

// // //         {/* Team Dropdown */}
// // //         <li className="dropdown">
// // //           <span className="dropdown-title" onClick={toggleTeamDropdown}>
// // //             Team {isTeamDropdownOpen ? "▲" : "▼"}
// // //           </span>

// // //           {isTeamDropdownOpen && (
// // //             <ul className="dropdown-menu show">
// // //               <li><Link to="/team/ai-scientists" onClick={closeDropdown}>AI Scientists (16 members)</Link></li>
// // //               <li><Link to="/team/healthcare" onClick={closeDropdown}>Healthcare Technologists (12 members)</Link></li>
// // //               <li><Link to="/team/data-engineers" onClick={closeDropdown}>Data Engineers (10 members)</Link></li>
// // //               <li><Link to="/team/social-entrepreneurs" onClick={closeDropdown}>Social Entrepreneurs (8 members)</Link></li>
// // //             </ul>
// // //           )}
// // //         </li>

// // //         <li><Link to="/solutions">Solutions</Link></li>
// // //         <li><Link to="/partners">Partners</Link></li>
// // //         <li><Link to="/gallery">Gallery</Link></li>
// // //         <li><Link to="/contact">Contact</Link></li>
// // //       </ul>

// // //       {/* Right-side Buttons */}
// // //       <div className="nav-buttons">
// // //         <Link to="/purchase" className="btn btn-purchase">Purchase</Link>
// // //         <Link to="/login" className="btn btn-login">Login</Link>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

// //   const toggleTeamDropdown = () => {
// //     setIsTeamDropdownOpen(!isTeamDropdownOpen);
// //   };

// //   const closeDropdown = () => {
// //     setIsTeamDropdownOpen(false);
// //   };

// //   return (
// //     <nav className="navbar">
// //       {/* ==== Logo Section ==== */}
// //       <div className="nav-logo">
// //         <Link to="/" className="logo-link">
// //           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
// //           <span className="logo-text">
// //             Myth Reality Technologies Private Limited
// //           </span>
// //         </Link>
// //       </div>

// //       {/* ==== Links Section ==== */}
// //       <ul className="nav-links">
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/about">About Us</Link></li>

// //         {/* Team Dropdown */}
// //         <li className="dropdown">
// //           <span className="dropdown-title" onClick={toggleTeamDropdown}>
// //             Team {isTeamDropdownOpen ? "▲" : "▼"}
// //           </span>
// //           {isTeamDropdownOpen && (
// //             <ul className="dropdown-menu show">
// //               <li><Link to="/team/ai-scientists" onClick={closeDropdown}>AI Scientists (16 members)</Link></li>
// //               <li><Link to="/team/healthcare" onClick={closeDropdown}>Healthcare Technologists (12 members)</Link></li>
// //               <li><Link to="/team/data-engineers" onClick={closeDropdown}>Data Engineers (10 members)</Link></li>
// //               <li><Link to="/team/social-entrepreneurs" onClick={closeDropdown}>Social Entrepreneurs (8 members)</Link></li>
// //             </ul>
// //           )}
// //         </li>

// //         <li><Link to="/solutions">Solutions</Link></li>
// //         <li><Link to="/partners">Partners</Link></li>
// //         <li><Link to="/gallery">Gallery</Link></li>
// //         <li><Link to="/contact">Contact</Link></li>

// //         {/* New Normal Style Buttons */}
// //         <li><Link to="/purchase">Purchase</Link></li>
// //         <li><Link to="/login">Login</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

//   const toggleTeamDropdown = () => {
//     setIsTeamDropdownOpen(!isTeamDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsTeamDropdownOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo Section */}
//       <div className="nav-logo">
//         <Link to="/" className="logo-link">
//           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
//           <span className="logo-text">
//             Myth Reality Technologies Pvt. Ltd.
//           </span>
//         </Link>
//       </div>

//       {/* Center Navigation Links */}
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>

//         <li className="dropdown">
//           <span className="dropdown-title" onClick={toggleTeamDropdown}>
//             Team {isTeamDropdownOpen ? "▲" : "▼"}
//           </span>
//           {isTeamDropdownOpen && (
//             <ul className="dropdown-menu show">
//               <li><Link to="/team/ai-scientists" onClick={closeDropdown}>AI Scientists (16 members)</Link></li>
//               <li><Link to="/team/healthcare" onClick={closeDropdown}>Healthcare Technologists (12 members)</Link></li>
//               <li><Link to="/team/data-engineers" onClick={closeDropdown}>Data Engineers (10 members)</Link></li>
//               <li><Link to="/team/social-entrepreneurs" onClick={closeDropdown}>Social Entrepreneurs (8 members)</Link></li>
//             </ul>
//           )}
//         </li>

//         <li><Link to="/solutions">Solutions</Link></li>
//         <li><Link to="/partners">Partners</Link></li>
//         <li><Link to="/gallery">Gallery</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>

//       {/* Right Side Buttons */}
//       <div className="nav-buttons">
//         <Link to="/purchase" className="purchase-btn">Purchase</Link>
//         <Link to="/login" className="login-btn">Login</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

  const closeDropdown = () => {
    setIsTeamDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
          <span className="logo-text">
            Myth Reality Technologies Pvt. Ltd.
          </span>
        </Link>
      </div>

      {/* Center: Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        <li className="dropdown">
          <span className="dropdown-title" onClick={toggleTeamDropdown}>
            Team {isTeamDropdownOpen ? "▲" : "▼"}
          </span>
          {isTeamDropdownOpen && (
            <ul className="dropdown-menu show">
              <li><Link to="/team/ai-scientists" onClick={closeDropdown}>AI Scientists (16 members)</Link></li>
              <li><Link to="/team/healthcare" onClick={closeDropdown}>Healthcare Technologists (12 members)</Link></li>
              <li><Link to="/team/data-engineers" onClick={closeDropdown}>Data Engineers (10 members)</Link></li>
              <li><Link to="/team/social-entrepreneurs" onClick={closeDropdown}>Social Entrepreneurs (8 members)</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

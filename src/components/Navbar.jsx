// // // components/Navbar.jsx
// // import React from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import { TEAMS } from "../pages/Team"; // Import teams data

// // import "./Navbar.css";

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar">
// //       <div className="nav-logo">
// //         <Link to="/" className="logo-link">
// //           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
// //           <span className="logo-text">
// //             Myth Reality Technologies Private Limited
// //           </span>
// //         </Link>
// //       </div>

// //       <ul className="nav-links">
// //         <li><NavLink to="/">Home</NavLink></li>
// //         <li><NavLink to="/about">About Us</NavLink></li>

// //         {/* ✅ Team dropdown */}
// //         <li className="nav-item dropdown">
// //           <NavLink to="/team" className="nav-link has-caret">
// //             Team
// //             <span className="dropdown-arrow">▼</span>
// //           </NavLink>
// //           <div className="dropdown-menu">
// //             {TEAMS.map((team) => (
// //               <Link
// //                 key={team.slug}
// //                 to={`/team/${team.slug}`}
// //                 className="dropdown-item"
// //               >
// //                 <span className="team-icon">{team.icon}</span>
// //                 <div className="team-info">
// //                   <div className="team-name">{team.name}</div>
// //                   <div className="team-count">{team.count} members</div>
// //                 </div>
// //               </Link>
// //             ))}
// //           </div>
// //         </li>

// //         <li><NavLink to="/solutions">Solutions</NavLink></li>
// //         <li><NavLink to="/partners">Partners</NavLink></li>
// //         <li><NavLink to="/gallery">Gallery</NavLink></li>
// //         <li><NavLink to="/contact">Contact</NavLink></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;






// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./Navbar.css";

// // const Navbar = () => {
// //   return (
// //     <nav className="navbar">
// //       <div className="nav-logo">
// //         <Link to="/" className="logo-link">
// //           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
// //           <span className="logo-text">Myth Reality Technologies Private Limited</span>
// //         </Link>
// //       </div>
// //       <ul className="nav-links">
// //         <li><Link to="/">Home</Link></li>
// //         <li><Link to="/about">About Us</Link></li>
// //         <li><Link to="/Team">Team</Link></li>
// //         <li><Link to="/solutions">Solutions</Link></li>
// //         <li><Link to="/partners">Partners</Link></li>
// //         <li><Link to="/gallery">Gallery</Link></li>
// //         <li><Link to="/contact">Contact</Link></li>
// //       </ul>
// //     </nav>
// //   );
// // };

// // export default Navbar;





// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//         <Link to="/" className="logo-link">
//           <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
//           <span className="logo-text">Myth Reality Technologies Private Limited</span>
//         </Link>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>

//         {/* Dropdown for Team */}
//         <li className="dropdown">
//           <span className="dropdown-title">Team ▾</span>
//           <ul className="dropdown-menu">
//             <li><Link to="/team/ai-scientists">AI Scientists</Link></li>
//             <li><Link to="/team/healthcare">Healthcare Technologists</Link></li>
//             <li><Link to="/team/data-engineers">Data Engineers</Link></li>
//             <li><Link to="/team/social-entrepreneurs">Social Entrepreneurs</Link></li>
//           </ul>
//         </li>

//         <li><Link to="/solutions">Solutions</Link></li>
//         <li><Link to="/partners">Partners</Link></li>
//         <li><Link to="/gallery">Gallery</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleTeamDropdown = () => {
    setIsTeamDropdownOpen(!isTeamDropdownOpen);
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setIsTeamDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          <img src="/MR LOGO.jpeg" alt="Company Logo" className="logo-img" />
          <span className="logo-text">Myth Reality Technologies Private Limited</span>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>

        {/* Click-based Team Dropdown */}
        <li className="dropdown">
          <span 
            className="dropdown-title" 
            onClick={toggleTeamDropdown}
          >
            Team {isTeamDropdownOpen ? '▲' : '▼'}
          </span>
          
          {isTeamDropdownOpen && (
            <ul className="dropdown-menu show">
              <li>
                <Link 
                  to="/team/ai-scientists" 
                  onClick={closeDropdown}
                >
                  AI Scientists (16 members)
                </Link>
              </li>
              <li>
                <Link 
                  to="/team/healthcare" 
                  onClick={closeDropdown}
                >
                  Healthcare Technologists (12 members)
                </Link>
              </li>
              <li>
                <Link 
                  to="/team/data-engineers" 
                  onClick={closeDropdown}
                >
                  Data Engineers (10 members)
                </Link>
              </li>
              <li>
                <Link 
                  to="/team/social-entrepreneurs" 
                  onClick={closeDropdown}
                >
                  Social Entrepreneurs (8 members)
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
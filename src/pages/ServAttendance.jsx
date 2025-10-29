// // import React from "react";
// // import { Link } from "react-router-dom";
// // import "./ServAttendance.css";

// // const Block = ({ title, points }) => (
// //   <section className="serv-block">
// //     <h2>{title}</h2>
// //     <ul>
// //       {points.map((p, i) => (
// //         <li key={i}>{p}</li>
// //       ))}
// //     </ul>
// //   </section>
// // );

// // export default function ServAttendance() {
// //   return (
// //     <main className="serv-page">
// //       <header className="serv-hero">
// //         <div className="serv-hero__content">
// //           <h1>SERV Attendance App</h1>
// //           <p>
// //             End-to-end attendance with geofence validation, biometric/face
// //             authentication, shift & leave workflows, and rich reports.
// //           </p>
// //           <Link to="/solutions" className="serv-hero__back">
// //             ← Back to Solutions
// //           </Link>
// //         </div>
// //       </header>

// //       <div className="serv-container">
// //         <Block
// //           title="Check-In / Check-Out"
// //           points={[
// //             "Manual, biometric, or face-based check-ins.",
// //             "Instant timer starts on check-in; persists across reloads.",
// //             "Late check-in / early check-out reasons from Admin Reason Master.",
// //             "Optional photo capture during check-in for proof.",
// //           ]}
// //         />

// //         <Block
// //           title="Location & Geofencing"
// //           points={[
// //             "Accurate GPS (lat/long) with address reverse-geocoding.",
// //             "Office geofences (radius) with inside/outside validation.",
// //             "Other-location flow with reason & evidence (image/file).",
// //             "Background/foreground tracking on Android (WorkManager).",
// //           ]}
// //         />

// //         <Block
// //           title="Biometric & Face Authentication"
// //           points={[
// //             "Device biometric (fingerprint/face) support.",
// //             "Face verification before starting attendance (optional).",
// //             "Secure Firebase Auth + role routing (Admin/Employee).",
// //           ]}
// //         />

// //         <Block
// //           title="Shifts, Leaves & Holidays"
// //           points={[
// //             "Multiple shifts with assignment and validation against shift time.",
// //             "Leave types: Casual, Planned, Sick, Half-Day, Permission, OT, Comp-Off, etc.",
// //             "Holiday calendar and weekly-off configuration.",
// //             "Admin approvals: Pending / Approved / Rejected.",
// //           ]}
// //         />

// //         <Block
// //           title="Attendance Calendar & Reports"
// //           points={[
// //             "Monthly calendar with Present / Absent / Leave / Holiday markers.",
// //             "Daily detail: check-in/out, total hours, location, remarks.",
// //             "CSV/XLS exports and printable summaries.",
// //             "Admin live attendance dashboard and trends.",
// //           ]}
// //         />

// //         <Block
// //           title="Tasks, Events & Rewards"
// //           points={[
// //             "My Tasks: assigned tasks, daily updates, file/image uploads.",
// //             "Event Uploads: details + media; visible in Event Updates.",
// //             "Rewards: recognitions with admin details and date.",
// //           ]}
// //         />

// //         <Block
// //           title="Tech & Security"
// //           points={[
// //             "Flutter front-end + Node/Express + Firebase/Firestore.",
// //             "Deep/App Links for QR flows (optional).",
// //             "Role-based access and Firestore security rules.",
// //           ]}
// //         />
// //       </div>

// //       <footer className="serv-cta">
// //         <Link to="/contact" className="serv-btn serv-btn--primary">
// //           Request a Demo
// //         </Link>
// //         <Link to="/solutions" className="serv-btn serv-btn--secondary">
// //           Explore More Solutions
// //         </Link>
// //       </footer>
// //     </main>
// //   );
// // }


// import React from 'react';
// import './ServAttendance.css';

// const ServAttendance = () => {
//   const adminFeatures = [
//     {
//       category: "🔐 Authentication & Security",
//       icon: "🔐",
//       features: [
//         { title: "Login Page (Employee/Admin)", desc: "Secure dual-role authentication with email/password, separate dashboards for employees and admins, password visibility toggle, and account recovery options." },
//         { title: "Forgot Password", desc: "Secure password recovery using OTP verification sent to registered email for creating new password." }
//       ]
//     },
//     {
//       category: "📊 Attendance Management",
//       icon: "📊",
//       features: [
//         { title: "Checked-in Employees", desc: "View all employees who have successfully checked in with their name and ID" },
//         { title: "Present Employees", desc: "Real-time list of currently present employees" },
//         { title: "Absent Employees", desc: "Track employees who haven't checked in" },
//         { title: "Waiting for Approvals", desc: "Manage pending attendance correction requests" },
//         { title: "Employee List", desc: "Comprehensive view with ID, date, check-in time, department, and shift details" },
//         { title: "Employee Attendance Detail", desc: "Detailed records including shift, location, GPS coordinates, and status" }
//       ]
//     },
//     {
//       category: "📍 Location & Geofencing",
//       icon: "📍",
//       features: [
//         { title: "Geolocation Tracking", desc: "Track employee check-in location using GPS coordinates (latitude and longitude)" },
//         { title: "Branch Location Verification", desc: "Display branch location on Google Maps for comparison" },
//         { title: "Location-Based Verification", desc: "Validate if employee is within allowed radius with exact distance calculation" }
//       ]
//     },
//     {
//       category: "📝 Leave & Request Management",
//       icon: "📝",
//       features: [
//         { title: "Leave Approvals", desc: "Manage late check-in, early check-out, and remote work requests with Approve/Reject options" },
//         { title: "Request Filters", desc: "Filter by All, Late Check-in, Early Check-out, Leave Type, Permission, Over Time, Half Day, Comp Off, and Other Location" },
//         { title: "Detailed Request View", desc: "See employee reason, rejection remarks, location on map, and distance from branch" },
//         { title: "Status Updates", desc: "Real-time approval workflow with Pending, Approved, and Rejected tabs" }
//       ]
//     },
//     {
//       category: "👥 Employee Management",
//       icon: "👥",
//       features: [
//         { title: "Dashboard Overview", desc: "View Total, Active, Inactive, Suspended, and Relieved employee counts" },
//         { title: "Create Employee", desc: "Onboard new employees with Name, ID, Email, Mobile, Shift, Department, Designation, and Status" },
//         { title: "Employee List", desc: "Searchable table with all employee details" },
//         { title: "Report Scheduler", desc: "Create automated performance and attendance reports" }
//       ]
//     },
//     {
//       category: "📈 Reports & Analytics",
//       icon: "📈",
//       features: [
//         { title: "Attendance Reports", desc: "Generate reports with date range filters showing Active, On Leave, Checked-In, Absent, Late, Field, Early Check-Out, and Half Day" },
//         { title: "Limit View", desc: "Category summary cards (Present, Absent, Leave, Holiday, Week Off, Half Day, Regularized) with detailed audit tables" },
//         { title: "Downloadable Reports", desc: "Export attendance data for record-keeping and analysis" }
//       ]
//     },
//     {
//       category: "🎯 Additional Admin Modules",
//       icon: "🎯",
//       features: [
//         { title: "My Tasks", desc: "Assign tasks to employees with title, description, and due dates. View daily progress updates" },
//         { title: "Rewards", desc: "Recognize employee achievements by recording name, ID, department, and description" },
//         { title: "Feedback", desc: "View all employee feedback with ID, name, message, and submission date" },
//         { title: "Event Updates", desc: "Create and manage organizational events with name, date range, and export capabilities" }
//       ]
//     },
//     {
//       category: "⚙️ Settings & Configuration",
//       icon: "⚙️",
//       features: [
//         { title: "Workdays & Shifts", desc: "Configure shift timings, create custom shifts with start/end times, and assign to groups" },
//         { title: "Leave & Holiday", desc: "Add leave types (Planned, Sick, Emergency) with date ranges and automatic day calculation" },
//         { title: "Company Profile", desc: "Store organization name, official email, phone, website, and admin details" },
//         { title: "Office Location", desc: "Define office/worksite addresses with radius coverage for geo-fencing" },
//         { title: "Reason Master", desc: "Create and manage standardized reasons for employee requests (late check-in, early check-out, etc.)" }
//       ]
//     }
//   ];

//   const employeeFeatures = [
//     {
//       category: "🏠 Dashboard & Navigation",
//       icon: "🏠",
//       features: [
//         { title: "Home Dashboard", desc: "Personalized welcome screen with quick navigation to Attendance and My Serv modules" },
//         { title: "My SERV Dashboard", desc: "Central hub for Attendance, My Track, My Request, Type of Request, My Task, Events, and Rewards" }
//       ]
//     },
//     {
//       category: "⏰ Attendance Features",
//       icon: "⏰",
//       features: [
//         { title: "Attendance Page", desc: "Display employee details with Biometric and Manual check-in options" },
//         { title: "Live Timer", desc: "Track work hours in real-time during shift" },
//         { title: "Late Check-in", desc: "Mark attendance when arriving late with reason (emergency, personal, traffic)" },
//         { title: "Location Services Prompt", desc: "GPS verification to ensure accurate attendance location" },
//         { title: "Check-Out", desc: "End work hours with automatic total hours calculation" }
//       ]
//     },
//     {
//       category: "📅 My Attendance",
//       icon: "📅",
//       features: [
//         { title: "Monthly Calendar View", desc: "Color-coded attendance (Green=Present, Red=Absent, Yellow=Leave, Blue=Holiday, Purple=Week Off, Light Yellow=Half Day)" },
//         { title: "Summary Statistics", desc: "Count of Present, Absent, Leave, Late Check-ins, Early Check-outs, and Permissions" },
//         { title: "Daily Attendance Detail", desc: "View date, check-in/out times, permission time, status, overtime, shift group, and total hours" }
//       ]
//     },
//     {
//       category: "🗺️ Location Tracking",
//       icon: "🗺️",
//       features: [
//         { title: "My Track", desc: "View location history during work hours with map view, timestamps, movement routes, and date filters" }
//       ]
//     },
//     {
//       category: "📋 Request Management",
//       icon: "📋",
//       features: [
//         { title: "My Request", desc: "View all submitted requests with type, date, time, reason, and approval status" },
//         { title: "Type of Requests", desc: "Submit Leave Type, Permission Time, Over Time, Half Day Time, and Comp Off requests" }
//       ]
//     },
//     {
//       category: "✅ Tasks & Updates",
//       icon: "✅",
//       features: [
//         { title: "My Tasks", desc: "View assigned tasks with title, description, due date, creator, and creation time. Upload task-related files" },
//         { title: "Daily Update", desc: "Submit daily work progress descriptions for admin review" },
//         { title: "Event Updates", desc: "View company events with name, dates, and location" },
//         { title: "My Rewards", desc: "Track personal achievements and recognitions with details" }
//       ]
//     },
//     {
//       category: "👤 Profile & Settings",
//       icon: "👤",
//       features: [
//         { title: "Profile", desc: "View details with options for Change Password, Language Selection, Privacy Policy, Terms & Conditions, Permissions, and Feedback" },
//         { title: "Change Password", desc: "Secure password update with validation (8+ characters, lowercase, uppercase, number, special character)" },
//         { title: "Language Selection", desc: "Multi-language support for accessibility" },
//         { title: "Permissions", desc: "Manage Location, Camera, Activity Recognition, and Notification permissions" },
//         { title: "Feedback", desc: "Submit suggestions, complaints, or comments directly to admins" },
//         { title: "Log Out", desc: "Secure sign-out with confirmation popup" }
//       ]
//     }
//   ];

//   const comparisonData = [
//     { category: "Attendance Marking", employee: "✓ Biometric/Manual", admin: "✓ View All Records", capability: "GPS Verification" },
//     { category: "Leave Management", employee: "✓ Submit Requests", admin: "✓ Approve/Reject", capability: "Multiple Leave Types" },
//     { category: "Location Tracking", employee: "✓ View Own History", admin: "✓ View All Employees", capability: "Geofencing & Maps" },
//     { category: "Task Management", employee: "✓ View & Update", admin: "✓ Assign & Monitor", capability: "Daily Progress Tracking" },
//     { category: "Reports & Analytics", employee: "✓ Personal Reports", admin: "✓ All Reports & Export", capability: "Customizable Date Ranges" },
//     { category: "Employee Management", employee: "✗ View Only", admin: "✓ Full CRUD Access", capability: "Lifecycle Management" },
//     { category: "Rewards & Recognition", employee: "✓ View Own Rewards", admin: "✓ Create & Manage", capability: "Performance Tracking" },
//     { category: "Feedback System", employee: "✓ Submit Feedback", admin: "✓ View All Feedback", capability: "Two-way Communication" }
//   ];

//   const benefits = [
//     { title: "Accuracy & Compliance", text: "GPS-based location verification and biometric authentication ensure authentic attendance records and prevent proxy check-ins." },
//     { title: "Real-time Monitoring", text: "Live dashboards, instant notifications, and real-time approval workflows keep admins informed of all workforce activities." },
//     { title: "Transparency & Accountability", text: "Complete audit trails, location tracking history, and detailed request logs ensure full transparency in attendance management." },
//     { title: "Efficiency & Automation", text: "Automated report generation, scheduled tasks, and streamlined approval processes reduce manual work by 80%." },
//     { title: "Employee Empowerment", text: "Self-service features for leave requests, task tracking, and feedback submission improve employee satisfaction and engagement." },
//     { title: "Data-Driven Insights", text: "Comprehensive analytics and customizable reports enable better decision-making for workforce planning and performance evaluation." }
//   ];

//   return (
//     <div className="serv-attendance-container">
//       {/* Hero Section */}
//       <div className="serv-hero">
//         <h1 className="serv-hero-title">SERV Attendance Management App</h1>
//         <p className="serv-hero-subtitle">A Complete Employee Attendance & Workforce Management Solution</p>
//         <p className="serv-hero-description">
//           SERV Attendance App is a comprehensive, location-based attendance management system 
//           designed to streamline employee tracking, leave management, task assignments, and 
//           performance monitoring. With biometric support, geofencing, and real-time analytics, 
//           it ensures accuracy, transparency, and efficiency in workforce management.
//         </p>
//       </div>

//       {/* Stats Section */}
//       <div className="serv-stats">
//         <div className="stat-item">
//           <span className="stat-number">2</span>
//           <span className="stat-label">User Roles<br/>(Employee & Admin)</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-number">50+</span>
//           <span className="stat-label">Features & Modules</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-number">GPS</span>
//           <span className="stat-label">Location Tracking</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-number">24/7</span>
//           <span className="stat-label">Real-time Updates</span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="serv-content">
//         {/* Admin Features */}
//         <div className="section-header">
//           <h2 className="section-title">
//             <span className="section-icon">👨‍💼</span>
//             Admin Dashboard Features
//           </h2>
//         </div>

//         <div className="category-container">
//           <div className="category-zigzag">
//             {adminFeatures.map((category, idx) => (
//               <div key={idx} className="category-block">
//                 <div className="category-visual">{category.icon}</div>
//                 <div className="category-content">
//                   <h3 className="category-title">{category.category}</h3>
//                   <ul className="category-features">
//                     {category.features.map((feature, fIdx) => (
//                       <li key={fIdx}>
//                         <strong>{feature.title}:</strong> {feature.desc}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Employee Features */}
//         <div className="section-header">
//           <h2 className="section-title">
//             <span className="section-icon">📱</span>
//             Employee Mobile App Features
//           </h2>
//         </div>

//         <div className="category-container">
//           <div className="category-zigzag">
//             {employeeFeatures.map((category, idx) => (
//               <div key={idx} className="category-block">
//                 <div className="category-visual">{category.icon}</div>
//                 <div className="category-content">
//                   <h3 className="category-title">{category.category}</h3>
//                   <ul className="category-features">
//                     {category.features.map((feature, fIdx) => (
//                       <li key={fIdx}>
//                         <strong>{feature.title}:</strong> {feature.desc}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="section-header">
//           <h2 className="section-title">
//             <span className="section-icon">✨</span>
//             Key Benefits
//           </h2>
//         </div>

//         <div className="benefits-grid">
//           {benefits.map((benefit, idx) => (
//             <div key={idx} className="benefit-box">
//               <h4 className="benefit-title">{benefit.title}</h4>
//               <p className="benefit-text">{benefit.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* Comparison Table */}
//         <div className="section-header">
//           <h2 className="section-title">
//             <span className="section-icon">📋</span>
//             Feature Comparison Table
//           </h2>
//         </div>

//         <div className="comparison-table-wrapper">
//           <table className="comparison-table">
//             <thead>
//               <tr>
//                 <th>Feature Category</th>
//                 <th>Employee Access</th>
//                 <th>Admin Access</th>
//                 <th>Key Capability</th>
//               </tr>
//             </thead>
//             <tbody>
//               {comparisonData.map((row, idx) => (
//                 <tr key={idx}>
//                   <td>{row.category}</td>
//                   <td>{row.employee}</td>
//                   <td>{row.admin}</td>
//                   <td>{row.capability}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Why Choose Section */}
//         <div className="why-choose">
//           <h2 className="why-choose-title">🚀 Why Choose SERV Attendance App?</h2>
//           <div className="why-choose-list">
//             <div className="why-choose-item">
//               <strong>Complete Solution</strong>
//               From basic check-in/out to advanced analytics and workforce planning
//             </div>
//             <div className="why-choose-item">
//               <strong>Mobile-First Design</strong>
//               Optimized for employees on the go with offline capabilities
//             </div>
//             <div className="why-choose-item">
//               <strong>Scalable Architecture</strong>
//               Suitable for small teams to large enterprises
//             </div>
//             <div className="why-choose-item">
//               <strong>Customizable</strong>
//               Flexible shift configurations, custom leave types, and branded experience
//             </div>
//             <div className="why-choose-item">
//               <strong>Secure & Compliant</strong>
//               Role-based access control, encrypted data, and audit logs
//             </div>
//             <div className="why-choose-item">
//               <strong>User-Friendly</strong>
//               Intuitive interface requiring minimal training
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServAttendance;



import React from 'react';

const ServAttendance = () => {
  // Inline styles as JavaScript objects
  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      position: 'relative',
      overflowX: 'hidden',
    },
    hero: {
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 1,
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      fontWeight: 800,
      color: 'white',
      marginBottom: '20px',
      textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      letterSpacing: '-1px',
    },
    heroSubtitle: {
      fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
      color: 'rgba(255, 255, 255, 0.95)',
      marginBottom: '30px',
    },
    heroDescription: {
      maxWidth: '900px',
      margin: '0 auto',
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      padding: '60px 20px',
      flexWrap: 'wrap',
      position: 'relative',
      zIndex: 1,
    },
    statItem: {
      textAlign: 'center',
      minWidth: '150px',
    },
    statNumber: {
      fontSize: '3.5rem',
      fontWeight: 900,
      color: 'white',
      textShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      display: 'block',
      lineHeight: 1,
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.9)',
      fontWeight: 500,
    },
    content: {
      background: 'white',
      margin: '0 20px 40px',
      borderRadius: '30px 30px 0 0',
      padding: '60px 40px',
      boxShadow: '0 -10px 50px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      zIndex: 1,
    },
    sectionHeader: {
      position: 'relative',
      margin: '60px 0 40px',
      paddingBottom: '20px',
      borderBottom: '4px solid transparent',
      borderImage: 'linear-gradient(90deg, #667eea, #764ba2) 1',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 3vw, 2.8rem)',
      fontWeight: 700,
      color: '#2d3748',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    categoryBlock: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '50px',
      marginBottom: '60px',
    },
    categoryBlockReverse: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '50px',
      marginBottom: '60px',
      flexDirection: 'row-reverse',
    },
    categoryVisual: {
      flex: '0 0 300px',
      height: '300px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '5rem',
      color: 'white',
      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
      transition: 'transform 0.3s ease',
    },
    categoryContent: {
      flex: 1,
    },
    categoryTitle: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#2d3748',
      marginBottom: '20px',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '10px',
      borderBottom: '3px solid #667eea',
    },
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    featureItem: {
      padding: '15px 0',
      paddingLeft: '35px',
      fontSize: '1.05rem',
      lineHeight: 1.7,
      color: '#4a5568',
      position: 'relative',
      borderBottom: '1px solid #e2e8f0',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      margin: '40px 0',
    },
    benefitBox: {
      background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
      padding: '35px',
      borderRadius: '20px',
      borderLeft: '5px solid #667eea',
      transition: 'all 0.3s ease',
    },
    benefitTitle: {
      fontSize: '1.3rem',
      fontWeight: 700,
      color: '#2d3748',
      marginBottom: '12px',
    },
    benefitText: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#4a5568',
    },
    tableWrapper: {
      overflowX: 'auto',
      margin: '40px 0',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'white',
    },
    tableHead: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
    },
    th: {
      padding: '20px',
      textAlign: 'left',
      color: 'white',
      fontWeight: 600,
      fontSize: '1.05rem',
    },
    td: {
      padding: '20px',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '1rem',
      color: '#4a5568',
    },
    whyChoose: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      margin: '60px -40px 0',
      padding: '60px 40px',
      color: 'white',
      borderRadius: '30px 30px 0 0',
    },
    whyChooseTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '50px',
      textShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    },
    whyChooseItem: {
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      padding: '25px 30px',
      borderRadius: '15px',
      marginBottom: '20px',
      borderLeft: '4px solid white',
      maxWidth: '900px',
      margin: '0 auto 20px',
    },
  };

  const adminFeatures = [
    {
      category: "🔐 Authentication & Security",
      icon: "🔐",
      features: [
        { title: "Login Page (Employee/Admin)", desc: "Secure dual-role authentication with email/password, separate dashboards for employees and admins, password visibility toggle, and account recovery options." },
        { title: "Forgot Password", desc: "Secure password recovery using OTP verification sent to registered email for creating new password." }
      ]
    },
    {
      category: "📊 Attendance Management",
      icon: "📊",
      features: [
        { title: "Checked-in Employees", desc: "View all employees who have successfully checked in with their name and ID" },
        { title: "Present Employees", desc: "Real-time list of currently present employees" },
        { title: "Absent Employees", desc: "Track employees who haven't checked in" },
        { title: "Waiting for Approvals", desc: "Manage pending attendance correction requests" },
        { title: "Employee List", desc: "Comprehensive view with ID, date, check-in time, department, and shift details" },
        { title: "Employee Attendance Detail", desc: "Detailed records including shift, location, GPS coordinates, and status" }
      ]
    },
    {
      category: "📍 Location & Geofencing",
      icon: "📍",
      features: [
        { title: "Geolocation Tracking", desc: "Track employee check-in location using GPS coordinates (latitude and longitude)" },
        { title: "Branch Location Verification", desc: "Display branch location on Google Maps for comparison" },
        { title: "Location-Based Verification", desc: "Validate if employee is within allowed radius with exact distance calculation" }
      ]
    },
    {
      category: "📝 Leave & Request Management",
      icon: "📝",
      features: [
        { title: "Leave Approvals", desc: "Manage late check-in, early check-out, and remote work requests with Approve/Reject options" },
        { title: "Request Filters", desc: "Filter by All, Late Check-in, Early Check-out, Leave Type, Permission, Over Time, Half Day, Comp Off, and Other Location" },
        { title: "Detailed Request View", desc: "See employee reason, rejection remarks, location on map, and distance from branch" },
        { title: "Status Updates", desc: "Real-time approval workflow with Pending, Approved, and Rejected tabs" }
      ]
    },
    {
      category: "👥 Employee Management",
      icon: "👥",
      features: [
        { title: "Dashboard Overview", desc: "View Total, Active, Inactive, Suspended, and Relieved employee counts" },
        { title: "Create Employee", desc: "Onboard new employees with Name, ID, Email, Mobile, Shift, Department, Designation, and Status" },
        { title: "Employee List", desc: "Searchable table with all employee details" },
        { title: "Report Scheduler", desc: "Create automated performance and attendance reports" }
      ]
    },
    {
      category: "📈 Reports & Analytics",
      icon: "📈",
      features: [
        { title: "Attendance Reports", desc: "Generate reports with date range filters showing Active, On Leave, Checked-In, Absent, Late, Field, Early Check-Out, and Half Day" },
        { title: "Limit View", desc: "Category summary cards (Present, Absent, Leave, Holiday, Week Off, Half Day, Regularized) with detailed audit tables" },
        { title: "Downloadable Reports", desc: "Export attendance data for record-keeping and analysis" }
      ]
    },
    {
      category: "🎯 Additional Admin Modules",
      icon: "🎯",
      features: [
        { title: "My Tasks", desc: "Assign tasks to employees with title, description, and due dates. View daily progress updates" },
        { title: "Rewards", desc: "Recognize employee achievements by recording name, ID, department, and description" },
        { title: "Feedback", desc: "View all employee feedback with ID, name, message, and submission date" },
        { title: "Event Updates", desc: "Create and manage organizational events with name, date range, and export capabilities" }
      ]
    },
    {
      category: "⚙️ Settings & Configuration",
      icon: "⚙️",
      features: [
        { title: "Workdays & Shifts", desc: "Configure shift timings, create custom shifts with start/end times, and assign to groups" },
        { title: "Leave & Holiday", desc: "Add leave types (Planned, Sick, Emergency) with date ranges and automatic day calculation" },
        { title: "Company Profile", desc: "Store organization name, official email, phone, website, and admin details" },
        { title: "Office Location", desc: "Define office/worksite addresses with radius coverage for geo-fencing" },
        { title: "Reason Master", desc: "Create and manage standardized reasons for employee requests (late check-in, early check-out, etc.)" }
      ]
    }
  ];

  const employeeFeatures = [
    {
      category: "🏠 Dashboard & Navigation",
      icon: "🏠",
      features: [
        { title: "Home Dashboard", desc: "Personalized welcome screen with quick navigation to Attendance and My Serv modules" },
        { title: "My SERV Dashboard", desc: "Central hub for Attendance, My Track, My Request, Type of Request, My Task, Events, and Rewards" }
      ]
    },
    {
      category: "⏰ Attendance Features",
      icon: "⏰",
      features: [
        { title: "Attendance Page", desc: "Display employee details with Biometric and Manual check-in options" },
        { title: "Live Timer", desc: "Track work hours in real-time during shift" },
        { title: "Late Check-in", desc: "Mark attendance when arriving late with reason (emergency, personal, traffic)" },
        { title: "Location Services Prompt", desc: "GPS verification to ensure accurate attendance location" },
        { title: "Check-Out", desc: "End work hours with automatic total hours calculation" }
      ]
    },
    {
      category: "📅 My Attendance",
      icon: "📅",
      features: [
        { title: "Monthly Calendar View", desc: "Color-coded attendance (Green=Present, Red=Absent, Yellow=Leave, Blue=Holiday, Purple=Week Off, Light Yellow=Half Day)" },
        { title: "Summary Statistics", desc: "Count of Present, Absent, Leave, Late Check-ins, Early Check-outs, and Permissions" },
        { title: "Daily Attendance Detail", desc: "View date, check-in/out times, permission time, status, overtime, shift group, and total hours" }
      ]
    },
    {
      category: "🗺️ Location Tracking",
      icon: "🗺️",
      features: [
        { title: "My Track", desc: "View location history during work hours with map view, timestamps, movement routes, and date filters" }
      ]
    },
    {
      category: "📋 Request Management",
      icon: "📋",
      features: [
        { title: "My Request", desc: "View all submitted requests with type, date, time, reason, and approval status" },
        { title: "Type of Requests", desc: "Submit Leave Type, Permission Time, Over Time, Half Day Time, and Comp Off requests" }
      ]
    },
    {
      category: "✅ Tasks & Updates",
      icon: "✅",
      features: [
        { title: "My Tasks", desc: "View assigned tasks with title, description, due date, creator, and creation time. Upload task-related files" },
        { title: "Daily Update", desc: "Submit daily work progress descriptions for admin review" },
        { title: "Event Updates", desc: "View company events with name, dates, and location" },
        { title: "My Rewards", desc: "Track personal achievements and recognitions with details" }
      ]
    },
    {
      category: "👤 Profile & Settings",
      icon: "👤",
      features: [
        { title: "Profile", desc: "View details with options for Change Password, Language Selection, Privacy Policy, Terms & Conditions, Permissions, and Feedback" },
        { title: "Change Password", desc: "Secure password update with validation (8+ characters, lowercase, uppercase, number, special character)" },
        { title: "Language Selection", desc: "Multi-language support for accessibility" },
        { title: "Permissions", desc: "Manage Location, Camera, Activity Recognition, and Notification permissions" },
        { title: "Feedback", desc: "Submit suggestions, complaints, or comments directly to admins" },
        { title: "Log Out", desc: "Secure sign-out with confirmation popup" }
      ]
    }
  ];

  const comparisonData = [
    { category: "Attendance Marking", employee: "✓ Biometric/Manual", admin: "✓ View All Records", capability: "GPS Verification" },
    { category: "Leave Management", employee: "✓ Submit Requests", admin: "✓ Approve/Reject", capability: "Multiple Leave Types" },
    { category: "Location Tracking", employee: "✓ View Own History", admin: "✓ View All Employees", capability: "Geofencing & Maps" },
    { category: "Task Management", employee: "✓ View & Update", admin: "✓ Assign & Monitor", capability: "Daily Progress Tracking" },
    { category: "Reports & Analytics", employee: "✓ Personal Reports", admin: "✓ All Reports & Export", capability: "Customizable Date Ranges" },
    { category: "Employee Management", employee: "✗ View Only", admin: "✓ Full CRUD Access", capability: "Lifecycle Management" },
    { category: "Rewards & Recognition", employee: "✓ View Own Rewards", admin: "✓ Create & Manage", capability: "Performance Tracking" },
    { category: "Feedback System", employee: "✓ Submit Feedback", admin: "✓ View All Feedback", capability: "Two-way Communication" }
  ];

  const benefits = [
    { title: "Accuracy & Compliance", text: "GPS-based location verification and biometric authentication ensure authentic attendance records and prevent proxy check-ins." },
    { title: "Real-time Monitoring", text: "Live dashboards, instant notifications, and real-time approval workflows keep admins informed of all workforce activities." },
    { title: "Transparency & Accountability", text: "Complete audit trails, location tracking history, and detailed request logs ensure full transparency in attendance management." },
    { title: "Efficiency & Automation", text: "Automated report generation, scheduled tasks, and streamlined approval processes reduce manual work by 80%." },
    { title: "Employee Empowerment", text: "Self-service features for leave requests, task tracking, and feedback submission improve employee satisfaction and engagement." },
    { title: "Data-Driven Insights", text: "Comprehensive analytics and customizable reports enable better decision-making for workforce planning and performance evaluation." }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>SERV Attendance Management App</h1>
        <p style={styles.heroSubtitle}>A Complete Employee Attendance & Workforce Management Solution</p>
        <p style={styles.heroDescription}>
          SERV Attendance App is a comprehensive, location-based attendance management system 
          designed to streamline employee tracking, leave management, task assignments, and 
          performance monitoring. With biometric support, geofencing, and real-time analytics, 
          it ensures accuracy, transparency, and efficiency in workforce management.
        </p>
      </div>

      {/* Stats Section */}
      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>2</span>
          <span style={styles.statLabel}>User Roles<br/>(Employee & Admin)</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>50+</span>
          <span style={styles.statLabel}>Features & Modules</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>GPS</span>
          <span style={styles.statLabel}>Location Tracking</span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statNumber}>24/7</span>
          <span style={styles.statLabel}>Real-time Updates</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Admin Features */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span>👨‍💼</span>
            Admin Dashboard Features
          </h2>
        </div>

        {adminFeatures.map((category, idx) => (
          <div key={idx} style={idx % 2 === 0 ? styles.categoryBlock : styles.categoryBlockReverse}>
            <div style={styles.categoryVisual}>{category.icon}</div>
            <div style={styles.categoryContent}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <ul style={styles.featuresList}>
                {category.features.map((feature, fIdx) => (
                  <li key={fIdx} style={styles.featureItem}>
                    <strong>{feature.title}:</strong> {feature.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Employee Features */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span>📱</span>
            Employee Mobile App Features
          </h2>
        </div>

        {employeeFeatures.map((category, idx) => (
          <div key={idx} style={idx % 2 === 0 ? styles.categoryBlock : styles.categoryBlockReverse}>
            <div style={styles.categoryVisual}>{category.icon}</div>
            <div style={styles.categoryContent}>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
              <ul style={styles.featuresList}>
                {category.features.map((feature, fIdx) => (
                  <li key={fIdx} style={styles.featureItem}>
                    <strong>{feature.title}:</strong> {feature.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* Benefits Section */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span>✨</span>
            Key Benefits
          </h2>
        </div>

        <div style={styles.benefitsGrid}>
          {benefits.map((benefit, idx) => (
            <div key={idx} style={styles.benefitBox}>
              <h4 style={styles.benefitTitle}>{benefit.title}</h4>
              <p style={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span>📋</span>
            Feature Comparison Table
          </h2>
        </div>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.tableHead}>
              <tr>
                <th style={styles.th}>Feature Category</th>
                <th style={styles.th}>Employee Access</th>
                <th style={styles.th}>Admin Access</th>
                <th style={styles.th}>Key Capability</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{row.category}</td>
                  <td style={styles.td}>{row.employee}</td>
                  <td style={styles.td}>{row.admin}</td>
                  <td style={styles.td}>{row.capability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Why Choose Section */}
        <div style={styles.whyChoose}>
          <h2 style={styles.whyChooseTitle}>🚀 Why Choose SERV Attendance App?</h2>
          <div style={styles.whyChooseItem}>
            <strong>Complete Solution:</strong> From basic check-in/out to advanced analytics and workforce planning
          </div>
          <div style={styles.whyChooseItem}>
            <strong>Mobile-First Design:</strong> Optimized for employees on the go with offline capabilities
          </div>
          <div style={styles.whyChooseItem}>
            <strong>Scalable Architecture:</strong> Suitable for small teams to large enterprises
          </div>
          <div style={styles.whyChooseItem}>
            <strong>Customizable:</strong> Flexible shift configurations, custom leave types, and branded experience
          </div>
          <div style={styles.whyChooseItem}>
            <strong>Secure & Compliant:</strong> Role-based access control, encrypted data, and audit logs
          </div>
          <div style={styles.whyChooseItem}>
            <strong>User-Friendly:</strong> Intuitive interface requiring minimal training
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServAttendance;
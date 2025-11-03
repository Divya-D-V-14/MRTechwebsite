// // // src/pages/Login.jsx
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Login.css";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [userType, setUserType] = useState("customer"); // customer or admin
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Simple validation (replace with your backend API call)
// //     if (email && password) {
// //       if (userType === "admin") {
// //         // Navigate to admin dashboard
// //         navigate("/admin/dashboard");
// //       } else {
// //         // Navigate to customer dashboard
// //         navigate("/customer/dashboard");
// //       }
      
// //       // Store user info (use localStorage or context/redux)
// //       localStorage.setItem("userEmail", email);
// //       localStorage.setItem("userType", userType);
      
// //       alert(`Login successful as ${userType}!`);
// //     } else {
// //       alert("Please enter both email and password");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="login-overlay">
// //         <div className="login-card">
// //           {/* Left Side - Branding */}
// //           <div className="login-left">
// //             <div className="brand-section">
// //               <img 
// //                 src="/MR LOGO.jpeg" 
// //                 alt="MR Tech Logo" 
// //                 className="login-logo"
// //               />
// //               <h2>Myth Reality Technologies</h2>
// //               <p>AI-Powered Innovation for Healthcare & Agriculture</p>
// //             </div>
// //             <div className="feature-list">
// //               <div className="feature-item">
// //                 <span className="feature-icon">✓</span>
// //                 <span>Secure Login</span>
// //               </div>
// //               <div className="feature-item">
// //                 <span className="feature-icon">✓</span>
// //                 <span>Order Tracking</span>
// //               </div>
// //               <div className="feature-item">
// //                 <span className="feature-icon">✓</span>
// //                 <span>24/7 Support</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side - Login Form */}
// //           <div className="login-right">
// //             <div className="login-form-wrapper">
// //               <h1 className="login-title">Welcome Back</h1>
// //               <p className="login-subtitle">Login to your account</p>

// //               {/* User Type Toggle */}
// //               <div className="user-type-toggle">
// //                 <button
// //                   type="button"
// //                   className={`toggle-btn ${userType === "customer" ? "active" : ""}`}
// //                   onClick={() => setUserType("customer")}
// //                 >
// //                   Customer
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className={`toggle-btn ${userType === "admin" ? "active" : ""}`}
// //                   onClick={() => setUserType("admin")}
// //                 >
// //                   Admin
// //                 </button>
// //               </div>

// //               <div className="login-form">
// //                 <div className="form-group">
// //                   <label htmlFor="email">Email Address</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     placeholder="Enter your email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="password">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     placeholder="Enter your password"
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     required
// //                   />
// //                 </div>

// //                 <div className="form-options">
// //                   <label className="remember-me">
// //                     <input type="checkbox" />
// //                     <span>Remember me</span>
// //                   </label>
// //                   <Link to="/forgot-password" className="forgot-link">
// //                     Forgot Password?
// //                   </Link>
// //                 </div>

// //                 <button 
// //                   type="submit" 
// //                   className="login-btn"
// //                   onClick={handleSubmit}
// //                 >
// //                   Login
// //                 </button>

// //                 <div className="signup-link">
// //                   Don't have an account? 
// //                   <Link to="/register"> Sign Up</Link>
// //                 </div>

// //                 <div className="divider">
// //                   <span>OR</span>
// //                 </div>

// //                 <div className="social-login">
// //                   <button className="social-btn google-btn">
// //                     <img src="https://www.google.com/favicon.ico" alt="Google" />
// //                     Continue with Google
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;




// // // src/pages/Login.jsx
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Login.css";

// // const Login = () => {
// //   const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between Login and Register
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [success, setSuccess] = useState("");
// //   const navigate = useNavigate();

// //   // Login Form State
// //   const [loginData, setLoginData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   // Register Form State
// //   const [registerData, setRegisterData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     password: "",
// //     confirmPassword: "",
// //   });

// //   // Handle Login Form Change
// //   const handleLoginChange = (e) => {
// //     setLoginData({
// //       ...loginData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle Register Form Change
// //   const handleRegisterChange = (e) => {
// //     setRegisterData({
// //       ...registerData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle Login Submit
// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     if (!loginData.email || !loginData.password) {
// //       setError("Please enter both email and password");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:3000/api/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           email: loginData.email,
// //           password: loginData.password,
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok && data.success) {
// //         localStorage.setItem("userEmail", data.user.email);
// //         localStorage.setItem("userType", data.user.userType);
// //         localStorage.setItem("fullName", data.user.fullName);
// //         localStorage.setItem("isLoggedIn", "true");

// //         if (data.user.userType === "admin") {
// //           navigate("/admin/dashboard");
// //         } else {
// //           navigate("/customer/dashboard");
// //         }

// //         alert(`Login successful! Welcome ${data.user.fullName}`);
// //       } else {
// //         setError(data.error || "Login failed. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Login Error:", err);
// //       setError("Unable to connect to server. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Handle Register Submit
// //   const handleRegisterSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");
// //     setLoading(true);

// //     if (!registerData.fullName || !registerData.email || !registerData.phone || !registerData.password) {
// //       setError("All fields are required");
// //       setLoading(false);
// //       return;
// //     }

// //     if (registerData.password !== registerData.confirmPassword) {
// //       setError("Passwords do not match");
// //       setLoading(false);
// //       return;
// //     }

// //     if (registerData.password.length < 6) {
// //       setError("Password must be at least 6 characters long");
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:3000/api/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           fullName: registerData.fullName,
// //           email: registerData.email,
// //           phone: registerData.phone,
// //           password: registerData.password,
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok && data.success) {
// //         setSuccess("Registration successful! Redirecting to login...");
        
// //         setRegisterData({
// //           fullName: "",
// //           email: "",
// //           phone: "",
// //           password: "",
// //           confirmPassword: "",
// //         });

// //         setTimeout(() => {
// //           setIsLoginMode(true);
// //           setSuccess("");
// //         }, 2000);
// //       } else {
// //         setError(data.error || "Registration failed. Please try again.");
// //       }
// //     } catch (err) {
// //       console.error("Registration Error:", err);
// //       setError("Unable to connect to server. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Toggle between Login and Register
// //   const toggleMode = () => {
// //     setIsLoginMode(!isLoginMode);
// //     setError("");
// //     setSuccess("");
// //   };

// //   return (
// //     <div className="login-container">
// //       <div className="login-overlay">
// //         <div className="login-card">
// //           {/* Left Side - Branding */}
// //           <div className="login-left">
// //             <div className="brand-section">
// //               <img 
// //                 src="/MR LOGO.jpeg" 
// //                 alt="MR Tech Logo" 
// //                 className="login-logo"
// //               />
// //               <h2>Myth Reality Technologies</h2>
// //               <p>AI-Powered Innovation for Healthcare & Agriculture</p>
// //             </div>
// //             <div className="feature-list">
// //               <div className="feature-item">
// //                 <span className="feature-icon">✔</span>
// //                 <span>{isLoginMode ? "Secure Login" : "Easy Registration"}</span>
// //               </div>
// //               <div className="feature-item">
// //                 <span className="feature-icon">✔</span>
// //                 <span>{isLoginMode ? "Order Tracking" : "Secure Account"}</span>
// //               </div>
// //               <div className="feature-item">
// //                 <span className="feature-icon">✔</span>
// //                 <span>{isLoginMode ? "24/7 Support" : "Exclusive Offers"}</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Side - Login/Register Form */}
// //           <div className="login-right">
// //             <div className="login-form-wrapper">
// //               <h1 className="login-title">
// //                 {isLoginMode ? "Welcome Back" : "Create Account"}
// //               </h1>
// //               <p className="login-subtitle">
// //                 {isLoginMode ? "Login to your account" : "Sign up as a customer"}
// //               </p>

// //               {/* Success Message */}
// //               {success && (
// //                 <div className="success-message" style={{
// //                   backgroundColor: '#d4edda',
// //                   color: '#155724',
// //                   padding: '10px',
// //                   borderRadius: '5px',
// //                   marginBottom: '15px',
// //                   textAlign: 'center'
// //                 }}>
// //                   {success}
// //                 </div>
// //               )}

// //               {/* Error Message */}
// //               {error && (
// //                 <div className="error-message" style={{
// //                   backgroundColor: '#fee',
// //                   color: '#c33',
// //                   padding: '10px',
// //                   borderRadius: '5px',
// //                   marginBottom: '15px',
// //                   textAlign: 'center'
// //                 }}>
// //                   {error}
// //                 </div>
// //               )}

// //               {/* LOGIN FORM */}
// //               {isLoginMode ? (
// //                 <form className="login-form" onSubmit={handleLoginSubmit}>
// //                   <div className="form-group">
// //                     <label htmlFor="email">Email Address</label>
// //                     <input
// //                       type="email"
// //                       id="email"
// //                       name="email"
// //                       placeholder="Enter your email"
// //                       value={loginData.email}
// //                       onChange={handleLoginChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="password">Password</label>
// //                     <input
// //                       type="password"
// //                       id="password"
// //                       name="password"
// //                       placeholder="Enter your password"
// //                       value={loginData.password}
// //                       onChange={handleLoginChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-options">
// //                     <label className="remember-me">
// //                       <input type="checkbox" />
// //                       <span>Remember me</span>
// //                     </label>
// //                     <Link to="/forgot-password" className="forgot-link">
// //                       Forgot Password?
// //                     </Link>
// //                   </div>

// //                   <button 
// //                     type="submit" 
// //                     className="login-btn"
// //                     disabled={loading}
// //                   >
// //                     {loading ? "Logging in..." : "Login"}
// //                   </button>

// //                   <div className="signup-link">
// //                     Don't have an account? 
// //                     <span onClick={toggleMode} style={{ color: '#007bff', cursor: 'pointer', marginLeft: '5px' }}>
// //                       Sign Up
// //                     </span>
// //                   </div>

// //                   <div className="divider">
// //                     <span>OR</span>
// //                   </div>

// //                   <div className="social-login">
// //                     <button 
// //                       type="button"
// //                       className="social-btn google-btn"
// //                       disabled={loading}
// //                     >
// //                       <img src="https://www.google.com/favicon.ico" alt="Google" />
// //                       Continue with Google
// //                     </button>
// //                   </div>
// //                 </form>
// //               ) : (
// //                 /* REGISTER FORM */
// //                 <form className="login-form" onSubmit={handleRegisterSubmit}>
// //                   <div className="form-group">
// //                     <label htmlFor="fullName">Full Name</label>
// //                     <input
// //                       type="text"
// //                       id="fullName"
// //                       name="fullName"
// //                       placeholder="Enter your full name"
// //                       value={registerData.fullName}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="reg-email">Email Address</label>
// //                     <input
// //                       type="email"
// //                       id="reg-email"
// //                       name="email"
// //                       placeholder="Enter your email"
// //                       value={registerData.email}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="phone">Phone Number</label>
// //                     <input
// //                       type="tel"
// //                       id="phone"
// //                       name="phone"
// //                       placeholder="Enter your phone number"
// //                       value={registerData.phone}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="reg-password">Password</label>
// //                     <input
// //                       type="password"
// //                       id="reg-password"
// //                       name="password"
// //                       placeholder="Create a password (min 6 characters)"
// //                       value={registerData.password}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="confirmPassword">Confirm Password</label>
// //                     <input
// //                       type="password"
// //                       id="confirmPassword"
// //                       name="confirmPassword"
// //                       placeholder="Re-enter your password"
// //                       value={registerData.confirmPassword}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <button 
// //                     type="submit" 
// //                     className="login-btn"
// //                     disabled={loading}
// //                   >
// //                     {loading ? "Creating Account..." : "Sign Up"}
// //                   </button>

// //                   <div className="signup-link">
// //                     Already have an account? 
// //                     <span onClick={toggleMode} style={{ color: '#007bff', cursor: 'pointer', marginLeft: '5px' }}>
// //                       Login
// //                     </span>
// //                   </div>

// //                   <div className="divider">
// //                     <span>OR</span>
// //                   </div>

// //                   <div className="social-login">
// //                     <button 
// //                       type="button"
// //                       className="social-btn google-btn"
// //                       disabled={loading}
// //                     >
// //                       <img src="https://www.google.com/favicon.ico" alt="Google" />
// //                       Sign up with Google
// //                     </button>
// //                   </div>
// //                 </form>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// // src/pages/Login.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between Login and Register
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   // Login Form State
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   // Register Form State
//   const [registerData, setRegisterData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // Handle Login Form Change
//   const handleLoginChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle Register Form Change
//   const handleRegisterChange = (e) => {
//     setRegisterData({
//       ...registerData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Handle Login Submit
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!loginData.email || !loginData.password) {
//       setError("Please enter both email and password");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: loginData.email,
//           password: loginData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         const user = data.user;

//         // 🔐 Save user info in localStorage
//         localStorage.setItem("userEmail", user.email);
//         localStorage.setItem("userType", user.userType);
//         localStorage.setItem("fullName", user.fullName);
//         localStorage.setItem("isLoggedIn", "true");

//         // 🎯 Redirect based on userType
//         if (user.userType === "admin") {
//           navigate("/admin/dashboard");
//         } else if (user.userType === "customer") {
//           navigate("/customer/dashboard");
//         } else {
//           setError("Unknown user type. Please contact admin.");
//         }

//         alert(`Login successful! Welcome ${user.fullName}`);
//       } else {
//         setError(data.error || "Login failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       setError("Unable to connect to server. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Handle Register Submit
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     if (!registerData.fullName || !registerData.email || !registerData.phone || !registerData.password) {
//       setError("All fields are required");
//       setLoading(false);
//       return;
//     }

//     if (registerData.password !== registerData.confirmPassword) {
//       setError("Passwords do not match");
//       setLoading(false);
//       return;
//     }

//     if (registerData.password.length < 6) {
//       setError("Password must be at least 6 characters long");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           fullName: registerData.fullName,
//           email: registerData.email,
//           phone: registerData.phone,
//           password: registerData.password,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setSuccess("Registration successful! Redirecting to login...");

//         setRegisterData({
//           fullName: "",
//           email: "",
//           phone: "",
//           password: "",
//           confirmPassword: "",
//         });

//         setTimeout(() => {
//           setIsLoginMode(true);
//           setSuccess("");
//         }, 2000);
//       } else {
//         setError(data.error || "Registration failed. Please try again.");
//       }
//     } catch (err) {
//       console.error("Registration Error:", err);
//       setError("Unable to connect to server. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Toggle between Login and Register
//   const toggleMode = () => {
//     setIsLoginMode(!isLoginMode);
//     setError("");
//     setSuccess("");
//   };

//   return (
//     <div className="login-container">
//       <div className="login-overlay">
//         <div className="login-card">
//           {/* Left Side - Branding */}
//           <div className="login-left">
//             <div className="brand-section">
//               <img
//                 src="/MR LOGO.jpeg"
//                 alt="MR Tech Logo"
//                 className="login-logo"
//               />
//               <h2>Myth Reality Technologies</h2>
//               <p>AI-Powered Innovation for Healthcare & Agriculture</p>
//             </div>
//             <div className="feature-list">
//               <div className="feature-item">
//                 <span className="feature-icon">✔</span>
//                 <span>{isLoginMode ? "Secure Login" : "Easy Registration"}</span>
//               </div>
//               <div className="feature-item">
//                 <span className="feature-icon">✔</span>
//                 <span>{isLoginMode ? "Order Tracking" : "Secure Account"}</span>
//               </div>
//               <div className="feature-item">
//                 <span className="feature-icon">✔</span>
//                 <span>{isLoginMode ? "24/7 Support" : "Exclusive Offers"}</span>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Login/Register Form */}
//           <div className="login-right">
//             <div className="login-form-wrapper">
//               <h1 className="login-title">
//                 {isLoginMode ? "Welcome Back" : "Create Account"}
//               </h1>
//               <p className="login-subtitle">
//                 {isLoginMode ? "Login to your account" : "Sign up as a customer"}
//               </p>

//               {/* Success Message */}
//               {success && (
//                 <div
//                   className="success-message"
//                   style={{
//                     backgroundColor: "#d4edda",
//                     color: "#155724",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     marginBottom: "15px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {success}
//                 </div>
//               )}

//               {/* Error Message */}
//               {error && (
//                 <div
//                   className="error-message"
//                   style={{
//                     backgroundColor: "#fee",
//                     color: "#c33",
//                     padding: "10px",
//                     borderRadius: "5px",
//                     marginBottom: "15px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {error}
//                 </div>
//               )}

//               {/* LOGIN FORM */}
//               {isLoginMode ? (
//                 <form className="login-form" onSubmit={handleLoginSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={loginData.email}
//                       onChange={handleLoginChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       placeholder="Enter your password"
//                       value={loginData.password}
//                       onChange={handleLoginChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-options">
//                     <label className="remember-me">
//                       <input type="checkbox" />
//                       <span>Remember me</span>
//                     </label>
//                     <Link to="/forgot-password" className="forgot-link">
//                       Forgot Password?
//                     </Link>
//                   </div>

//                   <button type="submit" className="login-btn" disabled={loading}>
//                     {loading ? "Logging in..." : "Login"}
//                   </button>

//                   <div className="signup-link">
//                     Don't have an account?
//                     <span
//                       onClick={toggleMode}
//                       style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
//                     >
//                       Sign Up
//                     </span>
//                   </div>
//                 </form>
//               ) : (
//                 /* REGISTER FORM */
//                 <form className="login-form" onSubmit={handleRegisterSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="fullName">Full Name</label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       placeholder="Enter your full name"
//                       value={registerData.fullName}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="reg-email">Email Address</label>
//                     <input
//                       type="email"
//                       id="reg-email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={registerData.email}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="phone">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder="Enter your phone number"
//                       value={registerData.phone}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="reg-password">Password</label>
//                     <input
//                       type="password"
//                       id="reg-password"
//                       name="password"
//                       placeholder="Create a password (min 6 characters)"
//                       value={registerData.password}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                       type="password"
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       placeholder="Re-enter your password"
//                       value={registerData.confirmPassword}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <button type="submit" className="login-btn" disabled={loading}>
//                     {loading ? "Creating Account..." : "Sign Up"}
//                   </button>

//                   <div className="signup-link">
//                     Already have an account?
//                     <span
//                       onClick={toggleMode}
//                       style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
//                     >
//                       Login
//                     </span>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Login Form State
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Register Form State
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Handle Login Form Change
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register Form Change
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle Login Submit (admin/customer redirect)
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!loginData.email || !loginData.password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const user = data.user;

        // Save user details
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userType", user.userType);
        localStorage.setItem("fullName", user.fullName);
        localStorage.setItem("isLoggedIn", "true");

        // ✅ Show success message
        setSuccess(`Login successful! Welcome ${user.fullName}`);

        // ✅ Navigate after small delay
        setTimeout(() => {
          if (user.userType === "admin") {
            navigate("/admin/dashboard");
          } else if (user.userType === "customer") {
            navigate("/customer/dashboard");
          } else {
            setError("Unknown user type. Please contact admin.");
          }
        }, 1000);
      } else {
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle Register Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!registerData.fullName || !registerData.email || !registerData.phone || !registerData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (registerData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: registerData.fullName,
          email: registerData.email,
          phone: registerData.phone,
          password: registerData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Registration successful! Redirecting to login...");
        setRegisterData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          setIsLoginMode(true);
          setSuccess("");
        }, 2000);
      } else {
        setError(data.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle between Login and Register
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError("");
    setSuccess("");
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        <div className="login-card">
          {/* Left Section */}
          <div className="login-left">
            <div className="brand-section">
              <img 
                src="/MR LOGO.jpeg" 
                alt="MR Tech Logo" 
                className="login-logo"
              />
              <h2>Myth Reality Technologies</h2>
              <p>AI-Powered Innovation for Healthcare & Agriculture</p>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✔</span>
                <span>{isLoginMode ? "Secure Login" : "Easy Registration"}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✔</span>
                <span>{isLoginMode ? "Order Tracking" : "Secure Account"}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✔</span>
                <span>{isLoginMode ? "24/7 Support" : "Exclusive Offers"}</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="login-right">
            <div className="login-form-wrapper">
              <h1 className="login-title">
                {isLoginMode ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="login-subtitle">
                {isLoginMode ? "Login to your account" : "Sign up as a customer"}
              </p>

              {/* Success Message */}
              {success && (
                <div className="success-message" style={{
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="error-message" style={{
                  backgroundColor: '#fee',
                  color: '#c33',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  {error}
                </div>
              )}

              {/* Login Form */}
              {isLoginMode ? (
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={handleLoginChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-options">
                    <label className="remember-me">
                      <input type="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="forgot-link">
                      Forgot Password?
                    </Link>
                  </div>

                  <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>

                  <div className="signup-link">
                    Don’t have an account?{" "}
                    <span
                      onClick={toggleMode}
                      style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
                    >
                      Sign Up
                    </span>
                  </div>
                </form>
              ) : (
                // Register Form
                <form className="login-form" onSubmit={handleRegisterSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={registerData.fullName}
                      onChange={handleRegisterChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={registerData.email}
                      onChange={handleRegisterChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={registerData.phone}
                      onChange={handleRegisterChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Create a password (min 6 characters)"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Re-enter your password"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                      disabled={loading}
                    />
                  </div>

                  <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>

                  <div className="signup-link">
                    Already have an account?{" "}
                    <span
                      onClick={toggleMode}
                      style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
                    >
                      Login
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

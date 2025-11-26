// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Login.css";

// // const Login = () => {
// //   const [isLoginMode, setIsLoginMode] = useState(true);
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

// //   // ✅ Handle Login Submit (admin/customer redirect)
// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setSuccess("");
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
// //         const user = data.user;

// //         // Save user details
// //         localStorage.setItem("userEmail", user.email);
// //         localStorage.setItem("userType", user.userType);
// //         localStorage.setItem("fullName", user.fullName);
// //         localStorage.setItem("isLoggedIn", "true");

// //         // ✅ Show success message
// //         setSuccess(`Login successful! Welcome ${user.fullName}`);

// //         // ✅ Navigate after small delay
// //         setTimeout(() => {
// //           if (user.userType === "admin") {
// //             navigate("/admin/dashboard");
// //           } else if (user.userType === "customer") {
// //             navigate("/customer/dashboard");
// //           } else {
// //             setError("Unknown user type. Please contact admin.");
// //           }
// //         }, 1000);
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

// //   // ✅ Handle Register Submit
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
// //           {/* Left Section */}
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

// //           {/* Right Section - Form */}
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

// //               {/* Login Form */}
// //               {isLoginMode ? (
// //                 <form className="login-form" onSubmit={handleLoginSubmit}>
// //                   <div className="form-group">
// //                     <label>Email Address</label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       placeholder="Enter your email"
// //                       value={loginData.email}
// //                       onChange={handleLoginChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Password</label>
// //                     <input
// //                       type="password"
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

// //                   <button type="submit" className="login-btn" disabled={loading}>
// //                     {loading ? "Logging in..." : "Login"}
// //                   </button>

// //                   <div className="signup-link">
// //                     Don’t have an account?{" "}
// //                     <span
// //                       onClick={toggleMode}
// //                       style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
// //                     >
// //                       Sign Up
// //                     </span>
// //                   </div>
// //                 </form>
// //               ) : (
// //                 // Register Form
// //                 <form className="login-form" onSubmit={handleRegisterSubmit}>
// //                   <div className="form-group">
// //                     <label>Full Name</label>
// //                     <input
// //                       type="text"
// //                       name="fullName"
// //                       placeholder="Enter your full name"
// //                       value={registerData.fullName}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Email Address</label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       placeholder="Enter your email"
// //                       value={registerData.email}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Phone Number</label>
// //                     <input
// //                       type="tel"
// //                       name="phone"
// //                       placeholder="Enter your phone number"
// //                       value={registerData.phone}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Password</label>
// //                     <input
// //                       type="password"
// //                       name="password"
// //                       placeholder="Create a password (min 6 characters)"
// //                       value={registerData.password}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <div className="form-group">
// //                     <label>Confirm Password</label>
// //                     <input
// //                       type="password"
// //                       name="confirmPassword"
// //                       placeholder="Re-enter your password"
// //                       value={registerData.confirmPassword}
// //                       onChange={handleRegisterChange}
// //                       required
// //                       disabled={loading}
// //                     />
// //                   </div>

// //                   <button type="submit" className="login-btn" disabled={loading}>
// //                     {loading ? "Creating Account..." : "Sign Up"}
// //                   </button>

// //                   <div className="signup-link">
// //                     Already have an account?{" "}
// //                     <span
// //                       onClick={toggleMode}
// //                       style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
// //                     >
// //                       Login
// //                     </span>
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





// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   const [isLoginMode, setIsLoginMode] = useState(true);
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

//   // ✅ Handle Login Submit (admin/customer redirect)
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     if (!loginData.email || !loginData.password) {
//       setError("Please enter both email and password");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(loginData),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         const user = data.user;

//         // ✅ Store complete user object
//         localStorage.setItem("userData", JSON.stringify(user));
//         localStorage.setItem("isLoggedIn", "true");

//         setSuccess(`Login successful! Welcome ${user.fullName}`);

//         setTimeout(() => {
//           if (user.userType === "admin") {
//             navigate("/admin/dashboard");
//           } else if (user.userType === "customer") {
//             navigate("/customer/dashboard");
//           } else {
//             setError("Unknown user type. Please contact admin.");
//           }
//         }, 1000);
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
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(registerData),
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
//           {/* Left Section */}
//           <div className="login-left">
//             <div className="brand-section">
//               <img src="/MR LOGO.jpeg" alt="MR Tech Logo" className="login-logo" />
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

//           {/* Right Section - Form */}
//           <div className="login-right">
//             <div className="login-form-wrapper">
//               <h1 className="login-title">{isLoginMode ? "Welcome Back" : "Create Account"}</h1>
//               <p className="login-subtitle">{isLoginMode ? "Login to your account" : "Sign up as a customer"}</p>

//               {success && (
//                 <div className="success-message">
//                   {success}
//                 </div>
//               )}
//               {error && (
//                 <div className="error-message">
//                   {error}
//                 </div>
//               )}

//               {isLoginMode ? (
//                 <form className="login-form" onSubmit={handleLoginSubmit}>
//                   <div className="form-group">
//                     <label>Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={loginData.email}
//                       onChange={handleLoginChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                       type="password"
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
//                     Don’t have an account?{" "}
//                     <span onClick={toggleMode} style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}>
//                       Sign Up
//                     </span>
//                   </div>
//                 </form>
//               ) : (
//                 <form className="login-form" onSubmit={handleRegisterSubmit}>
//                   <div className="form-group">
//                     <label>Full Name</label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       placeholder="Enter your full name"
//                       value={registerData.fullName}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       value={registerData.email}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Phone Number</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Enter your phone number"
//                       value={registerData.phone}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Create a password (min 6 characters)"
//                       value={registerData.password}
//                       onChange={handleRegisterChange}
//                       required
//                       disabled={loading}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label>Confirm Password</label>
//                     <input
//                       type="password"
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
//                     Already have an account?{" "}
//                     <span onClick={toggleMode} style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}>
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const user = data.user;

        // ✅ Store complete user object
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        setSuccess(`Login successful! Welcome ${user.fullName}`);

        // ✅ Trigger storage event for navbar update
        window.dispatchEvent(new Event("storage"));

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
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
              <img src="/MR LOGO.jpeg" alt="MR Tech Logo" className="login-logo" />
              <h2>Myth Reality Technologies</h2>
              <p>AI-Powered Innovation for Healthcare & Agriculture</p>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{isLoginMode ? "Secure Login" : "Easy Registration"}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{isLoginMode ? "Order Tracking" : "Secure Account"}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>{isLoginMode ? "24/7 Support" : "Exclusive Offers"}</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="login-right">
            <div className="login-form-wrapper">
              <h1 className="login-title">{isLoginMode ? "Welcome Back" : "Create Account"}</h1>
              <p className="login-subtitle">{isLoginMode ? "Login to your account" : "Sign up as a customer"}</p>

              {success && (
                <div className="success-message">
                  {success}
                </div>
              )}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}

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
                    Don't have an account?{" "}
                    <span onClick={toggleMode} style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}>
                      Sign Up
                    </span>
                  </div>
                </form>
              ) : (
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
                    <span onClick={toggleMode} style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}>
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
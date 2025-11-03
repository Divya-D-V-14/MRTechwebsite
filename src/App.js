


// // // // src/App.js
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // import Navbar from "./components/Navbar";
// // // import Footer from "./components/Footer";

// // // import Home from "./pages/Home";
// // // import AboutUs from "./pages/AboutUs";
// // // import Solutions from "./pages/Solutions";
// // // import Partners from "./pages/Partners";
// // // import Gallery from "./pages/Gallery";
// // // import GalleryDetail from "./pages/GalleryDetail";   // ✅ detail route
// // // import Contact from "./pages/Contact";
// // // import Team from "./pages/Team";
// // // import Story from "./pages/Story";
// // // import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// // // import ServAttendance from "./pages/ServAttendance";
// // // export default function App() {
// // //   return (
// // //     <Router>
// // //       <Navbar />

// // //       {/* keep content area visible even if a page is short */}
// // //       <main style={{ minHeight: "60vh" }}>
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/about" element={<AboutUs />} />
// // //           <Route path="/solutions" element={<Solutions />} />
// // //           <Route path="/partners" element={<Partners />} />

// // //           {/* ✅ Gallery routes */}
// // //           <Route path="/gallery" element={<Gallery />} />
// // //           <Route path="/gallery/:id" element={<GalleryDetail />} />

// // //           <Route path="/contact" element={<Contact />} />

// // //           {/* ✅ Team routes */}
// // //           <Route path="/team" element={<Team />} />
// // //           <Route path="/team/:category" element={<Team />} />

// // //           {/* ✅ fallback */}
// // //           <Route path="*" element={<Navigate to="/gallery" replace />} />
// // //           <Route path="/our-story" element={<Story />} />
// // //           <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
// // //           <Route path="/solutions/serv-attendance" element={<ServAttendance />} />


// // //         </Routes>
// // //       </main>

// // //       <Footer />
// // //     </Router>
// // //   );
// // // }




// // // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // 🧩 Common Layout Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // 🏠 Main Pages
// // import Home from "./pages/Home";
// // import AboutUs from "./pages/AboutUs";
// // import Solutions from "./pages/Solutions";
// // import Partners from "./pages/Partners";
// // import Contact from "./pages/Contact";
// // import Story from "./pages/Story";
// // import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// // import ServAttendance from "./pages/ServAttendance";

// // // 👥 Team Pages
// // import Team from "./pages/Team";

// // // 🖼️ Gallery Pages
// // import Gallery from "./pages/Gallery";
// // import GalleryDetail from "./pages/GalleryDetail";

// // export default function App() {
// //   return (
// //     <Router>
// //       {/* ✅ Navbar stays visible on every page */}
// //       <Navbar />

// //       {/* ✅ Main content area (minimum height keeps layout consistent) */}
// //       <main style={{ minHeight: "60vh" }}>
// //         <Routes>
// //           {/* 🏠 Main Routes */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<AboutUs />} />
// //           <Route path="/solutions" element={<Solutions />} />
// //           <Route path="/partners" element={<Partners />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/our-story" element={<Story />} />
// //           <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
// //           <Route path="/solutions/serv-attendance" element={<ServAttendance />} />

// //           {/* 🖼️ Gallery Routes */}
// //           <Route path="/gallery" element={<Gallery />} />
// //           <Route path="/gallery/:id" element={<GalleryDetail />} />

// //           {/* 👥 Team Routes */}
// //           <Route path="/team" element={<Team />} />
// //           <Route path="/team/:category" element={<Team />} />

// //           {/* 🚦 Fallback Route (redirects unknown paths to /gallery) */}
// //           <Route path="*" element={<Navigate to="/gallery" replace />} />
// //         </Routes>
// //       </main>

// //       {/* ✅ Footer stays visible on every page */}
// //       <Footer />
// //     </Router>
// //   );
// // }


// // // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // 🧩 Common Layout Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // 🏠 Main Pages
// // import Home from "./pages/Home";
// // import AboutUs from "./pages/AboutUs";
// // import Solutions from "./pages/Solutions";
// // import Partners from "./pages/Partners";
// // import Contact from "./pages/Contact";
// // import Story from "./pages/Story";
// // import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// // import ServAttendance from "./pages/ServAttendance";

// // // 👥 Team Pages
// // import Team from "./pages/Team";

// // // 🖼️ Gallery Pages
// // import Gallery from "./pages/Gallery";
// // import GalleryDetail from "./pages/GalleryDetail";

// // // 🛒 NEW: E-commerce Pages
// // import Purchase from "./pages/Purchase";
// // import Login from "./pages/Login";

// // export default function App() {
// //   return (
// //     <Router>
// //       {/* ✅ Navbar stays visible on every page */}
// //       <Navbar />

// //       {/* ✅ Main content area (minimum height keeps layout consistent) */}
// //       <main style={{ minHeight: "60vh" }}>
// //         <Routes>
// //           {/* 🏠 Main Routes */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<AboutUs />} />
// //           <Route path="/solutions" element={<Solutions />} />
// //           <Route path="/partners" element={<Partners />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/our-story" element={<Story />} />
// //           <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
// //           <Route path="/solutions/serv-attendance" element={<ServAttendance />} />

// //           {/* 🖼️ Gallery Routes */}
// //           <Route path="/gallery" element={<Gallery />} />
// //           <Route path="/gallery/:id" element={<GalleryDetail />} />

// //           {/* 👥 Team Routes */}
// //           <Route path="/team" element={<Team />} />
// //           <Route path="/team/:category" element={<Team />} />

// //           {/* 🛒 NEW: E-commerce Routes */}
// //           <Route path="/purchase" element={<Purchase />} />
// //           <Route path="/login" element={<Login />} />

// //           {/* 🚦 Fallback Route (redirects unknown paths to /gallery) */}
// //           <Route path="*" element={<Navigate to="/gallery" replace />} />



          

// //         </Routes>
// //       </main>

// //       {/* ✅ Footer stays visible on every page */}
// //       <Footer />
// //     </Router>
// //   );
// // }


// // // src/App.js
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // 🧩 Common Layout Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // 🏠 Main Pages
// // import Home from "./pages/Home";
// // import AboutUs from "./pages/AboutUs";
// // import Solutions from "./pages/Solutions";
// // import Partners from "./pages/Partners";
// // import Contact from "./pages/Contact";
// // import Story from "./pages/Story";
// // import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// // import ServAttendance from "./pages/ServAttendance";

// // // 👥 Team Pages
// // import Team from "./pages/Team";

// // // 🖼️ Gallery Pages
// // import Gallery from "./pages/Gallery";
// // import GalleryDetail from "./pages/GalleryDetail";

// // // 🛒 NEW: E-commerce Pages
// // import Purchase from "./pages/Purchase";
// // import Login from "./pages/Login";
// // import Checkout from "./pages/Checkout"; 
// // import OrderConfirmation from "./pages/OrderConfirmation";
// // import OrderTracking from "./pages/OrderTracking";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import CustomerDashboard from "./pages/CustomerDashboard";

// // <Route path="/customer/dashboard" element={<CustomerDashboard />} />

// //   // ✅ STEP 5: Import Checkout Page

// // export default function App() {
// //   return (
// //     <Router>
// //       {/* ✅ Navbar stays visible on every page */}
// //       <Navbar />

// //       <main style={{ minHeight: "60vh" }}>
// //         <Routes>
// //           {/* 🏠 Main Routes */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<AboutUs />} />
// //           <Route path="/solutions" element={<Solutions />} />
// //           <Route path="/partners" element={<Partners />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/our-story" element={<Story />} />
// //           <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
// //           <Route path="/solutions/serv-attendance" element={<ServAttendance />} />

// //           {/* 🖼️ Gallery Routes */}
// //           <Route path="/gallery" element={<Gallery />} />
// //           <Route path="/gallery/:id" element={<GalleryDetail />} />

// //           {/* 👥 Team Routes */}
// //           <Route path="/team" element={<Team />} />
// //           <Route path="/team/:category" element={<Team />} />

// //           {/* 🛒 NEW: E-commerce Routes */}
// //           <Route path="/purchase" element={<Purchase />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/checkout" element={<Checkout />} />
// //              {/* ✅ Added Checkout Route */}

// //           {/* 🚦 Fallback Route */}
// //           <Route path="*" element={<Navigate to="/gallery" replace />} />
// //           <Route path="/order-confirmation" element={<OrderConfirmation />} />
// //           <Route path="/track-order" element={<OrderTracking />} />
          

// //           <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
// //           <Route path="/customer/dashboard" element={<CustomerDashboard />} />



// //         </Routes>
// //       </main>

// //       <Footer />
// //     </Router>
// //   );
// // }




// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// // 🧩 Common Layout Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // 🏠 Main Pages
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Solutions from "./pages/Solutions";
// import Partners from "./pages/Partners";
// import Contact from "./pages/Contact";
// import Story from "./pages/Story";
// import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// import ServAttendance from "./pages/ServAttendance";

// // 👥 Team Pages
// import Team from "./pages/Team";

// // 🖼️ Gallery Pages
// import Gallery from "./pages/Gallery";
// import GalleryDetail from "./pages/GalleryDetail";

// // 🛒 E-Commerce Pages
// import Purchase from "./pages/Purchase";
// import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";
// import OrderConfirmation from "./pages/OrderConfirmation";
// import OrderTracking from "./pages/OrderTracking";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import CustomerDashboard from "./pages/CustomerDashboard";

// // import CustomerDashboard from "./pages/CustomerDashboard";
// // import AdminDashboard from "./pages/AdminDashboard";

// // Add routes:


// // ✅ Helper component to hide Navbar/Footer on some pages
// function LayoutWrapper({ children }) {
//   const location = useLocation();

//   // hide navbar/footer on these pages
//   const hideLayoutOn = ["/login", "/admin/dashboard", "/customer/dashboard"];
//   const shouldHideLayout = hideLayoutOn.includes(location.pathname);

//   return (
//     <>
//       {!shouldHideLayout && <Navbar />}

//       <main style={{ minHeight: "60vh" }}>{children}</main>

//       {!shouldHideLayout && <Footer />}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <LayoutWrapper>
//         <Routes>
//           {/* 🏠 Main Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/solutions" element={<Solutions />} />
//           <Route path="/partners" element={<Partners />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/our-story" element={<Story />} />
//           <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
//           <Route path="/solutions/serv-attendance" element={<ServAttendance />} />

//           {/* 🖼️ Gallery Routes */}
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery/:id" element={<GalleryDetail />} />

//           {/* 👥 Team Routes */}
//           <Route path="/team" element={<Team />} />
//           <Route path="/team/:category" element={<Team />} />

//           {/* 🛒 E-Commerce Routes */}
//           <Route path="/purchase" element={<Purchase />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/order-confirmation" element={<OrderConfirmation />} />
//           <Route path="/track-order" element={<OrderTracking />} />
//           {/* <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/customer/dashboard" element={<CustomerDashboard />} /> */}

//           {/* <Route path="/customer/dashboard" element={<CustomerDashboard />} />
//           <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}

//           {/* 🚦 Fallback Route */}
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </LayoutWrapper>
//     </Router>
//   );
// }




import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Story from "./pages/Story";
import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
import ServAttendance from "./pages/ServAttendance";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Purchase from "./pages/Purchase";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderTracking from "./pages/OrderTracking";

// Dashboards
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Dashboard routes WITHOUT navbar/footer */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />

        {/* ✅ All other routes WITH navbar/footer */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <main style={{ minHeight: "60vh" }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/our-story" element={<Story />} />
                  <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
                  <Route path="/solutions/serv-attendance" element={<ServAttendance />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/gallery/:id" element={<GalleryDetail />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/team/:category" element={<Team />} />
                  <Route path="/purchase" element={<Purchase />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-confirmation" element={<OrderConfirmation />} />
                  <Route path="/track-order" element={<OrderTracking />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

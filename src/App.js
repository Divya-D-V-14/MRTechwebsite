// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Main pages
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Solutions from "./pages/Solutions";
// import Partners from "./pages/Partners";
// import Contact from "./pages/Contact";
// import Story from "./pages/Story";
// import CrowdShakiPlatform from "./pages/CrowdShakiPlatform";
// import ServAttendance from "./pages/ServAttendance";
// import Team from "./pages/Team";
// import Gallery from "./pages/Gallery";
// import GalleryDetail from "./pages/GalleryDetail";
// import Purchase from "./pages/Purchase";
// import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";
// import OrderConfirmation from "./pages/OrderConfirmation";
// import OrderTracking from "./pages/OrderTracking";

// // Dashboards
// import AdminDashboard from "./pages/AdminDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* ✅ Dashboard routes WITHOUT navbar/footer */}
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/customer/dashboard" element={<CustomerDashboard />} />

//         {/* ✅ All other routes WITH navbar/footer */}
//         <Route
//           path="*"
//           element={
//             <>
//               <Navbar />
//               <main style={{ minHeight: "60vh" }}>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<AboutUs />} />
//                   <Route path="/solutions" element={<Solutions />} />
//                   <Route path="/partners" element={<Partners />} />
//                   <Route path="/contact" element={<Contact />} />
//                   <Route path="/our-story" element={<Story />} />
//                   <Route path="/crowdshaki" element={<CrowdShakiPlatform />} />
//                   <Route path="/solutions/serv-attendance" element={<ServAttendance />} />
//                   <Route path="/gallery" element={<Gallery />} />
//                   <Route path="/gallery/:id" element={<GalleryDetail />} />
//                   <Route path="/team" element={<Team />} />
//                   <Route path="/team/:category" element={<Team />} />
//                   <Route path="/purchase" element={<Purchase />} />
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/checkout" element={<Checkout />} />
//                   <Route path="/order-confirmation" element={<OrderConfirmation />} />
//                   <Route path="/track-order" element={<OrderTracking />} />
//                   <Route path="*" element={<Navigate to="/" replace />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // 👈 Import CartProvider

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
    <CartProvider> {/* 👈 Wrap entire app with CartProvider */}
      <Router>
        <Routes>
          {/* Dashboard routes WITHOUT navbar/footer */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />

          {/* All other routes WITH navbar/footer */}
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
    </CartProvider>
  );
}
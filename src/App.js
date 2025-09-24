


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";

// import Solutions from "./pages/Solutions";
// import Partners from "./pages/Partners";
// import Gallery from "./pages/Gallery";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       {/* Navbar always visible */}
//       <Navbar />

//       {/* Page Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
     
//         <Route path="/solutions" element={<Solutions />} />
//         <Route path="/partners" element={<Partners />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       {/* Footer always visible */}
//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Team from "./pages/Team";   // ✅ NEW Team Page

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />   {/* ✅ Added Team route */}
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;

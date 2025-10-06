


// // // // // import React from "react";
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // // Components
// // // // // import Navbar from "./components/Navbar";
// // // // // import Footer from "./components/Footer";

// // // // // // Pages
// // // // // import Home from "./pages/Home";
// // // // // import AboutUs from "./pages/AboutUs";

// // // // // import Solutions from "./pages/Solutions";
// // // // // import Partners from "./pages/Partners";
// // // // // import Gallery from "./pages/Gallery";
// // // // // import Contact from "./pages/Contact";

// // // // // function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       {/* Navbar always visible */}
// // // // //       <Navbar />

// // // // //       {/* Page Routes */}
// // // // //       <Routes>
// // // // //         <Route path="/" element={<Home />} />
// // // // //         <Route path="/about" element={<AboutUs />} />
     
// // // // //         <Route path="/solutions" element={<Solutions />} />
// // // // //         <Route path="/partners" element={<Partners />} />
// // // // //         <Route path="/gallery" element={<Gallery />} />
// // // // //         <Route path="/contact" element={<Contact />} />
// // // // //       </Routes>

// // // // //       {/* Footer always visible */}
// // // // //       <Footer />
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;



// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // // // Components
// // // // import Navbar from "./components/Navbar";
// // // // import Footer from "./components/Footer";

// // // // // Pages
// // // // import Home from "./pages/Home";
// // // // import AboutUs from "./pages/AboutUs";
// // // // import Solutions from "./pages/Solutions";
// // // // import Partners from "./pages/Partners";
// // // // import Gallery from "./pages/Gallery";
// // // // import Contact from "./pages/Contact";
// // // // import Team from "./pages/Team";   // ✅ NEW Team Page

// // // // function App() {
// // // //   return (
// // // //     <Router>
// // // //       {/* Navbar always visible */}
// // // //       <Navbar />

// // // //       {/* Page Routes */}
// // // //       <Routes>
// // // //         <Route path="/" element={<Home />} />
// // // //         <Route path="/about" element={<AboutUs />} />
// // // //         <Route path="/solutions" element={<Solutions />} />
// // // //         <Route path="/partners" element={<Partners />} />
// // // //         <Route path="/gallery" element={<Gallery />} />
// // // //         <Route path="/contact" element={<Contact />} />
// // // //         <Route path="/team" element={<Team />} />   {/* ✅ Added Team route */}
    
// // // //       </Routes>

// // // //       {/* Footer always visible */}
// // // //       <Footer />
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;



// // // // App.jsx
// // // import React from 'react';
// // // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // // import Navbar from './components/Navbar';
// // // import Home from './pages/Home';
// // // import AboutUs from './pages/AboutUs';
// // // import Team from './pages/Team';
// // // import Solutions from './pages/Solutions';
// // // import Partners from './pages/Partners';
// // // import Gallery from './pages/Gallery';
// // // import Contact from './pages/Contact';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div className="App">
// // //         <Navbar />
// // //         <main>
// // //           <Routes>
// // //             <Route path="/" element={<Home />} />
// // //             <Route path="/about" element={<AboutUs />} />
            
// // //             {/* Team Routes */}
// // //             <Route path="/team" element={<Team />} />
// // //             <Route path="/team/:teamSlug" element={<Team />} />
            
// // //             <Route path="/solutions" element={<Solutions />} />
// // //             <Route path="/partners" element={<Partners />} />
// // //             <Route path="/gallery" element={<Gallery />} />
// // //             <Route path="/contact" element={<Contact />} />
            
// // //             {/* 404 Route */}
// // //             <Route path="*" element={<div>Page Not Found</div>} />
// // //           </Routes>
// // //         </main>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;



// // // import React from "react";
// // // import { Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from "./components/Footer";

// // // import Home from "./pages/Home";
// // // import AboutUs from "./pages/AboutUs";
// // // import Solutions from "./pages/Solutions";
// // // import Partners from "./pages/Partners";
// // // import Gallery from "./pages/Gallery";
// // // import Contact from "./pages/Contact";
// // // import Team from "./pages/Team";

// // // export default function App() {
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/about" element={<AboutUs />} />
// // //         <Route path="/solutions" element={<Solutions />} />
// // //         <Route path="/partners" element={<Partners />} />
// // //         <Route path="/gallery" element={<Gallery />} />
// // //         <Route path="/contact" element={<Contact />} />
// // //         <Route path="/Team" element={<Team />} />
// // //         {/* Fallback so you never see a blank screen */}
// // //         <Route path="*" element={<Home />} />
// // //       </Routes>
// // //       <Footer />
// // //     </>
// // //   );
// // // }
// // // src/App.js




// // // src/App.js
// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // import Home from "./pages/Home";
// // import AboutUs from "./pages/AboutUs";
// // import Solutions from "./pages/Solutions";
// // import Partners from "./pages/Partners";
// // import Gallery from "./pages/Gallery";
// // import Contact from "./pages/Contact";
// // import Team from "./pages/Team";

// // export default function App() {
// //   return (
// //     <>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<AboutUs />} />
// //         <Route path="/solutions" element={<Solutions />} />
// //         <Route path="/partners" element={<Partners />} />
// //         <Route path="/gallery" element={<Gallery />} />
// //         <Route path="/contact" element={<Contact />} />

// //         {/* ✅ Team routes (lowercase) */}
// //         <Route path="/team" element={<Team />} />
// //         <Route path="/team/:category" element={<Team />} />

// //         {/* fallback */}
// //         <Route path="*" element={<Home />} />
// //       </Routes>
// //       <Footer />
// //     </>
// //   );
// // }


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Solutions from "./pages/Solutions";
// import Partners from "./pages/Partners";
// import Gallery from "./pages/Gallery";
// import GalleryDetail from "./pages/GalleryDetail";   // ✅ import this
// import Contact from "./pages/Contact";
// import Team from "./pages/Team";

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       {/* keep content area visible even if a page is short */}
//       <main style={{ minHeight: "60vh" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/solutions" element={<Solutions />} />
//           <Route path="/partners" element={<Partners />} />

//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery/:id" element={<GalleryDetail />} /> {/* ✅ detail route */}

//           <Route path="/contact" element={<Contact />} />
//           <Route path="/team" element={<Team />} />

//           {/* ✅ fallback so unknown paths don’t render blank center */}
//           <Route path="*" element={<Navigate to="/gallery" replace />} />
//         </Routes>
//       </main>

//       <Footer />
//     </Router>
//   );
// }



// export default App;


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Solutions from "./pages/Solutions";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";   // ✅ detail route
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Story from "./pages/Story";
export default function App() {
  return (
    <Router>
      <Navbar />

      {/* keep content area visible even if a page is short */}
      <main style={{ minHeight: "60vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/partners" element={<Partners />} />

          {/* ✅ Gallery routes */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />

          <Route path="/contact" element={<Contact />} />

          {/* ✅ Team routes */}
          <Route path="/team" element={<Team />} />
          <Route path="/team/:category" element={<Team />} />

          {/* ✅ fallback */}
          <Route path="*" element={<Navigate to="/gallery" replace />} />
          <Route path="/our-story" element={<Story />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

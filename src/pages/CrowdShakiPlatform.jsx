import React from "react";
import "./CrowdShakiPlatform.css";
import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaShareAlt, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CrowdShakiPage = () => {
  const navigate = useNavigate();

  return (
    <div className="crowdshaki-page">
      {/* Hero Section */}
      <motion.div
        className="crowdshaki-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>CrowdShaki Platform</h1>
        <p>Empowering Communities Through Digital Crowdfunding</p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="crowdshaki-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <p>
          <strong>CrowdShaki</strong> is a digital crowdfunding platform
          developed by <strong>Myth Reality Technologies</strong> to support
          individuals and communities in raising funds for critical needs such
          as <span>medical emergencies</span>, <span>education</span>,{" "}
          <span>social causes</span>, and <span>personal challenges</span>.
        </p>

        <p>
          The platform enables users to easily create fundraising campaigns,
          share them across networks, and directly receive donations into their
          bank accounts. With <strong>category-based browsing</strong>,{" "}
          <strong>real-time campaign tracking</strong>, and{" "}
          <strong>featured success stories</strong>, CrowdShaki aims to make
          fundraising transparent, fast, and accessible for everyone in need.
        </p>

        {/* Features Section */}
        <div className="crowdshaki-features">
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>Create Campaigns</h3>
            <p>
              Set up personalized campaigns for any cause in just a few minutes.
            </p>
          </div>
          <div className="feature">
            <FaShareAlt className="feature-icon" />
            <h3>Share Everywhere</h3>
            <p>Spread your campaign through social media and reach supporters.</p>
          </div>
          <div className="feature">
            <FaHeart className="feature-icon" />
            <h3>Receive Donations</h3>
            <p>Securely collect funds directly in your bank account.</p>
          </div>
          <div className="feature">
            <FaChartLine className="feature-icon" />
            <h3>Track Progress</h3>
            <p>Monitor donations in real-time with live dashboards.</p>
          </div>
        </div>

        <blockquote>
          “Together, we can turn small acts of kindness into big transformations.”
        </blockquote>

        {/* <div className="crowdshaki-buttons">
          <a href="#" className="btn-primary">
            Start Your Campaign →
          </a>
          <button className="btn-secondary" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div> */}
      </motion.div>
    </div>
  );
};

export default CrowdShakiPage;


// import React from "react";
// import { motion } from "framer-motion";
// import { Lightbulb, Users, Shield, Globe, Rocket } from "lucide-react";

// const features = [
//   {
//     icon: <Lightbulb size={40} />,
//     title: "Innovative Solutions",
//     description:
//       "Empowering creators with tools that redefine collaboration and productivity.",
//     color: "from-violet-500 to-indigo-500",
//   },
//   {
//     icon: <Users size={40} />,
//     title: "Community Driven",
//     description:
//       "A platform that connects talents, innovators, and businesses across the globe.",
//     color: "from-cyan-500 to-blue-500",
//   },
//   {
//     icon: <Shield size={40} />,
//     title: "Secure & Transparent",
//     description:
//       "Built with privacy and trust at its core, ensuring data safety and user integrity.",
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     icon: <Globe size={40} />,
//     title: "Global Reach",
//     description:
//       "Expanding opportunities for creators everywhere — from local to international markets.",
//     color: "from-orange-500 to-yellow-500",
//   },
//   {
//     icon: <Rocket size={40} />,
//     title: "Future Ready",
//     description:
//       "Leveraging AI and modern tech to power the next generation of collaboration.",
//     color: "from-pink-500 to-purple-500",
//   },
// ];

// const CrowdShakiPlatform = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center p-10">
//       {/* Header Section */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 bg-clip-text text-transparent">
//           CrowdShaki Platform
//         </h1>
//         <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//           A new era of innovation, collaboration, and growth. Discover the
//           platform built to empower creators and businesses globally.
//         </p>
//       </motion.div>

//       {/* Features Section with sequential animation */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
//         {features.map((item, index) => (
//           <motion.div
//             key={index}
//             className={`group bg-gradient-to-b ${item.color} rounded-3xl p-[2px] shadow-lg hover:shadow-2xl transition-all duration-300`}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             <div className="bg-gray-900 rounded-3xl p-8 h-full flex flex-col items-center text-center hover:bg-gray-800 transition-all duration-300">
//               <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//               <p className="text-gray-400 text-sm">{item.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         className="mt-16 text-center"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 2 }}
//       >
//         <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
//           Join the Movement 🚀
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default CrowdShakiPlatform;


// import React from "react";
// import "./Solutions.css";
// import {
//   FaHospitalAlt,
//   FaChartBar,
//   FaStethoscope,
//   FaSeedling,
//   FaUsers,
//   FaGraduationCap,
//   FaCalendarCheck 
// } from "react-icons/fa";

// const SOLUTIONS = [
//   {
//     icon: <FaHospitalAlt />,
//     title: "G Care Health ATM",
//     text:
//       "AI-enabled health kiosks for preventive healthcare and diagnostics. Planned 3,300+ locations across Tamil Nadu.",
//     href: "#gcare",
//   },
//   {
//     icon: <FaChartBar />,
//     title: "Health Score App",
//     text:
//       "AI-based preventive health tool with personalized scoring and recommendations.",
//     href: "#health-score",
//   },
//   {
//     icon: < FaCalendarCheck  />,
//     title: "SERV Attendance App",
//     text:
//       "Complete telemedicine platform connecting patients with healthcare professionals remotely.",
//     href: "#serv",
//   },
//   {
//     icon: <FaSeedling />,
//     title: "AI Agriculture Solutions",
//     text:
//       "Smart farming tools with AI-powered crop monitoring, soil analysis, and precision guidance.",
//     href: "#agri",
//   },
//   {
//     icon: <FaUsers />,
//     title: "CrowdShaki Platform",
//     text:
//       "Community intelligence platform for collaborative, data-driven decision-making and social impact.",
//     href: "#crowdshaki",
//   },
//   {
//     icon: <FaGraduationCap />,
//     title: "CHA Training Program",
//     text:
//       "Community Health Ambassador program — Recruit, Train, Deploy model for healthcare jobs.",
//     href: "#cha",
//   },
// ];

// export default function Solutions() {
//   return (
//     <section className="solutions">
//       <div className="solutions-inner">
//         <h2 className="solutions-title">Our Professional <span>IT Services</span></h2>

//         <div className="solutions-grid">
//           {SOLUTIONS.map((card, i) => (
//             <article className="sol-card" key={i}>
//               <div className="sol-top">
//                 <div className="sol-icon">{card.icon}</div>
//               </div>

//               <div className="sol-body">
//                 <h3>{card.title}</h3>
//                 <p>{card.text}</p>
//                 <a className="sol-link" href={card.href}>
//                   Read More <span className="arrow">›</span>
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";
import "./Solutions.css";
import {
  FaHospitalAlt,
  FaChartBar,
  FaStethoscope,
  FaSeedling,
  FaUsers,
  FaGraduationCap,
  FaCalendarCheck,
} from "react-icons/fa";

/* ====== SOLUTION CARDS DATA ====== */
const SOLUTIONS = [
  {
    icon: <FaHospitalAlt />,
    title: "G Care Health ATM",
    text:
      "AI-enabled health kiosks for preventive healthcare and diagnostics. Planned 3,300+ locations across Tamil Nadu.",
    href: "#gcare",
  },
  {
    icon: <FaChartBar />,
    title: "Health Score App",
    text:
      "AI-based preventive health tool with personalized scoring and recommendations.",
    href: "#health-score",
  },
 
  {
    icon: <FaSeedling />,
    title: "AI Agriculture Solutions",
    text:
      "Smart farming tools with AI-powered crop monitoring, soil analysis, and precision guidance.",
    href: "#agri",
  },
  {
    icon: <FaUsers />,
    title: "CrowdShaki Platform",
    text:
      "Community intelligence platform for collaborative, data-driven decision-making and social impact.",
    href: "#crowdshaki",
  },
  {
    icon: <FaGraduationCap />,
    title: "CHA Training Program",
    text:
      "Community Health Ambassador program — Recruit, Train, Deploy model for healthcare jobs.",
    href: "#cha",
  },
  {
    icon: <FaCalendarCheck />, // ✅ attendance icon
    title: "SERV Attendance App",
    text:
      "Smart attendance management system for employee check-ins, time tracking, and reporting.",
    href: "#attendance",
  },
];

export default function Solutions() {
  return (
    <section className="solutions">
      <div className="solutions-inner">
        <h2 className="solutions-title">
          Our Professional <span>IT Services</span>
        </h2>

        <div className="solutions-grid">
          {SOLUTIONS.map((card, i) => (
            <article className="sol-card" key={i}>
              <div className="sol-top">
                <div className="sol-icon">{card.icon}</div>
              </div>

              <div className="sol-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a className="sol-link" href={card.href}>
                  Read More <span className="arrow">›</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <Stats />
      </div>
    </section>
  );
}

/* =======================
   Animated Counters Strip
   ======================= */
function Stats() {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          io.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const items = [
    { id: 1, end: 3300, label: "Health ATMs Planned", suffix: "+" },
    { id: 2, end: 50000, label: "Lives Impacted", suffix: "+" },
    { id: 3, end: 100, label: "Partner Hospitals", suffix: "+" },
    { id: 4, end: 2.5, label: "Funds Raised", prefix: "₹", suffix: "Cr+" },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-inner">
        {items.map((it) => (
          <Counter
            key={it.id}
            start={start}
            end={it.end}
            label={it.label}
            prefix={it.prefix}
            suffix={it.suffix}
          />
        ))}
      </div>
    </section>
  );
}

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

function Counter({ start, end, label, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1500;
    const t0 = performance.now();

    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = easeOutCubic(p);
      const curr = end * eased;
      const display = Number.isInteger(end)
        ? Math.round(curr)
        : Number(curr.toFixed(1));
      setVal(display);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, end]);

  const show = Number.isInteger(end)
    ? val.toLocaleString("en-IN")
    : val.toFixed(1);

  return (
    <div className="stat">
      <div className="stat-number">
        {prefix}
        {show}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

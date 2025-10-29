// // helper: /images/<folder>/1.jpg ... 10.jpg
// const make = (folder, count = 10) =>
//   Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.jpg`);

// const galleries = {
//   "gcare-atm":      { title: "G Care Health ATM Launch", images: make("gcare-atm", 10) },
//   "ai-agri":        { title: "AI Agriculture Pilot",     images: make("ai-agri", 10) },
//   "health-camp":    { title: "Community Health Camp",    images: make("health-camp", 10) },
//   "tech-conf":      { title: "Tech Conference 2024",     images: make("tech-conf", 10) },
//   "cha-training":   { title: "CHA Training Program",     images: make("cha-training", 10) },
//   "impact-awards":  { title: "Social Impact Awards",     images: make("impact-awards", 10) },
// };

// export default galleries;



// helper: generates /images/<folder>/1.jpg ... 10.jpg automatically
const make = (folder, count = 10) =>
  Array.from({ length: count }, (_, i) => `/images/${folder}/${i + 1}.jpg`);

const galleries = {
  "gcare-atm":      { title: "G Care Health ATM Launch", images: make("gcare-atm", 9) },
  "ai-agri":        { title: "AI Agriculture Pilot",     images: make("ai-agri", 10) },
  "health-camp":    { title: "Community Health Camp",    images: make("health-camp", 10) },
  "tech-conf":      { title: "Tech Conference 2024",     images: make("tech-conf", 10) },
  "cha-training":   { title: "CHA Training Program",     images: make("cha-training", 10) },
  "impact-awards":  { title: "Social Impact Awards",     images: make("impact-awards", 10) },
};

export default galleries;

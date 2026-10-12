/**
 * ALL EDITABLE CONTENT LIVES HERE.
 * Replace the [PLACEHOLDERS] in `contact` with real details.
 */

export const contact = {
  email: "itsmohakk7@gmail.com",
  phone: "+977 9806901418",
 
  location: "Nepal",
};

export const isPlaceholder = (value: string) => /^\[.*\]$/.test(value.trim());

export const navLinks = [
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  // { id: "future", label: "Future" },
  { id: "contact", label: "Contact" },
];


export const roles = ["Health Assistant", "Healthcare Professional", "Aspiring Pharmacist"];

export const journey = [
  {
    title: "HA Education",
    meta: null,
    text: "Foundation in clinical practice and healthcare services.",
  },
  {
    title: "Clinical Internship",
    meta: "Lumbini Provincial Hospital · ≈ 6 months",
    text: "Patient care, emergency services and teamwork.",
  },
  {
    title: "Professional License",
    meta: null,
    text: "Passed the HA licensing exam on the first attempt.",
  },
  {
    title: "Clinical Experience",
    meta: "≈ 3 years",
    text: "Patient management, emergency support, X-ray-related work and documentation.",
  },
  {
    title: "Burn Case Management",
    meta: null,
    text: "Additional certification/training.",
  },
];

export const skillBranches = [
  {
    title: "Patient Care",
    items: [
      "Patient Handling",
      "Clinical Assistance",
      "Patient Communication",
      "Patient Assessment",
      "Documentation",
    ],
  },
  {
    title: "Clinical Support",
    items: ["Emergency Department Support", "Clinical Coordination", "Clinic Operations", "Teamwork"],
  },
  {
    title: "Diagnostic Support",
    items: ["X-ray-related Work", "Basic Diagnostic Support"],
  },
  {
    title: "Professional Practice",
    items: ["Healthcare Communication", "Burn Case Management", "Basic Computer Skills", "Continuous Learning"],
  },
];

export const roadmap = [
  { title: "HA Education", label: "Foundation", state: "done" },
  { title: "Clinical Experience", label: "Experience", state: "done" },
  { title: "Further Learning", label: "Ongoing", state: "current" },
  { title: "B.Pharm", label: "Goal", state: "goal" },
  { title: "Healthcare Career", label: "Vision", state: "future" },
] as const;

export const interests = ["Technology", "Business", "Photography", "Travel", "Digital Creativity"];
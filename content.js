// All site content lives here. Edit this file only; main.js renders it.
// Leave a field as "" or [] to hide it.
window.SITE = {
  name: "William Zahradnik",
  title: "Cybersecurity Operations Student",
  region: "home-01",
  summary:
    "Student focused on cloud infrastructure and security. I build things, break things in competitions, and write it all down.",
  resumeUrl: "William_Zahradnik_Resume.pdf", // drop your PDF next to index.html to show the download button

  experience: [
    {
      role: "Cloud Systems Administrator",
      org: "Competitive Cybersecurity Organization (CCSO)",
      location: "University Park, PA",
      start: "May 2026",
      end: "Present",
      bullets: [
        "Build and automate workshop environments with Ansible, deployed on Kubernetes clusters on CCSO's on-premises server for 50+ members.",
        "Deployed Authentik for single sign-on (SSO) and centralized identity and access management across CCSO's public-facing web server and workshops.",
      ],
      tags: ["Ansible", "Kubernetes", "Authentik", "SSO", "IAM"],
    },
    {
      role: "Learning Assistant, Cyber 100",
      org: "Penn State, College of IST",
      location: "University Park, PA",
      start: "Aug 2026",
      end: "Present",
      bullets: [
        "Support instruction for an introductory cybersecurity course covering security principles, networking and systems fundamentals.",
        "Hold regular office hours to help 90+ students troubleshoot coursework and reinforce lecture material.",
        "Work with the instructor to update course materials and lab exercises.",
      ],
      tags: ["Teaching", "Networking", "Security fundamentals"],
    },
    {
      role: "Lead Consulting Intern",
      org: "Leadership Initiatives",
      location: "Washington, DC",
      start: "Summer 2025",
      end: "Summer 2026",
      bullets: [
        "Led needs assessment and research for cybersecurity protocol implementation at two DC non-profits, Freshfarm and Iona, grounding recommendations in the NIST CSF to structure risk identification and control selection.",
        "Facilitated daily meetings with stakeholders to gather feedback and confirm project requirements for a team of 12.",
        "Presented a final security proposal to the board of directors and secured $1,000 in implementation funding.",
      ],
      tags: ["NIST CSF", "Risk assessment", "Consulting"],
    },
    {
      role: "Lead Software Development Intern",
      org: "Indie Co.",
      location: "Falls Church, VA",
      start: "June 2024",
      end: "Aug 2024",
      bullets: [
        "Partnered with client stakeholders to define requirements and deliver an AI application using OpenAI’s API, enabling automated document analysis and natural-language interaction tailored to client workflows",
        "Engineered extraction and analysis pipelines to surface relevant information from key document types in response to user queries; produced client-facing technical documentation for onboarding and long-term maintainability",
      ],
      tags: ["Python", "Back-End Web Development", "Project Management"]
    }
  ],

  competitions: [
    {
      name: "NCAE Cyber Games",
      date: "2026-2",
      result: "6th / 12",
      role: "Infrasturcture Specialist",
      details: "Coordinated with teammates to triage and prioritize defense efforts across the infrastructure, owning the core router that enabled all machine scoring and external network access for the team. Applied router configuration skills in CentOS and MikroTik, including static IP setup, port-forwarding, and firewall rules, to maintain team infrastructure stability under active red-team pressure.",
    },
    {
      name: "Department of Energy CyberForce Competition",
      date: "2025-11",
      result: "16th / 100",
      role: "Incident Response Team Member · Penn State CCSO · Chicago, IL",
      details:
        "Investigated a simulated breach at an oil facility, scoping the incident and setting recovery priorities before drafting client-ready recommendations. Monitored and responded to live attacks on Linux hosts using Elastic SIEM, then compiled findings into a full incident report. Highest finish ever recorded by a CCSO second team.",
    },
  ],

  // category: "network" (network design), "papers" or "personal" (personal development)
  projects: [
    {
      name: "ccso-workshop-infra",
      category: "personal",
      description:
        "Ansible-automated workshop environments running on CCSO's on-prem Kubernetes clusters, with Authentik SSO for member sign-in.",
      tags: ["Ansible", "Kubernetes", "Authentik"],
      repo: "",
      demo: "",
    },
    {
      name: "campus-network-sim",
      category: "network",
      description:
        "Simulated an 8-router campus network in Cisco Packet Tracer: addressing, forwarding paths and redundant links with RIP failover. Traced ARP and gateway forwarding in Wireshark to separate Layer 2 delivery from Layer 3 routing.",
      tags: ["Packet Tracer", "Wireshark", "RIP", "Routing & switching"],
      repo: "",
      demo: "",
    },
    {
      name: "aliquippa-risk-assessment",
      category: "papers",
      description:
        "Risk assessment and best-practice response report on the 2023 IRGC attack on the Municipal Water Authority of Aliquippa, PA.",
      tags: ["Risk assessment", "Critical infrastructure", "Technical writing"],
      repo: "",
      demo: "",
    },
    {
      name: "hipaa-infra-proposal",
      category: "papers",
      description:
        "Proposal for infrastructure security measures in HIPAA-regulated healthcare, focused on network segmentation and IoT device management.",
      tags: ["HIPAA", "Network segmentation", "IoT"],
      repo: "",
      demo: "",
    },
    {
      name: "personal-site",
      category: "personal",
      description: "This site: a static portfolio themed as a cloud architecture console.",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/Nubitect/personal-site",
      demo: "",
    },
  ],

  // Rendered as an IAM-style policy: each key becomes one statement.
  skills: {
    Security: ["Elastic SIEM", "Incident response", "NIST CSF", "Risk assessment", "IAM / SSO", "Security policy"],
    Infrastructure: ["Linux", "Docker", "Kubernetes", "Ansible"],
    Networking: ["Wireshark", "Cisco Packet Tracer", "RIP", "OSPF/BGP (studying)"],
    Languages: ["Python", "Java", "C", "SQL"],
    Professional: ["Leadership", "Communication", "Technical writing"],
  },

  education: [
    {
      school: "The Pennsylvania State University · College of IST",
      degree: "B.S. Cybersecurity Analytics and Operations",
      when: "Current",
      note: "Minors in Economics and Politics & Public Policy · GPA 3.92/4.00",
    },
    {
      school: "DC International School",
      degree: "IB Diploma & Career Program Certificate",
      when: "",
      note: "GPA 4.46/5.00",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner (CLF-C02)", year: "Exp. Dec 2026" },
    { name: "CompTIA Security+ (SY0-701)", year: "Oct 2026" },
  ],

  honors: [
    { name: "Dean's List", year: "Fall '25, Spring '26" },
    { name: "FIRST Robotics Competition Championships qualifier", year: "2021" },
  ],

  // One entry per term, e.g. { term: "Fall 2025", courses: ["CYBER 100: Intro to Cybersecurity", "IST 140: Intro to Programming"] }
  coursework: [
    { term: "Fall 2026", courses: ["CYBER 262: Cyper-Defense Studio", "ECON 104: Introductory Macroeconomic Analysis and Policy", "IST 210: Organization of Data", "IST 220: Networking and Telecomunications"]},
    { term: "Spring 2026", courses: ["ECON 302: Intermediate Microeconomic Analysis", "ENGL 15: Rhetoric and Composition", "IST 242: Intermediate and Object Oriented Application Development", "PLSC 1: American Politics", "STAT 200: Elementary Statistics"]},
    { term: "Fall 2025", courses: ["CAS 100A: Effective Speach", "CYBER 100: Computer Systems Literacy", "ECON 102: Introductory Microeconomic Analysis and Policy", "IST 140: Introduction to Application Development", "SRA 111: Introduction to Securtity and Risk Analysis"]},
  ],

  contact: [
    { label: "email", href: "mailto:wrz5020@psu.edu", text: "wrz5020@psu.edu" },
    { label: "linkedin", href: "https://www.linkedin.com/in/william-zahradnik", text: "linkedin.com/in/william-zahradnik" },
    { label: "github", href: "https://github.com/Nubitect", text: "github.com/Nubitect" },
  ],
};

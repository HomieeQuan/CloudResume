import React from 'react';
import { Briefcase, MapPin, Clock, Building } from 'lucide-react';

const Experience = () => {
  const jobs = [
    {
      position: "Cloud Engineer",
      company: "Freelance",
      year: "2023 - Present",
      location: "Trenton, NJ",
      type: "Full-time",
      responsibilities: [
        "Built and managed scalable cloud infrastructure on Azure, leveraging services like Azure VMs, Blob Storage, and SQL Database, reducing costs by 30%.",
        "Developed and deployed automated CI/CD pipelines with Docker and GitHub Actions, speeding up software release cycles by 50%.",
        "Performed regular cloud security audits, identifying vulnerabilities and achieving a 98% compliance rate with security policies.",
        "Optimized cloud resource allocation and storage management on Azure, cutting costs by 20% through automated scripts and tagging.",
        "Supported migration of on-premises applications to Azure, ensuring minimal downtime and improving system scalability by 25%."
      ],
      skills: ["Azure Cloud Management", "Python", "Docker", "Cloud Security and Compliance", "CI/CD Automation"]
    },
    {
      position: "Full Stack Developer",
      company: "Resilient Coders",
      year: "2022 - Present",
      location: "Philadelphia, PA",
      type: "Full-time",
      responsibilities: [
        "Led end-to-end development for 20+ JavaScript applications, contributing to both front-end (HTML, CSS, JavaScript) and back-end (Node.js, Express) components.",
        "Collaborated in cross-functional teams, conducted code reviews, and provided mentorship, demonstrating proficiency in agile methodologies and commitment to continuous learning.",
        "Integrated RESTful APIs and third-party services into web applications, improving functionality and enabling seamless data exchange between front-end and back-end systems.",
        "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, to ensure timely delivery of software features and enhance team productivity.",
        "Troubleshot and resolved critical production issues"
      ],
      skills: ["React", "Python", "PostgreSQL", "Node.js", "Git", "MongoDB"]
    },
    {
      position: "Support Analyst",
      company: "IKEA",
      year: "2022 - Present",
      location: "Conshohocken, PA",
      type: "Full-time",
      responsibilities: [
        "Operational Lead and Incident Management: Spearheaded critical daily incident calls, managing high-priority issues and ensuring timely resolution. Leveraged tools like IMU, Active Directory, ServiceNow, Azure, and Jira to handle an average of 600-700 tickets per month and over 100 user chats",
        "AI and Machine Learning Innovation: Led a winning team in a company-wide hackathon, developing a data-driven solution to optimize inventory placement during holidays and disaster events. The project demonstrated potential savings of $2-3 million per store annually, showcasing the effective use of AI and machine learning in real-world scenarios.",
        "Diagnosed and resolved both software and hardware issues for users, achieving a 98% first-call resolution rate and reducing average resolution time by 30%, ensuring minimal disruption to their workflow",
        "Troubleshot issues with virtual machines and VPNs, resolving connectivity and performance problems efficiently and improving system uptime and user satisfaction"
      ],
      skills: ["ServiceNow", "Azure", "Incident Management", "Active Directory", "Identity Management", "Microsoft Office", "Splunk"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white p-8 overflow-hidden">
      {/* Starry background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-300">Professional Experience</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-6 backdrop-filter backdrop-blur-sm">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold flex items-center text-cyan-300">
                  <Briefcase className="w-6 h-6 mr-2 text-cyan-500" />
                  {job.position}
                </h2>
                <p className="text-gray-300 mt-1 flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {job.company}
                </p>
                <p className="text-gray-400 mt-1">{job.year}</p>
                <span className="bg-cyan-900 text-cyan-200 text-sm font-medium px-2.5 py-0.5 rounded mt-2 inline-block">
                  {job.type}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-500" />
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-300">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="bg-cyan-900 bg-opacity-50 text-cyan-200 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Experience;
import React from 'react';
import az104 from '../images/104.jpg'
import az305 from '../images/305.jpg'
import az500 from '../images/500.png'
import securityplus from '../images/security.png'

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure Administrator (AZ-104)",
      logo: az104,
      credentialId: "AWS-1234567",
      issueDate: "October 2024"
    },
    {
      title: "Microsoft  Solutions Architect (AZ-305)",
      logo: az305,
      credentialId: "MSFT-AZ204",
      issueDate: "October 2024"
    },
    {
      title: "Microsoft  Security Engineer (AZ-500)",
      logo: az500,
      credentialId: "GCP-PCA-2023",
      issueDate: "November 2024"
    },
    {
      title: "Secuirty  + (701)",
      logo: securityplus,
      credentialId: "CKA-1234",
      issueDate: "In Progress"
    },
    {
    //   title: "Certified Information Systems Security Professional (CISSP)",
    //   logo: "/path/to/cissp-logo.png",
    //   credentialId: "CISSP-123456",
    //   issueDate: "September 2023"
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
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-300">Certifications</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-4 backdrop-filter backdrop-blur-sm flex items-center">
              <img src={cert.logo} alt={`${cert.title} logo`} className="w-16 h-16 object-contain mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-cyan-300 mb-1">{cert.title}</h2>
                <p className="text-gray-300 text-sm mb-1">Credential ID: {cert.credentialId}</p>
                <p className="text-gray-300 text-sm">Issued: {cert.issueDate}</p>
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

export default Certifications;
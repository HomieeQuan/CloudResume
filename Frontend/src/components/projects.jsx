import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Resume",
      description: [
        "Completed the Cloud Resume Challenge, gaining hands-on experience in deploying a full-stack cloud project on Microsoft Azure, including frontend, backend, and database components.",
        "Designed and implemented Continuous Integration and Continuous Deployment (CI/CD) pipelines using Azure DevOps, streamlining the deployment process for seamless updates and maintenance.",
        "Leveraged Infrastructure as Code (IaC) tools, such as Azure Resource Manager (ARM) templates or Terraform, to define and manage cloud infrastructure, demonstrating strong cloud engineering expertise.",
        "Integrated various Azure services, including Azure Blob Storage, Azure Functions, API Management, and Cosmos DB, to develop scalable and efficient cloud solutions.",
        "Documented project workflows and maintained version control using Git and GitHub, ensuring thorough documentation and collaborative development."
      ],
      tools: ["React", "Node.js", "Azure", "Python", "CosmosDB",],
      link: "#"
    },
    {
      title: "Serveless Movie API",
      description: [
        "Developed a Serverless Movies API on Microsoft Azure, utilizing Azure Functions to provide movie information through scalable, serverless functions.",
        "Designed and implemented cloud infrastructure using Azure SDK, deploying a NoSQL database with Azure Cosmos DB, cloud storage with Azure Blob Storage, and serverless functions for efficient data retrieval.",
        "Prepared and managed data by sourcing and storing movie details in Azure Cosmos DB and hosting movie cover images in Azure Blob Storage to optimize data access and storage efficiency.",
        "Created multiple serverless functions, including GetMovies to fetch a list of all movies with cover URLs and GetMoviesByYear to retrieve movies based on a specified release year, enhancing the API's functionality.",
        // "Achieved 25% reduction in overstock and stockout incidents"
      ],
      tools: ["Python", "Azure Blob Storage", "Azure", "NoSQL", "CosmosDB"],
      link: "#"
    },
    {
      title: "HoopMaster: Basketball Skill Enhancement Platform",
      description: [
        "Implemented a RESTful API to manage user data and workout details, ensuring efficient data handling and scalability.",
        "ntegrated the YouTube API to dynamically curate a diverse library of workout videos, providing users with varied and engaging training resources.",
        "Generated personalized workout guides with step-by-step instructions and video demonstrations, enhancing user engagement and improving learning outcomes.",
        "Leveraged MongoDB for efficient storage and retrieval of user data and workout information, optimizing platform performance and user experience.",
        // "Conducted thorough security testing and smart contract audits"
      ],
      tools: ["Javascript", "Node.JS", "MongoDB", "RESTful API", "CSS"],
      link: "#"
    },
    {
      title: "Contacts",
      description: [
        "Designed and developed a feature-rich Contacts App using React, Node.js, Express, and MongoDB, enabling efficient management of contact information with full CRUD (Create, Read, Update, Delete) capabilities.",
        "Implemented a RESTful API to handle data transactions, ensuring robust and scalable communication between the client and server.",
        "Integrated secure user authentication and data validation using tokens, enhancing data integrity and protecting user information.",
        "Utilized MongoDB for efficient storage and retrieval of contact data, optimizing application performance and responsiveness.",
        "Developed a user-friendly interface for seamless contact organization and interaction, enhancing user experience and engagement."
      ],
      tools: ["React", "Node.JS", "MongoDB", "Express", "RESTful API"],
      link: "#"
    },
    {
      title: "Automated Code Review System",
      description: [
        "Developed AI algorithms to detect code smells and potential bugs",
        "Integrated with popular version control systems (Git, SVN)",
        "Implemented customizable rule sets for different coding standards",
        "Created detailed reports with suggestions for code improvement",
        "Reduced manual code review time by 40% in large-scale projects"
      ],
      tools: ["Python", "NLP", "Git", "Jenkins", "REST API"],
      link: "#"
    }
  ];

  return (
    <div className="bg-black text-white p-8 min-h-screen relative overflow-hidden">
      {/* Simulated starry background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-cyan-300">Projects</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-80 rounded-lg shadow-md p-6 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-cyan-300">
                  {project.title}
                </h2>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-400">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-300">
                {project.description.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="bg-cyan-900 bg-opacity-50 text-cyan-200 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <div className="w-3 h-3 mr-1 bg-cyan-400 rounded-full"></div>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
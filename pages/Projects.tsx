import React from 'react';
import MyDetails from '../constants/MyDetails';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  language: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ANTI-STRESSOR",
      description: "This is Anti-Stressor App that pops up jokes according to your hobby so that it can make you smile. It detects your smile using camera.",
      imageUrl: "/images/projects/Anti-stressor.png", // Replace with actual image path
      githubUrl: "https://github.com/ACT91/ANTI-STRESSOR",
      language: "JavaScript"
    },
    {
      id: 2,
      title: "IMAGE-TO-PDF-CONVERTER",
      description: "Converts your Image to a PDF. Created after finding that most apps on Google Play Store require payment despite watching ads.",
      imageUrl: "/images/projects/image-to-pdf.png", // Replace with actual image path
      githubUrl: "https://github.com/ACT91/IMAGE-TO-PDF-CONVERTER",
      language: "TypeScript"
    },
    {
      id: 3,
      title: "PhoneYANGA",
      description: "A web application that retrieves necessary information including Messages, Phone's Battery Info, New Notifications etc. from your Phone when you can't access it physically.",
      imageUrl: "/images/projects/PhoneYangaDashboard.png", // Replace with actual image path
      githubUrl: "https://github.com/ACT91/PhoneYANGA",
      language: "TypeScript"
    },
  ];

  return (
    <section className="pt-1 pb-12 px-4 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mt-10 mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-primary">{project.language}</div>
                <h3 className="card-title">{project.title}</h3>
                <p className="text-base-content/70">{project.description}</p>
                <div className="card-actions justify-end mt-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href={MyDetails.github.repositories} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-lg btn-secondary"
          >
            See More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
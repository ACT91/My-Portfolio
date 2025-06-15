import React from 'react';

const EducationTimeline: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      institution: "Nation College of Information Technology",
      degree: "College",
      period: "Present",
      description: "Currently pursuing higher education in Information Technology."
    },
    {
      id: 2,
      institution: "Hallmark Private Secondary School",
      degree: "Secondary Education",
      period: "Secondary School",
      description: "Completed secondary education with focus on science subjects."
    },
    {
      id: 3,
      institution: "Limbe Primary School",
      degree: "Primary Education",
      period: "Standard 7 - 8",
      description: "Completed final years of primary education."
    },
    {
      id: 4,
      institution: "Nazombe Primary School",
      degree: "Primary Education",
      period: "Standard 4 - 7",
      description: "Continued primary education and developed foundational skills."
    },
    {
      id: 5,
      institution: "Njedza Primary School",
      degree: "Primary Education",
      period: "Standard 1 - 4",
      description: "Early primary education focusing on core subjects."
    },
    {
      id: 6,
      institution: "St. Augustine 3 Primary School",
      degree: "Primary Education",
      period: "Standard 1",
      description: "Continued first year of primary education."
    },
    {
      id: 7,
      institution: "Migowi Primary School",
      degree: "Primary Education",
      period: "Standard 1",
      description: "Continued first year of primary education."
    },
    {
      id: 8,
      institution: "Chingazi Primary School",
      degree: "Primary Education",
      period: "Standard 1",
      description: "Started first year of primary education."
    },
    {
      id: 9,
      institution: "Salvation Army",
      degree: "Nursery School",
      period: "Early Education",
      description: "First educational experience in nursery school."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {educationItems.map((item) => (
        <div key={item.id} className="mb-10 relative pl-6 border-l-2 border-primary">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
          <div className="mb-2">
            <h3 className="text-xl font-bold">{item.institution}</h3>
            <p className="text-sm text-primary font-medium">{item.period}</p>
          </div>
          <h4 className="text-lg font-semibold mb-2">{item.degree}</h4>
          <p className="text-base-content/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
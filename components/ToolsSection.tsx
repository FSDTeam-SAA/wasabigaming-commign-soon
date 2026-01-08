import { FileText, Library, PenTool, Play, Tags } from 'lucide-react';
import React from 'react';

const ToolsSection = () => {
  const tools = [
    { title: 'AI CV Builder', desc: 'Tailor your profile into management-ready CVs', icon: FileText, button: 'Start planning' },
    { title: 'Cover Letter Studio', desc: 'Guided walkthrough to editing cohesive portfolio', icon: PenTool, button: 'View my cvs' },
    { title: 'Mock Interview Simulation', desc: 'Practice applications with resident feedback', icon: Play, button: 'Try a mock' },
    { title: 'Assessment Centre Lab', desc: 'Prepare with profile-enhanced skills simulator', icon: Tags, button: 'Start test' },
    { title: 'Law Firm Library', desc: 'Complete virtual library of guides, courses, and more', icon: Library, button: 'Explore drive' },
  ];

  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between text-center hover:shadow-2xl transition"
          >
            <div>
              <div className="bg-[#FFFF00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <tool.icon className="text-black w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-700 mb-6">{tool.desc}</p>
            </div>
            <button className="bg-[#FFED00] hover:bg-[#FFED00]/80 text-black font-semibold py-2 px-6 rounded-full transition mx-auto">
              {tool.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;

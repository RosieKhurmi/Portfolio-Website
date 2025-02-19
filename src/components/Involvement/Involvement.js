import React, { useState } from "react";
import "./Involvement.css";
import { ExtracurricularNames, ExtracurricularsDetails } from "./Extracurriculars";

const Involvement = () => {
  const [selectedId, setSelectedId] = useState(ExtracurricularsDetails[0].id);
  const selectedExtracurricular = ExtracurricularsDetails.find(
    (item) => item.id === selectedId
  );

  return (
    <div className="involvement">
      <h2>Involvement</h2>

      <div className="involvement_content">
        {/* Sidebar Menu */}
        <div className="navigation">
          {ExtracurricularNames.map((name, index) => (
            <button
              key={index}
              className={selectedId === name ? "active" : ""}
              onClick={() => setSelectedId(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="information">
          <h2 className="text-2xl font-semibold">{selectedExtracurricular.id}</h2>
          <p className="text-gray-700 mt-2">{selectedExtracurricular.text}</p>

          {/* Projects Section */}
          {selectedExtracurricular.projects?.length > 0 && (
            <div className="involvement_projects">
              {selectedExtracurricular.projects.map((project, index) => (
                <div key={index} className="project_example">
                  <h3>{project.title}</h3>
                  {project.year && <p>{project.year}</p>}
                  <div className="project_info">
                    <img src={project.img} alt={project.title} />
                    <p>{project.text}</p>
                  </div>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Involvement;

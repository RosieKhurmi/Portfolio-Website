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

      <p>Beyond work, I engage in extracurriculars to sharpen my technical and communication skills, connect with the community, and contribute to the community beyond myself through collaboration and knowledge sharing.</p>

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
          <h3 className="text-gray-700 mt-2">{selectedExtracurricular.text}</h3>

          {/* Projects Section */}
          {selectedExtracurricular.projects?.length > 0 && (
            <div className="involvement_projects">
              {selectedExtracurricular.projects.map((project, index) => (
                <div key={index} className="project_example">
                  <h3>{project.title}</h3>
                  {project.year && (
                    <>
                      <br />
                      <p>{project.year}</p>
                    </>
                  )}
                  <div className="project_info">
                    {project.img && <img src={project.img} alt={project.title} />}
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

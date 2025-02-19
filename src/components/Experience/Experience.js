import React, { useState } from 'react';
import './Experience.css';
import { workExperience } from './Work_Experience';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="timeline">
      <h2>Work Experience</h2>
      <VerticalTimeline>
        {workExperience.map((job) => (
          <VerticalTimelineElement
            key={job.id}
            date={job.date}
            iconStyle={{ background: "#2e2b27", boxShadow: "none"}}
          >

            <h3
              style={{ color: "#2e2b27", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem"}}
            >{job.role}</h3>
            <h4
              style={{fontSize: "1.2rem"}}
            >{job.id}</h4>

            <div style={{ marginTop: "10px"}}>
              <button 
                className="btn"
                onClick={() => toggleDescription(job.id)}
              >
                {expandedId === job.id ? "Hide Details" : "Show Details"}
              </button>
            </div>
            
            {expandedId === job.id && (
              <ul
                style={{padding:"1rem"}}>
                {job.description.map((desc, index) => (
                  <li 
                    style={{marginBottom: "0.5rem", fontSize: "1.1rem"}}  
                    key={index}>{desc}</li>
                ))}
              </ul>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

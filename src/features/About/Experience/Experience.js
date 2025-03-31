import './Experience.css';
import { workExperience } from './Work_Experience';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {


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
            <a 
              href={job.link} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: "inline-flex", 
                alignItems: "center",   
                textDecoration: "none", 
                fontSize: "1.2rem",
                fontWeight: "bold",
                padding: "5px 10px",
                transition: "background-color 0.3s ease",
                borderRadius: "5px",
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            > 
              {job.id}
            </a>
            <p>
              {job.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

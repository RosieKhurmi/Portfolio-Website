import './WorkExperience.css';
import { workExperience } from './WorkData';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const WorkExperience = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemId) => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter(id => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  return (
    <div className="experience-container">
      <div className="experience">
        <h2>Work Experience</h2>
        <div className="experience-list">
          {workExperience.map((job) => (
            <div key={job.id} className="experience-card">
              <h3>{job.id}</h3>
              <div className="roles-container">
                {job.roles.map((role, index) => {
                  const roleId = `${job.id}-${index}`;
                  return (
                    <div key={roleId} className="role-item">
                      <div className="experience-card-header">
                        <div>
                          <p className="experience-role">{role.title}</p>
                          <span className="experience-date">{role.date}</span>
                        </div>
                        <button 
                          className="dropdown-toggle" 
                          onClick={() => toggleItem(roleId)}
                          aria-label="Toggle description"
                        >
                          {expandedItems.includes(roleId) ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                        </button>
                      </div>
                      {expandedItems.includes(roleId) && (
                        <p className="experience-description">{role.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

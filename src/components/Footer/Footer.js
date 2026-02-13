import React, { useEffect, useState } from 'react';
import './Footer.css'; // Import your new CSS file here

const Footer = () => {
  const [links, setLinks] = useState({ prev: '#', next: '#' });

  useEffect(() => {
    // Get current site hostname and remove www. prefix
    let hostname = window.location.hostname;
    if (hostname.startsWith('www.')) {
      hostname = hostname.substring(4);
    }

    const encodedHost = encodeURIComponent(hostname);
    
    setLinks({
      prev: `https://otu-ring.com/prev.html?from=${encodedHost}`,
      next: `https://otu-ring.com/next.html?from=${encodedHost}`
    });
  }, []);

  return (
    <footer className="otu-footer">
      <div id="otu-webring" className="otu-webring-container">
        <a
          id="webring-prev"
          href={links.prev}
          className="webring-link"
          title="Previous site"
        >
          ←
        </a>
        
        <a 
          href="https://otu-ring.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="webring-logo-link"
        >
          <img 
            src="https://otu-ring.com/assets/ontariotech.svg" 
            alt="OTU Webring" 
            className="webring-logo" 
          />
        </a>

        <a
          id="webring-next"
          href={links.next}
          className="webring-link"
          title="Next site"
        >
          →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
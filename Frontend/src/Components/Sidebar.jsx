import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button 
        onClick={() => setCollapsed(!collapsed)} 
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
      >
        ☰ Tech Info
      </button>

      {!collapsed && (
        <div className="sidebar-content">
          <h3>Tech Stack Used</h3>
          <ul>
            <li>⚛️ React</li>
            <li>🖋️ Prism.js (Syntax Highlighting)</li>
            <li>📄 react-markdown</li>
            <li>⚙️ Axios (HTTP Requests)</li>
            <li>🎨 CSS Modules / External CSS</li>
            <li>🚀 Node.js (Backend)</li>
            <li>🤖 Google Gemini (AI / Response generation)</li>
            <li>🟢 Express.js (Node.js framework)</li>
          </ul>
          <br />
          <div className="linkedin-link">
            <a 
              href="https://www.linkedin.com/in/priyanshu-kumar-191173281/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🔗 Connect with me on LinkedIn
            </a>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

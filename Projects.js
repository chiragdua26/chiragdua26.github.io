import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      {/* Add your projects page content */}
      <Link to="/projects/project1">Project 1</Link>
      <Link to="/projects/project2">Project 2</Link>
      {/* Add links to individual project pages */}
    </div>
  );
};

export default Projects;

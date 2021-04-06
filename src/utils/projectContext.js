import React from "react";

// default context object with properties corresponding to Provider values

const ProjectContext = React.createContext({
  projects: [{
    name: "",
    image: "",
    technologies: [],
    repoLink: ""
  }]
  
});

export default ProjectContext;
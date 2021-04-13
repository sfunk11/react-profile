import React from "react";

// default context object with properties corresponding to Provider values

const ProjectContext = React.createContext({
  projects: [
  {
    project: {
      name: "Knowvid-19",
      image: "./assets/images/knowvid-19.png",
      description: "One Stop shop for COVID-19 information, including Case and Vaccine statistics and searching for testing locations.",
      technologies: "HTML, CSS, JavaScript, JSON, MySQL, Sequelize, NodeJS, Express, Handlebars, Axios, NodeJs, Multer, HTTP GET/POST/PUT  requests, and Server-side APIs",
      repoLink: "https://github.com/Smart-Kids-Group/Covid-Project/",
      deployedLink: "https://knowvid-19.herokuapp.com/"
    }
  },{
    project: {
      name: "Recipes4Me",
      image: "./assets/images/recipes4me.png",
      description: "Personal cookbook page where you can collect all of your favorite online recipes into a single place.",
      technologies: "HTML, CSS, Javascript JQuery, Foundation CSS, JSON, Ajax requests, local client storage and Third Party APIs",
      repoLink: "https://github.com/sfunk11/recipes4me",
      deployedLink: "https://sfunk11.github.io/recipes4me/"
    }
  },
  {
    project: {
      name: "React Employee Directory",
      image: "./assets/images/employee-directory.png",
      description: "This is a simple React application that populates a list of randomly generated users, including their picture, name, phone number, email address, and location.",
      technologies: "ReactJS, HTML, Bootstrap, Javascript, Axios, and Third Party API",
      repoLink: "https://github.com/sfunk11/employee-directory",
      deployedLink: "https://sfunk11.github.io/employee-directory/"
    }
  },{
    project: {
      name: "React Google Books Search",
      image: "./assets/images/book-search.png",
      description: "An application created using the MERN stack and allows users to search for books via the Google Books API.",
      technologies: "ReactJS, HTML, React-Bootstrap, Javascript, JSON, Axios, React Router, MongoDB, Heroku web hosting and Third Party APIs",
      repoLink: "https://github.com/sfunk11/google-books-search",
      deployedLink: "https://obscure-thicket-71469.herokuapp.com"
    } 
   },{
    project: {
      name: "Eat the Burger",
      image: "./assets/images/burger-screenshot.png",
      description: "A full stack logging application that adds and updates to a DB.",
      technologies: "HTML, CSS, JavaScript, JQuery, MySQL, Sequelize, NodeJS, Express, Handlebars, HTTP GET/POST/PUT requests, and Heroku web hosting.",
      repoLink: "https://github.com/sfunk11/burger",
      deployedLink: "https://agile-tundra-72704.herokuapp.com"
     }
    },{
      project: {
        name: "Budget Tracker PWA",
        image: "./assets/images/budget.png",
        description: "Use this app to track income and expenses and chart them over time. This app can be installed on your device and uses your browser's IndexedDB to save transactions while you are offline, which sync up when your app is connected again.",
        technologies: "HTML, CSS, JavaScript, MongoDB/Atlas, Mongoose, NodeJS, Express, Morgan, Webpack, Compression, Heroku Web hosting",
        repoLink: "https://github.com/sfunk11/budget-tracker",
        deployedLink: "https://aqueous-mountain-13059.herokuapp.com/"
       }
    },{
     project: {
      name: "Employee Manager",
      image: "./assets/images/start-menu.png",
      description: "A CLI application to help manage employees. Add, Change, or Remove Departments, Job Roles or Employees.",
      technologies: "Javascript, JSON, mySql, NodeJs, Sequelize CLI, EXpress, GET/POST/PUT requests.",
      repoLink: "https://github.com/sfunk11/employee-tracker",
      deployedLink: "https://drive.google.com/file/d/1sH0dEEsO6tBQRt1OxENRPrujuvTrNo54/view"
      }
    },{
      project: {
        name: "Weather Dashboard",
        image: "./assets/images/weather-dashboard.png",
        description: "A Webapp that allows you to check the current weather and 5 day forecast for cities around the world.",
        technologies: "HTML, CSS, Javascript JQuery, JSON, Ajax requests, local client storage and Third Party APIs",
        repoLink: "https://github.com/sfunk11/weather-dashboard",
        deployedLink: "https://sfunk11.github.io/weather-dashboard/"
      }
    }
]});

export default ProjectContext;
import React from "react";
import blogs from "../../assets/blogs.JPG";
import nfp from "../../assets/nfp.JPG";
import portfolio from "../../assets/portfolio.JPG";
import password from "../../assets/password.JPG";
import context from "../../assets/context.JPG";
import currency from "../../assets/currency.JPG";
import "./projects.css";

function Projects() {
  return (
    <div className="project">
      <h1 className="h1">PROJECTS</h1>
      <div className="carddiv">
        <div className="card">
          <h3>Blogs Website</h3>
          <img src={blogs} alt="blogs" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a href="https://blogswb.netlify.app" target="_blank" rel="">
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/maga-blog"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Password Generator</h3>
          <img src={password} alt="password" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://password-generator-software.netlify.app"
                target="_blank"
                rel=""
              >
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/password-generator"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Smart Currency Converter</h3>
          <img src={currency} alt="currency" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://smart-currency-converter-software.netlify.app"
                target="_blank"
                rel=""
              >
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/smart-currency-converter"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="carddiv">
        <div className="card">
          <h3>React Context Todo App</h3>
          <img src={context} alt="context" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://react-context-todo-app-software.netlify.app"
                target="_blank"
                rel=""
              >
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/react-context-todo-app"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Next project</h3>
          <img src={nfp} alt="music" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://nexora-auth-flow-platform.netlify.app"
                target="_blank"
                rel=""
              >
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/Nexora-Auth-Flow-Platform"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <h3>Jawad Portfolio</h3>
          <img src={portfolio} alt="portfolio" className="img" />
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://jawad-portfolio-wb.netlify.app"
                target="_blank"
                rel=""
              >
                Live Demo
              </a>
            </button>{" "}
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/jawad-portfolio"
                target="_blank"
                rel=""
              >
                Githhub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

// git add .
// git commit -m "Update project"
// git push


import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import blogs from "../../assets/blogs.JPG";
import nfp from "../../assets/nfp.JPG";
import portfolio from "../../assets/portfolio.JPG";
import password from "../../assets/password.JPG";
import context from "../../assets/context.JPG";
import currency from "../../assets/currency.JPG";

import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: {
          duration: 0.7,
          ease: "power3.out",
        },
      });

      tl.from(".project-title", {
        y: 30,
        opacity: 0,
      }).from(
        ".card",
        {
          y: 40,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.3"
      );
    },
    { scope: projectsRef }
  );

  return (
    <div className="project" ref={projectsRef}>
      <h1 className="h1 project-title">PROJECTS</h1>

      <div className="carddiv">
        <div className="card">
          <img src={blogs} alt="Blogs Website" className="img" />
          <h3>Blogs Website</h3>
          <p className="description">
            A responsive blogging platform to explore and manage blog
            content with a clean and user-friendly interface.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://blogswb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/maga-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={password} alt="Password Generator" className="img" />
          <h3>Password Generator</h3>
          <p className="description">
            A simple tool to generate strong passwords for better
            security with a quick and easy user experience.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://password-generator-software.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/password-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={currency}
            alt="Smart Currency Converter"
            className="img"
          />
          <h3>Smart Currency Converter</h3>
          <p className="description">
            A smart currency converter that helps users convert
            currencies quickly with a simple and intuitive interface.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://smart-currency-converter-software.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/smart-currency-converter"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="carddiv">
        <div className="card">
          <img
            src={context}
            alt="React Context Todo App"
            className="img"
          />
          <h3>React Context Todo App</h3>
          <p className="description">
            A task management app built with React Context API to
            manage daily tasks and share state across components.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://react-context-todo-app-software.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/react-context-todo-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={nfp}
            alt="Nexora Auth Flow Platform"
            className="img"
          />
          <h3>Nexora Auth Flow Platform</h3>
          <p className="description">
            An authentication-focused web application with a clean
            interface for user sign-in and account access flows.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://nexora-auth-flow-platform.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/Nexora-Auth-Flow-Platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={portfolio}
            alt="Jawad Portfolio"
            className="img"
          />
          <h3>Jawad Portfolio</h3>
          <p className="description">
            My personal developer portfolio showcasing my projects,
            technical skills, and experience in full-stack development
            and AI integration.
          </p>
          <div className="btndiv">
            <button className="btn">
              <a
                href="https://jawad-portfolio-wb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            </button>
            <button className="btn">
              <a
                href="https://github.com/qj4007379-netizen/jawad-portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub →
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;


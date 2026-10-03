import React from "react";
import blogswb from "../../assets/blogswb.JPG";
import music from "../../assets/music.JPG";
import portfolio from "../../assets/portfolio.JPG";
import password from "../../assets/password.JPG";
import context from "../../assets/context.JPG";
import currency from "../../assets/currency.JPG";





function Projects() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "44vh",
          width: "98vw",
          gap: "45px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
          <a href="https://blogswb.netlify.app" target="_blank" rel="">
            <img src={blogswb} alt="blogswb" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
          <a href="https://password-generator-software.netlify.app" target="_blank" rel="">
            <img src={password} alt="password" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
          <a href="https://smart-currency-converter-software.netlify.app" target="_blank" rel="">
            <img src={currency} alt="currency" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "44vh",
          width: "98vw",
          gap: "45px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
          <a href="https://react-context-todo-app-software.netlify.app" target="_blank" rel="">
            <img src={context} alt="context" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
          <a href="https://redux-toolkit-todo-app-soft.netlify.app" target="_blank" rel="">
            <img src={music} alt="music" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "25px",
            flexDirection: "column",
            width: "25vw",
            height: "36vh",
            background: "lightgray",
            borderRadius: "25px ",
          }}
        >
          <div style={{}}>MAGA BLOOG</div>
         <a href="https://jawad-portfolio-web.netlify.app" target="_blank" rel="">
            <img src={portfolio} alt="portfolio" />
          </a>
          <div style={{}}></div>
          <div style={{}}>...</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

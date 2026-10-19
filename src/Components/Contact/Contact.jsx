import React from "react";
import "./contect.css";

export default function Contact() {
  return (
    <div className="contect">
      <div className="contect2">
        <h2 className="h2">HAVE A PROJECT IN MIND?</h2>{" "}
        <p>
          I'm always open to new opportunities, meaningful collaborations, and
          <br />
          building impactful digital experiences.
        </p>
        <button className="btn0">
          <a href="mailto:qj4007379@gmail.com">qj4007379@gmail.com</a>
        </button>
      </div>

      <div className="btndiv0">
        <button className="btn0">
          <a href="https://www.linkedin.com/in/muhammad-jawad-khan-767107346/">
            Linkedin
          </a>
        </button>
        <button className="btn0">
          <a href="https://github.com/qj4007379-netizen">Github</a>
        </button>

        <button className="btn0">
          <a
            href="https://wa.me/923485551426"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </button>
      </div>
    </div>
  );
}

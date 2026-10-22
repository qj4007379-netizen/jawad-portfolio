
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contect.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: {
          duration: 0.7,
          ease: "power3.out",
        },
      });

      tl.from(".h2", {
        y: 30,
        opacity: 0,
      })
        .from(
          ".contect2 p",
          {
            y: 25,
            opacity: 0,
          },
          "-=0.4"
        )
        .from(
          ".contect2 .btn0",
          {
            y: 20,
            opacity: 0,
          },
          "-=0.3"
        )
        .from(
          ".btndiv0 .btn0",
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
          },
          "-=0.2"
        );
    },
    { scope: contactRef }
  );

  return (
    <div className="contect" ref={contactRef}>
      <div className="contect2">
        <h2 className="h2">HAVE A PROJECT IN MIND?</h2>

        <p>
          I'm always open to new opportunities, meaningful collaborations, and
          <br />
          building impactful digital experiences.
        </p>

        <button className="btn0">
          <a href="mailto:qj4007379@gmail.com">
            Get In Touch →
          </a>
        </button>
      </div>

      <div className="btndiv0">
        <button className="btn0">
          <a
            href="https://www.linkedin.com/in/muhammad-jawad-khan-767107346/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
        </button>

        <button className="btn0">
          <a
            href="https://github.com/qj4007379-netizen"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </button>

        <button className="btn0">
          <a
            href="https://wa.me/923485551426"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp →
          </a>
        </button>
      </div>
    </div>
  );
}

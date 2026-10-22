
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./foter.css";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
          duration: 0.6,
        },
      });

      // Footer links animation
      tl.from(".foter .link", {
        y: 20,
        opacity: 0,
        stagger: 0.15,
      });

      // Copyright animation
      tl.from(
        ".foter .copy",
        {
          y: 15,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.2"
      );
    },
    { scope: footerRef }
  );

  return (
    <footer className="foter" ref={footerRef}>
      <div className="link">
        <a
          href="https://github.com/qj4007379-netizen"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="link">
        <a
          href="https://www.linkedin.com/in/muhammad-jawad-khan-767107346/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="copy">
        <span>
          © 2026 Muhammad Jawad Khan. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

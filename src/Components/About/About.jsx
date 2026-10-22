
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".h1about", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".about2 p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: aboutRef }
  );

  return (
    <div className="about" ref={aboutRef}>
      <div className="about2">
        <h1 className="h1about">
          Building Amazing Experiences
          <br />
          with Passion!
        </h1>

        <p>
          I'm a Full Stack Developer specializing in building modern,
          responsive web applications with AI integration. I work with
          technologies like React.js, Next.js, Node.js, Express.js, and
          MongoDB to create practical, user-friendly digital solutions.
          I enjoy solving problems, learning new technologies, and turning
          ideas into functional products. I'm passionate about writing clean,
          maintainable code and continuously improving my skills to build
          reliable applications that deliver real value.
        </p>
      </div>
    </div>
  );
}

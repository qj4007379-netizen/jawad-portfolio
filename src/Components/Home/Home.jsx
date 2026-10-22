import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import leptop from "../../assets/leptop.JPG";
import "./home.css";

function Home() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "power3.out",
      },
    });

    tl.from(textRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.15,
    });

    tl.from(
      imageRef.current,
      {
        x: 40,
        opacity: 0,
        duration: 1,
      },
      "-=0.5",
    );
  }, []);

  return (
    <section className="herohome">
      <div className="text1" ref={textRef}>
        <h6 className="h6">HELLO, I'M JAWAD</h6>

        <h1 id="h1" className="h1">
          Building Modern
        </h1>

        <h1 id="h2" className="h1">
          Web Experiences
        </h1>

        <p className="p">
          I'm a Full Stack Developer specializing in building modern, responsive
          web applications with AI integration. I turn ideas into practical
          digital experiences using modern web technologies.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">
            Explore My Work →
          </Link>

          <Link to="/contact" className="btn">
            Let's Connect →
          </Link>
        </div>

        <p className="p hero-skills">
          Full Stack Development • AI Integration • Responsive Web Design
        </p>
      </div>

      <div className="img1" ref={imageRef}>
        <img
          src={leptop}
          alt="Laptop displaying a web development workspace"
          className="img2"
        />
      </div>
    </section>
  );
}

export default Home;
